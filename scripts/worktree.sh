#!/bin/sh
# One task = one branch = one worktree = one docs/work/<slug>/, all named <slug>.
set -eu
s=${1:-}
case $s in '' | *[![:lower:][:digit:]-]*) echo "usage: make worktree NAME=<slug, lowercase-with-dashes>"; exit 1 ;; esac

main=$(dirname "$(git rev-parse --path-format=absolute --git-common-dir)")
dir="$(dirname "$main")/$(basename "$main")-$s"

# Always branch from main, never from whatever task branch you happen to be in.
git worktree add -b "$s" "$dir" main
[ ! -f "$main/.env" ] || cp "$main/.env" "$dir/.env"

mkdir -p "$dir/docs/work/$s"
[ -f "$dir/docs/work/$s/plan.md" ] || printf '# %s plan\n\nGoal:\nSpec:\nSteps:\n1.\n' "$s" >"$dir/docs/work/$s/plan.md"
[ -f "$dir/docs/work/$s/progress.md" ] || printf '# %s progress\n\nStatus:\nDone:\nNext:\nBlockers:\n' "$s" >"$dir/docs/work/$s/progress.md"

echo "worktree ready: cd $dir && make setup"
