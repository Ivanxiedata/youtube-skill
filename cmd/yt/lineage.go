// Registers `yt lineage`, the predecessor timeline (stub until the lineage feature lands).

package main

import (
	"fmt"
	"os"
)

func init() {
	register("lineage", "show what a technology replaced, oldest first", func([]string) int {
		fmt.Fprintln(os.Stderr, "yt lineage: not implemented yet (see docs/specs/lineage.md)")
		return 1
	})
}
