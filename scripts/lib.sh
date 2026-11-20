# Sourced by scripts. Top-level dirs that are not features.
reserved() { case $1 in .* | docs | scripts | shared | cmd | episodes) return 0 ;; *) return 1 ;; esac; }
