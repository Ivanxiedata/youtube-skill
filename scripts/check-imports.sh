#!/bin/sh
# A top-level dir may import only itself and shared/. cmd/ is the composition root
# and may import anything. So: features can't import each other, shared/ can't
# import features.
# Reads the .go source (tracked and untracked, testdata/ skipped like the go tool does) instead of `go list`,
# because go list skips files behind build tags and packages made only of them.
# ponytail: matches import-shaped lines (gofmt keeps one import per line, make check enforces it), not a parse;
# a string literal alone on a line that looks like `"<module>/x"` is a false positive. Upgrade: go/parser.
set -eu
cd "$(git rev-parse --show-toplevel)"
mod=$(go list -m)
re="^[[:space:]]*(import[[:space:]]+)?([A-Za-z_.][A-Za-z0-9_]*[[:space:]]+)?\"$mod/"

bad=$(git ls-files -co --exclude-standard '*.go' |
	while IFS= read -r file; do
		[ -f "$file" ] || continue
		case $file in (*/testdata/*) continue ;; esac
		own=${file%%/*}
		[ "$own" = cmd ] && continue
		for imp in $(grep -E "$re" "$file" | sed 's/^[^"]*"\([^"]*\)".*/\1/'); do
			dep=${imp#"$mod"/}
			dep=${dep%%/*}
			[ "$dep" = "$own" ] || [ "$dep" = shared ] || echo "imports: $file -> $imp"
		done
	done)

[ -z "$bad" ] || { echo "$bad"; echo "imports: features may import only themselves and shared/"; exit 1; }
