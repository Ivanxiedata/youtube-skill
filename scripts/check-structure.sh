#!/bin/sh
# Every feature dir has a spec, AGENTS.md, progress.md (with Status and Next) and a row in docs/features.md.
# Every spec has a feature dir. Every episodes/<slug>/ has a progress.md. Non-feature top-level dirs: scripts/lib.sh.
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
fail=0
err() { echo "structure: $*"; fail=1; }
# <dir>/progress.md exists and has the sections `make status` reads.
progress() {
	[ -f "$1/progress.md" ] || { err "$1/ has no $1/progress.md"; return 0; }
	for h in Status Next; do grep -qx "## $h" "$1/progress.md" || err "$1/progress.md has no '## $h' section"; done
}

# Tracked (or staged) dirs only, so local bin/, tmp/ etc. don't block commits.
for f in $(git ls-files | sed -n 's|/.*||p' | sort -u); do
	if reserved "$f"; then continue; fi
	[ -f "docs/specs/$f.md" ] || err "$f/ has no docs/specs/$f.md (make new-feature NAME=$f DESC=\"<one line>\")"
	[ -f "$f/AGENTS.md" ] || err "$f/ has no $f/AGENTS.md"
	progress "$f"
	grep -q "^| $f |" docs/features.md || err "$f/ has no row in docs/features.md"
done

for e in $(git ls-files episodes | sed -n 's|^episodes/\([^/]*\)/.*|\1|p' | sort -u); do
	progress "episodes/$e"
done

for s in docs/specs/*.md; do
	f=$(basename "$s" .md)
	[ -d "$f" ] || err "$s has no $f/ dir (remove the spec or create the feature)"
done

exit $fail
