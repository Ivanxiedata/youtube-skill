#!/bin/sh
# One task = one branch = one worktree, all named <slug>. Progress lives in the task's progress.md.
set -eu
s=${1:-}
case $s in '' | *[!abcdefghijklmnopqrstuvwxyz0123456789-]*) echo "usage: make worktree NAME=<slug, lowercase-ascii-with-dashes>"; exit 1 ;; esac

main=$(dirname "$(git rev-parse --path-format=absolute --git-common-dir)")
dir="$(dirname "$main")/$(basename "$main")-$s"

# Branch from the latest origin/develop (the integration branch); fall back to local develop offline.
base=develop
if git fetch -q origin develop 2>/dev/null; then base=origin/develop; fi
git worktree add --no-track -b "$s" "$dir" "$base"
[ ! -f "$main/.env" ] || cp "$main/.env" "$dir/.env"

echo "worktree ready: cd $dir && make setup && make status   (making an episode? also: make skills)"
echo "then claim your task: prefix Status in its progress.md with 'in progress ($s): ', commit, git push -u origin HEAD (see AGENTS.md; an episode: make new-episode first)"
