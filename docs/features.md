# Feature map

One row per feature, added by `make new-feature`. Append-only; `.gitattributes` union-merges this file.
Find the feature your task belongs to by "What it does". Status lives in each feature's `progress.md` (`make status`).

| Feature | What it does |
|---|---|
| episode | Checks that an episode's brief and script are ready to render (structure via shared/brief, sources, word budgets). Making an episode is not this feature: `make new-episode`. |
| lineage | Memory across episodes: which technology replaced which, so a new video can reference its predecessor and point to earlier videos. |
| diagram | Draws the side-by-side architecture diagram (old vs new, changed parts highlighted) in the stickman style for the What's-new section. |
