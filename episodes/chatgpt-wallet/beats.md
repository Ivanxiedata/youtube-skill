# Beats: chatgpt-wallet (workflow step 3)

Written 2026-11-22 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"ChatGPT Wallet 2026: Who Sees Your Card?"** + thumbnail **"LEARN CHATGPT WALLET IN 60 SECONDS"**. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times below are **film seconds**: the draft voice's `vo_lines.json` (exact line starts and ends) and
`align.json` (word times estimated inside each line, `--no-align`), both + 0.3 s because the voice is laid in at 0.3 s.
Voice: am_michael, speed 1.2, 173 words, `vo.wav` 58.48 s, speech 0.30-58.78 s. The renderer may move a cut by a few frames to the real voice.

## Hooks
Scored with `python3 .claude/skills/yt-script/hookscore.py` (43 written against `hooks.json`, iterated to 100). The owner's rules: the topic first,
before -> after stated, only true numbers ("1 scan" = one Face ID or fingerprint check per purchase; "3 numbers" = card number, security code, expiry, the three the token replaces; "60 seconds" is the video's real length), one sentence, 100.

### 1 (chosen) 100 STRONG
"ChatGPT Wallet: before, you'd stop, type your card; now 1 scan, it pays, never seeing your 3 numbers, but how, why, in 60 seconds?"
```
SPECIFICITY  100   1, 3 and 60 seconds; the name ChatGPT Wallet
ADDRESS      100   you'd / your / your, the first inside the first six words
STAKES       100   before, stop, never
CURIOSITY    100   before, but, how, why, and it ends on "?"
BREVITY      100   24 words
VERDICT      100   STRONG
formula      The Clock (1 pattern matched: "in 60 seconds"), built as Before and After (before -> now)
```

### 2 (runner-up) 100 STRONG
"ChatGPT Wallet: before, you'd stop, type your card; now 1 scan, it pays, never seeing your 3 numbers, but why, how, in 60 seconds?"
```
SPECIFICITY 100 · ADDRESS 100 · STAKES 100 · CURIOSITY 100 · BREVITY 100 · VERDICT 100 STRONG
formula      The Clock (1 pattern matched)
```
Why 1 over 2: the video answers "how" first and "why" second (the payoff says "How? ... Why? ..."), so the hook asks them in that order.

### Why this formula fits this idea
The episode is a before -> after (you typed your real card into the agent's checkout; now one scan and a stand-in card pays), so the hook is that sentence.
"Never seeing your 3 numbers" is the title's question ("Who sees your card?") answered as a teaser; "how, why" is what the viewer then wants.
The Clock ("in 60 seconds") is the brand's promise, so it confirms the thumbnail in the same breath.

### All hooks scored (top 15 of 43)
| Score | Formula (tool) | Hook |
|---|---|---|
| 100 | The Clock | ChatGPT Wallet: before, you'd stop, type your card; now 1 scan, it pays, never seeing your 3 numbers, but how, why, in 60 seconds? |
| 100 | The Clock | ChatGPT Wallet: before, you'd stop, type your card; now 1 scan, it pays, never seeing your 3 numbers, but why, how, in 60 seconds? |
| 96 | The Clock | ChatGPT Wallet: before, you'd stop, type your card; now 1 scan, your agent pays, never seeing your 3 numbers, but how, why, in 60 seconds? (25 words) |
| 96 | The Clock | ChatGPT Wallet: before, you'd stop, type your card; now 1 scan, your agent pays, never seeing your 3 numbers, but how, in 60 seconds? |
| 96 | The Mistake | ChatGPT Wallet: before, your agent would stop for your card; now 1 scan pays, but never shows your 3 numbers. How, in 60 seconds? |
| 96 | The Mistake | ChatGPT Wallet: before, your agent would stop for your card; now 1 Face ID, it pays, never seeing your 3 card details, but how? |
| 96 | The Mistake | ChatGPT Wallet: before, your agent would stop for your card; now, 1 scan, it pays, never seeing your 3 numbers. But how, in 60 seconds? |
| 95 | The Mistake | ChatGPT Wallet: before, your agent would stop until you typed your card; now, 1 scan, it pays, never seeing your 3 numbers. But how? |
| 94 | The Mistake | ChatGPT Wallet: before, your agent would stop until you typed your card; now, 1 scan, it pays, never seeing them. But how, in 60 seconds? |
| 93 | The Clock | ChatGPT Wallet: before, you'd stop, type your card; now 1 scan pays, your agent never sees your 3 numbers, but how and why, in 60 seconds? |
| 93 | The Mistake | ChatGPT Wallet: before, your agent would stop for your card; now 1 scan pays, but never shows your 3 numbers. How and why, in 60 seconds? |
| 92 | The Mistake | ChatGPT Wallet: before, your agent would stop for your card; now 1 Face ID, it never sees your 3 card details. But how, in 60 seconds? |
| 86 | The Mistake | ChatGPT Wallet: before, your agent would stop for your card; now 1 Face ID, it pays, never seeing your 3 card details. How, in 60 seconds? |
| 75 | The Clock | ChatGPT Wallet: before, you typed your real card for your agent; now your agent pays and never sees it, but how, and who does, in 60 seconds? |
| 74 | The Clock | What if your AI agent could pay but never see your card? ChatGPT Wallet does that; here's how in 60 seconds. |

Truth of the hook: "you'd stop, type your card" = ChatGPT agent asked before a purchase and you used takeover mode for sensitive inputs (`research.md`, Before).
"It pays, never seeing your 3 numbers" = Wallet does not share the actual card details with the agent or the business. Not said: that the old agent saw your card (in takeover mode it does not capture what you type).

## The parts, in one line each
- **Hook (0.0-9.7 s):** the sentence above; title card from frame 0, then you typing your card into the agent's checkout, one thumb scan, the dot paying with a teal card, HOW? / WHY?.
- **Turn (9.7 s):** "Here's how, in one errand: you send a helper to the shop." Then it does it. No channel intro, no subscribe pitch before the end.
- **Body:** before (13.0-20.8 s, the old helper stops at the till), new (20.8-34.9 s, the dot, the review, the scan, the stand-in), why it matters to you (35.0-43.4 s, the bill, nobody sees the card).
- **Payoff (43.4-53.0 s):** the hook's two questions said again and answered: "How? One scan, then a stand-in card. Why? Your three numbers stay out of the errand." Plus the honest limits (Pro in the US only; some shops may block it).
- **Close:** takeaway tied to the story ("Your helper still runs the errand; it just never holds your wallet."), then one ask ("Subscribe for the next one.").

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in the episode's costume: a knit beanie with a bobble (amber `#FFC66E` with an off-white band), the person who sends someone on an errand from home. He keeps his **real card** (a gold card) in his pocket.
- **Old ChatGPT agent = the helper robot**, visibly AI: a stick body with a screen for a head showing a small browser window (brand casting rule). Grey-blue, not a skin tone. Used only on the BEFORE side.
- **The dot** = the floating round teal (`#2DB2AE`) dot with two eyes and a soft glow, visibly AI (the same look as `episodes/openai-dots/`). It carries a small teal wallet and, after the scan, a **teal stand-in card**. Generic circle; no copy of OpenAI's artwork.
- **The shop** = a corner shop counter with an awning "SHOP" and a **till** (cash register) with a small screen that shows what it received. No shopkeeper is needed (the till is "the shop"); if one is drawn, keep tones unrelated to rank.
- **The card network** = a small booth or kiosk labelled "CARD NETWORK" (no Visa/Mastercard/Amex logos).
- **Places:** your home (front door, sofa, laptop, phone), the street between, the shop (counter, till), the board (BEFORE vs NOW).
- On every frame: the corner tag "ChatGPT Wallet · 60s", top-left. Amber `#FFC66E` topic and accents, teal `#2DB2AE` for the dot, the stand-in card and new parts, red `#E4493F` for the sticker and Subscribe. Coral or red for the exposed real card numbers on the BEFORE side.
- Card numbers on screen are never real-looking: use dots and blocks ("•••• •••• ••••", "•••", "••/••"), not digits.

## Shots
30 shots in 60 s (title card + 29), 2.0 s on average (lesson L1). Cut times are suggestions on word boundaries (film seconds).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.00-1.32 | "ChatGPT Wallet:" | Full-screen title card from frame 0, no fade-in: small off-white "LEARN", huge amber "CHATGPT WALLET", tilted red "IN 60 SECONDS" sticker; corner tag on. Cut, not faded | hook: topic first (L14) |
| 1 | 1.32-3.61 | "before, you'd stop, type your card;" | Amber tab "BEFORE" top-left. The mascot (beanie) at his laptop; the screen shows a checkout form with three fields "CARD NUMBER / CODE / EXPIRY"; his hands type, the fields fill with coral dots; a small banner "TAKE OVER" on the browser | hook: before |
| 2 | 3.61-5.08 | "now 1 scan, it pays," | Teal tab "NOW". Close on the mascot's phone: his thumb on a fingerprint icon, which glows teal with a check; card "1 SCAN" pops | hook: after |
| 3 | 5.08-7.18 | "never seeing your 3 numbers," | The teal dot at a shop till holding a teal card; above it three chips "NUMBER · CODE · EXPIRY", each with an eye crossed out | hook: after, the title's answer teased |
| 4 | 7.18-9.71 | "but how, why, in 60 seconds?" | The mascot faces the viewer; amber cards pop on the words: "HOW?" (7.43), "WHY?" (7.75); red "IN 60 SECONDS" sticker stamps on at 8.26 | hook: open question, payoff promised |
| 5 | 9.71-11.10 | "Here's how, in one errand:" | Wide street: the mascot's front door left, a corner shop with a "SHOP" awning right; lower card "ONE ERRAND" | turn (by 10 s) |
| 6 | 11.10-12.99 | "you send a helper to the shop." | The mascot at his door points to the shop; the helper (screen-head robot) walks along the street toward the shop | beat: the story world |
| 7 | 12.99-14.46 | "Before, ChatGPT's agent" | Amber tab "BEFORE". Close on the screen-head robot; its screen shows a small browser window; label "CHATGPT AGENT (2025)" | beat: who is who |
| 8 | 14.46-16.05 | "stopped at checkout." | The robot at the till: the till's screen asks "CARD?"; the robot freezes, a hand-stop icon over its head, its screen shows "waiting for you" | beat: before, it stops |
| 9 | 16.05-17.49 | "You took over its browser," | The mascot arrives at the till (or reaches into the robot's screen); the browser window slides from the robot's head to the mascot's hands; label "TAKEOVER MODE" | beat: before, you step in |
| 10 | 17.49-19.09 | "typed your real card," | Close: his gold real card in one hand, the other types; the three fields fill: "•••• •••• ••••", "•••", "••/••" in coral | beat: the real card goes in |
| 11 | 19.09-20.79 | "and the shop got all three numbers." | The till's screen lights coral: "NUMBER ✓ CODE ✓ EXPIRY ✓"; label "THE SHOP GOT ALL 3" | beat: the cost of before |
| 12 | 20.79-22.72 | "Now, since November 13," | Teal tab "NOW". The street again; the teal dot glows on where the robot stood; card "CHATGPT WALLET · NOV 13, 2026" | beat: the new |
| 13 | 22.72-24.40 | "your dot carries a wallet." | Close on the dot holding a small teal wallet; label "INSIDE DOTS"; it floats toward the shop | beat: Wallet runs in dots |
| 14 | 24.40-26.26 | "At checkout it shows you the items," | The dot at the till; at home, the mascot's phone buzzes: a review screen slides up; the items line (milk carton and bread icons) ticks in | beat: you review |
| 15 | 26.26-27.81 | "the total and the card." | Close on the phone: "TOTAL" line (a coin icon, no price) and "CARD •••• (yours)" line tick in; label "YOU SEE WHAT YOU BUY" | beat: you review |
| 16 | 27.81-30.39 | "You approve with Face ID or a fingerprint." | The mascot holds the phone up: a face outline scans (28.71), then a fingerprint icon (29.40) glows; teal check; label "YOU APPROVE EACH PURCHASE" | beat: your approval |
| 17 | 30.39-32.80 | "Then the card network hands over a stand-in:" | A booth "CARD NETWORK" next to the shop; a hand slides a teal card stamped "STAND-IN" across to the dot | beat: the token |
| 18 | 32.80-34.96 | "its own number, code and date." | Close on the teal stand-in card: its own "#### · ### · ##/##" fields in teal blocks; beside it, a small inset of the gold real card still in the mascot's pocket at home | beat: the token is not your card |
| 19 | 34.96-36.70 | "The shop charges the stand-in;" | The dot taps the teal card on the till; the till's screen shows "STAND-IN ✓" in teal (no real numbers); ding | why: the shop takes the stand-in |
| 20 | 36.70-38.60 | "the bill lands on your real card," | A dotted line runs from the till to the booth to the mascot's home; a receipt drops onto his gold card | why: you still pay with your card |
| 21 | 38.60-39.86 | "rewards and all." | The gold card glints; a small star badge "REWARDS ✓" pops on it | why: you keep your card's perks |
| 22 | 39.86-41.53 | "Your agent never sees your card," | The dot with its eyes; a thought bubble shows the gold card crossed out; label "AGENT: NEVER SEES IT" | why: what the agent sees |
| 23 | 41.53-43.41 | "and neither does the shop." | The till's screen: the gold card crossed out, "STAND-IN ONLY"; label "SHOP: NEVER SEES IT" | why: what the shop sees |
| 24 | 43.41-46.11 | "How? One scan, then a stand-in card." | Board, both halves in one frame, side by side. Left "BEFORE · ChatGPT agent": "you take over → type real card → shop gets all 3". Right "NOW · ChatGPT Wallet": "1 scan → stand-in card → shop gets the stand-in". The hook's "HOW?" card returns with a teal check; the NOW nodes light on "scan" and "stand-in" | payoff (how), BEFORE vs NOW side by side |
| 25 | 46.11-48.98 | "Why? Your three numbers stay out of the errand." | Board, a row under NOW: "WHY?" card with a teal check; the three chips "NUMBER · CODE · EXPIRY" slide into a little house icon and a lock closes | payoff (why) |
| 26 | 48.98-51.08 | "For now, only Pro users in America," | Card "FOR NOW: CHATGPT PRO · US · 18+" over the street | payoff: honest limit |
| 27 | 51.08-53.07 | "and some shops may block it." | A second shop with a closed gate; the dot bumps gently into it and stops; label "SOME SHOPS MAY BLOCK IT" | payoff: honest limit |
| 28 | 53.07-56.99 | "Your helper still runs the errand; it just never holds your wallet." | Wide street, evening: the dot floats home with a shopping bag; the mascot at his door, his own wallet in his hand; dimmed behind the takeaway card: line 1 off-white "Your helper still runs the errand;" at 53.2; line 2 amber "it just never holds your wallet." at 54.9 | close: takeaway tied to the story |
| 29 | 56.99-60.00 | "Subscribe for the next one." | The mascot waves; the red Subscribe button pops at 57.1 and pulses; no "Next" line (no next episode decided). 0.45 s fade-out | close: one ask |

## On-screen words and their sources
"CHATGPT AGENT (2025)", "TAKE OVER", "TAKEOVER MODE", "waiting for you": the agent post and the help article (`research.md`, Before). "THE SHOP GOT ALL 3": typing a card into a checkout form (`research.md`, Before, last row).
"CHATGPT WALLET · NOV 13, 2026", "INSIDE DOTS", "YOU SEE WHAT YOU BUY", "YOU APPROVE EACH PURCHASE", "1 SCAN", "CARD NETWORK", "STAND-IN", "REWARDS ✓", "AGENT: NEVER SEES IT", "SHOP: NEVER SEES IT", "FOR NOW: CHATGPT PRO · US · 18+", "SOME SHOPS MAY BLOCK IT": the Wallet post (`research.md`, New).
The errand, the milk and bread, the street, the gate and the gold card are invented examples inside the analogy (said so in the description).
