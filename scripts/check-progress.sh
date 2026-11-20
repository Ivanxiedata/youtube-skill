#!/bin/sh
# A branch that changes part of the repo must also update that part's progress file,
# so the next agent can continue without being told what happened:
#   <feature>/... or docs/specs/<feature>.md            -> <feature>/progress.md
#   cmd/yt/<feature>.go and <feature>_test.go           -> <feature>/progress.md (so parallel feature PRs don't all edit docs/progress.md)
#   episodes/<slug>/...                                 -> episodes/<slug>/progress.md
#   shared/ cmd/ scripts/ Makefile .githooks/ .github/  -> docs/progress.md
# In CI ($CI set) it must also be updated after the last change to a feature's or episode's code (see the end).
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
# cmd/yt/<f>.go or <f>_test.go: feature <f>'s progress file when <f> is a feature, else the repo-level one (main.go, ...).
cmdfile() {
	f=${1#cmd/yt/}; f=${f%.go}; f=${f%_test}
	case $f in '' | */*) f= ;; esac
	n=$([ -z "$f" ] || feature "$f")
	echo "${n:-docs/progress.md}"
}
need=$(printf '%s\n' "$changed" |
	while IFS= read -r p; do
		case $p in
		(cmd/yt/*.go) cmdfile "$p" ;;
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

# CI only: no change to a feature's code/spec or an episode may come after (be missing from) the latest update of its progress.md.
# Ancestry, not dates, so parallel branches merged together are judged correctly.
# Locally (the hook) "touched at least once" above stays the rule: the commit in progress isn't in the log yet, and commits stay cheap.
# ponytail: feature and episode progress files only; the repo-level docs/progress.md keeps the touched-once rule.
if [ -n "${CI:-}" ]; then
	for n in $need; do
		case $n in
		(docs/progress.md) continue ;;
		(episodes/*) set -- "${n%progress.md}" ;;
		(*) f=${n%/progress.md}; set -- "$f/" "docs/specs/$f.md" "cmd/yt/$f.go" "cmd/yt/${f}_test.go" ;;
		esac
		prog=$(git log -1 --format=%H "$base"..HEAD -- "$n")
		[ -z "$(git rev-list -1 "${prog:-$base}"..HEAD -- "$@" ":(exclude)$n")" ] ||
			{ echo "progress: $n is older than the last change to what it covers. Update it after your last code change."; fail=1; }
	done
fi
exit $fail
