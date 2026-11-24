# Beats: claude-ship (workflow step 3)

Written 2026-11-24 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Ship: 1 Policy File Lets AI Approve Routine PRs"** + thumbnail **"LEARN CLAUDE SHIP IN 60 SECONDS"**. The hook sells the viewer's moment (you open a pull request and keep working: AI tries the fixes, and approves it if your policy allows);
the tech (PR Steward, Claude Approvals and the policy file) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of the words
(am_michael, speed 1.2, `--no-align`, 151 words as spoken, 52.95 s of voice, laid in at 0.5 s, so it ends at about 53.5 s); the renderer re-times every cut to the real `vo_lines.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, 1 routine pull request (a small docs fix) with 1 failing check, 1 merge conflict, 1 review comment and 1 approval to chase**, from the first beat to the last;
a **meter "TIMES YOU STOP YOUR NEXT TASK"** (0 to 4) that fills to 4 in BEFORE and stays at 0 in NOW on the same pull request (the same unit both sides, lesson L34); **the how on one diagram that grows**
(PR -> Claude Approvals reads the policy file -> rule 1 "ROUTINE: CLAUDE MAY APPROVE" -> rule 2 "RISKY: MORE PEOPLE") with a highlight on what the voice names; the proof is **Anthropic's own number** (merged PRs on the Claude Code team more than doubled, June to September, with Claude's review one layer of a broader process).

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33: digits; cost, stop for stakes; but, actually, until for curiosity), 16 in three rounds. Every one opens with the topic's name (lesson L14). Picked by the 3-second test (lesson L16), then the score.
The tool's formula field says "Unclassified": the top two correct a belief ("you think X, but ..."), the owner's preferred tension (lesson L31), not a template.

### 1 (chosen) 73 STRONG
"Claude Ship: you think 1 PR must cost you 4 stops, but AI actually tries the fixes and approves it, if your policy allows."
```
SPECIFICITY 91 · ADDRESS 100 · STAKES 62 (cost) · CURIOSITY 58 (but, actually) · BREVITY 100 · VERDICT 73 STRONG
```
3-second test: someone who knows no AI tech hears "Claude Ship = my pull request gets its fixes tried and gets approved by AI, if my team's rules allow it, so I don't stop my work". The topic is the first two words; no architecture word.
Conditions in the words (lesson L26): "tries" (PR Steward attempts fixes, `research.md` row 7), "if your policy allows" (row 10). The 4 stops are our counted example, said as a belief ("you think"), tagged "OUR EXAMPLE" on screen. Ends on the outcome, not "but how?" (L31). Voiced alone it runs 7.9 s, so the turn lands at about 8.9 s (lesson L46).

### 2 (runner-up) 74 STRONG
"Claude Ship: you think 1 PR must cost you 4 stops, but AI actually works on the fixes and, until your rules say no, approves it."
Why 1 over 2 despite one point less: "until your rules say no" reads as if Claude approves by default; Anthropic's rule is the reverse, Claude approves only where the policy allows it (row 10). The score is a check at 72, not a target (L16).

### All hooks scored
| Score | Hook | Note |
|---|---|---|
| 74 | ... 1 PR must cost you 4 stops, but AI actually works on the fixes and, until your rules say no, approves it. | runner-up; condition reversed |
| 73 | **... 1 PR must cost you 4 stops, but AI actually tries the fixes and approves it, if your policy allows.** | chosen |
| 73 | ... 1 PR must cost you 4 stops, but AI actually tries every fix and approves it, if your policy allows. | "every fix" overstates (row 7) |
| 72 | ... 1 pull request must cost you 4 stops, but actually AI tries the fixes and, your policy allowing, approves it. | stiff to say |
| 71 | ... 1 pull request must cost you 4 stops, but AI actually tries the fixes and approves it, if your policy allows. | below 72 |
| 70 | ... 1 pull request has to cost you 4 stops, but actually AI can fix it and approve it, if your policy allows. | "fix it" drops "tries" |
| 68 | ... why stop 4 times for 1 pull request? You don't: AI actually tries the fixes ... | |
| 61 | ... 1 routine pull request must cost you 4 stops and a wait for a person, but your policy can let AI approve it. | |
| 59 | ... 1 routine pull request cost you 4 stops, but now AI tries the fixes and, if your policy allows, approves it. | |
| 59 | ... your 1 pull request stops your work 4 times, but now AI tries every fix ... | |
| 58 | ... 1 routine pull request costs you 4 stops, but actually AI can try the fixes ... | |
| 57 | ... you never stop your work 4 times for 1 routine pull request ... | "never" overstates |
| 55 | ... 1 pull request actually stops your work 4 times, but now AI works on the fixes ... | |
| 52 | ... stop dropping your work 4 times per pull request; AI works on the fixes ... | |
| 52 | ... your routine pull request never has to wait for a person, if your 1 policy file lets AI approve it. | |
| 45 | ... you think every pull request waits for a person to approve it, but your policy can let AI approve routine ones. | |

## The parts, in one line each
- **Hook (0.0-8.4 s):** the sentence above; title card from frame 0; the harbour: the mascot coding, the boat "PR #1"; the meter climbing to 4; a robot patching; the policy scroll and a teal "APPROVED" stamp.
- **Turn (8.9 s):** "Here's how." Then it does it, on the same pull request.
- **Before, the pain as a scene (9.9-18.4 s):** an AI review that only leaves comment flags; the mascot leaves the next task three times (failing check, merge conflict, comment), the meter to 3; then waits in line for a person to approve, the meter to 4.
- **Now, the same scene (18.9-24.9 s):** Claude Ship, in beta; the robot PR Steward works on the same three while the mascot keeps coding; the meter stays at 0; a note "WHAT I CHANGED · HOW TO UNDO IT".
- **How (25.0-33.4 s):** one diagram that grows: PR -> "CLAUDE APPROVALS" reads ".claude/approvals.yml" -> rule "ROUTINE: CLAUDE MAY APPROVE" (a small boat stamped) -> rule "RISKY: MORE PEOPLE" (a big ship "BILLING CODE" can need two people, the docs' example).
- **Why it helps, proof (33.9-41.3 s):** Anthropic's own number with its conditions.
- **Close (41.8-53.5 s):** "So, what we learned:" with BEFORE 4 vs NOW 0 side by side; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in a **ship captain's cap** (navy with an amber `#FFC66E` badge), at a small laptop "NEXT TASK", the story's costume: the captain whose boat waits in port.
- **The AI = robots with a teal (`#2DB2AE`) screen head**: "CODE REVIEW" in BEFORE (holds comment flags only), "PR STEWARD" in NOW (holds a wrench), "CLAUDE APPROVALS" in the how (holds a stamp). Plain text, no logo; visibly AI (brand casting).
- **The pull request = a small boat** with the sail "PR #1" and a small plate "DOCS FIX" (routine), at a dock line. Its three problems are three amber patches on the hull: "FAILING CHECK", "MERGE CONFLICT", "REVIEW COMMENT"; fixed, each turns teal (cross-fade 0.5 s or more).
- **The meter "TIMES YOU STOP YOUR NEXT TASK"**, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0 to 4 and a big whole-number counter on top; amber fill in BEFORE, teal and at 0 in NOW.
- **People:** the harbour master in BEFORE (a person with a stamp, a different tone from the mascot) and two people in shot 15 (two tones, none mapping to rank).
- **The policy file:** a scroll ".claude/approvals.yml" that becomes the rulebook with two rule rows.
- **Places:** H the harbour (dock, water strip at the bottom, mascot left with laptop, boat centre, meter right); X the how diagram (12-15); P the proof cards (16-17); K the close.
- Every frame: corner tag "Claude Ship · 60s" top-left. BEFORE tab amber, NOW tab teal, red only for the sticker and Subscribe.

## Shots
21 shots in about 53.5 s, 2.5 s on average (lesson L1). Cuts on word boundaries; inside a line the cut is estimated, and the renderer re-times every cut to the real line times; shot 0 ends on the measured pause after "Claude Ship" (lesson L36).
Every card and panel eases in on scale and alpha over at least 0.5 s; every colour change cross-fades over at least 0.5 s (0.7 s between views of very different brightness); every shot over 2 s with little motion gets a slow push to about 1.1 (lesson L23). View state is set per shot, never as a range (lesson L38). Figures come in by slide or on a cut, never by alpha (lesson L44).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-1.8 | "Claude Ship:" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "CLAUDE SHIP", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.8-4.0 | "you think 1 PR must cost you 4 stops," | The harbour: the mascot (captain's cap) at the laptop "NEXT TASK"; the boat "PR #1 · DOCS FIX" at the dock; the meter "TIMES YOU STOP YOUR NEXT TASK" eases in and climbs to 4, amber; tag "OUR EXAMPLE" | hook: the counted example |
| 2 | 4.0-6.2 | "but AI actually tries the fixes" | A teal-headed robot "PR STEWARD" with a wrench works on the boat's three amber patches; they cross-fade to teal one by one; the mascot keeps typing | hook: the outcome (fixes tried) |
| 3 | 6.2-8.4 | "and approves it, if your policy allows." | A scroll "POLICY FILE" beside the boat; a teal stamp "APPROVED" lands on the sail; small line under it "IF YOUR POLICY ALLOWS" | hook: the promise with its condition |
| 4 | 8.4-9.9 | "Here's how." | Wide harbour, meter at 0; lower card "1 ROUTINE PR · OUR EXAMPLE" | turn (by about 10 s) |
| 5 | 9.9-12.4 | "Before, an AI review only left comments." | Amber tab "BEFORE"; the boat's three patches show amber (FAILING CHECK, MERGE CONFLICT, REVIEW COMMENT); robot "CODE REVIEW" pins one comment flag on the "REVIEW COMMENT" patch only; label "COMMENTS ONLY" beside the robot (claims.md) | before: what AI did |
| 6 | 12.4-14.6 | "You stopped your next task for a failing check," | The mascot leaves the laptop and patches "FAILING CHECK"; the meter goes to 1 | before: stop 1 |
| 7 | 14.6-16.0 | "a merge conflict, a comment," | Highlight moves to "MERGE CONFLICT", then "REVIEW COMMENT"; meter 2, then 3 | before: stops 2 and 3 |
| 8 | 16.0-18.4 | "then chased someone to approve." | The boat waits in a line of boats before the harbour master (a person with a stamp); label "WAITING FOR A PERSON"; meter 4 | before: stop 4, the queue |
| 9 | 18.9-21.5 | "Now, in beta, PR Steward works on all three" | Teal tab "NOW"; card "CLAUDE SHIP · BETA · NOV 23, 2026 · TEAM & ENTERPRISE PLANS · GITHUB"; robot "PR STEWARD" works on the three patches; each cross-fades to teal | now: what it is |
| 10 | 21.5-23.1 | "while you keep coding," | The mascot types at the laptop "NEXT TASK"; the meter stays at 0, teal | now: you don't stop |
| 11 | 23.1-24.9 | "and notes what it changed." | A note card pinned on the boat: "WHAT I CHANGED · HOW TO UNDO IT" | now: the note |
| 12 | 25.0-27.5 | "Then Claude Approvals reads your team's policy file," | Diagram starts, title "HOW IT WORKS": piece 1, the boat "PR #1" -> robot "CLAUDE APPROVALS" reading the scroll ".claude/approvals.yml", highlighted | how: piece 1 |
| 13 | 27.5-29.2 | "like a harbor rulebook:" | The scroll opens into a rulebook with two rows: "ROUTINE: CLAUDE MAY APPROVE" and "RISKY: MORE PEOPLE"; small line under it "EXAMPLE POLICY" (claims.md) | how: piece 2 |
| 14 | 29.2-31.2 | "small routine boats it can stamp itself;" | Highlight on row 1; the small boat "DOCS FIX" gets a teal stamp "APPROVED BY CLAUDE" | how: piece 3 |
| 15 | 31.2-33.4 | "risky ones can need people." | Highlight on row 2; a big ship "BILLING CODE" waits beside two people; label "BILLING CODE: CAN NEED 2 PEOPLE"; small line "EXAMPLE POLICY" (claims.md) | how: piece 4 |
| 16 | 33.9-37.2 | "Anthropic's Claude Code team, with Claude's review as one layer," | Card "ANTHROPIC'S OWN NUMBER"; line "CLAUDE CODE TEAM · CLAUDE'S REVIEW: ONE LAYER OF A BROADER PROCESS"; small source line "Anthropic · Nov 23, 2026" | proof: the maker, with its condition |
| 17 | 37.2-41.3 | "more than doubled merged pull requests, June to September." | Two bars grow: amber "JUNE" short, teal "SEPTEMBER" more than twice as tall; label "MERGED PRs: MORE THAN 2X"; small tag "CLAUDE CODE TEAM" stays on the bars | proof: the number |
| 18 | 41.8-45.3 | "So, what we learned: in our example, 1 pull request stopped you 4 times;" | Top card "WHAT WE LEARNED" with small tag "OUR EXAMPLE"; side by side: left "BEFORE" the meter at 4 (amber), right "NOW" the meter at 0 (teal); one shared label "TIMES YOU STOP YOUR NEXT TASK" | close: the conclusion |
| 19 | 45.3-49.4 | "now 0, if the fixes work and your policy allows." | Takeaway card: line 1 off-white "OUR EXAMPLE: 4 STOPS, NOW 0", line 2 amber "IF THE FIXES WORK AND YOUR POLICY ALLOWS" | close: the takeaway, the promise delivered out loud |
| 20 | 49.9-53.5 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"CLAUDE SHIP", "CLAUDE SHIP · BETA · NOV 23, 2026 · TEAM & ENTERPRISE PLANS · GITHUB": rows 1, 20. "PR STEWARD", "CODE REVIEW", "CLAUDE APPROVALS": row 2. "COMMENTS ONLY": rows 17 and Before.
"FAILING CHECK", "MERGE CONFLICT", "REVIEW COMMENT": rows 5, 7 (what PR Steward works on). "WAITING FOR A PERSON": rows 3, 4. "WHAT I CHANGED · HOW TO UNDO IT": row 6.
"POLICY FILE", ".claude/approvals.yml", "IF YOUR POLICY ALLOWS", "APPROVED", "APPROVED BY CLAUDE", "ROUTINE: CLAUDE MAY APPROVE": rows 10, 12. "RISKY: MORE PEOPLE", "EXAMPLE POLICY", "BILLING CODE", "BILLING CODE: CAN NEED 2 PEOPLE": row 11.
"ANTHROPIC'S OWN NUMBER", "CLAUDE CODE TEAM · CLAUDE'S REVIEW: ONE LAYER OF A BROADER PROCESS", "JUNE", "SEPTEMBER", "MERGED PRs: MORE THAN 2X", "Anthropic · Nov 23, 2026": row 18.
"PR #1", "DOCS FIX", "NEXT TASK", "TIMES YOU STOP YOUR NEXT TASK", "OUR EXAMPLE", "1 ROUTINE PR · OUR EXAMPLE", "OUR EXAMPLE: 4 STOPS, NOW 0", "IF THE FIXES WORK AND YOUR POLICY ALLOWS": the episode's counted example (ours, `research.md`).
The harbour, the boats, the captain's cap, the harbour master and the robots are invented pictures inside the example (said in the description).
