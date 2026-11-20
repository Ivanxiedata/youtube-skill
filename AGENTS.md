# AGENTS.md

Map for any coding agent (Codex, Claude Code, Copilot, Cursor, ...). Short on purpose; details live in the linked files.
Product: 1-minute stickman videos explaining new AI tech, side by side with what came before (`docs/product.md`).

## Start of every session
1. Run `make status`: each feature's status and next step, plus work in flight on other branches.
2. Find the feature your task belongs to in `docs/features.md` ("What it does").
   - **Found:** read `<feature>/AGENTS.md`, then `docs/specs/<feature>.md`, then `<feature>/progress.md`.
     Continue from its "Next". Don't ask the owner what the previous agent did; it's in `progress.md`.
   - **Fits no feature:** it's a new feature. `make new-feature NAME=<name> DESC="<one line>"`, then write the spec.
   - **Repo-level** (harness, `cmd/`, `shared/`, making an episode): read `docs/progress.md`.
3. Background when needed: `docs/product.md` (what and why), `docs/architecture.md` (how features connect).

## Before you stop (every session, even mid-task)
Update the feature's `progress.md` (or `docs/progress.md` for repo-level work):
Status, Next (numbered, concrete), Blockers, Decisions (with the why), one Log line.
Write it for an agent that has never seen your conversation.
`make check` fails a branch that changes a feature's code or spec without updating its `progress.md`.

## Branches
- `develop` is the integration branch. Every task branches from `develop`, and every PR targets `develop`.
- `main` only moves by fast-forward to `develop`, and only when the owner says develop is done:
  `git fetch origin && git push origin origin/develop:refs/heads/main` (git rejects it if it isn't a fast-forward).
- Never commit or open a PR directly against `main`. No branch protection; these rules are on you.

## Workflow
1. New task: `make worktree NAME=<slug>`, then `cd` there and `make setup`. Work only in that worktree.
   One task per feature at a time, so two branches never edit the same `progress.md`.
2. Spec before code: change `docs/specs/<feature>.md` before changing behavior.
   When a criterion is built, tick it with its test: `- [x] ... -> TestName` (`make check` verifies).
   New ideas beyond this version go in the spec's `## Later` section.
3. Done means `make check` passes. Never commit with `--no-verify`.
4. Before the PR: `git fetch origin && git rebase origin/develop`, then `make check` again.
5. PR: `gh pr create --base develop`, using the template.
6. Roles: when asked to review or judge, follow `docs/roles/reviewer.md` or `docs/roles/judge.md`.

## Rules
- Go. Tests sit next to code as `*_test.go`.
- Slow tests (network, DB, >1s) start with `if testing.Short() { t.Skip("slow") }`. The commit hook skips them; CI runs them.
- A feature imports only itself and `shared/`. `shared/` imports no feature. `cmd/` wires features together.
  Enforced by `scripts/check-imports.sh`. Details and the type-sharing rule: `docs/architecture.md`.
- A feature's root package is its only public API; everything else goes in `<feature>/internal/`.
- Changing `shared/` is allowed when `make check` passes for every feature; land it as its own small PR.

## Commands
| Command | What |
|---|---|
| `make status` | where every feature stands + in-flight branches |
| `make check` | gofmt, vet, test, structure, import boundaries, progress updated, spec ticks have tests |
| `make check-<feature>` | vet + test one feature |
| `make new-feature NAME=x DESC="..."` | scaffold dir, spec, AGENTS.md, progress.md, map row |
| `make worktree NAME=x` | branch from develop + worktree |
