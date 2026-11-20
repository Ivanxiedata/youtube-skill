#!/bin/sh
# A branch that changes a feature (its code or its spec) must also update <feature>/progress.md,
# so the next agent can continue without being told what happened.
set -eu
cd "$(git rev-parse --show-toplevel)"
. scripts/lib.sh
git rev-parse -q --verify origin/develop >/dev/null || { echo "progress: no origin/develop yet, skipped"; exit 0; }
base=$(git merge-base HEAD origin/develop)
# Index vs base = this branch's commits plus what is staged for the commit in progress.
changed=$(git diff --cached --name-only "$base")
fail=0
for f in $(printf '%s\n' "$changed" | sed -n 's|^docs/specs/\(.*\)\.md$|\1|p; s|/.*||p' | sort -u); do
	if reserved "$f" || [ ! -f "$f/progress.md" ]; then continue; fi
	printf '%s\n' "$changed" | grep -qx "$f/progress.md" ||
		{ echo "progress: $f changed on this branch but $f/progress.md didn't. Update Status/Next/Log."; fail=1; }
done
exit $fail
