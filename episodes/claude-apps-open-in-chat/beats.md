# Beats: claude-apps-open-in-chat (workflow step 3)

Written 2026-11-23 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Apps: Watch Claude Edit 10 Notion Tasks Live"** + thumbnail **"LEARN CLAUDE APPS IN 60 SECONDS"**. The hook sells the viewer's moment (your own Notion page beside the chat, changing as Claude edits it);
the tech (MCP Apps: the tool brings its own screen into Claude) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of the final words
(am_michael, speed 1.2, `--no-align`, laid in at 0.5 s: 56.69 s of voice after the claim-check fixes, ends at 56.89 s film); inside a line the cut is estimated, and the renderer re-times every cut to the real `vo_lines.json`.

The flow the owner chose (lesson L25): **one counted example, ten tasks in one Notion project page**, from the first beat to the last; a **meter "TAB SWITCHES"**
that fills to 10 in BEFORE and stays at 0 in NOW on the same ten tasks; **the how on one diagram that grows** (Claude's window, then the MCP App block, then the tool's own screen inside it) with a highlight on what the voice names;
the proof is the maker's own words (no maker number exists: `research.md`, narrowing), then the bigger-scale example: the tools that open this way.

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 15 in three rounds, scored with `hookscore.py`. Every one opens with the topic's name (L14). Picked by the 3-second test (L16), then the score. Digits in the scored text (the tool counts "10", not "ten"); the voice says "ten".

### 1 (chosen, after the claim check) 74 STRONG
"Claude apps: you think 10 Notion edits cost you 10 trips to another tab, but actually, in supported apps, you never leave the chat." Then a second sentence: "You watch Claude make them."
```
BREVITY      100
VERDICT      74   STRONG
```
Rewritten after the claim check (`claims.md` row 3: the first version "... but actually you never leave the chat; you watch Claude make them." (73) dropped "where the app supports it").
"in supported apps" inside the one sentence scored 71 (too long), so "You watch Claude make them." became its own sentence; the first sentence scores 74 (re-run after the fix, L26).

### 1 (first version) 73 STRONG
"Claude apps: you think 10 Notion edits cost you 10 trips to another tab, but actually you never leave the chat; you watch Claude make them." (narrower, `claims.md` row 3)
```
formula      The Impossible Claim (1 pattern matched)
VERDICT      73   STRONG
```
3-second test: the topic first, then the belief it corrects (ten edits = ten trips to another tab) and the outcome (you stay in the chat and watch the edits happen). No architecture word. Not a "but how?" ending (L31).
Panel: the title card, then the Notion page with ten task rows and a tab bar flickering between "CLAUDE" and "NOTION", the meter "TAB SWITCHES" jumping; then the split screen, chat left, Notion right, rows ticking teal.
True as worded: "without switching tabs" and "Changes appear in the tool as Claude makes them" (`research.md` rows 2, 5); the ten is our example; "in supported apps" is now in the hook itself.

### 2 (runner-up) 73 STRONG
"Claude apps: stop switching tabs; your own Notion opens beside the chat, and you watch Claude edit 10 tasks, but what changed?"
Why 1 over 2: 2 ends on a "..., but what changed?" question, the template L31 bans in spirit; 1 corrects a belief.
Panel: the same title card, then the split screen straight away.

### All hooks scored
| Score | Formula (tool) | Hook | Note |
|---|---|---|---|
| 74 | (re-scored) | **Claude apps: you think 10 Notion edits cost you 10 trips to another tab, but actually, in supported apps, you never leave the chat.** | chosen, after the claim check |
| 72 | (re-scored) | ... "cost 10 trips ... in supported apps ...; you watch Claude work." | |
| 71 | (re-scored) | ... "but actually, in supported apps, you never leave the chat; you watch Claude make them." | below 72 |
| 63 | (re-scored) | ... "but in supported apps you never leave the chat; you watch Claude make them." | |
| 73 | The Impossible Claim | Claude apps: you think 10 Notion edits cost you 10 trips to another tab, but actually you never leave the chat; you watch Claude make them. | first choice; narrower (`claims.md` row 3) |
| 73 | The Mistake | Claude apps: stop switching tabs; your own Notion opens beside the chat, and you watch Claude edit 10 tasks, but what changed? | template ending |
| 69 | The Mistake | Claude apps: you never leave the chat, but you watch Claude actually edit 10 tasks in your own Notion, live. | |
| 67 | The Impossible Claim | Claude apps: you think 10 Notion edits cost you 10 tab switches, but now you never leave the chat; you watch Claude make them. | |
| 63 | The Mistake | Claude apps: stop wasting time switching tabs; your own Notion now opens beside the chat, and you watch Claude edit 10 tasks before your eyes. | answers itself |
| 63 | Unclassified | Claude apps: you think 10 Notion edits cost you 10 trips to another tab, but now you watch Claude make them right beside your chat. | |
| 60 | Unclassified | Claude apps: you think AI only tells you what to change, but now you watch Claude actually edit 10 tasks in your own Notion. | |
| 60 | Unclassified | Claude apps: you think editing 10 Notion tasks costs you 10 trips to another tab, but actually your Notion opens right beside the chat. | |
| 54 | Unclassified | Claude apps: you think Claude only shows a small preview, but now your whole Notion opens beside the chat, and you watch it edit 10 tasks. | |
| 48 | Unclassified | Claude apps: you think AI can only tell you what to change, but now you actually watch Claude edit ten tasks in your own Notion page, live. | "ten" in words |
| 46 | The Mistake | Claude apps mean you stop switching tabs: your own Notion page opens right beside the chat, and you watch Claude change ten tasks in it, live. | |
| 45 | Unclassified | Claude apps: you think ten Notion edits mean ten trips to another tab, but now Notion opens beside your chat and you watch Claude make them. | |
| 44 | The Mistake | Claude apps: stop copying answers between tabs; your own Notion opens beside the chat, and Claude edits ten tasks while you watch. | "copying answers" unsourced |
| 43 | Unclassified | Claude apps: your real Notion page now opens inside the chat, signed in as you, and you actually watch Claude edit ten tasks while you keep working. | |
| 42 | Unclassified | Claude apps: you think Claude only shows you a small preview of Notion, but now your full Notion page opens beside the chat and you watch it update ten tasks. | |

## The parts, in one line each
- **Hook (0.0-8.4 s):** the sentence above; title card from frame 0; ten task rows; the tab bar flipping; the meter jumping; then the split screen.
- **Turn (8.9 s):** "Here's what changed." Then it does it, on the ten tasks.
- **Before, the pain as a scene (10.2-19.4 s):** the small window (the live preview) in the chat; the mascot walking to the "NOTION" tab for each task; the meter fills to 10.
- **Now, the same scene (19.9-30.8 s):** the same ten tasks; the whole Notion page slides open beside the chat, "SIGNED IN AS YOU"; one ask; the rows change one by one as Claude edits them; an "APPROVE" button the mascot taps; the meter stays at 0.
- **How (31.3-37.4 s):** one diagram that grows: Claude's window, then a block "MCP APPS · OPEN EXTENSION TO MCP", then the tool's own screen sliding inside Claude's window.
- **Why / scale (38.6-45.2 s):** tool name tiles Asana, Canva, Notion, "+ MORE", "TO START · WHERE SUPPORTED"; "WEB + DESKTOP · ALL PLANS · NEW CLAUDE · ROLLING OUT".
- **Close (45.4-56 s):** "WHAT WE LEARNED" card on the before/after split (meter 10 vs 0), then the takeaway card, then Subscribe + comment.

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) wearing a small amber **headset** (the office worker's costume), at a laptop desk.
- **The AI = Claude drawn as a robot with a teal (`#2DB2AE`) screen head**, label "CLAUDE" under it (plain text, no logo; visibly AI, brand casting).
- **Props:** a browser-like window with two tabs "CLAUDE" and "NOTION" (plain words, no logos); the Notion page as a white card titled "PROJECT PLAN" with ten task rows "TASK 1" ... "TASK 10" (grey bars, a checkbox each); the small window = a tiny card inside the chat strip, label "LIVE PREVIEW"; the split screen: chat strip left (bubbles), the page right.
- **The meter "TAB SWITCHES"**, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0, 5, 10 and a big whole-number counter on top; amber fill in BEFORE, teal in NOW.
- **Places:** D the desk + window; X the how diagram; T the tool tiles; K the cards; the takeaway and Subscribe frames.
- Every frame: corner tag "Claude Apps · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red for the sticker and Subscribe.

## Shots
26 shots in about 58.5 s, 2.2 s on average (L1). Cuts on word boundaries; times are draft film seconds from the draft voice of the final words after the claim check
(56.69 s of voice laid in at 0.5 s, ends at 56.89 s film).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-1.6 | "Claude apps:" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "CLAUDE APPS", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.6-3.4 | "you think ten Notion edits" | The "PROJECT PLAN" page card with ten task rows "TASK 1" ... "TASK 10"; a slow push | hook: the counted example |
| 2 | 3.4-5.3 | "cost you ten trips to another tab," | The window's tab bar flips "CLAUDE" -> "NOTION" -> "CLAUDE" (each flip a 0.5 s cross-fade); the meter "TAB SWITCHES" eases in and counts up, amber | hook: the belief |
| 3 | 5.3-8.3 | "but actually, in supported apps, you never leave the chat." | The split screen eases in: chat strip left, the page right, one window; small tag "IN SUPPORTED APPS" | hook: the outcome |
| 4 | 8.3-10.1 | "You watch Claude make them." | The rows tick teal one after another (each a 0.5 s cross-fade) | hook: the moment |
| 5 | 10.1-11.6 | "Here's what changed." | Wide desk: the mascot at the laptop, the Claude robot beside; lower card "10 TASKS · 1 NOTION PAGE" | turn |
| 6 | 11.6-13.0 | "Before, Claude showed" | Amber tab "BEFORE"; the window shows the chat strip only | before: your scene |
| 7 | 13.0-14.8 | "a small window: a live preview." | A tiny card inside the chat, label "LIVE PREVIEW"; a push in on it, it is small | before: the story (small window) |
| 8 | 14.8-17.9 | "For the full editor, you opened Notion in another tab." | The mascot clicks the "NOTION" tab; the window cross-fades to the full page; label "FULL EDITOR: ANOTHER TAB" | before: the pain |
| 9 | 17.9-19.2 | "Ten tasks: back and forth," | The tab bar flips back and forth; the meter climbs 1, 2, 3 ... (amber) | before: it adds up |
| 10 | 19.2-20.6 | "ten times." | The meter lands on "10"; label "10 TAB SWITCHES" | before: the pain, counted |
| 11 | 20.6-23.0 | "Now, where supported, the whole Notion opens beside the chat," | Teal tab "NOW"; the same window; the page slides open beside the chat strip (0.8 s ease); the meter at 0, teal | now: same scene |
| 12 | 23.0-25.3 | "signed in as you." | A small teal badge on the page "SIGNED IN AS YOU" eases in | now: your account |
| 13 | 25.3-26.6 | "You ask once;" | The mascot types; one chat bubble "UPDATE ALL 10 TASKS"; a "1 ASK" tag | now: one ask |
| 14 | 26.6-28.2 | "Claude edits all ten tasks," | The robot's screen glows; a teal cursor moves down the rows; rows 1-5 change (cross-fade to teal ticks) | now: Claude works in the tool |
| 15 | 28.2-30.1 | "and you see each change as it happens." | Rows 6-10 change; label "CHANGES APPEAR AS CLAUDE MAKES THEM"; the meter still at 0 | now: you watch |
| 16 | 30.1-31.9 | "You approve its actions." | A teal "APPROVE" button eases in; the mascot taps it; label "YOU APPROVE" | now: you stay in charge |
| 17 | 31.9-32.6 | "How?" | Diagram starts, title "HOW IT WORKS": a large window frame "CLAUDE" | how: piece 1 |
| 18 | 32.6-35.3 | "It's built on M C P Apps, an open extension:" | A block "MCP APPS" grows in under the frame, highlighted amber; tag "OPEN EXTENSION TO MCP" | how: piece 2 |
| 19 | 35.3-38.6 | "the tool brings its own screen into Claude." | The tool's own screen (the page card, "NOTION") slides from the right into the Claude frame through the MCP Apps block; highlight moves to it, teal | how: piece 3, highlight moves |
| 20 | 38.6-41.3 | "Asana, Canva, Notion and more, to start;" | Name tiles ease in one by one: "ASANA", "CANVA", "NOTION", "+ MORE" (plain words); card above "TO START · WHERE SUPPORTED" | why: scale |
| 21 | 41.3-45.2 | "rolling out on web and desktop, all plans, in the new Claude." | Tag under the tiles "WEB + DESKTOP · ALL PLANS · NEW CLAUDE · ROLLING OUT"; a slow push | why: who gets it |
| 22 | 45.2-49.3 | "So, what we learned: ten tasks used to mean ten trips to another tab;" | Top card "WHAT WE LEARNED"; side by side: left "BEFORE" the meter at 10 (amber), right "NOW" the meter at 0 (teal); label "SAME 10 TASKS" | close: the conclusion |
| 23 | 49.3-53.3 | "now, in supported apps, Claude edits them beside your chat." | The split screen with all ten rows teal; takeaway card: line 1 off-white "10 TASKS, ONE SCREEN,", line 2 amber "EDITED BESIDE YOUR CHAT", small line "IN SUPPORTED APPS" | close: the takeaway, the promise delivered out loud |
| 24 | 53.3-58.5 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"CLAUDE APPS": [NOV] product label "Claude apps, MCP". "PROJECT PLAN", "TASK 1 ... TASK 10", "10 TASKS · 1 NOTION PAGE", "SAME 10 TASKS": our counted example inside [NOV] "make changes to a page, row, or file that you have open" and Notion "doc or database" (`research.md` rows 5, 10).
"TAB SWITCHES", "10 TAB SWITCHES", the meter at 10 and 0: our example of [NOV] "without switching tabs" (row 2); not a maker's number (said in the description).
"LIVE PREVIEW": row 3 "a small live view of tools" and row 6 "rather than a limited preview". "FULL EDITOR: ANOTHER TAB": row 6 (full editor) + row 2 (switching tabs).
"SIGNED IN AS YOU": row 6 "signed into your own account". "UPDATE ALL 10 TASKS", "1 ASK": the example. "CHANGES APPEAR AS CLAUDE MAKES THEM", "APPROVE", "YOU APPROVE": row 5.
"HOW IT WORKS", "MCP APPS", "OPEN EXTENSION TO MCP": row 11 ("the open extension to the Model Context Protocol"; `claims.md` row 10). "IN SUPPORTED APPS", "TO START · WHERE SUPPORTED": rows 4, 9. "ASANA", "CANVA", "NOTION", "+ MORE": rows 9, 10. "WEB + DESKTOP · ALL PLANS · NEW CLAUDE · ROLLING OUT": row 8.
The desk, headset, robot, tab bar and the page's look are invented pictures inside the example; no app logos or real interface.
