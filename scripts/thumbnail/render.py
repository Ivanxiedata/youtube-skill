#!/usr/bin/env python3
"""Render an episode's thumbnail with the channel template (docs/brand.md, "Thumbnail template").

    .skills/venv/bin/python scripts/thumbnail/render.py episodes/<slug>

Reads film/thumb.json ({"learn": "LEARN GOOGLE'S", "topic": "Agent Compute Engine"}; "learn" is optional) and the optional
film/thumb_picture.js, draws with the film's own rig, and writes episodes/<slug>/thumbnail.png: 1080x1920, under YouTube's 2 MB.
"""
import base64, io, json, sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
sys.path.insert(0, str(ROOT / ".claude/skills/stickman/scripts"))
from common import browser_args, page_url  # noqa: E402
from PIL import Image  # noqa: E402
from playwright.sync_api import sync_playwright  # noqa: E402

ep = Path(sys.argv[1]).resolve()
film = ep / "film"
cfg = json.loads((film / "thumb.json").read_text())
if not cfg.get("topic"):
    sys.exit("thumb.json needs a topic")
font = (HERE / "Anton-Regular.ttf").as_uri()
with sync_playwright() as p:
    b = p.chromium.launch(args=browser_args(False))
    g = b.new_page(viewport={"width": 1080, "height": 1920})
    errors = []
    g.on("pageerror", lambda e: errors.append(str(e)))
    g.goto(page_url(film))
    g.wait_for_function("window.READY")
    g.add_style_tag(content=f"@font-face{{font-family:Anton;src:url('{font}')}}")
    g.add_script_tag(path=str(HERE / "template.js"))
    if (film / "thumb_picture.js").exists():
        g.add_script_tag(path=str(film / "thumb_picture.js"))
    info = g.evaluate("async c => { const r = await drawThumbnail(c); const cv = ctx.canvas;"
                      " return Object.assign(r, {w: cv.width, h: cv.height, png: cv.toDataURL('image/png')}) }", cfg)
    b.close()
if errors:
    sys.exit("page error: " + "; ".join(errors))
assert (info["w"], info["h"]) == (1080, 1920), f"film canvas is {info['w']}x{info['h']}, not 9:16 (scripts/film-9x16.sh)"
img = Image.open(io.BytesIO(base64.b64decode(info["png"].split(",")[1]))).convert("RGB")
out = ep / "thumbnail.png"
img.save(out, optimize=True)
if out.stat().st_size > 2_000_000:  # YouTube's limit: 256 flat colours keep it a PNG, the name the upload expects
    img.quantize(256).save(out, optimize=True)
assert out.stat().st_size <= 2_000_000, f"{out} is {out.stat().st_size} bytes, over YouTube's 2 MB"
print(f"{out} {out.stat().st_size // 1024} KB, topic {info['lines']} at {info['size']} px")
