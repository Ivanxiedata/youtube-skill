# youtube-skill

Go monorepo, one folder per feature, built to be worked on by humans and any coding agent.

## Setup
```sh
make setup   # git hooks, .env, go deps (run in every clone and worktree)
make skills  # pinned third-party skills, installed repo-locally
make check   # the definition of done
```

## Working
```sh
make worktree NAME=my-task                      # one task, one branch, one worktree
make new-feature NAME=myfeature DESC="one line" # scaffold a feature + spec
make new-episode NAME=my-episode                # scaffold episodes/my-episode/ with its progress.md
```

Agents start at [AGENTS.md](AGENTS.md). Product context: [docs/product.md](docs/product.md).
Structure and rules: [docs/architecture.md](docs/architecture.md).
