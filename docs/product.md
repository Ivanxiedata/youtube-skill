# Product

Owner-maintained. Agents read this; they don't edit it without being asked.

## What it is
Turns a new AI technology into a 1-minute stickman video that explains it as if to a five-year-old,
always side by side with the technology it builds on. Every video answers four questions:
what came before, what's new, why we need it, and what to take away, with an architecture diagram
comparing old and new. AI moves fast, so the product remembers what it has already covered and
each new video builds on the last ("remember v2? here's what changed").

## Users
Anyone interested in AI, not only engineers, who wants to catch up on what's new quickly and
actually understand it: how it works, not just its name.

## Principles
- **Simple words, real depth.** Talk like you're explaining to a five-year-old, but the explanation must match
  how the technology actually works. An analogy that's wrong underneath is a bug.
- **Start from what everyone knows.** Tell the new tech through a story the viewer already has (history, a war, everyday life),
  so they get it at once: Napoleon's chief of staff for a router agent. The story must map onto how the tech works,
  and its facts are sourced like any other claim.
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
| 0-5s | Hook | A surprising fact or image from the story, not a statement about AI |
| 5-15s | Before | The previous technology and its limit |
| 15-35s | What's new | Side-by-side architecture diagram, changed part highlighted |
| 35-45s | Why we need it | The problem the old one couldn't solve |
| 45-57s | Takeaway | The insight the viewer keeps, tied back to the story. How to try it goes in the description, not on screen |
| 57-60s | Outro | The takeaway as one line on screen, a spoken call to action (subscribe) with a button, and what to watch next |

Pace: a new shot about every 2-3 seconds (Episode 0's first cut averaged 6 and felt slow).
Sound: voice, quiet instrumental music (no lyrics, about 16 dB under the voice) and a few sampled effects; no room tone or other noise bed.
Captions: upload `script.md` as the video's captions (packaging step).
Thumbnail: the headline names the topic and the picture shows the lesson (Episode 0: YOU -> ROUTER -> AI WORKERS), so a viewer knows
what they will learn before clicking. A hook that could sit on any video is too generic. Drawn from code with the film's characters.

## Skills used
| Skill | Repo | Role |
|---|---|---|
| Deep research | github.com/Weizhena/Deep-Research-skills | Research the new tech and its predecessor, with sources |
| Stickman | github.com/krishnagoswami52/stickman-skill | Render the video and free voiceover |
| YouTube agent | github.com/jakeschincariol/youtube-agent-skill | Hook, title, thumbnail, SEO, chapters |

Installed repo-locally from pinned, reviewed commits by `make skills` (`skills.lock` records each commit and its review notes).
Codex gets the skills but not Deep-Research's web-search subagent (upstream's Codex agent file is incomplete).

Gap none of them covers: architecture diagrams inside the stickman video. That's ours to build.

## Non-goals (v1)
- Picking the topic automatically. A research step proposes a ranked shortlist with sources; the owner picks.
- Videos longer than 60 seconds.
- Real-person footage, talking heads, or AI-generated images/video.
- Opinions, predictions, rankings or investment advice.

## Roadmap
| Order | Work | What it does |
|---|---|---|
| 0 | Episode 0 (no code) | Make one 60s video end to end by hand with the three skills, to learn the real flow |
| 1 | `episode` | Checks an episode's brief (four questions plus hook and outro, every claim sourced) and 60s script before render |
| 2 | `lineage` | Which tech replaced which, from the briefs, so videos reference their predecessor |
| 3 | `diagram` | Side-by-side architecture graph (old vs new) in the stickman style |
| 4 | `upload` | Publishes a finished episode to the owner's channel, private by default |
| 5 | `cmd/yt` | One CLI wiring them together: `yt check`, `yt lineage`, `yt diagram`, `yt upload` |

Research, rendering and packaging are done by the external skills; publishing is ours (`upload`).
Status of each: `make status` (from each feature's `progress.md`). Specs are drafts until Episode 0 answers their open questions.
