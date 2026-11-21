# Architecture

Routing, workflow and gates: `AGENTS.md`.

## Layout
| Path | What | May import |
|---|---|---|
| `<feature>/` | One product feature. Root package = its public API; the rest in `<feature>/internal/` | itself, `shared/` |
| `shared/<concept>/` | One package per concept used by 2+ features (e.g. `shared/brief`). No code directly in `shared/` | `shared/` only |
| `cmd/<app>/` | Binaries; the only place features are wired together | features' root packages, `shared/` |
| `episodes/<slug>/` | Content for one video: `brief.json`, `script.md`, `diagram.svg`, `progress.md`, plus `upload.json` and `published.json` for publishing. Render outputs (mp4, wav, webm, mp3) are gitignored, never committed | — (data, no code) |
| `docs/` | Product, architecture, specs, repo-level progress, roles | — |
| `scripts/` | The checks and scaffolds behind `make` | — |

Boundaries are enforced by `scripts/check-imports.sh` (via `make check`) and by Go's own
`internal/` rule, not by convention.

## How features connect
Features never call each other directly. If two features need the same thing, it moves to `shared/`.
If one feature needs another's output, `cmd/` passes it in (constructor arguments or interfaces
defined by the consuming feature).

- **Shared types:** a value type used by 2+ features (e.g. `Brief`) lives in `shared/<domain>/`.
  Features define behavior interfaces themselves; they don't copy each other's structs.
- **Wiring:** `cmd/yt/main.go` holds only a command registry. Each feature registers its subcommands in
  `cmd/yt/<feature>.go` via `init()`, so adding a command never edits `main.go`. That file and its `_test.go` belong to the
  feature: `make check` asks for `<feature>/progress.md` (not `docs/progress.md`), so parallel feature PRs don't conflict.
  Everything a feature wires lives in its own file, e.g. `yt check` is `episode`'s and `yt lineage check` is `lineage`'s; no feature's command calls another feature.
- **Connections:** record what a feature consumes in its spec's `Interfaces` section.
- **Changing `shared/`:** land it as its own small PR first; feature branches then rebase onto it.

## shared/brief (planned; lands as its own PR before any feature code)
A deep module: one small interface over every structural rule of an episode folder, so features
can't disagree about what a valid brief is.
- `Load(dir)` returns a validated `Brief` plus `[]Problem`; `LoadAll(episodesDir)` does it for every episode.
- It owns the structural rules: six sections (hook, before, new, why, how, outro); a predecessor is required and its id != tech id;
  tech ids lowercase-with-dashes; every edge references a known node; at least 1 and at most 8 nodes per side; labels at most 40 characters.
- It owns the section list and time budgets as one Go table mirroring the format table in `docs/product.md`,
  the episode folder's file names, and the single `Problem` type.
- Features keep only their own rules: `episode` (word counts, budgets, claim sources),
  `lineage` (duplicates, cycles), `diagram` (layout).
- `lineage` takes briefs, not a folder: `lineage.New(briefs []brief.Brief)`. `cmd/yt` calls `brief.LoadAll`.
