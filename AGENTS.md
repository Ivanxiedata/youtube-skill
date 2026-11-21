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
     Follow `docs/workflow.md` step by step (research, promise, script, make, finish, judge, owner); it names the skill, tool, output file and model for each step.
   - **Choosing topics, after publishing (comments, retention, audit):** `docs/workflow.md`, "Weekly" and "After publishing".
   - **Repo-level** (harness, `shared/`, `cmd/` except `cmd/yt/<feature>.go`, `scripts/`): `docs/progress.md`. One repo-level task at a time.
4. **Claim before you start.** If "In flight" in `make status` shows someone on your feature or episode, pick other work.
   Right after `make worktree` (an episode: after `make new-episode` in it), prefix the existing Status line of the
   progress.md you'll own with `in progress (<branch>): `, keeping the old text; commit, `git push -u origin HEAD`.
   Other agents only see claims that are pushed. Drop the prefix in your last commit, when the work is done.
5. Background when needed: `docs/product.md` (what and why), `docs/workflow.md` (how an episode is made), `docs/brand.md` (what makes it one channel), `docs/architecture.md` (how features connect).

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
7. Roles: when asked to review, judge or evaluate an episode, follow `docs/roles/reviewer.md`, `docs/roles/judge.md` or `docs/roles/evaluator.md` (step 6 of `docs/workflow.md`; never the agent that made the episode).
   The owner's feedback on an episode is a lesson: add a row to `docs/lessons.md` in the same session.
8. Third-party skills: `make skills` installs the pinned ones into this worktree (`.claude/skills`, `.agents/skills`);
   each worktree runs it itself. Never install skills globally. Run the stickman scripts inside the venv `make skills` prints.
   Bumping a pin: read the upstream diff first (`skills.lock` header).
9. Cheap model for easy work (owner's rule): hand an easy task to a subagent on a cheaper model, and keep the expensive model for the hard parts.
   Claude Code: the Agent tool with `model: "sonnet"`. Other agents: their smaller model. Never launch a subagent without choosing its model.
   - Easy (Sonnet): the inputs and the expected result are written down, and a command checks it. Edits from a spec or progress Next,
     fixing a failing `make check`, renders and rebuilds, captions, `upload.json`, running the `hookscore.py`/`title.py`/earshot tools,
     lookups, moving or renaming files.
   - Hard (keep the expensive model): research where the sources disagree, picking the story and writing the script, reviewing or judging work,
     the final evaluation, debugging with no known cause, decisions the owner hasn't made.
   - Mixed task, such as a whole episode: the expensive model plans and judges; Sonnet subagents do the easy steps in between.
   - When a Sonnet subagent fails the same step twice, the expensive model takes that step over; say so in the progress file.

## Skills
`make skills` installs the pinned third-party skills (`skills.lock`): Deep-Research, stickman, earshot, real-sound and the eleven youtube-agent skills.
Which one serves which step, with its tool and its pass gate: `docs/workflow.md`. Use the skill for its step; don't improvise what a skill already does.

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
