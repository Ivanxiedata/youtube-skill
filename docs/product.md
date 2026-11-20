# Product

Owner-maintained. Agents read this; they don't edit it without being asked.

## What it is
Turns a new AI technology into a 1-minute stickman video that explains it as if to a five-year-old,
always side by side with the technology it builds on. Every video answers four questions:
what came before, what's new, why we need it, and how to use it, with an architecture diagram
comparing old and new. AI moves fast, so the product remembers what it has already covered and
each new video builds on the last ("remember v2? here's what changed").

## Users
Anyone interested in AI, not only engineers, who wants to catch up on what's new quickly and
actually understand it: how it works, not just its name.

## Principles
- **Simple words, real depth.** Talk like you're explaining to a five-year-old, but the explanation must match
  how the technology actually works. An analogy that's wrong underneath is a bug.
- **Always relative.** Every video names the predecessor and shows the difference side by side.
  A technology with no "before" isn't explained yet.
- **Accurate over exciting.** Every claim traces to a source from the research step. No hype,
  predictions or "this changes everything".
- **One diagram, one idea.** The architecture graph shows old vs new with the changed part highlighted.
- **Rendered from code.** Visuals come from the stickman engine, not AI image/video generation, so
  every video is consistent, reproducible and editable.

## Video format (v1: 60 seconds, ~150 spoken words)
| Time | Section | Shows |
|---|---|---|
| 0-5s | Hook | The one-line promise: what you'll understand in a minute |
| 5-15s | Before | The previous technology and its limit |
| 15-35s | What's new | Side-by-side architecture diagram, changed part highlighted |
| 35-45s | Why we need it | The problem the old one couldn't solve |
| 45-57s | How to use it | One concrete starting point |
| 57-60s | Outro | What to watch next (the predecessor's or successor's video) |

Captions: upload `script.md` as the video's captions (packaging step).

## Skills used
| Skill | Repo | Role |
|---|---|---|
| Deep research | github.com/Weizhena/Deep-Research-skills | Research the new tech and its predecessor, with sources |
| Stickman | github.com/krishnagoswami52/stickman-skill | Render the video and free voiceover |
| YouTube agent | github.com/jakeschincariol/youtube-agent-skill | Hook, title, thumbnail, SEO, chapters |

Installed repo-locally from pinned commits by `make skills`.

Gap none of them covers: architecture diagrams inside the stickman video. That's ours to build.

## Non-goals (v1)
- Finding new tech automatically. The owner picks the topic.
- Uploading to YouTube automatically.
- Videos longer than 60 seconds.
- Real-person footage, talking heads, or AI-generated images/video.
- Opinions, predictions, rankings or investment advice.

## Roadmap
| Order | Work | What it does |
|---|---|---|
| 0 | Episode 0 (no code) | Make one 60s video end to end by hand with the three skills, to learn the real flow |
| 1 | `episode` | Checks an episode's four-part brief (every claim sourced) and 60s script before render |
| 2 | `lineage` | Which tech replaced which, from the briefs, so videos reference their predecessor |
| 3 | `diagram` | Side-by-side architecture graph (old vs new) in the stickman style |
| 4 | `cmd/yt` | One CLI wiring them together: `yt check`, `yt lineage`, `yt diagram` |

Research, rendering and packaging are done by the external skills, not our code.
Status of each: `make status` (from each feature's `progress.md`). Specs are drafts until Episode 0 answers their open questions.
