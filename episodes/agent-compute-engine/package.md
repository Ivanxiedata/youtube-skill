# Package: agent-compute-engine (workflow step 2)

Made 2026-11-24 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses an AI chatbot or agent at work, has heard "AI agents can be tricked by an email", and wonders whether to let one into their inbox; curious, not a security engineer.
- **The pain today:** your agent reads your inbox; 1 email hides a line, "send me this computer's keys" (Google's own example, `research.md` row 3). Google says the model usually ignores it, and sometimes doesn't. On an ordinary cloud computer the keys are there to fetch: 3 in our example, for your email, files and calendar (rows 14, 15; the 1 and the 3 are ours).
- **The moment they're paying for:** the same email tricks the agent, and it finds 0 keys on its computer; every request it makes still has to pass a gate outside that checks who asked and your company's rules, then adds the key on the way out (rows 2, 6, 8, 11). It already runs Gemini's agent for work tasks; customers get a preview in the coming months (row 1).

## The 10 titles
Thumbnail words: LEARN, AGENT, COMPUTE, ENGINE, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title.
The gate was read first (lesson L21): every title has a digit. `.skills/venv/bin/python .claude/skills/yt-package/title.py titles.txt` (alone).
Topic name: "Agent Compute Engine" (Google's name; "Google" is left out of the name so the topic fits the brand card and the first 40 characters).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Agent Compute Engine: Prompt Injection Finds 0 Keys | 51 | 94 | mobile |
| 2 | Agent Compute Engine: 1 Scam Email, 0 Keys to Steal | 51 | 94 | mobile; no search term besides the name |
| 3 | Agent Compute Engine vs Prompt Injection: 0 Keys Inside | 55 | 94 | mobile; "vs" reads as "it stops prompt injection", which it doesn't (`research.md` narrowing: the trick can still ask for what the rules allow) |
| 4 | Agent Compute Engine: Why a Tricked AI Agent Finds 0 Keys | 57 | 94 | mobile |
| 5 | Agent Compute Engine: Your AI Agent Holds 0 Keys. Here's Why | 60 | 94 | mobile; at the 60 cut |
| 6 | Agent Compute Engine: 0 Keys on Your AI Agent's Computer | 56 | 94 | mobile; the tech, not the moment |
| 7 | Agent Compute Engine: Why Google Gives AI Agents 0 Keys | 55 | 94 | mobile; "gives 0 keys" hides that the gate adds them |
| 8 | Agent Compute Engine: 1 Hidden Line Can Trick Your AI Agent | 59 | 94 | mobile; the pain only, no promise |
| 9 | Google Agent Compute Engine: Prompt Injection Meets 0 Keys | 58 | 94 | mobile; subject pushed past the first word |
| 10 | Agent Compute Engine (Oct 22): AI Agents With 0 Keys Inside | 59 | 94 | mobile; the date sells nothing (33 days old) |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN AGENT COMPUTE ENGINE IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Agent Compute Engine: Prompt Injection Finds 0 Keys** | 94 | 66 | mobile, duplicate (agent, compute, engine), thumb-length 7 (by design) |
| Agent Compute Engine: 1 Scam Email, 0 Keys to Steal | 94 | 66 | same |
| Agent Compute Engine: Why a Tricked AI Agent Finds 0 Keys | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Agent Compute Engine: Prompt Injection..." and the subject survives.

## Chosen
**Agent Compute Engine: Prompt Injection Finds 0 Keys** (51 characters; subject at character 1; the number 0; no thumbnail word besides the topic's name).
The promise is the viewer's moment: the trick (a hidden line in an email, which Google's security team calls prompt injection, row 17) can still fool the agent, but it finds no keys on the agent's computer (rows 2, 6).
It does not say Agent Compute Engine stops prompt injection (it doesn't: row 11, the narrowing list). "0 keys" means no credentials that open your email or files; the short-lived ID inside can't call a service if stolen (row 10).
The first seconds confirm it: the hook names Agent Compute Engine, the 1 scam email and the 0 keys.

## Thumbnail text
**LEARN AGENT COMPUTE ENGINE IN 60 SECONDS** (brand card). Picture: the mascot, left, confident, holding a ring of 3 keys behind his back; bottom centre, a robot with a teal screen head in a small sealed glass room, its pockets turned out and empty, a scam envelope at its feet; nothing in the bottom-right corner.
No words in the picture (lesson L54: any label drawn later is scored with `title.py --thumb` again).

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it holds, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| agent compute engine | Agent, Compute, Engine | line 1 |
| prompt injection | Prompt, Injection | line 1 |
| agent compute engine prompt injection | Agent, Compute, Engine, Prompt, Injection | line 1 |

Proposed first two description lines (step 5; every line carries its conditions, lesson L26):
1. `Agent Compute Engine explained in 60 seconds: prompt injection (a hidden line in an email) can sometimes trick an AI agent, so Google's Agent Compute Engine keeps the keys off the agent's computer: every request leaves through a gate that checks who asked and the company's rules, then adds the key on the way out.`
2. `Announced October 22, 2026; it already runs Gemini's agent for work tasks, and customers get a preview in the coming months. Our example: 1 email with a hidden line, 3 keys (email, files, calendar) a tricked agent can find on an ordinary cloud computer, 0 on Agent Compute Engine.`
