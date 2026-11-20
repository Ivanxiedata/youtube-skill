#!/bin/sh
# Scaffold a feature so it passes check-structure: dir, spec, AGENTS.md, map row.
set -eu
cd "$(git rev-parse --show-toplevel)"
f=${1:-}
case $f in '' | *[![:lower:][:digit:]]* | [0-9]*) echo "usage: make new-feature NAME=<lowercase go package name>"; exit 1 ;; esac
case $f in docs | scripts | shared | cmd) echo "$f is reserved"; exit 1 ;; esac
[ ! -e "$f" ] || { echo "$f already exists"; exit 1; }

mkdir "$f"
printf '// Package %s: see docs/specs/%s.md.\npackage %s\n' "$f" "$f" "$f" >"$f/doc.go"
sed "s/FEATURE/$f/g" docs/specs/_example.md >"docs/specs/$f.md"
cat >"$f/AGENTS.md" <<EOF
# $f

Spec: \`docs/specs/$f.md\` (read it first). Fast check: \`make check-$f\`.

- Import only \`$f/...\` and \`shared/...\`.
EOF
echo '@AGENTS.md' >"$f/CLAUDE.md"
printf '| %s | `docs/specs/%s.md` | `%s/AGENTS.md` |\n' "$f" "$f" "$f" >>AGENTS.md

echo "created $f/. Next: fill in docs/specs/$f.md before writing code."
