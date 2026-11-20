#!/bin/sh
# Every feature dir has a spec, AGENTS.md, progress.md (with Status and Next) and a row in docs/features.md.
# Every spec has a feature dir. Non-feature top-level dirs: scripts/lib.sh.
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
fail=0
err() { echo "structure: $*"; fail=1; }

# Tracked (or staged) dirs only, so local bin/, tmp/ etc. don't block commits.
for f in $(git ls-files | sed -n 's|/.*||p' | sort -u); do
	if reserved "$f"; then continue; fi
	[ -f "docs/specs/$f.md" ] || err "$f/ has no docs/specs/$f.md (make new-feature NAME=$f)"
	[ -f "$f/AGENTS.md" ] || err "$f/ has no $f/AGENTS.md"
	[ -f "$f/progress.md" ] || err "$f/ has no $f/progress.md"
	for h in Status Next; do
		[ ! -f "$f/progress.md" ] || grep -qx "## $h" "$f/progress.md" || err "$f/progress.md has no '## $h' section"
	done
	grep -q "^| $f |" docs/features.md || err "$f/ has no row in docs/features.md"
done

for s in docs/specs/*.md; do
	f=$(basename "$s" .md)
	[ "$f" = _example ] || [ -d "$f" ] || err "$s has no $f/ dir (remove the spec or create the feature)"
done

exit $fail
