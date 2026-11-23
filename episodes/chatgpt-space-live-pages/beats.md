# Beats: chatgpt-space-live-pages (workflow step 3)

Written 2026-11-23 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"ChatGPT Space: Stop Copying 12 Slack Decisions by Hand"** + thumbnail **"LEARN CHATGPT SPACE IN 60 SECONDS"**. The hook sells the viewer's moment (the plan keeps up with Slack without anyone copying);
the tech (a shared page set to update from connected apps) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of the final words
(am_michael, speed 1.2, `--no-align`, 165 words as spoken, 56.29 s of voice, laid in at 0.3 s, so it ends at about 56.6 s); the renderer re-times every cut to the real `vo_lines.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, 12 decisions in the team's Slack this week, one team plan**, from the first beat to the last;
a **meter "COPIED BY HAND"** (0 to 12) that fills to 12 in BEFORE and stays at 0 in NOW on the same 12 decisions; **the how on one diagram that grows**
(connected apps -> "SET TO UPDATE" -> one shared page -> the team) with a highlight on what the voice names; the proof is **the maker's own words** (OpenAI's own example: "a project plan that stays current with decisions from Slack"), since OpenAI gives no number.

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 16 in three rounds, scored with `hookscore.py`. Every one opens with the topic's name (lesson L14). Picked by the 3-second test (lesson L16), then the score.
The tool's formula field says "Unclassified" for the top two: they correct a belief (lesson L31: "you think X, but ..."), the owner's preferred tension, not a template.

### 1 (chosen) 72 STRONG
"ChatGPT Space: you think a team plan costs you nothing, but 12 Slack decisions actually cost you 12 copies by hand, until you set it to update itself."
```
SPECIFICITY   85
ADDRESS      100
STAKES        62   cost, cost
CURIOSITY     75   but, actually, until
BREVITY       72   27 words
VERDICT       72   STRONG
```
3-second test: someone who knows no AI tech hears "ChatGPT Space = you can set your team's plan to update itself from Slack, instead of copying every decision in by hand". The topic is the first two words; no architecture word.
True: the plan updates itself only once it is set to (`research.md` row 3, narrowing "can be set to"), from a connected Slack (row 4); 12 is our counted example. Ends on the outcome, not "but how?" (L31).

### 2 (runner-up) 75 STRONG
"ChatGPT Space: you think a team plan costs you nothing, but 12 Slack decisions actually cost you 12 copies by hand, until it updates itself."
```
SPECIFICITY 85 · ADDRESS 100 · STAKES 62 · CURIOSITY 75 · BREVITY 93 · VERDICT 75 STRONG
```
Why 1 over 2 despite three points less: "until it updates itself" drops the condition that you set the page to update (`research.md` narrowing, lesson L26). The score is a check at 72, not a target (L16).

### All hooks scored
| Score | Hook | Note |
|---|---|---|
| 75 | ... until it updates itself. | runner-up; drops "set" |
| 72 | **... until you set it to update itself.** | chosen |
| 72 | ChatGPT Space: you think keeping a team plan current costs you nothing, but 12 Slack decisions actually cost you 12 copies by hand. | never says what Space does: fails the 3-second test |
| 71 | ... until you set the plan to update itself. | below 72 |
| 71 | ChatGPT Space: 12 Slack decisions shouldn't cost you 12 copies by hand, but until now, your team's plan only changed when you did. | |
| 62 | ChatGPT Space: you think a team plan stays current for free, but 12 Slack decisions cost you 12 copies by hand, unless it updates itself. | |
| 62 | ChatGPT Space: your team's plan can now be set to update itself from Slack, so 12 decisions stop costing you 12 copies by hand. Here's why. | |
| 61 | ChatGPT Space: you think 12 Slack decisions cost you 12 copies into the team plan by hand, but now you can set the plan to update itself. | |
| 59 | ChatGPT Space: you think your team's plan is up to date, but 12 Slack decisions later, it actually costs you 12 copies by hand. Not anymore. | |
| 54 | ChatGPT Space: stop wasting time copying 12 Slack decisions into your plan by hand; now you can set your plan to update itself. | answers itself |
| 54 | ChatGPT Space: your plan can now update itself from Slack, so 12 decisions stop costing you 12 copies by hand. | answers itself |
| 51 | ChatGPT Space: stop wasting your Friday copying twelve Slack decisions into the team plan; now you can set the plan to update itself. | no digits |
| 47 | ChatGPT Space: your team's project plan can now be set to update itself from Slack, so you stop copying twelve decisions in by hand. | |
| 47 | ChatGPT Space means you stop copying twelve Slack decisions into your team's plan by hand: set the plan to update itself. | |
| 46 / 45 | two "you think ..." versions with no stakes word | |
| 41 / 39 | "just came to Plus ..." / "stop copying 12 ..., because now ..." | |

## The parts, in one line each
- **Hook (0.0-10.2 s):** the sentence above; title card from frame 0; the team plan; the Slack window filling with 12 decisions; the meter "COPIED BY HAND" climbing to 12; a switch "SET TO UPDATE" turning teal.
- **Turn (10.4 s):** "Here's why." Then it does it, on the same 12 decisions.
- **Before, the pain as a scene (11.4-20.1 s):** ChatGPT's reply and a Library file; each decision carried by hand from Slack to the plan; the mascot as a scorekeeper flipping cards on an old scoreboard; the meter at 12.
- **Now, the same scene (20.6-29.4 s):** Space on Plus; the plan as a shared page, set to update from the connected Slack; the 12 decisions arrive in the page; the meter stays at 0.
- **How (29.9-35.0 s):** one diagram that grows: connected apps -> "SET TO UPDATE" -> one shared page -> the team.
- **Proof (35.3-40.4 s):** OpenAI's own example, quoted, with its source line.
- **Catch (40.9-44.9 s):** colleagues need Space access (Free can't open; no public links); check it before sharing.
- **Close (45.2-56.6 s):** "So, what we learned:" with BEFORE 12 vs NOW 0 side by side; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in a **scorekeeper's flat cap** (amber `#FFC66E`), the story's costume: the person who climbs up and flips the numbers on an old hand-turned scoreboard.
- **The AI = a robot with a teal (`#2DB2AE`) screen head**, label "CHATGPT" under it (plain text, no logo; visibly AI, brand casting), standing beside the page in NOW.
- **Props:** the **team plan** as a page card titled "TEAM PLAN" with 12 empty rows "D1 ... D12"; a **chat window** "SLACK · #project" (plain text, no logo) that fills with 12 small decision bubbles; small amber **decision cards** "D1" ... "D12"; a switch "SET TO UPDATE".
- **The meter "COPIED BY HAND"**, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0, 4, 8, 12 and a big whole-number counter on top; amber fill in BEFORE, teal (and empty, 0) in NOW.
- **The team:** three small stick figures of different, mixed tones (no tone maps to rank), each looking at the same page.
- **Places:** D the desk (mascot left, Slack window centre-left, plan page centre-right, meter right); S the old scoreboard (shot 9); X the how diagram (14-16); Q the quote card (17-18); C the catch cards (19-20); K the close.
- Every frame: corner tag "ChatGPT Space · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red only for the sticker and Subscribe.

## Shots
24 shots in about 58 s, 2.4 s on average (lesson L1). Cuts on word boundaries; inside a line the cut is estimated, and the renderer re-times every cut to the real line times.
Every card and panel eases in on scale and alpha over at least 0.5 s; every colour change cross-fades over at least 0.5 s; every shot over 2 s with little motion gets a slow push to about 1.1 (lesson L23).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-1.6 | "ChatGPT Space:" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "CHATGPT SPACE", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.6-3.7 | "you think a team plan costs you nothing," | The desk: the mascot (flat cap) beside the page "TEAM PLAN", rows D1 ... D12 empty; a small tag "SHARED WITH THE TEAM" | hook: the belief |
| 2 | 3.7-5.9 | "but 12 Slack decisions" | The chat window "SLACK · #project" fills, one bubble at a time, with 12 decision bubbles; counter "12 DECISIONS" | hook: the counted example |
| 3 | 5.9-8.1 | "actually cost you 12 copies by hand," | The mascot carries decision cards from the chat window to the plan; the meter "COPIED BY HAND" eases in and climbs to 12, amber | hook: the real cost |
| 4 | 8.1-10.2 | "until you set it to update itself." | A switch "SET TO UPDATE" on the page flips; the page's border cross-fades to teal over 0.6 s; a teal line links the chat window to the page | hook: the outcome |
| 5 | 10.4-11.4 | "Here's why." | Wide desk, meter at 0; lower card "1 PLAN · 12 DECISIONS" | turn (by about 10 s) |
| 6 | 11.4-13.4 | "Before, ChatGPT gave you a reply" | Amber tab "BEFORE"; a chat bubble from the robot labelled "A REPLY" | before: what ChatGPT gave |
| 7 | 13.4-15.5 | "or a file in your Library." | A file card "PLAN FILE" slides onto a shelf labelled "LIBRARY"; small tag "OUR EXAMPLE: UPDATED BY HAND" (claims.md: the first wording "CHANGES ONLY WHEN YOU EDIT IT" was narrower, no source says it) | before: the file |
| 8 | 15.8-18.1 | "Each Slack decision got copied into the plan by hand," | Decision card D1 goes from the chat window into the plan in the mascot's hand, then D2, D3; the meter counts 1, 2, 3 | before: the pain, one by one |
| 9 | 18.1-20.1 | "like an old scoreboard." | The mascot on a ladder flips number plates on an old hand-turned scoreboard "DECISIONS" up to 12; the meter lands on "12" with a tag "12 BY HAND" | before: the story |
| 10 | 20.6-22.9 | "Now Space is rolling out to Plus:" | Teal tab "NOW"; card "CHATGPT SPACE · PLUS · 18+ · ROLLING OUT SINCE NOV 20, 2026" | now: what it is, for whom |
| 11 | 22.9-24.7 | "the plan is a shared page," | The page "TEAM PLAN · SHARED PAGE" with three small team figures around it; the robot beside it | now: the shared page |
| 12 | 24.7-26.6 | "set to update from your connected Slack." | The switch "SET TO UPDATE" on, a teal line "CONNECTED" from the chat window to the page | now: the setting |
| 13 | 26.9-29.4 | "Twelve decisions, zero copies by hand." | The 12 decision bubbles travel along the teal line into the page's rows one by one (slowly); the mascot's hands empty; the meter stays at "0", teal | now: the meter does not move |
| 14 | 29.9-32.6 | "How? Connect your apps," | Diagram starts, title "HOW IT WORKS": piece 1, the blocks "SLACK" and "OTHER APPS" with tag "CONNECTED", highlighted | how: piece 1 |
| 15 | 32.6-34.0 | "set the page to update," | Piece 2: an arrow to a switch "SET TO UPDATE", highlight moves to it | how: piece 2 |
| 16 | 34.0-35.0 | "and your team opens the same page." | Piece 3: the block "ONE SHARED PAGE" and three team figures reading it, highlight moves | how: piece 3 |
| 17 | 35.3-37.4 | "That's OpenAI's own example:" | Card "OPENAI'S OWN EXAMPLE"; small source line "ChatGPT release notes · Nov 20, 2026" | proof: the maker |
| 18 | 37.4-40.4 | "a project plan that stays current with decisions from Slack." | The quote on a page card: "a project plan that stays current with decisions from Slack" | proof: the maker's words |
| 19 | 40.9-42.9 | "The catch: colleagues need Space access," | Card "THE CATCH"; lines "NEEDS VIEW ACCESS + PLUS, PRO, BUSINESS OR ENTERPRISE WITH SPACE" (claims.md: narrower without the view permission) and "FREE CAN'T OPEN IT · NO PUBLIC LINKS" | catch: who can open it |
| 20 | 42.9-44.9 | "and you still check it before sharing." | The mascot with a magnifier over the page; tag "CHECK NAMES, DATES, SOURCES" | catch: check it |
| 21 | 45.2-48.6 | "So, what we learned: twelve decisions used to mean twelve copies by hand;" | Top card "WHAT WE LEARNED"; side by side: left "BEFORE" the meter at 12 (amber), right "NOW" the meter at 0 (teal); label "SAME 12 DECISIONS" | close: the conclusion |
| 22 | 48.6-52.2 | "now the page updates itself, once you set it." | The page with its teal border and switch on; takeaway card: line 1 off-white "12 DECISIONS,", line 2 amber "0 COPIED BY HAND" | close: the takeaway, the promise delivered out loud |
| 23 | 52.4-58.5 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"CHATGPT SPACE": [RN] entry title. "TEAM PLAN", "D1 ... D12", "12 DECISIONS", "1 PLAN · 12 DECISIONS", "SLACK · #project", "PLAN FILE", "COPIED BY HAND", "12 BY HAND", "SAME 12 DECISIONS", "12 DECISIONS, 0 COPIED BY HAND": the episode's counted example (ours, `research.md`), inside the maker's example of row 4.
"SHARED WITH THE TEAM", "SHARED PAGE", "ONE SHARED PAGE": rows 2, 10. "A REPLY", "LIBRARY": row 9. "OUR EXAMPLE: UPDATED BY HAND": the counted example (ours; OpenAI's pages do not say a Library file updates itself). "SET TO UPDATE", "CONNECTED", "OTHER APPS": row 3.
"PLUS · 18+ · ROLLING OUT SINCE NOV 20, 2026": rows 1, 15. "OPENAI'S OWN EXAMPLE", the quote and "ChatGPT release notes · Nov 20, 2026": row 4.
"NEEDS VIEW ACCESS + PLUS, PRO, BUSINESS OR ENTERPRISE WITH SPACE", "FREE CAN'T OPEN IT · NO PUBLIC LINKS": row 6. "CHECK NAMES, DATES, SOURCES": row 12.
The scoreboard, the ladder, the flat cap and the robot are invented pictures inside the example (said in the description).
