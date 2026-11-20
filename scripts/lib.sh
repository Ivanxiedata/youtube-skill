# Sourced by scripts. Top-level dirs that are not features.
reserved() { case $1 in .* | docs | scripts | shared | cmd | episodes) return 0 ;; *) return 1 ;; esac; }

# progress.md skeleton for a feature or an episode: progress_md <name> <first Next item>
progress_md() {
	cat <<EOT
# $1 progress

## Status
not started

## Next
1. $2

## Blockers
none

## Decisions
<!-- - YYYY-MM-DD: decision, because why -->

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
EOT
}
