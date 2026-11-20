# Architecture

## Layout
| Path | What | May import |
|---|---|---|
| `<feature>/` | One product feature. Root package = its public API; the rest in `<feature>/internal/` | itself, `shared/` |
| `shared/<concept>/` | One package per concept used by 2+ features (e.g. `shared/youtube`). No code directly in `shared/` | `shared/` only |
| `cmd/<app>/` | Binaries; the only place features are wired together | features' root packages, `shared/` |
| `docs/` | Product, architecture, specs, in-flight work, roles | — |
| `scripts/` | The checks and scaffolds behind `make` | — |

Boundaries are enforced by `scripts/check-imports.sh` (via `make check`) and by Go's own
`internal/` rule, not by convention.

## How features connect
Features never call each other directly. If two features need the same thing, it moves to `shared/`.
If one feature needs another's output, `cmd/` passes it in (constructor arguments or interfaces
defined by the consuming feature).

- **Shared types:** a value type used by 2+ features (e.g. `Video`) lives in `shared/<domain>/`.
  Features define behavior interfaces themselves; they don't copy each other's structs.
- **Wiring:** each feature gets one file `cmd/<app>/<feature>.go`; `main.go` stays a short list of
  calls, so adding a feature doesn't touch the same lines as another branch.
- **Connections:** record what a feature consumes in its spec's `Interfaces` section.
- **Changing `shared/`:** land it as its own small PR first; feature branches then rebase onto it.

## Where truth lives
| Question | Source |
|---|---|
| Why are we building this? | `docs/product.md` |
| Which features exist? | `docs/features.md` |
| What must feature X do? | `docs/specs/x.md` |
| What's in flight and where did it stop? | `docs/work/<slug>/progress.md` on that branch; `git worktree list` |
| Is it done? | `make check` |

## Enforcement layers
Same gate everywhere, so no agent-specific setup is required:
1. `.githooks/pre-commit` runs `make check` (installed by `make setup`). Fast feedback only.
2. CI (`.github/workflows/ci.yml`) runs `make check` on pushes to main and on PRs. This is the real
   gate once branch protection requires it.
3. `.github/CODEOWNERS` marks `shared/` for owner review. Agents commit as the owner's account, so this
   only adds a second human once there is one.
