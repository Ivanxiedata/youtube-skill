# feedback

## Goal
Every piece of feedback becomes a written lesson the next episode has to follow, so the videos get better
episode over episode instead of repeating the same mistakes.

## Users
The owner, whose comments stop being lost in a chat. Agents starting an episode, who read the lessons first.
`evaluate`, which checks the lessons marked for it.

## Where feedback comes from
| Source | When | How it arrives |
|---|---|---|
| Owner | any time | the agent records the comment as a lesson, in the owner's words |
| `evaluate` | before publishing | a Must fix row that shows up in two episodes becomes a lesson |
| `pipeline` | after each daily run | the learn job (`docs/pipeline/learn.md`) turns every row of each episode's `mistakes.md` (judge rows, failed audits, redone steps) into a new lesson or marks an open one `Repeated:` and hardens its rule |
| YouTube numbers | after publishing | the owner exports audience retention from YouTube Studio to `episodes/<slug>/retention.csv` |
| Similar videos | every few episodes | a study with the youtube-agent `yt-viral` tool: patterns only (length, pacing, structure, packaging), never a copied premise, line or look |

## Data
`docs/lessons.md`, one row per lesson, newest last:
`id | date | source | episode | lesson (what went wrong or worked) | rule (what to do from now on) | check | status`
- `check`: `evaluate` (looked at on every scorecard), `brand` or `product` (written into that doc), `pipeline` (a process trap, written into "Known traps" in `docs/pipeline/episode.md`), or `none`.
- `status`: `open`, or `retired` with the reason.
Seeded with the lessons from the owner's feedback on Episode 0.

`episodes/<slug>/feedback.md`, written after publishing: views, where viewers left, which script section that was, and the lessons it produced.

## Acceptance criteria
- [ ] `yt feedback add --source owner --episode <slug> "<lesson>" --rule "<rule>" [--check evaluate]` appends a row with the next id and today's date.
- [ ] `yt feedback list` prints the open lessons; `--check evaluate` filters them.
- [ ] `yt feedback retention episodes/<slug>` reads `retention.csv` and `captions.srt` and writes `feedback.md`: the three steepest drops, each with its time, the share of viewers lost and the script section and sentence playing then.
- [ ] A drop inside the first 15 s is reported as a hook problem; a drop in the last 10 s is reported as normal.
- [ ] A malformed `retention.csv` gives one problem naming the line; nothing is written.
- [ ] `yt feedback check` fails if `docs/lessons.md` has a row with an empty rule, an unknown `check` value or a duplicate id.
- [ ] `make new-episode` output and `AGENTS.md` point at `docs/lessons.md`, so an agent starting an episode reads it.

## Non-goals
- Deciding what a lesson means: an agent or the owner writes the lesson and the rule; the code stores, lists and checks them.
- Reading YouTube Analytics through the API in this version (the owner exports the CSV).
- Copying another channel's video. Studies record patterns only.

## Interfaces
- Uses from `shared/`: `shared/brief` (episode files).
- Exposes to `cmd/`: `feedback.Add`, `feedback.List`, `feedback.Retention(dir)`, `feedback.Check`.
- Used by: `cmd/yt/feedback.go`; `evaluate` reads the lessons marked `check: evaluate`.

## Later
- Pull views, click-through rate and retention with the YouTube Analytics API (one more OAuth scope on the `upload` sign-in).
- Compare episodes: which hook formula, title pattern and story type kept the most viewers.
- The similar-videos study as a command that stores its findings next to the lessons.

## Verification
`make check-feedback`. Manual: `go run ./cmd/yt feedback list` prints the seeded lessons.

## Open questions
1. The exact columns of YouTube Studio's retention export (check a real file once Episode 0 is public).
2. How many views are enough before a retention curve means anything.
