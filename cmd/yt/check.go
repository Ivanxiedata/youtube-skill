// Registers `yt check`, the episode readiness check (stub until the episode feature lands).

package main

import (
	"fmt"
	"os"
)

func init() {
	register("check", "check an episode's brief and script are ready to render", func([]string) int {
		fmt.Fprintln(os.Stderr, "yt check: not implemented yet (see docs/specs/episode.md)")
		return 1
	})
}
