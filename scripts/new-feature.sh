#!/bin/sh
# Scaffold a feature so it passes check-structure: dir, spec, AGENTS.md, progress.md, map row.
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
f=${1:-}
desc=${2:-}
usage='usage: make new-feature NAME=<lowercase ascii go package name> DESC="<one line: what it does>"'
# Explicit ASCII set: [:lower:] is locale-dependent and would accept names like "café".
case $f in '' | *[!abcdefghijklmnopqrstuvwxyz0123456789]* | [0-9]*) echo "$usage"; exit 1 ;; esac
case $desc in '' | *'|'*) echo "$usage (DESC is required and can't contain |)"; exit 1 ;; esac
if reserved "$f"; then echo "$f is reserved (not a feature dir)"; exit 1; fi
case $f in
vendor | testdata | internal | \
	break | case | chan | const | continue | default | defer | else | fallthrough | for | func | go | goto | \
	if | import | interface | map | package | range | return | select | struct | switch | type | var)
	echo "$f is reserved (Go tool dir or Go keyword)"; exit 1 ;;
esac
[ ! -e "$f" ] || { echo "$f already exists"; exit 1; }

mkdir "$f"
printf '// Package %s: %s\n// Spec: docs/specs/%s.md.\npackage %s\n' "$f" "$desc" "$f" "$f" >"$f/doc.go"
sed "s/FEATURE/$f/g" docs/specs/_example.md >"docs/specs/$f.md"
cat >"$f/AGENTS.md" <<EOT
# $f

$desc

## Read first
1. \`docs/specs/$f.md\`: what it must do (acceptance criteria).
2. \`$f/progress.md\`: where it stands and what's next. Update it before you stop.

## Boundaries
- Public API: the root package \`$f\` only. Everything else goes in \`$f/internal/\`.
- May import: \`$f/...\` and \`shared/...\`. Never another feature.

## Commands
- \`make check-$f\`: vet + test this feature only.

## Notes
Feature-specific rules and gotchas go here.
EOT
echo '@AGENTS.md' >"$f/CLAUDE.md"
cat >"$f/progress.md" <<EOT
# $f progress

Update before you stop, written for an agent that has never seen your conversation.
\`make status\` shows the Status and first Next line of every feature.

## Status
not started

## Next
1. Write \`docs/specs/$f.md\`.

## Blockers
none

## Decisions
<!-- - YYYY-MM-DD: decision, because why -->

## Log
<!-- newest first: - YYYY-MM-DD <branch>: what was done -->
EOT
printf '| %s | %s | `docs/specs/%s.md` |\n' "$f" "$desc" "$f" >>docs/features.md

echo "created $f/. Next: write docs/specs/$f.md before any code."
