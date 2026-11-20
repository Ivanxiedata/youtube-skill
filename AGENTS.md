# AGENTS.md

Map for any coding agent (Codex, Claude Code, Copilot, Cursor, ...). Keep it short; details live in `docs/`.

## Start here
1. Read this file, then the feature's `docs/specs/<feature>.md` and `<feature>/AGENTS.md`.
2. Resuming work? Read `docs/work/<slug>/progress.md` first.
3. Which features exist: `docs/features.md`. Background when needed: `docs/product.md` (why), `docs/architecture.md` (how features connect).

## Workflow
1. New task: `make worktree NAME=<slug>`, then `cd` there and `make setup`. Work only in that worktree.
   One slug names the branch, the worktree dir and `docs/work/<slug>/`.
2. New feature: `make new-feature NAME=<name>`. Write the spec before any code.
3. Multi-session task: update `docs/work/<slug>/progress.md` (Status / Done / Next / Blockers) before you stop.
4. Done means `make check` passes. Never commit with `--no-verify`.
5. Before the PR: `git fetch origin && git rebase origin/main`, then `make check` again.
6. Finishing: open a PR using the template; in the last commit, move `docs/work/<slug>/` to `docs/work/_archive/<slug>/`.
7. Roles: when asked to review or judge, follow `docs/roles/reviewer.md` or `docs/roles/judge.md`.

## Rules
- Go. Tests sit next to code as `*_test.go`.
- Slow tests (network, DB, >1s) start with `if testing.Short() { t.Skip("slow") }`. The commit hook skips them; CI runs them.
- A feature imports only itself and `shared/`. `shared/` imports no feature. `cmd/` wires features together.
  Enforced by `scripts/check-imports.sh`. Details and the type-sharing rule: `docs/architecture.md`.
- A feature's root package is its only public API; everything else goes in `<feature>/internal/`.
- Changing `shared/` is allowed when `make check` passes for every feature; it needs owner review.
- Change the spec before changing behavior.

## Commands
| Command | What |
|---|---|
| `make check` | gofmt, vet, test, structure, import boundaries |
| `make check-<feature>` | vet + test one feature |
| `make new-feature NAME=x` | scaffold dir, spec, AGENTS.md, row in `docs/features.md` |
| `make worktree NAME=x` | branch + worktree + `docs/work/x/` |

## Feature map
`docs/features.md`: one row per feature.
