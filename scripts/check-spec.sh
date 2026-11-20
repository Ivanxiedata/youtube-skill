#!/bin/sh
# Specs track built vs not built: a ticked criterion must name the test that proves it, on the same line,
#   - [x] Chain returns oldest first -> TestChainOldestFirst   (several: -> TestA, TestB)
# and that test must exist in the feature. Every spec also has a "## Later" section for future versions.
set -eu
LC_ALL=C # [A-Za-z] below means ASCII
export LC_ALL
cd "$(git rev-parse --show-toplevel)"
fail=0
err() { echo "spec: $*"; fail=1; }

for s in docs/specs/*.md; do
	set -f # the spec list is expanded; test names below are split unquoted and must not glob
	f=$(basename "$s" .md)
	for h in "Acceptance criteria" Later; do grep -qx "## $h" "$s" || err "$s has no '## $h' section"; done
	bad=$(grep -nE '^[[:space:]]*[-*] \[[xX]\]' "$s" |
		while IFS= read -r line; do
			n=${line%%:*}
			text=${line#*:}
			names=
			case $text in (*'->'*) names=$(printf '%s\n' "${text##*->}" | tr ',`' '  ') ;; esac
			found=0
			for t in $names; do
				found=1
				case $t in
				(*[!A-Za-z0-9_]*) echo "spec: $s:$n: '$t' is not a Test/Example/Fuzz function name"; continue ;;
				(Test* | Example* | Fuzz*) ;;
				(*) echo "spec: $s:$n: '$t' is not a Test/Example/Fuzz function name"; continue ;;
				esac
				grep -rqsF --include='*_test.go' --exclude-dir=testdata "func $t(" "$f/" ||
					echo "spec: $s:$n names $t, which doesn't exist in $f/"
			done
			[ $found = 1 ] || echo "spec: $s:$n is ticked but names no test (end the line with -> TestName (one line per criterion))"
		done)
	[ -z "$bad" ] || { echo "$bad"; fail=1; }
done
exit $fail
