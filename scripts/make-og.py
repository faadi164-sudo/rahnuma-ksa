"""Build the 1200x630 link-preview images in public/og/.

Run after adding or renaming guides or tools:
    python3 scripts/make-og.py            # only missing images
    python3 scripts/make-og.py --all      # rebuild every image

Needs Python Playwright and Google Chrome. Each image uses the topic's header photo
from scripts/photos/ (free Pexels photos, listed in src/data/photos.ts). Titles are typed
on top in HTML, so English and Urdu text is always spelled and shaped correctly.
"""
import base64
import html
import io
import pathlib
import re
import sys

from PIL import Image

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'og'
REBUILD = '--all' in sys.argv

photos_src = (ROOT / 'src' / 'data' / 'photos.ts').read_text(encoding='utf-8')
POS = {m[0]: m[1] for m in re.findall(r"'?([a-z-]+)'?: \{ pos: '([^']+)'", photos_src)}
_photo_cache = {}


def photo(key):
    """The photo as a data URI (pages opened with set_content cannot load file:// images)."""
    if key not in POS:
        key = 'home'
    if key not in _photo_cache:
        im = Image.open(ROOT / 'scripts' / 'photos' / f'{key}.jpg').convert('RGB')
        im.thumbnail((1400, 1400))
        buf = io.BytesIO()
        im.save(buf, 'JPEG', quality=85)
        _photo_cache[key] = ('data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode(), POS[key])
    return _photo_cache[key]


def frontmatter(path):
    text = path.read_text(encoding='utf-8')
    fm = text.split('---', 2)[1]
    get = lambda k: (re.search(rf'^{k}: "?(.*?)"?$', fm, re.M) or [None, ''])[1]
    return {'title': get('title'), 'hub': get('hub'), 'lang': get('lang') or 'en',
            'draft': get('draft') == 'true', 'type': get('type') or 'guide'}


hubs_src = (ROOT / 'src' / 'data' / 'hubs.ts').read_text(encoding='utf-8')
HUBS = {m[0]: {'en': m[1], 'ur': m[2]} for m in re.findall(r"slug: '([^']+)', en: '([^']+)', ur: '([^']+)'", hubs_src)}
tools_src = (ROOT / 'src' / 'data' / 'tools.ts').read_text(encoding='utf-8')
TOOLS = re.findall(r"slug: '([^']+)',\s*icon: '[^']+',\s*en: '([^']+)',\s*ur: '([^']+)'", tools_src)

cards = []  # (output path, lang, kicker, title, photo key)
cards.append((OUT / 'default-en.jpg', 'en', 'Saudi expat guide', 'Saudi procedures, explained step by step', 'home'))
cards.append((OUT / 'default-ur.jpg', 'ur', 'سعودی عرب کی آسان رہنمائی', 'سعودی سرکاری کام، آسان اردو میں', 'home-rtl'))
for lang in ('en', 'ur'):
    for md in sorted((ROOT / 'src' / 'content' / 'guides' / lang).glob('*.md')):
        if md.name.startswith('_'):
            continue
        f = frontmatter(md)
        if f['draft']:
            continue
        hub = HUBS.get(f['hub'], {'en': '', 'ur': ''})[lang]
        kicker = ('News · ' if f['type'] == 'news' and lang == 'en' else '') + hub
        cards.append((OUT / lang / f'{md.stem}.jpg', lang, kicker, f['title'], f['hub']))
for slug, name, name_ur in TOOLS:
    cards.append((OUT / 'en' / f'tool-{slug}.jpg', 'en', 'Free calculator', name, 'home'))
    cards.append((OUT / 'ur' / f'tool-{slug}.jpg', 'ur', 'مفت کیلکولیٹر', name_ur, 'home-rtl'))

TEMPLATE = """<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@500;600;700&family=Noto+Nastaliq+Urdu:wght@600;700&display=block" rel="stylesheet">
<style>
  html, body {{ margin:0; width:1200px; height:630px; overflow:hidden; background:#0c2620; font-family:Inter, sans-serif; }}
  .bg {{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:{pos}; }}
  .shade {{ position:absolute; inset:0; background:linear-gradient({angle}, rgba(7,28,22,.96) 0%, rgba(7,28,22,.9) 46%, rgba(7,28,22,.4) 100%); }}
  .bar {{ position:absolute; left:0; right:0; bottom:0; height:10px; background:linear-gradient(90deg, #0b6e4f, #8fe3bd); }}
  .panel {{ position:absolute; top:0; {side}:0; width:780px; height:620px; box-sizing:border-box; padding:54px 60px 46px; display:flex; flex-direction:column; }}
  .brand {{ display:flex; align-items:center; gap:14px; font:800 30px 'Plus Jakarta Sans', sans-serif; color:#fff; direction:ltr; }}
  [dir=rtl] .brand {{ justify-content:flex-end; }}
  .mark {{ width:50px; height:50px; border-radius:12px; background:#0b6e4f; display:grid; place-items:center; box-shadow:0 0 0 1px rgba(255,255,255,.18); }}
  .kicker {{ align-self:flex-start; margin:40px 0 0; padding:8px 16px; border-radius:999px; font:700 20px Inter, sans-serif; color:#8fe3bd;
             background:rgba(143,227,189,.12); border:1px solid rgba(143,227,189,.4); letter-spacing:.02em; }}
  .title {{ flex:none; margin:22px 0 0; font:800 60px/1.1 'Plus Jakarta Sans', sans-serif; color:#fff; max-height:290px; overflow:hidden;
            text-shadow:0 2px 20px rgba(0,0,0,.3); }}
  .foot {{ margin-top:auto; font:600 21px Inter, sans-serif; color:#cfe0d8; direction:ltr; }}
  .foot b {{ color:#fff; }}
  [dir=rtl] .kicker {{ align-self:flex-end; font:700 24px/1.9 'Noto Nastaliq Urdu', serif; padding:2px 18px 10px; margin-top:30px; }}
  [dir=rtl] .title {{ font:700 52px/1.75 'Noto Nastaliq Urdu', serif; max-height:300px; }}
  [dir=rtl] .foot {{ text-align:right; }}
</style></head><body>
<img class="bg" src="{bg}" alt="">
<div class="shade"></div>
<div class="panel" dir="{dir}">
  <div class="brand"><div class="mark"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M15 9l-2 5-4 1 2-5z"/></svg></div>Living KSA</div>
  <div class="kicker">{kicker}</div>
  <div class="title" id="t">{title}</div>
  <div class="foot"><b>livingksa.com</b> · {foot}</div>
</div>
<div class="bar"></div>
<script>
  Promise.all([document.fonts.ready, document.querySelector('.bg').decode()]).then(() => {{
    const t = document.getElementById('t');
    const limit = parseFloat(getComputedStyle(t).maxHeight);
    t.style.maxHeight = 'none';
    let size = parseFloat(getComputedStyle(t).fontSize);
    while (t.getBoundingClientRect().height > limit && size > 26) {{ size -= 2; t.style.fontSize = size + 'px'; }}
    document.body.dataset.ready = '1';
  }});
</script></body></html>"""

FOOT = {'en': 'Official sources, checked and dated', 'ur': 'Official sources · English & اردو'}

made = 0
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    page = browser.new_page(viewport={'width': 1200, 'height': 630})
    for out, lang, kicker, title, key in cards:
        if out.exists() and not REBUILD:
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        bg, pos = photo(key)
        rtl = lang == 'ur'
        page.set_content(TEMPLATE.format(lang=lang, bg=bg, pos=pos, dir='rtl' if rtl else 'ltr',
                                         angle='270deg' if rtl else '90deg', side='right' if rtl else 'left',
                                         kicker=html.escape(kicker), title=html.escape(title), foot=FOOT[lang]),
                         wait_until='networkidle')
        page.wait_for_selector('body[data-ready="1"]', timeout=15000)
        page.screenshot(path=str(out), type='jpeg', quality=82)
        made += 1
    browser.close()
print(f'{made} preview images written, {len(cards)} in total')
