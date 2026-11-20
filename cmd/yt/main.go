// Command yt is the video pipeline CLI: a dispatcher over the commands the features register.
// Each feature adds its command in its own file via init(), so main.go never changes.
package main

import (
	"fmt"
	"io"
	"maps"
	"os"
	"slices"
)

type command struct {
	summary string
	run     func(args []string) int
}

var commands = map[string]command{}

// register adds a command; it panics on a duplicate name so two features can't silently collide.
func register(name, summary string, run func(args []string) int) {
	if _, dup := commands[name]; dup {
		panic("yt: duplicate command " + name)
	}
	commands[name] = command{summary, run}
}

func main() { os.Exit(run(os.Args[1:], os.Stdout, os.Stderr)) }

func run(args []string, stdout, stderr io.Writer) int {
	if len(args) == 0 {
		usage(stderr)
		return 2
	}
	switch args[0] {
	case "-h", "--help", "help":
		usage(stdout)
		return 0
	}
	c, ok := commands[args[0]]
	if !ok {
		fmt.Fprintf(stderr, "yt: unknown command %q\n", args[0])
		usage(stderr)
		return 2
	}
	return c.run(args[1:])
}

func usage(w io.Writer) {
	fmt.Fprintln(w, "usage: yt <command> [args]\n\ncommands:")
	for _, name := range slices.Sorted(maps.Keys(commands)) {
		fmt.Fprintf(w, "  %-10s %s\n", name, commands[name].summary)
	}
}
