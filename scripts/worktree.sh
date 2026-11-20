#!/bin/sh
# One task = one branch = one worktree = one docs/work/<slug>/, all named <slug>.
set -eu
s=${1:-}
case $s in '' | *[!abcdefghijklmnopqrstuvwxyz0123456789-]*) echo "usage: make worktree NAME=<slug, lowercase-ascii-with-dashes>"; exit 1 ;; esac

main=$(dirname "$(git rev-parse --path-format=absolute --git-common-dir)")
dir="$(dirname "$main")/$(basename "$main")-$s"

# Branch from the latest origin/main; fall back to local main when there is no remote yet.
base=main
if git fetch -q origin main 2>/dev/null; then base=origin/main; fi
git worktree add -b "$s" "$dir" "$base"
[ ! -f "$main/.env" ] || cp "$main/.env" "$dir/.env"

mkdir -p "$dir/docs/work/$s"
printf '# %s plan\n\nGoal:\nSpec:\nSteps:\n1.\n' "$s" >"$dir/docs/work/$s/plan.md"
printf '# %s progress\n\nStatus:\nDone:\nNext:\nBlockers:\n' "$s" >"$dir/docs/work/$s/progress.md"

echo "worktree ready: cd $dir && make setup"
