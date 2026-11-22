#!/bin/sh
# Commit the given paths and push them to the branch this run checked out (develop), rebasing on whatever
# the day's other jobs pushed first. Each job touches only its own episode folder, so rebases don't conflict.
#   scripts/pipeline-push.sh "<commit message>" <path>...
set -eu
[ $# -ge 2 ] || { echo "usage: pipeline-push.sh <message> <path>..."; exit 2; }
msg=$1
shift
branch=$(git rev-parse --abbrev-ref HEAD)
git add -- "$@"
git diff --cached --quiet && { echo "pipeline-push: nothing to commit"; exit 0; }
printf '%s\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n' "$msg" | git commit -q -F -
for try in 1 2 3 4 5; do
	git pull -q --rebase origin "$branch" && git push -q origin "HEAD:$branch" && { echo "pipeline-push: pushed ($try)"; exit 0; }
	sleep $((try * 10))
done
echo "pipeline-push: could not push after 5 tries"
exit 1
