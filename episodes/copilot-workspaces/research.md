# Research: Copilot Workspaces vs single-player AI at work

Done 2026-11-24 (daily run, workflow step 1). The maker's own pages first, fetched with `curl -sL` and a browser `-A` user agent, stripped of HTML (lessons L20, L40; text under
`$RUNNER_TEMP/copilot-workspaces/src/`). Each stripped text was checked to be the article (the Workspaces paragraph found with `str.find`). One item (before, new), all from Microsoft, so no Deep-Research fan-out.
A web search found no Ignite 2026 Book of News entry or product docs page for Workspaces (only aggregator and LinkedIn posts, not used); every product fact below is from Microsoft's two posts.

Sources:
- [CB] https://www.microsoft.com/en-us/copilot/blog/2026/11/17/copilot-at-microsoft-ignite-expanding-whats-possible-with-intelligence-built-for-work/ (Microsoft Copilot Blog, "Copilot at Microsoft Ignite: Expanding what's possible with intelligence built for work", Nov 17, 2026, Jared Spataro)
- [SN] https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/ (Official Microsoft Blog, "Ignite 2026: Building the frontier ecosystem", Nov 17, 2026, an edited version of Satya Nadella's Ignite keynote)
- [FP] https://adoption.microsoft.com/en-us/copilot/frontier-program/ (Microsoft Adoption, "Microsoft Frontier Program", what Frontier is)

## Premise check
**Holds.** [CB]: "Until now, AI interactions have mostly been single player. Workspaces makes it a truly multiplayer experience, where people and agents drive towards a common goal, with shared context."
and "Workspaces is now available in Frontier." Announced 7 days before this episode (Nov 17, 2026), so "just launched" is allowed (brand rule: about a month or less).

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | Before: mostly single player | "Until now, AI interactions have mostly been single player." | [CB] |
| 2 | What it is: multiplayer, one goal, shared context | "Workspaces makes it a truly multiplayer experience, where people and agents drive towards a common goal, with shared context." | [CB] |
| 3 | It grew from Copilot Notebooks | "As the evolution of Copilot Notebooks, it's where people and agents build on each other's work." | [CB] |
| 4 | An agent drafts, you review | "An agent drafts a section of a document, and you review." | [CB] |
| 5 | Comment, an agent picks it up | "You leave a comment, and an agent picks it up." | [CB] |
| 6 | Autopilot checks before final | "Your Autopilot takes a task and checks with you before anything is final." | [CB] |
| 7 | Where: the Copilot app | "It's right in the Copilot app, where your files, conversations, people, and agents are all easily accessible." | [CB] |
| 8 | Continues in Teams | "And the collaboration continues in Microsoft Teams." | [CB] |
| 9 | Availability: Frontier only | "Workspaces is now available in Frontier." | [CB] |
| 10 | Frontier = early access, before general availability | "The Frontier program gives you early access to preview AI features before they're generally available." | [FP] |
| 11 | Frontier needs a licence and the organisation's opt-in | "If your organization has opted into the Frontier program, you can begin exploring experimental AI features in Microsoft 365." and "Confirm you have a Microsoft 365 Copilot license" | [FP] |
| 12 | Nadella: single player to multiplayer, people and their agents and other people | "Up until now, we have mostly been in a single player world of people and their agent loops and swarms. But the time has come for a true multiplayer form factor, where people, their agents and other people are all driving towards a common goal, with shared context. This is Copilot Workspaces" | [SN] |
| 13 | Date and place | "This morning, at Microsoft Ignite 2026, we shared how our vision for Copilot is becoming real for customers." (dated Nov 17, 2026) | [CB] |
| 14 | Autopilot (a separate product) rolling out in Frontier | "Autopilot is starting to rollout to customers in Frontier today." | [CB] |

## Before (the predecessor, from the same sources)
Microsoft names the old way itself: "mostly single player" (rows 1, 12). The predecessor product is Copilot Notebooks (row 3).
The scene **"each teammate chats with Copilot alone, then copies its answer into the shared document by hand and explains the context to the others" is ours** (the topic's "before" and the episode's counted example), not a Microsoft sentence.
Microsoft says "mostly", so the video says "mostly" or tells it as our example, never "AI at work was always solo".

## The counted example (ours, invented)
**One 4-part team plan** (a document with 4 sections) and a team of 3.
Before: each part drafted in someone's own Copilot chat and pasted into the plan by hand: **4 copy-pastes**.
Now: in a Workspace, an agent drafts a part right in the plan, you review, you leave a comment and an agent picks it up (rows 4, 5): nothing to paste, **0 copy-pastes** (our inference from "an agent drafts a section of a document"; Microsoft gives no count).
Meter: **"YOUR COPY-PASTES"**, 4 before, 0 now (the same unit both sides, lesson L34).
Proof: Microsoft gives **no number** for Workspaces (no time saved, no user count). The proof is the maker's own words: "Until now, AI interactions have mostly been single player" -> "a truly multiplayer experience" (rows 1, 2), and Nadella's keynote saying the same (row 12). The video claims no number of its own beyond our example.

## Narrowing conditions (write them into every line, lesson L26)
- **Only in Frontier**, Microsoft's early access program (rows 9-11): an organisation with Microsoft 365 Copilot that opted in. Never "available to everyone" or "out now" without "in early access" / "in Frontier".
- **"Mostly" single player** (row 1): the before is "mostly", or "our example". Never "AI could never work in teams".
- **An agent drafts a section, you review** (row 4): the agent drafts; you review. Never "agents write the whole document" or "agents finish it for you".
- **You comment, an agent picks it up** (row 5): Microsoft does not say what the agent does with it beyond "picks it up". Say "picks it up", never "fixes it instantly".
- **Autopilot** checks with you before anything is final (row 6); Autopilot is a separate product rolling out in Frontier (row 14). The video doesn't need it; left out of the spoken words.
- **0 copy-pastes** is our example's count, said as "our example". Microsoft gives no number of copy-pastes or time saved.
- **"The evolution of Copilot Notebooks"** (row 3): say "grew out of Copilot Notebooks" or "the next step after Copilot Notebooks", not "replaces".
- **Where**: in the Copilot app; the collaboration continues in Microsoft Teams (rows 7, 8).

## Left out, and why
- Autopilot, Cowork, Today, Office in Copilot, Copilot Code: other Ignite products, not the one idea.
- The Lilly / Fortune 500 numbers: they are about Cowork, not Workspaces; using them would claim a number Workspaces doesn't have.
- Third-party coverage (aggregators, LinkedIn): not the maker; adds nothing the maker didn't say.

## Where the analogy stops
The story is a video game: before, single player (each person plays alone with their own AI, then hands the result over by hand); now, multiplayer (one shared map, everyone and the AI teammates on the same goal). Microsoft uses these exact words (rows 1, 2, 12).
A game's teammates act on their own in real time; Workspaces' agents draft and pick up comments, and you review: you stay the one who decides. And a game is for fun; this is early access for organisations that opted in.
