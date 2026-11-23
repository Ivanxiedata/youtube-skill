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
- 2026-11-21: The daily run commits episodes straight to `develop` (after `make check`) instead of opening PRs, because the owner asked for a full hand-off and Actions' token can't open PRs in this repo's settings; a failing check goes to a `daily/<slug>` branch and an issue instead.
- 2026-11-21: The daily run uses the owner's Claude plan (`CLAUDE_CODE_OAUTH_TOKEN` from `claude setup-token`), not the API, and the settings live in `pipeline.yaml` so nothing is hard-coded in the workflow but the schedule.

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
- 2026-11-21 workflow-v2: lesson L15 and a workflow rule: one scratch folder per agent, no deletes outside it.
- 2026-11-21 workflow-v2: L14 reworded to match the hook rule (topic first, then before -> after); brand rule: AI roles drawn as screen-headed, no story hierarchy that lines up with skin tone (raised by the Agent Skills judge).
- 2026-11-21 daily-pipeline: `.github/workflows/daily-videos.yml` (plan job + one job per video), `pipeline.yaml`, `docs/pipeline/plan.md` and `episode.md` prompts, `scripts/ci-setup.sh`, `pipeline-config.py` (with selftest), `pipeline-prompt.py`, `pipeline-topics.py`, `pipeline-push.sh`; actionlint clean. Not run yet: needs the owner's secrets.
- 2026-11-22 keep-video: first end-to-end dry run (run 44977190119) passed in 38 min: planner picked openai-dots, judge said ready to publish, episode committed to develop (ef56484). Gap found: video.mp4 is git-ignored, so the dry run's video was lost; the episode job now keeps video.mp4 and thumbnail.png as a 30-day run artifact.

- 2026-11-22 privacy-page: `docs/site/` (home page + privacy policy for the Google OAuth app) and `.github/workflows/pages.yml` publishing it to https://ivanxiedata.github.io/youtube-skill/ (Pages source: GitHub Actions). Needed to publish the OAuth app out of Testing, whose refresh token expires every 7 days.

- 2026-11-22 cron-off-peak: the first scheduled run (13:00 UTC on 2026-11-22) never started (no schedule event by 14:52 UTC; workflow active, cron on develop). GitHub delays or drops scheduled runs at busy :00 times, so the cron moved to 13:17 UTC.
- 2026-11-22 pain-point-hook: owner feedback on inkling-2-mini (lesson L16): hooks sell the viewer's moment in one plain sentence, not the tech. workflow.md steps 2-3 (viewer's moment in package.md, 3-second test, body order pain -> now -> how -> why), evaluator rows 5 and 13, product.md format, brand.md opening, plan.md ranking. hookscore 100 rule replaced by a check at 72.
- 2026-11-22 owner-topic: daily-videos gets a `topic` input (a link or a sentence): the planner makes exactly that 1 topic instead of ranking its own. First use: the owner's Inkling 2 Mini link.
- 2026-11-22 pipeline-learn: daily run learns and is measured. Each episode keeps `mistakes.md` (every redo, failed audit and judge row); a `learn` job after the day's episodes turns them into lessons in `docs/lessons.md` (new, or `Repeated:` plus a harder rule in evaluator.md or episode.md's Known traps) and commits them to develop. Speed: `scripts/pipeline-trace.py` writes `trace.md` (minutes per subagent, slowest calls, tokens per model) from stream-json; step 3b claim check (`claims.md`) before voicing; stills first, one full build, then `--shots` only; re-judge only failed or changed rows. Lessons L17-L19 from the inkling-2-mini run. `models.learner` in pipeline.yaml. Not run on GitHub yet.
