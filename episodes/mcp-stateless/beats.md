# Beats: mcp-stateless (v2, workflow step 3)

Written 2026-11-21 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Does MCP Still Need Sessions in 2026?"** + thumbnail **"LEARN STATELESS MCP IN 60 SECONDS"**. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times below are **film seconds**: `film/vo_lines.json` (exact line starts and ends) and
`film/align.json` (word times estimated inside each line, `--no-align`), both + 0.3 s because the voice is laid in at 0.3 s.
Voice: am_michael, speed 1.2, 166 words, `vo.wav` 58.35 s, speech 0.30-58.35 s.

## Hooks
Scored with `python3 .claude/skills/yt-script/hookscore.py` (11 written against `hooks.json`, iterated to 100). The owner's rules: the topic first,
before -> after stated, only true numbers (the date July 28, 2026 is the release day; "60 seconds" is the video's real length), one sentence, 100.

### 1 (chosen) 100 STRONG
"MCP before July 28, 2026: your server quit, you lost your order; now any server takes it, but how, and why, in 60 seconds?"
```
SPECIFICITY  100   July 28, 2026 and 60 seconds: three figures, all true
ADDRESS      100   your / you / your, the first inside the first six words
STAKES       100   before, quit, lost
CURIOSITY    100   before, but, how, why, and it ends on "?"
BREVITY      100   24 words
VERDICT      100   STRONG
formula      The Clock (1 pattern matched: "in 60 seconds"), built as Before and After (before -> now)
weakest      SPECIFICITY (all five at 100; the tool names the first)
```

### 2 (runner-up) 100 STRONG
"MCP before July 28, 2026: your server quit, you lost your order; after, any server takes it, but how, and why, in 60 seconds?"
```
SPECIFICITY 100 · ADDRESS 100 · STAKES 100 · CURIOSITY 100 · BREVITY 100 · VERDICT 100 STRONG
formula      The Clock (1 pattern matched); it also matches Before and After ("before ... after"), the tool reports the first formula on a tie
```
Why 1 over 2: "now" says the change is current (2026-07-28 is the current version); "after," is harder to say and to follow by ear.

### Why this formula fits this idea
The episode is a before -> after (one server held your order; now any server takes it), so the hook is that sentence, hinged on the real date.
The Clock ("in 60 seconds") is the brand's own promise, so it confirms the thumbnail in the same breath. "Server" is a true double meaning:
the waiter is your server, and so is the machine. The title asks "Does MCP still need sessions?"; the hook answers with the before -> after, and the
picture names the session ("YOUR SESSION" on the waiter's thought bubble, shots 2 and 11).

### All hooks scored
| Score | Formula (tool) | Hook |
|---|---|---|
| 100 | The Clock | MCP before July 28, 2026: your server quit, you lost your order; now any server takes it, but how, and why, in 60 seconds? |
| 100 | The Clock | MCP before July 28, 2026: your server quit, you lost your order; after, any server takes it, but how, and why, in 60 seconds? |
| 96 | The Clock | MCP before July 28, 2026: your server quit, you lost your order; now any server takes it, so what changed, and how, in 60 seconds? |
| 93 | The Clock | MCP before July 28, 2026: your server quit and you lost your order, but after it, any server takes it; how, and why, in 60 seconds? |
| 92 | The Clock | MCP before July 28, 2026: if your server quit, you lost your order; now any server takes it, but how, in 60 seconds? |
| 92 | The Clock | MCP before July 28, 2026: when your server quit, you lost your order; now any server takes it, but why, and how, in 60 seconds? |
| 92 | The Question | MCP before July 28, 2026: your server quit, you lost your order; after it, any server can take it, but how, and why? |
| 89 | The Question | MCP before July 28, 2026: why did you lose your whole order when your server quit, and how can any server take it now? |
| 87 | The Question | MCP, until July 28, 2026, pinned you to one server, and you lost your order if it quit; now any server takes it, but why? |
| 84 | The Question | MCP used to make you lose your order when your one server broke, but since July 28, 2026, any server can take it; how? |
| 80 | The Question | MCP before July 28, 2026 meant one server held your order, and if it quit, you lost it; after, any server can, but how? |
| 61 | Unclassified | v1 (baseline): MCP just stopped remembering you. You would lose your whole order if your waiter went home, and that is how MCP worked until July. |

## The parts, in one line each
- **Hook (0.0-9.4 s):** the sentence above; title card from frame 0, then the calendar, the waiter walking out, the slip any waiter takes, HOW? / WHY?.
- **Turn (9.9 s):** "Here's how, in one diner." Then it does it. No channel intro, no subscribe pitch before the end.
- **Body:** before (11.6-25.0 s, diner + studio), new (25.7-36.6 s, board + diner), why it matters to you (37.1-46.7 s).
- **Payoff (47.2-51.6 s):** the hook's two questions said again and answered: "How? The order moved onto the slip. Why? Any waiter can take it."
- **Close:** takeaway tied to the story ("That's stateless: a server that remembers nothing is a server anyone can replace."), then one ask ("Subscribe for the next one.").

## Cast and places (reused from v1 `film/film.js`)
- **The waiter = the mascot** in the episode's costume (paper diner cap with a red stripe, bow tie: `cap`, `bowTie`, `waiter()`); in the old way his order lives in a thought bubble.
- **The customer ("you")** = v1's guest at table 12 (`CUST`). **Other waiters** = v1 `STAFF` w1-w4.
- **Diner** (the story), **studio** (today: the mascot at a laptop with a chat window), **board** (BEFORE vs NEW). Same three places as v1, on one clock.
- On every frame: the corner tag "Stateless MCP · 60s", top-left. Brand colours: amber `#FFC66E` topic and accents, teal `#2DB2AE` for new parts, red `#E4493F` for the sticker and Subscribe.

## Shots
28 shots in 60 s (title card + 27), 2.1 s on average (lesson L1). Cut times are suggestions on word boundaries; the renderer may move a cut by a few frames.
"v1" names the v1 shot to reuse (its comment in `FILM.camOld`, numbered 0-30; v1 shot 0 is the old film's first diner shot, the title card is `drawTitle`).

| # | Film time (s) | Spoken | ON SCREEN | Purpose | From v1 |
|---|---|---|---|---|---|
| 0 | 0.00-2.17 | "MCP before July twenty-eighth," | Full-screen title card from frame 0, no fade-in: small off-white "LEARN", huge amber "STATELESS MCP", the tilted red "IN 60 SECONDS" sticker; corner tag on. Cut, not faded | hook: topic first (L14) | title card (`drawTitle`), now 2.17 s |
| 1 | 2.17-3.32 | "twenty twenty-six:" | Diner wall calendar close-up: page "JULY 28 · 2026"; an amber tab "BEFORE" sticks out of the pages under it | hook: the date, true | 3 (calendar) |
| 2 | 3.32-4.41 | "your server quit," | Diner: the mascot waiter, an amber-labelled thought bubble "YOUR SESSION" (burger, fries, "table 12") over his head, takes off his apron and walks out the door. Door sound | hook: before, confirms the title's "sessions" | 0 + 1 (holds the order, goes home) |
| 3 | 4.41-5.67 | "you lost your order;" | The customer at table 12, empty plate; the "YOUR SESSION" bubble pops as the door shuts; a "?" over the customer | hook: the stake | 2 (you, with nothing) |
| 4 | 5.67-7.18 | "now any server takes it," | Same diner, teal tab "NOW" top-left: the customer holds up a written order slip; of three waiters the nearest one (not the mascot) takes it, smiling; small label "any server" | hook: after | 17 (any waiter takes it) |
| 5 | 7.18-9.36 | "but how, and why, in sixty seconds?" | Studio: the mascot (costume on) faces the viewer; amber cards pop on the words: "HOW?" (7.42), "WHY?" (7.97); the red "IN 60 SECONDS" sticker stamps on at 8.45 | hook: open question, payoff promised | 4 (studio) camera, new cards |
| 6 | 9.36-11.26 | "Here's how, in one diner." | Wide diner: neon "DINER" sign, booths, counter, the customer at table 12, the mascot waiter with his pad; lower card "THE OLD WAY → THE NEW WAY" | turn (by 10 s) | 10 camera, no crowd |
| 7 | 11.26-13.41 | "Your AI app is the customer;" | Studio: the laptop with a chat window; label pops "AI APP = THE CUSTOMER" with a tiny table-12 icon | beat: who is who | 4 (the AI app) |
| 8 | 13.41-16.60 | "an MCP server is the waiter bringing its tools." | Studio: the mascot waiter carries a tray to the laptop; on the tray three tool icons (calendar, envelope, database cylinder); label "MCP SERVER = THE WAITER" | beat: what MCP is | 5 (its tools, through MCP) |
| 9 | 16.60-18.18 | "Old MCP: shake hands," | Diner close-up: the customer and the mascot shake hands; amber "BEFORE" tab top-left; card "1 HANDSHAKE" | beat: before, step 1 | 6 (the handshake) |
| 10 | 18.18-20.73 | "maybe get a table number, a session ID," | A table-number card "12" lands on the table; push in; label "TABLE 12 = SESSION ID" with a small grey "(optional)" under it | beat: before, step 2 | 7 + 8 merged |
| 11 | 20.73-23.10 | "and your order lives in his head." | The mascot's thought bubble fills: burger, fries, "table 12"; amber label on it "YOUR SESSION" | beat: where the state lives | 9 (the order in his head) |
| 12 | 23.10-25.00 | "Other waiters: not my table." | Two other waiters at the counter shrug; speech bubble "NOT MY TABLE" | beat: why scaling was hard | 11 (not my table) |
| 13 | 25.00-27.60 | "The new MCP drops both." | Board. Left half "BEFORE · MCP 2025-11-25": AI app → Server A (badge "holds your session"), Servers B and C grey; rows "1 handshake", "2 session ID". On "drops" (26.58) both rows get a red strike. Camera slides right to the header "NEW · MCP 2026-07-28 · the current version" | beat: BEFORE vs NEW, side by side | 12-15 compressed |
| 14 | 27.60-29.90 | "Every request is now a complete order slip," | Diner close-up: the order slip, teal "NEW" tag, three handwritten lines: "version 2026-07-28" / "what the app can handle" / "burger, fries" | beat: the self-describing request | 16 (the slip) |
| 15 | 29.90-31.70 | "so any waiter can take it." | Board right half: the Request slip with three arrows marked "any" to Servers A, B, C. Paper sounds as three slips fly to three waiters | beat: any server | 22 + the `FLY` slips |
| 16 | 31.70-33.20 | "Need a basket kept?" | Studio: the chat window shows a shopping basket with 2 items | beat: state that must survive | 18 (a shopping basket) |
| 17 | 33.20-34.95 | "The server hands back a ticket;" | Board: Server B → AI app: a ticket "#42", teal "NEW" tag "ticket = state handle" | beat: the handle | 19 (server hands back a ticket) |
| 18 | 34.95-36.90 | "your AI shows it next time." | Board: the next request carries "#42" to Server C, a different server, which opens the basket | beat: any server, still your basket | 20 (shows it to another server) |
| 19 | 36.90-40.20 | "For you, AI tools can stop hanging on one machine:" | Studio: the mascot at the laptop, card "FOR YOU"; a thin red string from the laptop to one server box snaps and falls; three teal arrows now run to three server boxes | why: the viewer's gain | 29 camera, new string |
| 20 | 40.20-41.60 | "busy day, add servers;" | Diner: a queue at the door; two more waiters walk in from the kitchen (w3, w4); label "BUSY DAY: + SERVERS" | why: scale | 21 (adds servers) |
| 21 | 41.60-42.55 | "one quits," | Diner: one waiter takes off his paper cap and walks out | why: a server fails | 23 (one goes home) |
| 22 | 42.55-44.45 | "the next takes your next order." | Diner: the next waiter picks up the customer's next slip. Bell | why: nothing waits on him | 24 (the next one takes it) |
| 23 | 44.45-46.90 | "And the ticket stays in your chat for tomorrow." | NEW shot, studio: night window, the laptop closes; cut inside the shot (or a second shot) to the next morning, sun in the window: the same chat on a phone, the message "ticket #42" still in it; small label "tomorrow · another device" | why: the handle lives in the chat | new |
| 24 | 46.90-49.60 | "How? The order moved onto the slip." | Diner: the hook's "HOW?" card returns top-left with a teal check; the burger-and-fries bubble leaves the mascot's head and shrinks onto the slip in his hand | payoff (how) | 26 + 27 (memory leaves his head, lands on the slip) |
| 25 | 49.60-51.80 | "Why? Any waiter can take it." | "WHY?" card with a teal check; the slip passes to any of three waiters | payoff (why) | 28 / 22 |
| 26 | 51.80-56.80 | "That's stateless: a server that remembers nothing is a server anyone can replace." | Wide diner, waiters swapping places, darkened behind the takeaway card: amber pill "STATELESS" at 52.3; line 1 off-white "A server that remembers nothing" at 52.9; line 2 amber "is a server anyone can replace." at 54.7 | close: takeaway tied to the story | 25 framing + v1 card |
| 27 | 56.80-60.00 | "Subscribe for the next one." | Studio: the mascot waves; the red Subscribe button pops at 56.95 and pulses; no "Next" line (no next episode decided). 0.45 s fade-out | close: one ask | 30 (subscribe) |

## On-screen words and their sources
"JULY 28 · 2026", "MCP 2026-07-28 · the current version", "MCP 2025-11-25", "session ID (optional)", "version 2026-07-28 / what the app can handle",
"ticket = state handle", "tomorrow · another device": rows in `research.md` (numbers table, Before, New). "table 12", "#42", the burger and the basket's 2 items are invented examples inside the analogy (said so in the description).
