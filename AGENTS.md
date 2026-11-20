# AGENTS.md

Map for any coding agent (Codex, Claude Code, Copilot, Cursor, ...). Keep it short; details live in `docs/`.

## Start here
1. Read this file, then the feature's `docs/specs/<feature>.md` and `<feature>/AGENTS.md`.
2. Resuming work? Read `docs/work/<slug>/progress.md` first.
3. Background when needed: `docs/product.md` (why), `docs/architecture.md` (how features connect).

## Workflow
1. New task: `make worktree NAME=<slug>`, then `cd` there and `make setup`. Work only in that worktree.
   One slug names the branch, the worktree dir and `docs/work/<slug>/`.
2. New feature: `make new-feature NAME=<name>`. Write the spec before any code.
3. Multi-session task: update `docs/work/<slug>/progress.md` (Status / Done / Next / Blockers) before you stop.
4. Done means `make check` passes. Never commit with `--no-verify`.
5. Finishing: open a PR using the template; in the last commit, move `docs/work/<slug>/` to `docs/work/_archive/<slug>/`.
6. Roles: when asked to review or judge, follow `docs/roles/reviewer.md` or `docs/roles/judge.md`.

## Rules
- Go. Tests sit next to code as `*_test.go`.
- A feature imports only itself and `shared/`. `shared/` imports no feature. `cmd/` wires features together.
  Enforced by `scripts/check-imports.sh`.
- Changing `shared/` is allowed when `make check` passes for every feature; it needs owner review.
- Change the spec before changing behavior.

## Commands
| Command | What |
|---|---|
| `make check` | gofmt, vet, test, structure, import boundaries |
| `make check-<feature>` | vet + test one feature |
| `make new-feature NAME=x` | scaffold dir, spec, AGENTS.md, map row |
| `make worktree NAME=x` | branch + worktree + `docs/work/x/` |

## Feature map
| Feature | Spec | Rules |
|---|---|---|
