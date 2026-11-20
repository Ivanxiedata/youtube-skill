#!/bin/sh
# Scaffold a feature so it passes check-structure: dir, doc.go, spec, AGENTS.md, progress.md, map row.
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
f=${1:-}
desc=${2:-}
usage='usage: make new-feature NAME=<lowercase ascii go package name> DESC="<one line: what it does>"  (write a literal $ in DESC as $$)'
nl='
'
# Explicit ASCII set: [:lower:] is locale-dependent and would accept names like "café".
case $f in '' | *[!abcdefghijklmnopqrstuvwxyz0123456789]* | [0-9]*) echo "$usage"; exit 1 ;; esac
case $desc in '' | *'|'* | *"$nl"*) echo "$usage"; echo "DESC is required, one line, no |"; exit 1 ;; esac
if reserved "$f"; then echo "$f is reserved (not a feature dir)"; exit 1; fi
case $f in
main | vendor | testdata | internal | \
	break | case | chan | const | continue | default | defer | else | fallthrough | for | func | go | goto | \
	if | import | interface | map | package | range | return | select | struct | switch | type | var)
	echo "$f is reserved (Go tool dir, Go keyword or main)"; exit 1 ;;
esac
if git check-ignore -q "$f/x"; then echo "$f/ is gitignored; pick another name"; exit 1; fi
[ ! -e "$f" ] || { echo "$f already exists"; exit 1; }
[ ! -e "docs/specs/$f.md" ] || { echo "docs/specs/$f.md already exists"; exit 1; }

mkdir "$f"
printf '// Package %s. See AGENTS.md.\npackage %s\n' "$f" "$f" >"$f/doc.go"
cat >"docs/specs/$f.md" <<EOT
# $f

## Goal
One sentence: what the user can do after this ships that they can't do now.

## Users
Who uses it and in what situation.

## Acceptance criteria
- [ ] Given ..., when ..., then ...

## Non-goals
What this feature deliberately does not do.

## Interfaces
- Uses from \`shared/\`:
- Exposes to \`cmd/\`:

## Later
Ideas for after this version: things we probably will build, unlike Non-goals (things we won't).

## Verification
\`make check-$f\`, plus any manual step (command and expected output).
EOT
cat >"$f/AGENTS.md" <<EOT
# $f

$desc

Spec: \`docs/specs/$f.md\` · Progress: \`$f/progress.md\` (update before you stop) · Check: \`make check-$f\`

## Notes
Feature-specific rules and gotchas go here.
EOT
echo '@AGENTS.md' >"$f/CLAUDE.md"
progress_md "$f" "Write \`docs/specs/$f.md\`." >"$f/progress.md"
printf '| %s | %s |\n' "$f" "$desc" >>docs/features.md

echo "created $f/. Next: write docs/specs/$f.md before any code."
