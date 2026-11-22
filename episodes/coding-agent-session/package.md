# Package: coding-agent-session v2

Step 2 of `docs/workflow.md`: the promise (title + thumbnail) is fixed before the script. Tools: `python3 .claude/skills/yt-package/title.py titles.txt` and `--title "..." --thumb "..."`, run 2026-11-21.
Patterns from the niche study `docs/studies/2026-11-21-yt-viral.md` (for coding agents it suggests A, B, C): **A** subject then one bounding frame, **B** is the old way still holding?, **E** the new thing against an earlier one, **F** the question people already ask about a name. Patterns only; no wording copied.

## The 10 titles (`title.py`, alone)
| # | Title | Pattern | Chars | Score | Issues |
|---|---|---|---|---|---|
| 1 | Coding Agent vs Chatbot: 1 Loop, 4 Steps | A + E | 40 | 100 | none |
| 2 | Coding Agents: 1 Loop, 4 Steps | A | 30 | 100 | none |
| 3 | Coding Agents Explained: 1 Loop, 4 Steps, No Pasting | A | 52 | 94 | mobile (cut after "4") |
| 4 | What a Coding Agent Does: 4 Steps in 1 Loop | A | 43 | 94 | mobile |
| 5 | Still Pasting Chatbot Code? Coding Agents in 4 Steps | B | 52 | 94 | mobile |
| 6 | From Chatbot to Coding Agent: 1 Loop, 4 Steps | E | 45 | 94 | mobile |
| 7 | Coding Agent vs Chatbot: the 4-Step Loop Explained | E | 50 | 94 | mobile |
| 8 | Coding Agents: Why Stop Pasting Code? (1 Loop, 4 Steps) | B + A | 55 | 94 | mobile |
| 9 | Coding Agents: Do You Still Paste a Chatbot's Code? | B | 51 | 80 | mobile; no number |
| 10 | What Is a Coding Agent? The 4-Step Loop vs a Chatbot | F | 52 | 80 | mobile; front-load ("What Is a" is filler to the tool) |

v1's title for comparison: "Your AI Chatbot Is a Mechanic on the Phone (4-Step Fix)", 55 chars, 84 as a pair with its thumbnail, but it never names the topic,
so it fails the workflow's pass rule (subject in the first 40 characters) and no search for "coding agent" can match it.

## Top 3
1. **Coding Agent vs Chatbot: 1 Loop, 4 Steps**: 100 alone; 80 with the thumbnail. Issues as a pair: `duplicate` on "coding" (the topic's name, allowed by the workflow) and `thumb-length` (the brand card, allowed). Fits within the 40-character mobile cut, and carries the before (chatbot), the topic and the frame.
2. **Coding Agents: 1 Loop, 4 Steps**: 100 alone; 80 with the thumbnail (duplicate on "coding", "agents": the topic's name; thumb-length). Shorter, but it drops the before: nothing says what it is new against.
3. **Coding Agent vs Chatbot: the 4-Step Loop Explained**: 94 alone; 66 with the thumbnail (adds `mobile`: the feed shows "Coding Agent vs Chatbot: the 4-Step..."). Has "explained" for search, but is 10 characters longer for one word.

## Chosen
**Coding Agent vs Chatbot: 1 Loop, 4 Steps** (40 characters; subject at character 0; numbers 1 and 4).
- The thumbnail sells the topic and the 60-second promise; the title adds what the thumbnail doesn't: the before (chatbot) and the bounded answer (1 loop, 4 steps).
- The hook confirms it word for word: "Coding agents, 60s: before, you paste your chatbot's code and never stop, but how does 1 agent loop 4 steps until you're done?" (`beats.md`).
- True: "1 loop" and "4 steps" are rows in `research.md` ("Numbers said in the video"); the 4 steps are the video's own drawing of the loop (read, edit, run, check), each word from the makers' docs.
- Pass rule (`docs/workflow.md` step 2): at most 60 characters, subject in the first 40, a number, and no thumbnail word repeated except the topic's name ("coding").

## Thumbnail text
**LEARN / CODING AGENTS / IN 60 SECONDS** (the brand card of `docs/brand.md`: small off-white "LEARN", huge amber "CODING AGENTS", red tilted sticker "IN 60 SECONDS"; the same words as the film's title card).
v1's thumbnail says "LEARN THE / CODING-AGENT SESSION / IN 60 SECONDS"; the renderer changes it (step 4), because nobody searches "coding-agent session", and the title card and the hook already say "coding agents".

Pair score (`title.py --title "Coding Agent vs Chatbot: 1 Loop, 4 Steps" --thumb "LEARN CODING AGENTS IN 60 SECONDS"`): **80/100**.
- `duplicate` on "coding": the topic's name, which the workflow allows in both (search needs it in the title, the brand card carries it).
- `thumb-length` (6 words): the brand card overrides the skill's 3-word rule (`docs/workflow.md`, "Where we deviate").
- No other issue. Every pair with the brand card and the topic in the title has these two, so 80 is the ceiling for a title that names the topic.

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words only in the first two description lines |
|---|---|---|
| what is a coding agent | coding, agent | what |
| coding agent vs chatbot | all (coding, agent, vs, chatbot) | none |
| how do AI coding agents work | coding, agent | how, AI, agents, work |

First two description lines for step 5 (they carry every word above):
> What is a coding agent, and how is it different from an AI chatbot? Learn how AI coding agents work in 60 seconds.
> A chatbot only gives you text to paste and run yourself; a coding agent (Claude Code, Codex CLI, Copilot agent mode) reads your files, edits the code, runs commands and checks the result, in a loop until the job is done.
