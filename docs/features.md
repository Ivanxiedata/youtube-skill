# Feature map

One row per feature, added by `make new-feature`. Append-only; `.gitattributes` union-merges this file.
Find the feature your task belongs to by "What it does". Status lives in each feature's `progress.md` (`make status`).

| Feature | What it does | Spec |
|---|---|---|
| episode | One episode's content: the four-part brief (before / new / why / how) with sources, and the 60-second script; checks both are ready to render. | `docs/specs/episode.md` |
| lineage | Memory across episodes: which technology replaced which, so a new video can reference its predecessor and point to earlier videos. | `docs/specs/lineage.md` |
| diagram | Draws the side-by-side architecture diagram (old vs new, changed parts highlighted) in the stickman style for the What's-new section. | `docs/specs/diagram.md` |
