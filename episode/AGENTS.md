# episode

Checks that an episode's brief and script are ready to render (structure via shared/brief, sources, word budgets). Making an episode is not this feature: `make new-episode`.

Spec: `docs/specs/episode.md` · Progress: `episode/progress.md` (update before you stop) · Check: `make check-episode`

## Notes
- This feature checks; it never writes briefs or scripts.
- `Check` returns `shared/brief`'s structural problems plus its own (script word counts, section budgets, claim sources).
- Section names and time budgets live in `shared/brief`, mirroring the format table in `docs/product.md`. Format and budget changes go through the owner (`docs/product.md`), then `shared/brief`.
