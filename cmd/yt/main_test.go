// Tests for the yt command registry and dispatch.

package main

import (
	"bytes"
	"strings"
	"testing"
)

// reg registers a throwaway command and removes it when the test ends.
func reg(t *testing.T, name, summary string, run func([]string) int) {
	t.Helper()
	register(name, summary, run)
	t.Cleanup(func() { delete(commands, name) })
}

func runYT(args ...string) (code int, stdout, stderr string) {
	var out, errb bytes.Buffer
	code = run(args, &out, &errb)
	return code, out.String(), errb.String()
}

func TestDispatchPassesArgsAndExitCode(t *testing.T) {
	var got []string
	reg(t, "zz-demo", "demo", func(args []string) int { got = args; return 7 })
	code, _, _ := runYT("zz-demo", "a", "-b")
	if code != 7 || strings.Join(got, ",") != "a,-b" {
		t.Fatalf("code=%d args=%v, want 7 and [a -b]", code, got)
	}
}

func TestUnknownCommand(t *testing.T) {
	code, stdout, stderr := runYT("nope")
	if code != 2 || stdout != "" || !strings.Contains(stderr, `unknown command "nope"`) || !strings.Contains(stderr, "usage:") {
		t.Fatalf("code=%d stdout=%q stderr=%q", code, stdout, stderr)
	}
}

func TestNoArgsPrintsUsageAndFails(t *testing.T) {
	code, stdout, stderr := runYT()
	if code != 2 || stdout != "" || !strings.Contains(stderr, "usage:") {
		t.Fatalf("code=%d stdout=%q stderr=%q", code, stdout, stderr)
	}
}

func TestHelpListsCommandsSortedAndExitsZero(t *testing.T) {
	reg(t, "aaa", "first", nil)
	reg(t, "zzz", "last", nil)
	for _, h := range []string{"-h", "--help", "help"} {
		code, stdout, stderr := runYT(h)
		if code != 0 || stderr != "" {
			t.Fatalf("%s: code=%d stderr=%q", h, code, stderr)
		}
		last := -1
		for _, name := range []string{"aaa", "check", "diagram", "lineage", "zzz"} {
			i := strings.Index(stdout, "  "+name+" ")
			if i <= last {
				t.Fatalf("%s: %q missing or out of order in:\n%s", h, name, stdout)
			}
			last = i
		}
	}
}

func TestRegisterDuplicatePanics(t *testing.T) {
	reg(t, "zz-dup", "x", nil)
	defer func() {
		if recover() == nil {
			t.Fatal("duplicate register did not panic")
		}
	}()
	register("zz-dup", "y", nil)
}

func TestFeatureCommandsRegistered(t *testing.T) {
	for _, name := range []string{"check", "lineage", "diagram"} {
		if c, ok := commands[name]; !ok || c.summary == "" || c.run == nil {
			t.Errorf("command %q not registered with a summary and run func", name)
		}
	}
}
