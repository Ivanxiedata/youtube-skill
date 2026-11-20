// Registers `yt lineage <tech-id>` (predecessor timeline) and `yt lineage check` (problems across all episodes).
// A stub until the lineage feature lands.

package main

import (
	"fmt"
	"os"
)

func init() {
	register("lineage", "<tech-id>: what it replaced, oldest first; check: lineage problems across episodes", func([]string) int {
		fmt.Fprintln(os.Stderr, "yt lineage: not implemented yet (see docs/specs/lineage.md)")
		return 1
	})
}
