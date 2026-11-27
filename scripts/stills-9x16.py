#!/usr/bin/env python3
"""Layout check for a vertical film before any build: every shot at its first, middle and last frame, at 9:16, with the
brand safe area (x 60-918, y 100-1536, docs/brand.md) drawn. One row per shot, 4 shots per sheet.

    .skills/venv/bin/python scripts/stills-9x16.py <film> <out-prefix> [--shots 3 7 ...]

Writes <out-prefix>_1.jpg, _2.jpg, ... (lesson L87: the skill's stills.py squeezes 9:16 frames into 16:9 cells).
Shot times come from film/film.json's cuts, so it needs one `voice.py`/`new_film.py` pass first, not a build.
"""
import base64, io, json, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / ".claude/skills/stickman/scripts"))
from common import browser_args, is_3d, page_url  # noqa: E402
from PIL import Image, ImageDraw  # noqa: E402
from playwright.sync_api import sync_playwright  # noqa: E402

FPS, CW, CH, PER_SHEET = 30, 300, 533, 4
SAFE = (60, 100, 918, 1536)


def shot_times(cuts, total_frames):
    """(first, middle, last) seconds of each shot; first/last 3 frames inside the cut, so no blend with a neighbour."""
    ends = cuts[1:] + [total_frames]
    return [tuple(round(f / FPS, 3) for f in (a + 3, (a + b) // 2, max(a + 3, b - 3))) for a, b in zip(cuts, ends)]


def main(a):
    film, prefix = Path(a[0]), a[1]
    pick = [int(s) for s in a[a.index("--shots") + 1:]] if "--shots" in a else None
    meta = json.loads((film / "film.json").read_text())
    times = shot_times(meta["cuts"], round(meta["dur"] * FPS))
    shots = [(n, t) for n, t in enumerate(times, 1) if not pick or n in pick]
    with sync_playwright() as p:
        b = p.chromium.launch(args=browser_args(is_3d(film)))
        g = b.new_page(viewport={"width": 1080, "height": 1920})
        g.on("pageerror", lambda e: print("PAGE ERROR", e))
        g.goto(page_url(film)); g.wait_for_function("window.READY", timeout=120000)
        rows = []
        for n, ts in shots:
            ims = []
            for t in ts:
                r = g.evaluate("t=>{renderAt(t);return document.getElementById('c').toDataURL('image/jpeg',.9)}", t)
                im = Image.open(io.BytesIO(base64.b64decode(r.split(",")[1]))).convert("RGB")
                assert im.size == (1080, 1920), f"canvas {im.size}: not a 9:16 film (scripts/film-9x16.sh)"
                d = ImageDraw.Draw(im); d.rectangle(SAFE, outline=(0, 255, 120), width=4)
                d.text((70, 30), f"shot {n}  t={t:.2f}s", fill=(0, 255, 120), font_size=48)
                ims.append(im.resize((CW, CH)))
            rows.append(ims)
        b.close()
    out = []
    for i in range(0, len(rows), PER_SHEET):
        chunk = rows[i:i + PER_SHEET]
        sheet = Image.new("RGB", (3 * CW, len(chunk) * CH), "black")
        for r, ims in enumerate(chunk):
            for c, im in enumerate(ims):
                sheet.paste(im, (c * CW, r * CH))
        path = Path(f"{prefix}_{i // PER_SHEET + 1}.jpg"); sheet.save(path, quality=85); out.append(str(path))
    print("wrote", *out)


if __name__ == "__main__":
    if sys.argv[1:] == ["--test"]:  # the cut arithmetic, no browser
        assert shot_times([0, 45, 131], 150) == [(0.1, 0.733, 1.4), (1.6, 2.933, 4.267), (4.467, 4.667, 4.9)]
        assert shot_times([0], 4) == [(0.1, 0.067, 0.1)]
        print("ok")
    else:
        main(sys.argv[1:])
