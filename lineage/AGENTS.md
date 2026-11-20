# lineage

Memory across episodes: which technology replaced which, so a new video can reference its predecessor and point to earlier videos.

Spec: `docs/specs/lineage.md` · Progress: `lineage/progress.md` (update before you stop) · Check: `make check-lineage`

## Notes
- Takes `[]brief.Brief` from `cmd/yt` (`brief.LoadAll`). Does no file reading and never writes to episodes.
- Tech ids are lowercase-with-dashes (e.g. `function-calling`); `shared/brief` enforces that.
