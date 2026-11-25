#!/bin/sh
# Make a stickman film folder vertical (1080x1920, YouTube Shorts). Run right after new_film.py, before film.js is written.
# usage: scripts/film-9x16.sh <film folder>
set -eu
f=${1:?usage: scripts/film-9x16.sh <film folder>}
sed -i.bak 's/const W=1920,H=1080/const W=1080,H=1920/' "$f/core.js"
sed -i.bak 's/<canvas id=c width=1920 height=1080>/<canvas id=c width=1080 height=1920>/' "$f/index.html"
rm -f "$f/core.js.bak" "$f/index.html.bak"
grep -q 'const W=1080,H=1920' "$f/core.js" && grep -q 'width=1080 height=1920' "$f/index.html" || { echo "film-9x16: $f is not a fresh new_film.py folder" >&2; exit 1; }
echo "film-9x16: $f is 1080x1920"
