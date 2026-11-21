# Repo progress

Covers repo-level work: harness, `shared/`, `cmd/` (except `cmd/yt/<feature>.go`, which is the feature's), `scripts/`.

## Status
Episode 0 is published (public since 2026-11-21), made end to end with the skills in `AGENTS.md`; `upload` works against real YouTube; brand guide, lessons log and evaluator role are in place. No code yet for `shared/brief`, `episode`, `lineage`, `diagram`, `evaluate`, `feedback`.

## Next
1. Owner decides: a name for the series and for the mascot (`docs/brand.md`, "Open").
2. Update the draft specs with what Episode 0 answered (`episodes/deepseek-super-agent/progress.md`, "Answers for the specs"):
   `docs/specs/episode.md` (sections hook/before/new/why/takeaway/outro; word limits for a 2.9 words/s voice), `docs/specs/diagram.md` (emit draw data for `film.js`, not an SVG file).
3. Land `shared/brief` (own PR, `docs/architecture.md`). Then one agent each: `episode`, `evaluate`, `feedback` (its `add`/`list`/`check` don't need `shared/brief`), `lineage`, `diagram`.
4. Episode 1: a research step proposes a ranked shortlist, the owner picks; follow the skills table in `AGENTS.md`; fix the two should-fix rows of Episode 0's `evaluation.md` (sounds on the picture cuts, the synthetic-sounding voice).
5. Publish the OAuth app so the upload sign-in stops expiring every 7 days (`upload/progress.md`, Next 2).
6. `main` is fast-forwarded to `develop` when the owner says develop is done.

## Blockers
None. One skill decision is still open (see `skills.lock` notes): whether to restrict Deep-Research's `web-search-agent` (upstream: `model: opus`, all tools, reads untrusted web pages).

## Decisions
- 2026-11-20: No branch protection, because the owner wants speed. PRs go to `develop`; `main` is fast-forwarded by the owner; agents never merge, because nothing else stops a red PR.
- 2026-11-20: v1 videos are 60 seconds, because the product is a 1-minute explainer and longer videos are a v1 non-goal (format table in `docs/product.md`).
- 2026-11-20: Make Episode 0 by hand before writing feature code, because specs written before the real flow would be guesses.
- 2026-11-20: 3 features (episode, lineage, diagram) + `cmd/yt` wiring, because research, render and packaging already exist as external skills; our gap is the checks, lineage and diagram.
- 2026-11-20: `cmd/yt` skeleton landed early because three features would otherwise conflict creating `main.go`.
- 2026-11-20: Third-party skills are pinned to reviewed commits and installed per worktree, never globally, because they run with the agent's permissions and every agent tool must see the same versions.
- 2026-11-20: `shared/brief` owns all structural brief rules, because otherwise they scatter across features and `yt check` passes briefs that fail later.
- 2026-11-20: Each feature's `cmd/yt/<feature>.go` (and `_test.go`) maps to `<feature>/progress.md`, because three parallel feature PRs would otherwise all edit `docs/progress.md` and conflict.
- 2026-11-20: A claim is an `in progress (<branch>): ` prefix on the existing Status line, and CI fails a feature or episode whose progress.md is older than its newest code, because overwriting Status lost information and one touch at claim time proved nothing.
- 2026-11-21: Easy tasks go to a subagent on a cheaper model (Sonnet in Claude Code), the expensive model keeps planning, judging and hard work, because the owner asked to stop spending the expensive model on easy work (AGENTS.md Workflow 9).
- 2026-11-21: `docs/workflow.md` replaces the skills table as the one standard for episodes (promise before script, full `/yt-script` shape, an independent judge, the weekly and after-publishing loops), because the owner approved the plan built from first principles and wanted all eleven youtube-agent skills used where they serve the goal.

## Log
- 2026-11-20 develop: harness built and reviewed (5 lenses); CI green; develop/main branch model.
- 2026-11-20 product-doc: product doc, per-feature progress files, `make status`, progress check, 3 feature specs.
- 2026-11-20 product-doc: PR #1 review fixes: claim protocol and `make status` shows local/episode work, episode progress files, `cmd/yt` registry, deep `shared/brief` plan, `make new-episode`, `make skills`.
- 2026-11-20 product-doc: verifier follow-ups: `cmd/yt/<feature>.go` counts as the feature's (`check.go` -> `episode.go`); `yt lineage check`; force-with-lease after rebase; post-merge cleanup and stale-branch list; branch age in `make status`; claim is a Status prefix; `check-%` refuses non-features; stricter spec-tick check; CI-only progress-after-code check; .gitignore additions.
- 2026-11-20 product-doc: check-progress CI rule judges by ancestry, not dates, so merged parallel branches are handled.
- 2026-11-20 upload-feature: owner chose API upload (option B); `upload` feature specced; upload removed from v1 non-goals.
- 2026-11-20 upload-feature: first third-party Go module (`golang.org/x/oauth2`); CI caches on `go.sum` and runs a pinned `govulncheck`.
- 2026-11-21 brand-evaluate-feedback: `docs/brand.md`, `docs/voice.md`, `docs/lessons.md` and the evaluator role added; `AGENTS.md` routes episode work through them; two new features specced (`evaluate`, `feedback`).
- 2026-11-21 brand-evaluate-feedback: earshot pinned in `skills.lock` (its two skills installed; the package and listening models install into `.skills/`); `scripts/music.py` finds CC0 / CC BY music through Openverse; `AGENTS.md` gets a skills-by-step table.
- 2026-11-21 brand-evaluate-feedback: PRs #2 (upload) and #3 (Episode 0) merged; Status and Next rewritten for after Episode 0.
- 2026-11-21 sonnet-subagents: AGENTS.md Workflow 9: easy tasks on a cheaper model, with what counts as easy and hard.
- 2026-11-21 workflow-v2: `docs/workflow.md` (goal, map, steps 1-7 with skill, tool, output, gate and model; weekly; after publishing; deviations), evaluator role rewritten as a 20-row checklist from the skills' rules, `AGENTS.md` points to it, `make new-episode` starts with the steps. Includes the topic-first rule (PR #10).
- 2026-11-21 workflow-v2: first weekly `/yt-viral` study (`docs/studies/2026-11-21-yt-viral.md`): 681 videos from 10 channels; top titles name one plain subject first, then bound the promise.
