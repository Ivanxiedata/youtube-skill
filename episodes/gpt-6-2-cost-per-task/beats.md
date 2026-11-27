# Beats: gpt-6-2-cost-per-task (workflow step 3)

Written 2026-11-27 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"GPT-6.2 Astra & Sol: Your AI Cost Is Price Times Tokens"** + thumbnail **"LEARN OPENAI'S GPT-6.2 ASTRA & SOL IN 60 SECONDS"**. The hook sells the viewer's moment (what a task really costs is not on the price list: how much text the model uses sets it);
the tech (price per token, tokens used, OpenAI's cost results on two tests) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. The renderer times every cut from the real `vo_lines.json` and the measured pauses; the film ends at 60.0 s at most.

**The story everyone knows (lesson L3, gate G13): a taxi fare** (`research.md` rows S1-S3). A fare is a rate times the distance (S1), and the route decides the distance (S2); a driver who picks the best route (S3) drives, in this picture, fewer miles for the same trip (our inference from the per-distance rate, S1).
The mascot is the rider (amber flat cap). Before: you compare the rate (price per token) and assume the pricier is better. Now: the meter at the end is the cost; GPT-6.2 Astra is the driver who picks the best route (writing fewer tokens, OpenAI's "fewer output tokens" and "token efficiency"), and the cheaper Sol cab arrives nearly as well on one coding test for about a fifth of the fare.
Where it stops (`research.md`): more tokens can also mean more thinking, not only a detour; an AI cost has input and output lines at different rates; these are OpenAI's results on its chosen tests; nobody is cheating.

The flow the owner chose (lesson L25): **one counted example, one task**, from the hook to the close;
a **meter "COST"** (the cost on the test, OpenAI's "less than a third of the cost", "about one-fifth the cost"; every shot names its full mark: "FULL = GPT-6 ASTRA" on the work test, "FULL = ASTRA" on the coding test) that fills to full for GPT-6 Astra in BEFORE and, in NOW, stops under a third for GPT-6.2 Astra, past a dashed mark "WHAT 20% OFF WOULD BE" it never reaches (same unit both sides, lesson L34; the bar's state is tied to its own drawing, never to the tab);
**the how on one map that grows** (the trip A to B -> the long grey and short teal routes -> the two cabs on them -> each route turning into token chunks -> the "LOWER PRICES" tag on the price board) with a highlight on what the voice names;
the proof is **OpenAI's own numbers** (rows 3, 5, 7, 9), each with its test and "OpenAI says".

Colours (`docs/brand.md`, lesson L88): ground dusk purple `#120C22` -> `#2A1C46`; taxis amber `#FFC66E` with dusk-purple windows; routes grey `#8C8299` (long) and teal `#2DB2AE` (short, new); the robot drivers have teal screen heads (visibly AI, casting rule); text off-white `#F8E9CC` outlined `#120A1C`; the mascot's flat cap amber with a dusk-purple band. Red `#E4493F` only on the "IN 60 SECONDS" sticker and the Subscribe button.

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33): every draft had a digit, "you", a stakes word (cost) and a curiosity word (but, actually, how) before scoring.
Every one opens with the topic's name (lesson L14), in one sentence with the hook (lesson L16). Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 70 WORKABLE (formula: myth correction, "you X, but Y")
"GPT-6.2 Astra model: you pick by price but how much text it uses actually sets your cost." (gate round 1 M2: "model" gives Astra its kind word in line 1, "AI" cut; the voicing timed "GPT-6.2 Astra, OpenAI's model: you pick by price, but ..." at 8.14 s, so "OpenAI's" and the comma pause after "price" were cut (L46); re-scored alone with `--hook`: 70 WORKABLE, below 72 because "OpenAI's" carried a name; the 8 s limit is a must-fix, the score a should-fix; 22 spoken words)
```
SPECIFICITY 57 · ADDRESS 96 · STAKES 62 (cost) · CURIOSITY 75 (but, how, actually) · BREVITY 100 · VERDICT 70 WORKABLE
```
3-second test: someone who knows no AI tech hears "the price of an AI isn't what a task costs you; how much text it uses matters". The topic is the first words; no architecture word (no "tokens" in the first sentence: "text" instead); it corrects the step, picking by price (L89), and ends on the outcome, not "but how?" (L31).
Source: "Tokens are the chunks of text models process and generate, so fewer tokens can mean a smaller bill even when the listed rates stay the same" (row 12); prices are per million tokens (rows 5, 6).
Panels: title card; then two amber taxis at a kerb under a "PRICE PER TOKEN" board, "ASTRA $$$$" and "SOL $", the mascot looking from one to the other; then a taxi meter on a dash, its bar climbing as text pages feed in.

### 2 (runner-up) 70 WORKABLE
"GPT-6.2 Astra: you shop by price, but how much text it uses actually sets your cost."
Why 1 over 2: same promise; 1 names what Astra is ("model", gate M2). Both are 21-23 spoken words: line 1 is timed in the draft voicing (lesson L46).

### All hooks scored (`hookscore.py`, each alone with `--hook`)
| Score | Hook | Note |
|---|---|---|
| 70 | **GPT-6.2 Astra model: you pick by price but how much text it uses actually sets your cost.** | final (voiced line 1 at 8.14 s with "OpenAI's", cut) |
| 72 | GPT-6.2 Astra, OpenAI's model: you pick by price, but how much text it uses actually sets your cost. | gate round 1 wording; voiced 8.14 s (over 8 s, L46) |
| 72 | GPT-6.2 Astra: you pick AI by price, but how much text it uses actually sets your cost. | first choice; no kind word for Astra (gate M2) |
| 69 | GPT-6.2 Astra, OpenAI's pricier model: you pick by price, but how much text it uses sets your cost. | the critic's wording; no "actually" (curiosity 58) |
| 72 | GPT-6.2 Astra: you pick AI by price, but how much it writes actually sets your cost. | "writes" leaves out the text it reads (narrowing item 7) |
| 70 | GPT-6.2: you pick AI by price, but how much text it uses actually sets your cost. | no "Astra" |
| 70 | GPT-6.2 Astra: you pick by price, but how much text it uses actually sets your cost. | runner-up |
| 67 | GPT-6.2: you might pick AI by its price list, but its cost per job actually depends on how much it writes. | 23 words |
| 65 | GPT-6.2: you think the cheaper price list wins, but a job's cost depends on how much text it uses. | curiosity low |
| 62 | GPT-6.2: you compare price lists, but actually a job's cost is price times the text it uses. | |
| 57 | GPT-6.2: you compare price lists, but a job's cost is price times the text it uses. | |
| 51 | GPT-6.2 Astra: 20% off its price list, but you can pay under a third per task. | drops "on one test" and "OpenAI says" |

## The parts, in one line each
- **Hook:** title card; two taxis under a price-per-token board, the mascot choosing; a meter climbing as text feeds in.
- **Turn:** "Here's why: a taxi fare is mostly rate times miles; the route sets the miles." Then it does it, on two of OpenAI's tests.
- **Before, the pain as a scene:** the price board per token; a token is a chunk of text; "PRICIER = BETTER?"; the GPT-6 Astra bar fills to full.
- **Now:** the GPT-6.2 Astra price row "AT LEAST 20% LOWER"; on one work test (OpenAI says) it scored higher and its meter stops under a third, short of the "WHAT 20% OFF WOULD BE" mark.
- **How:** the map: GPT-6 Astra's long route vs GPT-6.2 Astra's short one, routes turning into token chunks (writing fewer tokens, OpenAI credits), and the "LOWER PRICES" tag.
- **Why it helps you:** one coding test: both at max, OpenAI says the cheaper model, Sol, nearly matched Astra's score, its meter about a fifth.
- **Payoff + close:** "So, what we learned:" price per token is the taxi's rate; your cost is price times tokens, compare cost per task; Subscribe and comment.

## Shots
Times are planned at about 2.8 words a second; the build times every cut from the measured voice. PLACE letters: each shot after a cut gets its own letter (L47).
Corner tag on every frame: "GPT-6.2 · 60s", top-left inside the safe area (x 60-918, y 100-1536), 44 px or more (L79).

| # | time (planned) | spoken (film/script.txt) | ON SCREEN | purpose | place |
|---|---|---|---|---|---|
| 0 | 0.0-2.4 | "G P T six point two Astra model:" | Title card from frame 0: "LEARN OPENAI'S" off-white, "GPT-6.2 ASTRA & SOL" huge amber (2 lines), red tilted sticker "IN 60 SECONDS". Cut on the measured pause after "model:" (L36). | hook | A |
| 1 | 2.4-4.0 | "you pick by price" | Dusk street, kerb. Two amber taxis side by side (whole taxis, wheels on the kerb line), robot drivers with teal screen heads in the windows; roof signs "ASTRA" and "SOL". Above them a board "PRICE PER TOKEN": "ASTRA  $$$$" and "SOL  $" (the board is the model's price, not the cab's: NYC has one regulated taxi rate, claims.md #10). The mascot (amber flat cap) stands left of centre, head turning from one taxi to the other. Slow push to 1.1. | hook | B |
| 2 | 4.0-7.8 | "but how much text it uses actually sets your cost." | Close-up of a taxi meter on a dash (a dark box with a teal display). Display: a bar labelled "YOUR COST" climbing. From the left, small text pages ("TEXT USED") slide into the meter one by one; the bar climbs a step with each page. Slow push. | hook | C |
| 3 | 7.8-10.4 | "Here's why: a taxi fare is mostly rate times miles;" | Card, eased in: "FARE: MOSTLY RATE × MILES" (claims.md #3: plus a flat charge, time in slow traffic and surcharges), with a small rate-sign icon under "RATE" and an odometer icon under "MILES". The mascot beside it, pointing (hand within reach). | turn | D |
| 4 | 10.4-13.2 | "the route sets the miles." | A map (dusk grid of streets): pin "A" bottom-left, pin "B" top-right. A long grey route draws in, winding; then a short teal route draws in, direct. Labels: "SAME TRIP"; on the grey "MORE MILES", on the teal "FEWER MILES". Mile ticks appear along each line as it draws. | turn | E |
| 5 | 13.2-15.6 | "Before, you'd compare the rate: price per token," | Amber tab "BEFORE". A price board, title "PRICE PER TOKEN": rows "GPT-6 ASTRA  $$$$$" and "SOL  $". The mascot looks up at it. | before | F |
| 6 | 15.6-17.4 | "a chunk of text," | The sentence "Book a taxi to the station" in off-white, then split into chunk boxes (teal outlines): "Book", "a", "taxi", "to", "the", "station". Label: "TOKEN = A CHUNK OF TEXT", under it "OUR EXAMPLE SPLIT" entering with the boxes (claims.md #7). | before | G |
| 7 | 17.4-20.6 | "assuming pricier meant better." | The price board again, small, top; the mascot points at the "$$$$$" row; thought bubble "PRICIER = BETTER?". Under it the meter appears: "COST", note "FULL = GPT-6 ASTRA"; the bar "GPT-6 ASTRA" fills to full (amber). | before | H |
| 8 | 20.6-24.4 | "Now Astra's price per token is at least twenty percent below G P T six Astra's." | Teal tab "NOW". The price board "PRICE PER TOKEN", two rows: "GPT-6 ASTRA  $$$$$" and "GPT-6.2 ASTRA  $$$$"; a teal tag eases in on the new row: "AT LEAST 20% LOWER" (claims.md #12: input and output 20%, cached input 60%). | now | I |
| 9 | 24.4-26.6 | "Yet on one work test, OpenAI says," | The meter panel, large: title "COST", subtitle "ONE WORK TEST · OPENAI SAYS", note "FULL = GPT-6 ASTRA". Bar 1 "GPT-6 ASTRA": full. A dashed line near the top of bar 2's track: "WHAT 20% OFF WOULD BE". | now | J |
| 10 | 26.6-29.4 | "it scored higher at under a third of the cost." | Same panel (new shot, closer): a small teal tag on GPT-6.2 Astra's label "SCORED HIGHER" (row 3; gate round 2 S2), entering with the bar; bar 2 "GPT-6.2 ASTRA" grows in teal and stops below a mark "A THIRD"; label "UNDER A THIRD". The dashed "WHAT 20% OFF WOULD BE" line stays, far above. | now | K |
| 11 | 29.4-31.4 | "Like a driver who picks the best route:" | The map from shot 4, A and B: a grey cab "GPT-6 ASTRA" on the long grey route, a teal-lit cab "GPT-6.2 ASTRA" on the short teal route, both moving toward B; the new one arrives first. | how | L |
| 12 | 31.4-34.0 | "OpenAI credits writing fewer tokens," | The same map: each route turns into a chain of small chunk boxes (like shot 6): many on the long grey route, few on the short teal one. Label: "WRITES FEWER TOKENS · OPENAI SAYS" (row 2: "fewer output tokens"). | how | M |
| 13 | 34.0-35.6 | "plus lower prices." | The price board row, close: "GPT-6.2 ASTRA  $$$$" with a teal tag "LOWER PRICES". | how | N |
| 14 | 35.6-38.8 | "On one coding test, both at max, OpenAI says the cheaper model, Sol," | Panel title "ONE CODING TEST · OPENAI SAYS", subtitle "BOTH AT MAX". Two cabs at the kerb again, roof signs "SOL" and "ASTRA", under the board "PRICE PER TOKEN": "SOL  $" and "ASTRA  $$$$"; a teal ring highlights Sol. | why | O |
| 15 | 38.8-41.2 | "nearly matched Astra's score" | A scoreboard, title "SCORE · ONE CODING TEST", two score bars: "ASTRA" and "SOL", nearly level; a bracket between their tops: "NEARLY MATCHED". | why | P |
| 16 | 41.2-43.6 | "at about a fifth the cost." | The meter: "COST · ONE CODING TEST", note "FULL = ASTRA". Bar "ASTRA" full; bar "SOL" grows in teal and stops at about a fifth; label "ABOUT A FIFTH". | why | Q |
| 17 | 43.6-46.8 | "So, what we learned: price per token is the taxi's rate;" | Card "WHAT WE LEARNED", eased in over the dimmed frame; under it a mini price board "$$$$ PER TOKEN" labelled "PRICE PER TOKEN = THE TAXI'S RATE". Slow push. | payoff | R |
| 18 | 46.8-49.6 | "your cost is price times tokens:" | Same card; under it a card eases in: "PRICE × TOKENS = YOUR COST" (no bars: judge round 1 M2, a recalled meter without its test and base read as the viewer's own cost). | payoff | S |
| 19 | 49.6-52.2 | "compare cost per task." | Takeaway card, two lines: "PRICE PER TOKEN IS THE RATE." then amber "COMPARE COST PER TASK." Grows slowly from its first frame. | close | T |
| 20 | 52.2-56.0 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; the red "SUBSCRIBE" button and a comment button (speech-bubble icon, "COMMENT") under him. Nothing under them (L24). | close | U |

Rules for the make (lessons): every panel or card eases in over at least 0.5 s on scale and alpha (only the card behind text scales; text at scale 1.0, L48); a panel on a cut is at full alpha from its first frame (L23); figures and cabs never fade with `globalAlpha` (L44); shots over 2 s with little motion get a linear push to at least 1.1 (L23); the meter's state belongs to its bar's drawing in that shot, not to the tab (L34); numbers and their conditions ("FULL = ...", "ONE WORK TEST", "BOTH AT THEIR MAX SETTING") enter in the same frame as the number (L26).
