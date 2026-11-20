#!/bin/sh
# Scaffold a feature so it passes check-structure: dir, spec, AGENTS.md, map row.
set -eu
cd "$(git rev-parse --show-toplevel)"
f=${1:-}
# Explicit ASCII set: [:lower:] is locale-dependent and would accept names like "café".
case $f in '' | *[!abcdefghijklmnopqrstuvwxyz0123456789]* | [0-9]*) echo "usage: make new-feature NAME=<lowercase ascii go package name>"; exit 1 ;; esac
case $f in
docs | scripts | shared | cmd | vendor | testdata | internal | \
	break | case | chan | const | continue | default | defer | else | fallthrough | for | func | go | goto | \
	if | import | interface | map | package | range | return | select | struct | switch | type | var)
	echo "$f is reserved (repo dir, Go tool dir, or Go keyword)"; exit 1 ;;
esac
[ ! -e "$f" ] || { echo "$f already exists"; exit 1; }

mkdir "$f"
printf '// Package %s: see docs/specs/%s.md.\npackage %s\n' "$f" "$f" "$f" >"$f/doc.go"
sed "s/FEATURE/$f/g" docs/specs/_example.md >"docs/specs/$f.md"
cat >"$f/AGENTS.md" <<EOT
# $f

Spec: \`docs/specs/$f.md\` (read it first). Fast check: \`make check-$f\`.

- Import only \`$f/...\` and \`shared/...\`.
- The root package \`$f\` is the feature's only public API. Everything else goes in \`$f/internal/\`.
EOT
echo '@AGENTS.md' >"$f/CLAUDE.md"
printf '| %s | `docs/specs/%s.md` | `%s/AGENTS.md` |\n' "$f" "$f" "$f" >>docs/features.md

echo "created $f/. Next: fill in docs/specs/$f.md before writing code."
