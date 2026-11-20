#!/bin/sh
# Where every feature stands, plus work in flight on other branches. Start every session here.
set -eu
cd "$(git rev-parse --show-toplevel)"
git fetch -q --prune origin 2>/dev/null || echo "(couldn't fetch origin: remote branches may be stale)"
# First non-empty line under "## <section>" of a progress file (stdin).
field() { awk -v h="## $1" '$0==h{f=1;next} /^## /{f=0} f&&NF{print;exit}'; }
row() { printf '  %-12s %s | next: %s\n' "$1" "$(field Status <"$2")" "$(field Next <"$2")"; }
# Progress file path -> <feature>, ep:<slug> or repo.
label() {
	case $1 in
	docs/progress.md) echo repo ;;
	episodes/*/progress.md) p=${1#episodes/} && echo "ep:${p%/progress.md}" ;;
	*) echo "${1%/progress.md}" ;;
	esac
}

echo "This checkout ($(git branch --show-current)):"
[ ! -f docs/progress.md ] || row repo docs/progress.md
for p in */progress.md episodes/*/progress.md; do
	[ -f "$p" ] && [ "$p" != docs/progress.md ] || continue
	row "$(label "$p")" "$p"
done

# Compare against origin/develop; fall back to local develop when there is no remote.
base=origin/develop
git rev-parse -q --verify "$base" >/dev/null 2>&1 || base=develop
cur=$(git branch --show-current)
# <ref> <name shown> <suffix>: progress files this branch changed, unless develop already has the same content.
# Shows the age of the branch's last commit, so a stale claim is visible.
inflight() {
	for p in $(git diff --name-only --diff-filter=d "$base...$1" -- '*/progress.md' 2>/dev/null); do
		git diff --quiet "$base" "$1" -- "$p" && continue
		printf '  %-28s %-14s %-16s %s\n' "$2$3" "$(label "$p")" "$(git log -1 --format=%cr "$1" --)" "$(git show "$1:$p" 2>/dev/null | field Status)"
	done
}
# Local branches whose upstream branch is gone (merged and deleted on origin): not work in flight.
gone=$(git for-each-ref --format='%(upstream:track) %(refname:strip=2)' refs/heads | sed -n 's/^\[gone\] //p')

echo "In flight on other branches (progress.md changed vs develop):"
if git rev-parse -q --verify "$base" >/dev/null 2>&1; then
	# Remote branches first; a local branch is listed only when it has no remote twin.
	for b in $(git for-each-ref --format='%(refname:strip=3)' refs/remotes/origin); do
		case $b in HEAD | develop | main | "$cur") continue ;; esac
		inflight "origin/$b" "$b" ""
	done
	for b in $(git for-each-ref --format='%(refname:strip=2)' refs/heads); do
		case $b in develop | main | "$cur") continue ;; esac
		! printf '%s\n' "$gone" | grep -Fxq -- "$b" || continue
		! git rev-parse -q --verify "refs/remotes/origin/$b" >/dev/null 2>&1 || continue
		inflight "$b" "$b" " (local)"
	done
else
	echo "  (no develop branch to compare against)"
fi
[ -z "$gone" ] || { echo "Stale local branches (merged or deleted upstream; delete them):"; printf '%s\n' "$gone" | sed 's/^/  /'; }

echo "Local worktrees:"
git worktree list | sed 's/^/  /'
