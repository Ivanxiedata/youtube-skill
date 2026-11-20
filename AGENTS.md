# AGENTS.md

Map for any coding agent (Codex, Claude Code, Copilot, Cursor, ...). Short on purpose; details live in the linked files.
Product: 1-minute stickman videos explaining new AI tech, side by side with what came before (`docs/product.md`).

## Start of every session
1. `make status`: each feature's and episode's status and next step, plus work in flight on other branches.
2. `make check` as a baseline. If it fails on a clean checkout, fixing that comes first.
3. Route your task. Continue from the "Next" of the progress file you land on; don't ask the owner what the previous agent did.
   - **Feature work** (a row in `docs/features.md`): read `<feature>/AGENTS.md`, `docs/specs/<feature>.md`, `<feature>/progress.md`.
   - **Fits no feature:** it's a new feature. `make new-feature NAME=<name> DESC="<one line>"`, then write the spec.
   - **Making an episode:** `make new-episode NAME=<slug>` (inside your new worktree, before you claim) and `make skills`, then work in `episodes/<slug>/` and its `progress.md`.
   - **Repo-level** (harness, `shared/`, `cmd/` except `cmd/yt/<feature>.go`, `scripts/`): `docs/progress.md`. One repo-level task at a time.
4. **Claim before you start.** If "In flight" in `make status` shows someone on your feature or episode, pick other work.
   Right after `make worktree` (an episode: after `make new-episode` in it), prefix the existing Status line of the
   progress.md you'll own with `in progress (<branch>): `, keeping the old text; commit, `git push -u origin HEAD`.
   Other agents only see claims that are pushed. Drop the prefix in your last commit, when the work is done.
5. Background when needed: `docs/product.md` (what and why), `docs/architecture.md` (how features connect).

## Before you stop (every session, even mid-task)
Update the progress.md you own: Status (one line: `make status` shows only that), Next (numbered, concrete), Blockers, Decisions (with the why),
and one Log line appended at the bottom (oldest first). Write it for an agent that has never seen your conversation.
`make check` fails a branch that changes `<feature>/`, its spec or `cmd/yt/<feature>.go` (and `_test.go`) without `<feature>/progress.md`,
`episodes/<slug>/` without its `progress.md`, or `shared/`, the rest of `cmd/`, `scripts/`, `Makefile`, `.githooks/`, `.github/` without `docs/progress.md`.
In CI it also fails a feature or episode whose newest code/spec commit is newer than its progress.md's: update progress.md after your last code change.

## Branches
- `develop` is the integration branch. Every task branches from `develop`, and every PR targets `develop`.
- `main` only moves by fast-forward to `develop`, and only when the owner says develop is done:
  `git fetch origin && git push origin origin/develop:refs/heads/main` (git rejects it if it isn't a fast-forward).
- Never commit or open a PR directly against `main`. No branch protection; these rules are on you.
- **Agents never merge PRs.** The owner merges into develop when ci/check is green.

## Workflow
1. New task: `make worktree NAME=<slug>`, then `cd` there, `make setup`, `make status`, scaffold if needed (`make new-episode`, `make new-feature`), and claim (above). Work only in that worktree.
2. Spec before code: change `docs/specs/<feature>.md` before changing behavior.
   Spec ticks: `[ ]` not built; `- [x] ... -> TestName` built. One line per criterion, `->` only;
   the name must be a Test/Example/Fuzz that exists in the feature (`make check` verifies).
   New ideas beyond this version go in the spec's `## Later`.
3. Done means `make check` passes. Never commit with `--no-verify`.
4. Before the PR: `git fetch origin && git rebase origin/develop`, then `make check` again.
5. PR: `git push --force-with-lease -u origin HEAD`, then `gh pr create --base develop`, using the template.
   The claim already pushed this branch and the rebase rewrote it, so a plain push is rejected; forcing is safe because the branch is yours alone.
   Never force-push `develop`, `main` or anyone else's branch.
6. After the owner merges your PR, from another checkout: `git worktree remove <dir>`, then `git branch -D <slug>` (`-D`: git can't tell a squash-merged branch is merged).
   `make status` lists local branches whose upstream is gone under "Stale local branches".
7. Roles: when asked to review or judge, follow `docs/roles/reviewer.md` or `docs/roles/judge.md`.
8. Third-party skills: `make skills` installs the pinned ones into this worktree (`.claude/skills`, `.agents/skills`);
   each worktree runs it itself. Never install skills globally. Run the stickman scripts inside the venv `make skills` prints.
   Bumping a pin: read the upstream diff first (`skills.lock` header).

## Rules
- Go. Tests sit next to code as `*_test.go`.
- Slow tests (network, DB, >1s) start with `if testing.Short() { t.Skip("slow") }`. The commit hook skips them; CI runs them.
- A feature imports only itself and `shared/`. `shared/` imports no feature. `cmd/` wires features together.
  Enforced by `scripts/check-imports.sh`. Details and the type-sharing rule: `docs/architecture.md`.
- A feature's root package is its only public API; everything else goes in `<feature>/internal/`.
- Changing `shared/` needs owner review and `make check` passing for every feature; land it as its own small PR.

## Commands
| Command | What |
|---|---|
| `make status` | where every feature and episode stands + in-flight branches |
| `make check` | gofmt, vet, test, structure, import boundaries, progress updated, spec ticks have tests |
| `make check-<feature>` | vet + test one feature (refuses a name that isn't a feature dir) |
| `make new-feature NAME=x DESC="..."` | scaffold dir, spec, AGENTS.md, progress.md, map row (write a literal `$` as `$$`) |
| `make new-episode NAME=x` | scaffold `episodes/x/` with its progress.md |
| `make worktree NAME=x` | branch from develop + worktree |
| `make skills` | install the pinned third-party skills repo-locally |
