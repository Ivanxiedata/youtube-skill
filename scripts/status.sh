#!/bin/sh
# Where every feature stands, plus work in flight on other branches. Start every session here.
set -eu
cd "$(git rev-parse --show-toplevel)"
git fetch -q origin 2>/dev/null || echo "(couldn't fetch origin: remote branches may be stale)"
# First non-empty line under "## <section>" of a progress file (stdin).
field() { awk -v h="## $1" '$0==h{f=1;next} /^## /{f=0} f&&NF{print;exit}'; }
row() { printf '  %-12s %s | next: %s\n' "$1" "$(field Status <"$2")" "$(field Next <"$2")"; }

echo "This checkout ($(git branch --show-current)):"
[ ! -f docs/progress.md ] || row repo docs/progress.md
for p in */progress.md; do
	[ -f "$p" ] && [ "$p" != docs/progress.md ] || continue
	row "${p%/progress.md}" "$p"
done

echo "In flight on other branches (progress.md changed vs develop):"
for b in $(git for-each-ref --format='%(refname:short)' refs/remotes/origin); do
	case $b in origin | origin/HEAD | origin/develop | origin/main) continue ;; esac
	for p in $(git diff --name-only "origin/develop...$b" -- '*progress.md' 2>/dev/null); do
		n=${p%/progress.md}
		[ "$n" != docs ] || n=repo
		printf '  %-28s %-10s %s\n' "${b#origin/}" "$n" "$(git show "$b:$p" | field Status)"
	done
done

echo "Local worktrees:"
git worktree list | sed 's/^/  /'
