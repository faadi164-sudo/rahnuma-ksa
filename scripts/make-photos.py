"""Make the web versions of the header photos.

Masters live in scripts/photos/<name>.jpg (free Pexels photos, see src/data/photos.ts).
This writes public/img/photos/<name>-640.webp, -1280.webp and -1920.webp.
    python3 scripts/make-photos.py
"""
import pathlib

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'scripts' / 'photos'
OUT = ROOT / 'public' / 'img' / 'photos'
OUT.mkdir(parents=True, exist_ok=True)
for master in sorted(SRC.glob('*.jpg')):
    im = Image.open(master).convert('RGB')
    for width, quality in ((640, 62), (1280, 56), (1920, 50)):
        copy = im.copy()
        if copy.width > width:
            copy = copy.resize((width, round(copy.height * width / copy.width)), Image.LANCZOS)
        copy.save(OUT / f'{master.stem}-{width}.webp', quality=quality, method=6)
print('done')
