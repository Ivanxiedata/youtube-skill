#!/bin/sh
# Start an episode's progress file: episodes/<slug>/progress.md. Episode files (brief, script, ...) go next to it.
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
s=${1:-}
case $s in '' | *[!abcdefghijklmnopqrstuvwxyz0123456789-]*) echo "usage: make new-episode NAME=<slug, lowercase-ascii-with-dashes>"; exit 1 ;; esac
[ ! -e "episodes/$s/progress.md" ] || { echo "episodes/$s/progress.md already exists"; exit 1; }

mkdir -p "episodes/$s"
progress_md "$s" 'Follow docs/workflow.md: 1 research (research.md, brief.json), 2 promise (package.md), 3 script (beats.md, script.md), 4 make (video.mp4, thumbnail.png), 5 finish (captions.srt, upload.json), 6 judge by another agent (evaluation.md), 7 owner approves.' >"episodes/$s/progress.md"
echo "created episodes/$s/progress.md. Next: docs/workflow.md step 1, research."
