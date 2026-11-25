# Beats: claude-fable-mythos (workflow step 3)

Written 2026-11-25 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Fable 5.2: Mythos 5.2 Underneath, Plus a Checker"** (after the claim check) + thumbnail **"LEARN CLAUDE FABLE 5.2 IN 60 SECONDS"**. The hook sells the viewer's moment (the public model is not a weaker brain: it is the same model as the restricted Mythos);
the tech (separate classifiers, fallback to an older Opus, 55% fewer blocks) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of these words (Ivan's voice, `--no-align`, laid in at 0.5 s);
the renderer re-times every cut to the real `vo_lines.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, your 10 requests** (order tickets numbered 1 to 10), from the first beat to the last;
a **meter "YOUR REQUESTS ON A WEAKER MODEL · OUR EXAMPLE"** (0 to 10) that fills to 10 in BEFORE and reaches only 1 in NOW on the same 10 tickets (the same unit both sides, lesson L34);
**the how on one scene that grows** (the big FABLE 5.2 chef -> the CHECKER gate in front -> 9 tickets pass -> the attack-code ticket blocked -> the OLDER OPUS side counter -> the notice) with a highlight on what the voice names;
the proof is **Anthropic's own number**: about 55% fewer blocks than Fable 5.1 in early testing (row 16).

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33: digits; cost for stakes; but, actually for curiosity); every draft had all four groups before scoring. Every one opens with the topic's name (lesson L14). Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 72 STRONG (formula: myth correction, "you think X, but actually Y")
"Claude Fable 5.2: you think safety must cost you a weaker model, but Anthropic says it's actually the same underlying model as Mythos 5.2." (gate round 1 added "Anthropic says", the claim check "underlying", judge round 1 made it one sentence (the name alone was the first sentence, 31 WEAK); 72 STRONG)
```
SPECIFICITY 91 · ADDRESS 96 · STAKES 62 (cost) · CURIOSITY 58 (but, actually) · BREVITY 100 · VERDICT 72 STRONG
```
3-second test: someone who knows no AI tech hears "Claude Fable 5.2 = the safe public model is not weaker; it's the same model as the restricted Mythos". The topic is the first three words; no architecture word.
Corrects a belief (the misconception of `lesson.md`), ends on the outcome, not "but how?" (L31). "Same underlying model": "Claude Fable and Claude Mythos are the same underlying model" (row 1). The restriction on Mythos is on screen in the same shot ("VETTED GROUPS ONLY", rows 2, 3).
Panels: title card, then you at a counter thinking "SAFE = WEAKER?", then two kitchens with the same chef, one with a checker gate (Fable, everyone), one without (Mythos, vetted groups only).

### 2 (runner-up) 75 STRONG
"Claude Fable 5.2: you think safety must cost you a weaker model, but it's actually the same model as the restricted Mythos 5.2." (scored in the file run; 71 alone with `--hook`)
Why 1 over 2: 1 splits the topic's name into its own line, so the title card can cut on the measured pause after it (lesson L36), and the hook line stays shorter (lesson L46).

### All hooks scored
| Score | Hook | Note |
|---|---|---|
| 72 | **Claude Fable 5.2: you think safety must cost you a weaker model, but Anthropic says it's actually the same underlying model as Mythos 5.2.** | chosen (72 before and after "Anthropic says") |
| 75 / 71 | ... you think safety must cost you a weaker model, but it's actually the same model as the restricted Mythos 5.2. | runner-up |
| 73 | ... you think the safe public AI must cost you a weaker brain, but you actually get the restricted Mythos 5.2 model. | "get the Mythos model" says more than "same underlying model" |
| 73 | ... you think a safe AI must risk you a weaker model? Actually, you get the same model as restricted Mythos 5.2. | ungrammatical |
| 72 | ... you never got the strongest model before, but now you get the same one as the restricted Mythos 5.2. | no misconception named |
| 71 | ... you think safety must cost you a weaker model, but you actually get the restricted Mythos 5.2's model, plus a checker. | below 72 |
| 64 | ... you think a safe AI must cost you a weaker model, but you actually get the same model as Mythos 5.2. | |

## The parts, in one line each
- **Hook:** title card; you think "SAFE = WEAKER?"; two kitchens, the same chef, one with a gate.
- **Turn:** "Here's how: our example, ten requests." Then it does it, on the 10 tickets.
- **Before, the pain as a scene:** the best chef behind glass for a small group of cyber defenders; your 10 tickets go to the weaker cook; the meter to 10.
- **Now, the same scene:** the big Fable chef with a checker gate; 9 pass; the attack-code ticket blocked; the older Opus cook answers, with a notice; the meter at 1.
- **Why it helps, proof:** Anthropic's early tests: about 55% fewer blocks than 5.1; a harmless ticket the 5.1 gate stopped passes the 5.2 gate.
- **Close:** "So, what we learned:" BEFORE 10 vs NOW 1 side by side; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) with a white **napkin bib** (the restaurant story's costume), holding order tickets.
- **The models = robot chefs with teal screen heads** (visibly AI, brand casting): the **big chef** (tall chef's hat, labelled "FABLE 5.2 · FULL MODEL", "MYTHOS 5.2" or "BEST MODEL"), the **weaker cook** (small, dim, short hat, "WEAKER MODEL"), the **older cook** (small, "OLDER OPUS · LESS CAPABLE"). No logos.
- **The checker** = a teal **gate** at the front of the counter with a small screen head and a scan light, labelled "CHECKER · A SEPARATE AI".
- **Three cyber defenders** (BEFORE, inside the glass room): small stick figures in other hoodie colours and skin tones, each with a small shield; nobody gives orders.
- **Props:** 10 **order tickets** (white slips numbered 1-10; the 10th reads "HELP ME BUILD ATTACK CODE"); a red **"BLOCKED" stamp**; a **notice strip** "MODEL SWITCHED TO OPUS" on the answer; the **glass room**; the **5.1 / 5.2 block bars**.
- **The meter "YOUR REQUESTS ON A WEAKER MODEL"** with "OUR EXAMPLE" under its label, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0 to 10 and a big whole-number counter on top; amber in BEFORE, teal in NOW. Labels at least 28 px tall at 1080p (lesson L48).
- Every frame: corner tag "Claude Fable 5.2 · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red only for the sticker, the BLOCKED stamp and Subscribe.

## Shots
Times: from `vo_lines.json` (after judge round 1 the hook is one voice line: shots 0, 1 and 2 split it at the measured pauses after "two:" and after "model,"; shots 4 and 5 split the before line at "You got").

| # | Line | Spoken line | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0 | "Claude Fable five point two:" | Full-screen title card: "LEARN" small, "CLAUDE FABLE 5.2" huge in amber, red tilted sticker "IN 60 SECONDS"; corner tag. Holds until the measured pause after "two" (lesson L36) | hook |
| 1 | 1a | "you think safety must cost you a weaker model," | The mascot (napkin bib) at a restaurant counter holding one order ticket; thought bubble "SAFE = WEAKER?"; behind the counter a small, dim robot cook (screen head, short hat) with a "?" over it; slow push-in | hook |
| 2 | 1b | "but Anthropic says it's actually the same underlying model as Mythos five point two." | Cut: two kitchens side by side, the same big robot chef (screen head, tall hat) in each. Left: "FABLE 5.2 · EVERYONE" with a teal gate in front of the counter. Right: a door "MYTHOS 5.2 · VETTED GROUPS ONLY", its gate standing open, small dated line "MYTHOS 5 (JUNE): CYBER CHECKS LIFTED". Bracket over both chefs: "SAME UNDERLYING MODEL"; small source line "ANTHROPIC, NOV 9, 2026" | hook |
| 3 | 2 | "Here's how: our example, ten requests." | The mascot holds a fan of 10 order tickets numbered 1-10; right: meter "YOUR REQUESTS ON A WEAKER MODEL" with "OUR EXAMPLE" under it, at 0 | turn |
| 4 | 3a | "Before, with no checker strong enough, Mythos Preview went to a small group of cyber defenders and infrastructure providers." | Amber tab "BEFORE · APRIL 2026"; the big chef inside a glass room "MYTHOS PREVIEW · BEST MODEL" / "A SMALL GROUP OF CYBER DEFENDERS + INFRASTRUCTURE PROVIDERS", small line "NO CHECKER STRONG ENOUGH YET"; three small figures with shields inside (different hoodie colours and skin tones); the mascot outside the glass with his tickets; meter 0 | beat |
| 5 | 3b | "You got a weaker one." | Cut: the 10 tickets go one by one to the small dim cook "WEAKER MODEL"; meter fills 0 -> 10 (amber), counter "10" | beat |
| 6 | 4 | "Now, a separate AI checker reads our requests first." | Cut: teal tab "NOW · FABLE 5.2"; the big chef "FABLE 5.2 · FULL MODEL" behind a counter; in front, a teal gate with a small screen head, "CHECKER · A SEPARATE AI", scanning ticket 1 with a light; meter back at 0 (teal) | beat |
| 7 | 5 | "Nine pass to the full model." | Tickets 1-9 pass through the gate to the big chef one after another; a counter by the chef "9"; meter stays 0 | beat |
| 8 | 6 | "One asks for attack code... blocked!" | Ticket 10 "HELP ME BUILD ATTACK CODE" stops at the gate, cross-fades white -> red over 0.5 s; a red "BLOCKED" stamp eases in; small line "RISKY CYBER REQUEST"; dashed inset (top corner, inside the safe area) "MYTHOS 5 (JUNE): CYBER CHECKS LIFTED · VETTED GROUPS": the same ticket goes straight to the big chef | beat |
| 9 | 7 | "In Claude apps, an older Opus model usually answers, and you're told." | The red ticket moves to a small cook at a side counter "OLDER OPUS · LESS CAPABLE"; an answer card returns to the mascot with a strip "MODEL SWITCHED TO OPUS"; small line "IN CLAUDE APPS · SOME ARE REFUSED OUTRIGHT"; meter ticks 0 -> 1 | beat |
| 10 | 8 | "In Anthropic's early tests, five point two's checker blocked about fifty-five percent fewer requests than five point one's." | Two bars grow: "5.1 CHECKER: BLOCKED REQUESTS" tall, "5.2 CHECKER: BLOCKED REQUESTS" about 45% of it; "ABOUT 55% FEWER" between them; small line "ANTHROPIC'S EARLY TESTS"; teal line "JUST AS ROBUST IN CYBER AND BIOLOGY"; no numbers on the bars | beat (proof) |
| 11 | 9 | "So fewer requests leave the full model." | A harmless ticket marked "OUR EXAMPLE" stops at a grey gate "5.1 CHECKER"; cut to a teal gate "5.2 CHECKER": the same ticket passes to the big chef "FULL MODEL" | beat (why) |
| 12 | 10 | "So, what we learned: in our example, all ten once got a weaker model." | "WHAT WE LEARNED" card; mini panel "BEFORE": 10 tickets to the "WEAKER MODEL" cook, meter 10 (same state as shot 5, lesson L38) | payoff |
| 13 | 11 | "Now nine reach the full model; in Claude apps, the checker usually sends the blocked one to older Opus." | Beside it, mini panel "NOW": the checker gate, 9 tickets to the "FULL MODEL" chef, 1 red "BLOCKED" ticket to "OLDER OPUS", meter 1 (same state as shot 9); one shared label "YOUR REQUESTS ON A WEAKER MODEL · OUR EXAMPLE" at full size (L48). Then the takeaway card: "OUR EXAMPLE: BEFORE, 10 OF 10 ON A WEAKER MODEL" / amber "NOW: 9 REACH THE FULL MODEL; IN CLAUDE APPS, THE BLOCKED 1 USUALLY GOES TO OLDER OPUS" | payoff |
| 14 | 12 | "Want more? Subscribe, and comment what we should explain next." | Red Subscribe button and a comment button; the mascot (napkin bib) waves; nothing under them (lesson L24) | close |
