#!/usr/bin/env python3
"""Render the episode thumbnail from thumb.js: thumb.py <out.png>. Run inside the venv `make skills` prints."""
import base64, io, os, sys
from pathlib import Path

film = Path(__file__).resolve().parent
sys.path.insert(0, str(film.parents[2] / ".claude/skills/stickman/scripts"))
from common import browser_args, page_url  # noqa: E402
from PIL import Image  # noqa: E402
from playwright.sync_api import sync_playwright  # noqa: E402

out = Path(sys.argv[1]).resolve()
os.chdir(film)
with sync_playwright() as p:
    b = p.chromium.launch(args=browser_args(False))
    g = b.new_page(viewport={"width": 1920, "height": 1080})
    g.goto(page_url("."))
    g.wait_for_function("window.READY")
    g.add_script_tag(path="thumb.js")
    png = g.evaluate("()=>{drawThumb();return document.getElementById('c').toDataURL('image/png')}")
    b.close()
# 1280x720 is YouTube's recommended size; the PNG stays well under its 2 MB limit
Image.open(io.BytesIO(base64.b64decode(png.split(",")[1]))).convert("RGB").resize((1280, 720), Image.LANCZOS).save(out, optimize=True)
print(out, out.stat().st_size // 1024, "KB")
