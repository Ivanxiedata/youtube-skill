# lineage

Memory across episodes: which technology replaced which, so a new video can reference its predecessor and point to earlier videos.

## Read first
1. `docs/specs/lineage.md`: what it must do (acceptance criteria).
2. `lineage/progress.md`: where it stands and what's next. Update it before you stop.

## Boundaries
- Public API: the root package `lineage` only. Everything else goes in `lineage/internal/`.
- May import: `lineage/...` and `shared/...`. Never another feature.

## Commands
- `make check-lineage`: vet + test this feature only.

## Notes
- Read-only over `episodes/*/brief.json`. Never write to episodes.
- Tech ids are lowercase-with-dashes (e.g. `function-calling`).
