# Architecture

## Layout
| Path | What | May import |
|---|---|---|
| `<feature>/` | One product feature: code, `*_test.go`, `AGENTS.md` | itself, `shared/` |
| `shared/` | Code used by 2+ features | itself only |
| `cmd/<app>/` | Binaries; the only place features are wired together | anything |
| `docs/` | Product, architecture, specs, in-flight work, roles | — |
| `scripts/` | The checks and scaffolds behind `make` | — |

Boundaries are enforced by `scripts/check-imports.sh` (via `make check`), not by convention.

## How features connect
Features never call each other directly. If two features need the same thing, it moves to `shared/`.
If one feature needs another's output, `cmd/` passes it in (constructor arguments or interfaces
defined by the consuming feature).

## Where truth lives
| Question | Source |
|---|---|
| Why are we building this? | `docs/product.md` |
| What must feature X do? | `docs/specs/x.md` |
| What's in flight and where did it stop? | `docs/work/<slug>/progress.md` on that branch; `git worktree list` |
| Is it done? | `make check` |

## Enforcement layers
Same gate everywhere, so no agent-specific setup is required:
1. `.githooks/pre-commit` runs `make check` (installed by `make setup`).
2. CI (`.github/workflows/ci.yml`) runs `make check` on every push and PR.
3. `.github/CODEOWNERS` requires owner review for `shared/` (needs branch protection on GitHub).

## Feature connections
Update this section when a feature starts consuming another's output through `cmd/`.

None yet.
