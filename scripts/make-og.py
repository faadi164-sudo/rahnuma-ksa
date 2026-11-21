"""Build the 1200x630 link-preview images in public/og/.

Run after adding or renaming guides or tools:
    python3 scripts/make-og.py            # only missing images
    python3 scripts/make-og.py --all      # rebuild every image

Needs Python Playwright and Google Chrome. The background art is scripts/og/bg.jpg
(generated once with vidIQ). Titles are typed on top in HTML, so English and Urdu
text is always spelled and shaped correctly.
"""
import base64
import html
import pathlib
import re
import sys

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'og'
# Embedded as a data URI: pages opened with set_content cannot load file:// images.
BG = 'data:image/jpeg;base64,' + base64.b64encode((ROOT / 'scripts' / 'og' / 'bg.jpg').read_bytes()).decode()
REBUILD = '--all' in sys.argv


def frontmatter(path):
    text = path.read_text(encoding='utf-8')
    fm = text.split('---', 2)[1]
    get = lambda k: (re.search(rf'^{k}: "?(.*?)"?$', fm, re.M) or [None, ''])[1]
    return {'title': get('title'), 'hub': get('hub'), 'lang': get('lang') or 'en',
            'draft': get('draft') == 'true', 'type': get('type') or 'guide'}


hubs_src = (ROOT / 'src' / 'data' / 'hubs.ts').read_text(encoding='utf-8')
HUBS = {m[0]: {'en': m[1], 'ur': m[2]} for m in re.findall(r"slug: '([^']+)', en: '([^']+)', ur: '([^']+)'", hubs_src)}
tools_src = (ROOT / 'src' / 'data' / 'tools.ts').read_text(encoding='utf-8')
TOOLS = re.findall(r"slug: '([^']+)',\s*icon: '[^']+',\s*en: '([^']+)'", tools_src)

cards = []  # (output path, lang, kicker, title)
cards.append((OUT / 'default-en.jpg', 'en', 'Saudi expat guide', 'Saudi procedures, explained step by step'))
cards.append((OUT / 'default-ur.jpg', 'ur', 'سعودی عرب کی آسان رہنمائی', 'سعودی سرکاری کام، آسان اردو میں'))
for lang in ('en', 'ur'):
    for md in sorted((ROOT / 'src' / 'content' / 'guides' / lang).glob('*.md')):
        if md.name.startswith('_'):
            continue
        f = frontmatter(md)
        if f['draft']:
            continue
        hub = HUBS.get(f['hub'], {'en': '', 'ur': ''})[lang]
        kicker = ('News · ' if f['type'] == 'news' and lang == 'en' else '') + hub
        cards.append((OUT / lang / f'{md.stem}.jpg', lang, kicker, f['title']))
for slug, name in TOOLS:
    cards.append((OUT / 'en' / f'tool-{slug}.jpg', 'en', 'Free calculator', name))

TEMPLATE = """<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@500;600&family=Noto+Nastaliq+Urdu:wght@600;700&display=block" rel="stylesheet">
<style>
  html, body {{ margin:0; width:1200px; height:630px; overflow:hidden; }}
  body {{ background:url('{bg}') right bottom / cover no-repeat; font-family:Inter, sans-serif; }}
  .shade {{ position:absolute; inset:0; background:linear-gradient(90deg, rgba(250,244,228,.97) 0%, rgba(250,244,228,.93) 50%, rgba(250,244,228,0) 72%); }}
  .panel {{ position:absolute; left:0; top:0; width:690px; height:630px; box-sizing:border-box; padding:52px 56px 48px; display:flex; flex-direction:column; }}
  .brand {{ display:flex; align-items:center; gap:14px; font:800 30px 'Plus Jakarta Sans', sans-serif; color:#0e2a23; direction:ltr; }}
  .mark {{ width:50px; height:50px; border-radius:12px; background:#0b6e4f; display:grid; place-items:center; }}
  .kicker {{ margin:34px 0 0; font:600 22px Inter, sans-serif; color:#0b6e4f; letter-spacing:.02em; }}
  .title {{ margin:14px 0 0; font:800 58px/1.12 'Plus Jakarta Sans', sans-serif; color:#10212b; max-height:330px; overflow:hidden; }}
  .foot {{ margin-top:auto; font:600 21px Inter, sans-serif; color:#40525a; direction:ltr; }}
  .foot b {{ color:#0b6e4f; }}
  [dir=rtl] .kicker {{ font:700 26px/1.8 'Noto Nastaliq Urdu', serif; margin-top:22px; }}
  [dir=rtl] .title {{ font:700 46px/1.75 'Noto Nastaliq Urdu', serif; }}
  [dir=rtl] .foot {{ text-align:right; }}
</style></head><body>
<div class="shade"></div>
<div class="panel" dir="{dir}">
  <div class="brand"><div class="mark"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M15 9l-2 5-4 1 2-5z"/></svg></div>Living KSA</div>
  <div class="kicker">{kicker}</div>
  <div class="title" id="t">{title}</div>
  <div class="foot"><b>livingksa.com</b> · {foot}</div>
</div>
<script>
  document.fonts.ready.then(() => {{
    const t = document.getElementById('t');
    let size = parseFloat(getComputedStyle(t).fontSize);
    while (t.scrollHeight > t.clientHeight + 2 && size > 26) {{ size -= 2; t.style.fontSize = size + 'px'; }}
    document.body.dataset.ready = '1';
  }});
</script></body></html>"""

FOOT = {'en': 'Official sources, checked and dated', 'ur': 'Official sources · English & اردو'}

made = 0
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    page = browser.new_page(viewport={'width': 1200, 'height': 630})
    for out, lang, kicker, title in cards:
        if out.exists() and not REBUILD:
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        page.set_content(TEMPLATE.format(lang=lang, bg=BG, dir='rtl' if lang == 'ur' else 'ltr',
                                         kicker=html.escape(kicker), title=html.escape(title), foot=FOOT[lang]),
                         wait_until='networkidle')
        page.wait_for_selector('body[data-ready="1"]', timeout=15000)
        page.screenshot(path=str(out), type='jpeg', quality=82)
        made += 1
    browser.close()
print(f'{made} preview images written, {len(cards)} in total')
