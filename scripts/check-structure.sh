#!/bin/sh
# Every feature dir has a spec, an AGENTS.md, and a row in the root feature map.
# Every spec has a feature dir. Non-feature top-level dirs are listed below.
set -eu
cd "$(git rev-parse --show-toplevel)"
fail=0
err() { echo "structure: $*"; fail=1; }

for d in */; do
	f=${d%/}
	case $f in docs | scripts | shared | cmd) continue ;; esac
	[ -f "docs/specs/$f.md" ] || err "$f/ has no docs/specs/$f.md (make new-feature NAME=$f)"
	[ -f "$f/AGENTS.md" ] || err "$f/ has no $f/AGENTS.md"
	grep -q "^| $f |" AGENTS.md || err "$f/ has no row in the AGENTS.md feature map"
done

for s in docs/specs/*.md; do
	f=$(basename "$s" .md)
	[ "$f" = _example ] || [ -d "$f" ] || err "$s has no $f/ dir (remove the spec or create the feature)"
done

exit $fail
