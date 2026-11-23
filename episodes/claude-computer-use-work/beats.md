# Beats: claude-computer-use-work (workflow step 3)

Written 2026-11-23 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Computer Use: Stop Copy-Pasting 20 Orders by Hand"** + thumbnail **"LEARN CLAUDE COMPUTER USE IN 60 SECONDS"**.
The hook sells the viewer's moment (the 20 orders in an app with no connector are no longer copied by you); the tech (screenshots, then clicks and typing in the apps you allow; the tool order) comes after, as the how.
Every claim traces to `research.md` / `brief.json`. Spoken text: `script.md`; as the voice says it: `film/script.txt`.
Times are **draft film seconds** from a draft voice of the final words (am_michael, speed 1.2, `--no-align`, 164 spoken words, 57.35 s of voice after the claim-check fixes, laid in at 0.3 s, ends at 57.65 s);
inside a line the cut is estimated, and the renderer re-times every cut to the real `vo_lines.json` / `align.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, 20 orders in an order tool with no connector, going into a spreadsheet**, from the first beat to the last;
a **meter "YOUR STEPS"** that fills to 20 in BEFORE (one copy-paste round trip per order) and stays at 2 in NOW (your 2 app approvals) on the same 20 orders (label changed from "YOUR COPY-PASTES" after judge round 1: it showed 2 in NOW, where you copy nothing);
**the how on one diagram that grows** (the tool order: connector, browser, your screen) with a highlight on what the voice names;
the proof is **the maker's own words** (the maker gives no number for computer use, `research.md`): "Screen interaction is slower than connectors", "Complex tasks sometimes need a second try".

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 22 in four rounds, scored with `hookscore.py`. Every one opens with the topic's name (lesson L14). Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 73 STRONG
"Claude computer use: you think 20 orders in an app with no connector cost you 20 copy-pastes, but actually Claude can type them, almost alone."
```
SPECIFICITY   79   20, 20
ADDRESS      100   you / you
STAKES        62   cost
CURIOSITY     75   but, actually, almost
BREVITY       86   24 words
VERDICT       73   STRONG
```
3-second test: the topic first, then the belief it corrects (an app with no connector means you copy everything yourself) and the outcome (Claude types the 20 orders). No architecture word.
"almost alone" keeps it true: you still approve the 2 apps (`research.md` row 7). It names no plan and no date: the turn's next line carries "in beta on Team and Enterprise, once an owner turns it on" (row 2-3).
Tension (lesson L25/L31): it corrects a belief and states the outcome; it does not end on "but how?" and does not open "Before, you'd ...".

### 2 (runner-up) 73 STRONG
"Claude computer use: you think an app with no connector costs you 20 copy-pastes, but what if Claude could see your screen and stop that cost?"
```
SPECIFICITY 62 · ADDRESS 100 · STAKES 88 · CURIOSITY 76 · BREVITY 79 · VERDICT 73 STRONG
formula      The Mistake (1 pattern matched)
```
Why 1 over 2: 2 ends on a question, the puzzle frame the owner rejected (L31); 1 states the outcome.

### All hooks scored (top ones)
| Score | Hook | Note |
|---|---|---|
| 74 | ... but actually Claude can stop that and type them, almost alone. | 27 words, long to say |
| 73 | **... but actually Claude can type them, almost alone.** | chosen |
| 73 | ... but what if Claude could see your screen and stop that cost? | ends on a question (L31) |
| 72 | ... but actually Claude can type them, except one thing. | teases a catch the hook can't name |
| 71 | ... but actually Claude can stop that and type them. | |
| 69 | ... but actually Claude can type them while you watch. | |
| 60 | ... you think Claude can't reach an app with no connector, so 20 orders cost you 20 copy-pastes. But now it can see your screen. | |
| 45 | Claude computer use means you stop copy-pasting twenty orders out of an app with no connector: Claude looks at your screen and clicks for you. | answers itself |
| 34 | Claude computer use just came to Team and Enterprise: you stop copy-pasting twenty orders by hand, because Claude sees your screen and types them. | answers itself |

## The parts, in one line each
- **Hook (0.0-9.3 s):** title card from frame 0; the order tool with 20 orders; "NO CONNECTOR"; the meter climbing to 20; the robot typing.
- **Turn (about 9.3 s):** "Here's how." Then it does it.
- **Before, the pain as a scene (10.3-20.9 s):** Claude can't click or type in the app; you copy every order into the chat and type the answers back; the meter fills to 20.
- **Now, the same scene (20.9-33.1 s):** beta on Team and Enterprise, owner switch on; screenshots; clicks and types in the apps you allow; 2 approvals; the 20 rows fill while the meter stays at 2.
- **How (33.1-39.9 s):** one diagram of three steps that grows: connector, browser, your screen; the highlight follows the voice.
- **Catch, the maker's words (39.9-46.8 s):** slower than a connector; complex tasks sometimes need a second try.
- **Close (46.8-59.2 s):** "So, what we learned:" with BEFORE 20 vs NOW 2 side by side, the takeaway card, then the ask with Subscribe and Comment buttons.

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) with an office lanyard and a small ID badge (the costume: you, at your work desk), at a desk with a laptop.
- **The AI = a robot with a teal (`#2DB2AE`) screen head**, label "CLAUDE" under it (plain text, no logo; visibly AI, brand casting). Story: a new coworker at your desk, who before could only hear what you read out, and now looks at your screen.
- **Props:** a big laptop screen with two app windows: **"ORDER TOOL"** (a list #1 ... #20, a small red tag "NO CONNECTOR") and **"SPREADSHEET"** (an empty grid that fills row by row); a chat panel (plain lines, no text); a mouse cursor (teal in NOW); permission dialogs "ALLOW ORDER TOOL?" and "ALLOW SPREADSHEET?" with a teal check.
- **The meter "YOUR STEPS"**, right side of the frame in every BEFORE and NOW shot (3, 6-16, 24): a vertical bar with ticks 0, 10, 20 and a big whole-number counter on top; amber fill in BEFORE, teal in NOW. One unit = one step you do by hand: in BEFORE one copy-paste round trip per order, in NOW one app approval.
- **Places:** D the desk (mascot left, robot right, laptop centre, meter right); L the ladder diagram (shots 17-20); K cards (21-23); the takeaway and Subscribe frames.
- Every frame: corner tag "Claude Computer Use · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red for the sticker and Subscribe.

## Shots
27 shots in 60.0 s, 2.2 s on average (lesson L1). Cuts on word boundaries (real film seconds from `film/vo_lines.json` and the estimated word starts in `film/align_est.json`, voice laid in at 0.3 s, the voice ends at 57.35 s; the film ends at 60.0 s with a short fade). Times below are the cut frames in `film/film.js` (`TS`).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-1.5 | "Claude computer use:" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "CLAUDE COMPUTER USE", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.5-3.4 | "you think twenty orders in an app" | Close on the laptop: the "ORDER TOOL" window, a list "#1 ... #20" scrolling slowly; slow push | hook: the counted example |
| 2 | 3.4-4.4 | "with no connector" | A plug icon beside the window, a red cross easing in over it; tag "NO CONNECTOR" | hook: the condition |
| 3 | 4.4-6.0 | "cost you twenty copy-pastes," | The meter "YOUR STEPS" eases in and climbs fast, amber, to "20" | hook: the cost |
| 4 | 6.0-9.3 | "but actually Claude can type them, almost alone." | The robot "CLAUDE" at the laptop, a teal cursor moving on the window; the meter stops low | hook: the outcome |
| 5 | 9.3-10.3 | "Here's how." | Wide desk: mascot left, robot right, laptop with "ORDER TOOL" and "SPREADSHEET"; lower card "20 ORDERS · 1 APP WITH NO CONNECTOR" | turn (by about 10 s) |
| 6 | 10.3-11.9 | "Before, on Team and Enterprise," | Amber tab "BEFORE"; the same desk, meter at 0; tag "TEAM & ENTERPRISE" | before: your scene |
| 7 | 11.9-14.4 | "Claude couldn't click or type in that app." | The robot reaches toward the order tool, a dashed line from it stops at a red "NO CONNECTOR" tag; slow push | before: the wall |
| 8 | 14.4-16.5 | "So you copied every order into the chat," | The mascot drags order card "#1" from the order tool into the chat panel; the meter to 1 | before: copy |
| 9 | 16.5-18.7 | "and typed the answers back yourself." | The mascot types into the "SPREADSHEET"; row 1 fills; the meter to 2 | before: type back |
| 10 | 18.7-21.0 | "Twenty orders, twenty round trips." | Cards #3 ... #20 fly from the tool to the chat and back, the meter races to "20"; label "20 ROUND TRIPS · BY YOU"; the mascot slumps | before: the pain, counted |
| 11 | 21.0-23.2 | "Now, in beta on Team and Enterprise," | Teal tab "NOW"; the same desk, meter back at 0 (teal); tag "BETA · TEAM & ENTERPRISE" | now: same scene, the condition |
| 12 | 23.2-24.7 | "once an owner turns it on," | A settings switch "COMPUTER USE" slides from off to on, its colour cross-fading to teal over 0.6 s; label "OWNER TURNS IT ON" | now: the switch |
| 13 | 24.7-27.3 | "Claude takes screenshots to see your screen," | A soft flash on the laptop screen, then small screenshot frames stack beside the robot's teal head; label "SCREENSHOTS" | now: how it sees |
| 14 | 27.3-30.2 | "then clicks and types in the apps you allow." | The teal cursor clicks order #1 in the tool, then types it into the spreadsheet; label "CLICKS · TYPES · APPS YOU ALLOW" | now: how it acts |
| 15 | 30.2-31.6 | "You approve two apps." | Two dialogs ease in one after the other: "ALLOW ORDER TOOL?" and "ALLOW SPREADSHEET?", the mascot taps each, a teal check; the meter to "2", label "APPROVALS" | now: your part |
| 16 | 31.6-33.1 | "Claude does the twenty." | The spreadsheet fills rows 1 ... 20 while the meter stays at "2"; the mascot leans back | now: the meter barely moves |
| 17 | 33.1-34.4 | "How does it choose?" | Diagram starts, title "HOW CLAUDE PICKS · IN COWORK"; three empty step slots | how: the diagram, piece 0 |
| 18 | 34.4-37.3 | "In Cowork, the most precise tool first: a connector," | Step 1 eases in: "1 · CONNECTOR", small "FASTEST", highlighted amber | how: piece 1 |
| 19 | 37.3-38.3 | "then the browser," | Step 2 eases in: "2 · BROWSER"; the highlight moves to it | how: piece 2 |
| 20 | 38.3-40.0 | "and your screen last." | Step 3 eases in: "3 · YOUR SCREEN", teal, with the small "ORDER TOOL · NO CONNECTOR" window beside it; the highlight moves to it | how: piece 3 |
| 21 | 40.0-41.3 | "Anthropic's own catch:" | Card "THE CATCH"; small source line "Claude Help Center" | catch |
| 22 | 41.3-43.6 | "screen work is slower than a connector," | Two lanes: "CONNECTOR" with a quick teal arrow, "YOUR SCREEN" with a slower cursor; label "SLOWER THAN A CONNECTOR" (no numbers) | catch: slower |
| 23 | 43.6-46.9 | "and complex tasks sometimes need a second try." | A circular retry arrow around a task card; label "COMPLEX TASKS: SOMETIMES A 2ND TRY" | catch: a second try |
| 24 | 46.9-50.6 | "So, what we learned: twenty orders used to mean twenty copy-pastes;" | Top card "WHAT WE LEARNED"; side by side: left "BEFORE" the meter at 20 (amber), right "NOW" the meter at 2 (teal); label "SAME 20 ORDERS" | close: the conclusion |
| 25 | 50.6-53.8 | "now Claude types them, and you approve two apps." | The desk, warm light, the full spreadsheet; takeaway card: line 1 off-white "20 ORDERS, NO COPY-PASTE BY YOU:", line 2 amber "YOU APPROVE 2 APPS" | close: the takeaway, the promise delivered out loud |
| 26 | 53.8-60.0 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"CLAUDE COMPUTER USE": [Notes] entry title. "ORDER TOOL", "#1 ... #20", "SPREADSHEET", "20 ORDERS · 1 APP WITH NO CONNECTOR": the counted example, invented inside the maker's use case ("Navigate apps that don’t have connectors—like an internal dashboard or a specialized tool your team uses", `research.md` row 5).
"NO CONNECTOR": row 5. "YOUR STEPS", "20", "20 ROUND TRIPS · BY YOU": `research.md`, Before (our example, your steps). "BETA · TEAM & ENTERPRISE": row 2. "OWNER TURNS IT ON", "COMPUTER USE" switch: row 3.
"SCREENSHOTS": row 4. "CLICKS · TYPES · APPS YOU ALLOW": row 1. "ALLOW ORDER TOOL?", "ALLOW SPREADSHEET?", "2", "APPROVALS", "YOU APPROVE 2 APPS": row 7 (per app, once per session).
"HOW CLAUDE PICKS · IN COWORK", "1 · CONNECTOR", "FASTEST", "2 · BROWSER", "3 · YOUR SCREEN": row 6. "THE CATCH", "Claude Help Center", "SLOWER THAN A CONNECTOR": row 9. "COMPLEX TASKS: SOMETIMES A 2ND TRY": row 10.
"WHAT WE LEARNED", "SAME 20 ORDERS", "20 ORDERS, NO COPY-PASTE BY YOU:": the example. The desk, lanyard, chat panel and dialogs are invented pictures inside the example (said in the description).
