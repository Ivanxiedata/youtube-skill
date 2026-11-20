#!/bin/sh
# Start an episode's progress file: episodes/<slug>/progress.md. Episode files (brief, script, ...) go next to it.
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
s=${1:-}
case $s in '' | *[!abcdefghijklmnopqrstuvwxyz0123456789-]*) echo "usage: make new-episode NAME=<slug, lowercase-ascii-with-dashes>"; exit 1 ;; esac
[ ! -e "episodes/$s/progress.md" ] || { echo "episodes/$s/progress.md already exists"; exit 1; }

mkdir -p "episodes/$s"
progress_md "$s" 'Research the tech and its predecessor (Deep-Research skill).' >"episodes/$s/progress.md"
echo "created episodes/$s/progress.md. Next: research (Deep-Research skill), then brief.json and script.md."
