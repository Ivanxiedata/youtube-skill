#!/bin/sh
# Specs track built vs not built: a ticked criterion must name the test that proves it,
#   - [x] Chain returns oldest first -> TestChainOldestFirst   (-> or →; several: TestA, TestB)
# and that test must exist in the feature. Every spec also has a "## Later" section for future versions.
set -eu
cd "$(git rev-parse --show-toplevel)"
fail=0
err() { echo "spec: $*"; fail=1; }

for s in docs/specs/*.md; do
	f=$(basename "$s" .md)
	[ "$f" != _example ] || continue
	for h in "Acceptance criteria" Later; do grep -qx "## $h" "$s" || err "$s has no '## $h' section"; done
	grep -n '^- \[[xX]\]' "$s" | while IFS= read -r line; do
		n=${line%%:*}
		tests=$(printf '%s\n' "$line" | sed 's/→/->/g' | sed -n 's/.*-> *//p' | tr ',`' '  ')
		[ -n "$tests" ] || { echo "spec: $s:$n is ticked but names no test (end it with -> TestName)"; continue; }
		for t in $tests; do
			grep -rqs --include='*_test.go' "^func $t(" "$f/" || echo "spec: $s:$n names $t, which doesn't exist in $f/"
		done
	done >"${TMPDIR:-/tmp}/check-spec.$$"
	[ ! -s "${TMPDIR:-/tmp}/check-spec.$$" ] || { cat "${TMPDIR:-/tmp}/check-spec.$$"; fail=1; }
	rm -f "${TMPDIR:-/tmp}/check-spec.$$"
done
exit $fail
