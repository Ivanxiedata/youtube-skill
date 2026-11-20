#!/bin/sh
# A top-level dir may import only itself and shared/. cmd/ is the composition root
# and may import anything. So: features can't import each other, shared/ can't
# import features.
set -eu
cd "$(git rev-parse --show-toplevel)"
mod=$(go list -m)

bad=$(go list -f '{{.ImportPath}} {{join .Imports " "}} {{join .TestImports " "}} {{join .XTestImports " "}}' ./... |
	while read -r pkg imports; do
		own=${pkg#"$mod"/}
		own=${own%%/*}
		[ "$own" = cmd ] && continue
		for imp in $imports; do
			case $imp in ("$mod"/*) ;; (*) continue ;; esac
			dep=${imp#"$mod"/}
			dep=${dep%%/*}
			[ "$dep" = "$own" ] || [ "$dep" = shared ] || echo "imports: $pkg -> $imp"
		done
	done)

[ -z "$bad" ] || { echo "$bad"; echo "imports: features may import only themselves and shared/"; exit 1; }
