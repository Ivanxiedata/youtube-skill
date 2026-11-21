// Registers `yt upload`, which publishes an episode to the owner's YouTube channel.

package main

import (
	"context"
	"flag"
	"fmt"
	"os"
	"os/signal"

	"github.com/Ivanxiedata/youtube-skill/upload"
)

func init() {
	register("upload", "upload an episode to YouTube (dry run without --confirm; private by default)", func(args []string) int {
		fs := flag.NewFlagSet("yt upload", flag.ContinueOnError)
		var o upload.Options
		fs.BoolVar(&o.Confirm, "confirm", false, "upload for real (without it: sign in and show what would be uploaded)")
		fs.StringVar(&o.Privacy, "privacy", "private", "private, unlisted or public")
		fs.BoolVar(&o.Again, "again", false, "upload even if published.json says it was uploaded before")
		fs.BoolVar(&o.Login, "login", false, "sign in again, e.g. to switch account")
		fs.BoolVar(&o.Thumbnail, "thumbnail", false, "only set thumbnail.png on the video already uploaded (published.json)")
		// flags may come before or after the episode folder
		var dirs []string
		for rest := args; ; rest = fs.Args()[1:] {
			if err := fs.Parse(rest); err != nil {
				return 2
			}
			if fs.NArg() == 0 {
				break
			}
			dirs = append(dirs, fs.Arg(0))
		}
		if len(dirs) != 1 {
			fmt.Fprintln(os.Stderr, "usage: yt upload <episode-dir> [--confirm] [--privacy private|unlisted|public] [--again] [--login] [--thumbnail]")
			return 2
		}
		ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
		defer stop()
		p, err := upload.Run(ctx, dirs[0], o)
		if err != nil { // includes the dry run's ErrNotConfirmed: exit 1 until --confirm
			fmt.Fprintln(os.Stderr, "yt upload:", err)
			return 1
		}
		if o.Thumbnail {
			return 0
		}
		fmt.Printf("uploaded: %s (%s)\n", p.URL, p.Privacy)
		return 0
	})
}
