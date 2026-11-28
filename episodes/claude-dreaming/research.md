# Research: claude-dreaming (workflow step 1)

Made 2026-11-28 from the maker's own pages, fetched with `curl -sL` (browser user agent) and stripped of HTML; every quote below was found in the stripped text with Python `str.find` (lessons L20, L29, L40).
Each page was checked to be the page itself: [P] holds its headline "The components of agent memory", "Published Nov 6, 2026" and the byline "Written by Lance Martin"; [D] holds "Dreams" and "Let Claude review past sessions to curate an agent's memory and surface new insights."; [M] holds "Memory stores" and "Give your agents persistent memory that survives across sessions using memory stores."; [C] holds "CLAUDE.md vs auto memory".
The story's facts come from two university study guides: [S1] Florida Tech's "Note Taking Strategies" and [S2] Duke's "What Do I Do After Class?" (both checked: the quoted sentences were found in their stripped text). [P]'s figures are images and were not read; only its text is quoted.

Sources:
- **[P]** Anthropic, "The components of agent memory", Lance Martin, Nov 6, 2026: https://anthropic.com/research/components-of-agent-memory
- **[D]** Claude Platform Docs, "Dreams" (Managed Agents): https://platform.claude.com/docs/en/managed-agents/dreams
- **[M]** Claude Platform Docs, "Memory stores" (Managed Agents): https://platform.claude.com/docs/en/managed-agents/memory
- **[C]** Claude Code Docs, "How Claude remembers your project" (memory): https://code.claude.com/docs/en/memory
- **[O]** Claude Platform Docs, "Overview" (Managed Agents; linked from the Dreams page's nav): https://platform.claude.com/docs/en/managed-agents/overview
- **[S1]** Florida Institute of Technology, Student Success Support Center, "Note Taking Strategies": https://www.fit.edu/student-success-support-center/resources/note-taking-strategies/
- **[S2]** Duke University, Learning STEM at Duke, "What Do I Do After Class?": https://sites.duke.edu/learningstematduke/what-do-i-do-after-class/

The premise holds in the maker's own words: agents write memory as they work, one local write at a time, and a store piles up "duplicates, contradictions, and stale entries" (row 3); a dream rereads the store beside past session transcripts and writes a new store, with "duplicates merged, stale or contradicted entries replaced with the latest value, and new insights surfaced" (row 4); "The input store is never modified" (row 5); it is a research preview in Managed Agents (row 2).
Age: [P] is 22 days old today (2026-11-28). The docs show no launch date, so the script never says "just dropped".

## Facts
| # | Fact | Quoted sentence | Source |
|---|---|---|---|
| 1 | What a dream is | "Let Claude review past sessions to curate an agent’s memory and surface new insights." | [D] |
| 2 | **Status: research preview, in Managed Agents** | "Managed Agents Status Research preview" (page header: "Dreams Feature of Managed Agents") / "Dreams are in research preview Request access" | [D] |
| 3 | **Before: notes pile up** | "Agents write to their memory stores as they work, but these writes are local and incremental: over many sessions a memory store accumulates duplicates, contradictions, and stale entries." | [D] |
| 4 | **What a dream does (the full list)** | "A dream reads an existing memory store alongside past session transcripts, then produces a new, reorganized memory store: duplicates merged, stale or contradicted entries replaced with the latest value, and new insights surfaced." | [D] |
| 5 | **The old store stays** | "The input store is never modified, so you can review the output and discard it if you don’t like the result." | [D] |
| 6 | How many sessions | "1 to 100 sessions: past transcripts Claude mines for patterns and insights to fold into the output." | [D] |
| 7 | How long, what it costs | "Dreams run asynchronously and typically take minutes to a few hours, driven by the number of input transcripts." / "Dreams are billed at standard API token rates for the model you select" | [D] |
| 8 | Use or discard the new store | "attach it to future sessions as a memory_store resource in place of (or alongside) the input memory store" | [D] |
| 9 | Sessions start fresh; memory carries over | "Each Managed Agents session starts with a fresh context by default. When a session ends, any state the agent built up is gone. Memory stores let the agent carry information across sessions" | [M] |
| 10 | **Memory is what Claude saved itself** | "By “agent memory,” we mean knowledge that Claude gains from experience—including interactions with users and tasks it’s been assigned—and that it retains between sessions, saved as context it can read later." | [P] |
| 11 | **Why a note can be wrong** | "Since Claude writes to memory based on what it judges to be salient in-session, a note that’s wrong from the start or that drifts as the environment changes can be read, and trusted, by Claude in a later session." | [P] |
| 12 | The transcript is the check | "Dreaming gives Claude a way to test its notes against the original transcripts" / "The transcript gave Claude a ground truth to validate its memory against." | [P] |
| 13 | Pokémon: the wrong note | "At one point, Claude wrote down (incorrectly) that the PokéCenter was on the east side." | [P] |
| 14 | Pokémon: the ledge | "Near the entrance is a trap: a one-way ledge that drops the player onto the route they came from, with no clear way to climb back up." | [P] |
| 15 | **Pokémon: without the fix, three times** | "In the run with the uncorrected note, Claude dropped back onto that earlier route three times." / "The run ended without Claude ever reaching Cerulean City." | [P] |
| 16 | Pokémon: the dream fixed the note | "We ran dreaming on the memory folder that contained the wrong location for the PokéCenter: Claude checked the note against the session transcript, caught its error, and rewrote it." | [P] |
| 17 | **Pokémon: with the fix, the next city** | "With the corrected memory note, Claude went straight back into Mt. Moon and eventually reached Cerulean City." / "Dreaming corrects the memory, and Claude goes back into the cave and reaches the next city." | [P] |
| 18 | It is a test Anthropic ran | "We also evaluated Claude’s ability to play Pokémon Red , a game that challenges Claude to navigate complex long-horizon tasks" / "We saw a positive example of this when Claude played Pokémon using Managed Agents with a mounted directory for its memories." | [P] |
| 19 | Between sessions (the idea's origin) | "Researchers at Letta and UC Berkeley proposed sleep-time compute as a way for models to use idle time between interactions to reorganize their existing context." | [P] |
| 20 | The name | "As we sleep, and during quiet rest , the hippocampus replays our recent experiences." / "This process is often called dreaming" | [P] |
| 21 | Not free, not total | "Dreaming is one way to fix these mistakes (Figure 8), but it requires compute." | [P] |
| 22 | Claude Code's own memory loads a small index | "Sessions with auto memory on , up to the first 200 lines or 25KB of MEMORY.md" | [C] |
| 23 | **What Claude Managed Agents is (its kind word: a service that runs agents)** | "Claude Managed Agents provides the harness and infrastructure for running Claude as an autonomous agent." / "Pre-built, configurable agent harness that runs in managed infrastructure." | [O] |
| S1 | **Story:** class notes are a first draft | "you may need to treat lecture notes as a 'first draft' that you can rewrite later as part of your review strategy." | [S1] |
| S2 | **Story:** after class, go back to the recording | "Go through your notes after class while the material is still fresh." / "If you recorded lectures or have video lectures, go to those parts of the lecture you made a note to review." | [S2] |
| S3 | **Story:** fill the gaps | "Have you taken time to fill in gaps with the structure and detail you need?" | [S2] |

## The story everyone knows: rewriting class notes from the lecture recording (rows S1-S3)
- **Mechanism match.** In class you write notes fast, in the moment, and they are a first draft (S1); afterwards you go back to the recording and fix and fill them in (S2, S3).
  An agent writes its memory notes in the moment, from what it judges important in that session (rows 3, 10, 11); a dream goes back to the full record, the past session transcripts, and writes a new, cleaned-up store (rows 4, 12).
- **Before, through the story:** you study from the first draft as it is; one wrong line (our example) and you repeat that mistake. The agent's next session reads its notes as they are and can trust a wrong one (row 11): in Anthropic's Pokémon test, the wrong note dropped Claude back onto the earlier route three times (row 15).
- **Now, through the story:** you rewrite the notes from the recording; the dream rereads the transcripts beside the notes and writes a new store (row 4); in the test, the dream caught the wrong note and rewrote it (row 16), and Claude went back into the cave and reached the next city (row 17).
- **Where the analogy stops:** (1) a student fixes the notebook; a dream writes a **new** store and never modifies the old one, which you review and use or discard (rows 5, 8); (2) a student re-listens only to the parts they marked (S2); a dream reads 1 to 100 whole session transcripts (row 6) and costs tokens and minutes to hours (row 7); (3) the study guides don't say rewriting catches every mistake, and Anthropic doesn't say dreaming does: it "can" correct memory, and the ledge is one example (rows 16, 21); (4) the name comes from human sleep (row 20), but a dream is a job you start on chosen sessions, not something the agent does on its own each night; (5) the wrong line in the notes and the repeated test mistake are our example, not from the study guides.

## The counted example
The ledge in Anthropic's Pokémon test (rows 13-17): one wrong note (the PokéCenter on the wrong side) -> **three** drops back onto the earlier route, never reaching the next city (row 15); after the dream rewrote the note -> straight back into the cave and on to the next city, Cerulean City (row 17).
The meter on screen, titled "DROPS OFF THE LEDGE", ticks 1, 2, 3 in BEFORE; in NOW it holds still while Claude goes back into the cave and a "REACHED THE NEXT CITY" stamp lands. No source says how many drops the fixed run had before the dream, so no "0" is drawn.

## Narrowing list (every line that states the feature carries its condition)
1. Dreaming is a **research preview** in **Claude Managed Agents** (Anthropic's service that runs Claude as an agent, row 23; access on request, row 2) (row 2). Never "in Claude", "for everyone" or "in Claude Code".
2. A dream writes a **new** memory store; the old one is **never modified**; you review the new one and use it or discard it (rows 5, 8).
3. The docs' list, word for word when listed: "duplicates merged, stale or contradicted entries replaced with the latest value, and new insights surfaced" (row 4). "Fixes wrong notes" is the post's "correct mistakes in memory" shown by the ledge (rows 12, 16), said as "can", never "always" or "every mistake".
4. The ledge is **one** test **Anthropic** ran on Pokémon (rows 15-18): without the fix, three drops and never the next city; with the dream's fix, back into the cave and on to the next city. Say "Anthropic's Pokémon test".
5. Memory notes are written by the agent itself, from what it judges important **in that session** (rows 10, 11); a note can be wrong from the start or go out of date (row 11).
6. A dream reads **past session transcripts** (the full record) **beside** the memory store (row 4): 1 to 100 sessions (row 6).
7. Dreams take minutes to hours and are billed at token rates (row 7); dreaming "requires compute" (row 21).
8. Story: the study guides say notes are a first draft you can rewrite, and to go back to the recording after class (S1, S2); the wrong line and the repeated mistake are **our example**.

## Left out, and why
- CL-Bench, the wiki results (13% -> 48%, 87% vs 73%), the Pokémon file counts (413 files vs nine): other lessons (what to save, wikis); each would need its own setup.
- `instructions` steering, the API calls, beta headers, models list, errors, limits: how to try it; the description links the docs.
- Claude Code's auto memory and its 200-line index (row 22): a different product; mixing it in would blur "research preview in Managed Agents".
- The sleep science (row 20): the name's origin only; "this is thought to" in [P], not our story.
- The old store staying unchanged (row 5): cut from the spoken words for the 125-word budget (L94: no new feature after the payoff); in the description.
