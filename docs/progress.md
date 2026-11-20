# Repo progress

Covers repo-level work: harness, `shared/`, `cmd/`, `scripts/`.

## Status
Foundation done (harness, product doc, 3 feature specs); review fixes for PR #1 applied. Episode 0 is next; no product code yet.

## Next
1. Owner reviews and merges PR #1.
2. Owner picks the Episode 0 topic: a new AI tech and its predecessor.
3. `make skills`, and the owner decides the three open skill questions under Blockers.
4. `make new-episode NAME=<slug>` and make Episode 0 by hand: research, brief.json, script.md, diagram (rough), render, title.
   Write what was slow or manual into its Log; answer the open questions in `docs/specs/episode.md` and `docs/specs/diagram.md`.
5. Land `shared/brief` (own PR, `docs/architecture.md`), then `episode`, `lineage`, `diagram` can run in parallel, one agent each.

## Blockers
Waiting on the owner: merge PR #1 and pick the Episode 0 topic. Plus three skill decisions (see `skills.lock` notes):
- Where the YouTube skills keep the channel voice profile: `docs/voice.md` for now (one lock line to change).
- Whether to restrict Deep-Research's `web-search-agent` (upstream: `model: opus`, all tools, reads untrusted web pages).
- Running stickman's `doctor.py`/`tts.py` only inside the venv `make skills` prints, because otherwise they pip-install into the active Python.

## Decisions
- 2026-11-20: No branch protection, because the owner wants speed. PRs go to `develop`; `main` is fast-forwarded by the owner; agents never merge, because nothing else stops a red PR.
- 2026-11-20: v1 videos are 60 seconds, because the product is a 1-minute explainer and longer videos are a v1 non-goal (format table in `docs/product.md`).
- 2026-11-20: Make Episode 0 by hand before writing feature code, because specs written before the real flow would be guesses.
- 2026-11-20: 3 features (episode, lineage, diagram) + `cmd/yt` wiring, because research, render and packaging already exist as external skills; our gap is the checks, lineage and diagram.
- 2026-11-20: `cmd/yt` skeleton landed early because three features would otherwise conflict creating `main.go`.
- 2026-11-20: Third-party skills are pinned to reviewed commits and installed per worktree, never globally, because they run with the agent's permissions and every agent tool must see the same versions.
- 2026-11-20: `shared/brief` owns all structural brief rules, because otherwise they scatter across features and `yt check` passes briefs that fail later.

## Log
- 2026-11-20 develop: harness built and reviewed (5 lenses); CI green; develop/main branch model.
- 2026-11-20 product-doc: product doc, per-feature progress files, `make status`, progress check, 3 feature specs.
- 2026-11-20 product-doc: PR #1 review fixes: claim protocol and `make status` shows local/episode work, episode progress files, `cmd/yt` registry, deep `shared/brief` plan, `make new-episode`, `make skills`.
