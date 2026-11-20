#!/bin/sh
# A branch that changes part of the repo must also update that part's progress file,
# so the next agent can continue without being told what happened:
#   <feature>/... or docs/specs/<feature>.md            -> <feature>/progress.md
#   episodes/<slug>/...                                 -> episodes/<slug>/progress.md
#   shared/ cmd/ scripts/ Makefile .githooks/ .github/  -> docs/progress.md
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
git rev-parse -q --verify origin/develop >/dev/null || { echo "progress: no origin/develop yet, skipped"; exit 0; }
base=$(git merge-base HEAD origin/develop)
# Index vs base = this branch's commits plus what is staged for the commit in progress.
# --no-renames: a moved file counts as a change to both its old and new place.
changed=$(git diff --cached --no-renames --name-only "$base")
# A feature's progress file, if it has one.
feature() { reserved "$1" || [ ! -f "$1/progress.md" ] || echo "$1/progress.md"; }
need=$(printf '%s\n' "$changed" |
	while IFS= read -r p; do
		case $p in
		(shared/* | cmd/* | scripts/* | Makefile | .githooks/* | .github/*) echo docs/progress.md ;;
		(episodes/*/*) s=${p#episodes/}; echo "episodes/${s%%/*}/progress.md" ;;
		(docs/specs/*.md) s=${p#docs/specs/}; feature "${s%.md}" ;;
		(*/*) feature "${p%%/*}" ;;
		esac
	done | sort -u)
fail=0
for n in $need; do
	printf '%s\n' "$changed" | grep -Fxq "$n" ||
		{ echo "progress: this branch changes what $n covers, but not $n. Update Status/Next/Log."; fail=1; }
done
exit $fail
