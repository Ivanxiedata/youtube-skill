// Registers `yt diagram`, the side-by-side architecture diagram (stub until the diagram feature lands).

package main

import (
	"fmt"
	"os"
)

func init() {
	register("diagram", "draw the side-by-side architecture diagram", func([]string) int {
		fmt.Fprintln(os.Stderr, "yt diagram: not implemented yet (see docs/specs/diagram.md)")
		return 1
	})
}
