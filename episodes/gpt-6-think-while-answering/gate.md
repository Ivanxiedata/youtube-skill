gate: pass (1 should-fix)

## Rounds 1-2, resolved
Round 1 failed on 4 must-fix and 2 should-fix: (1) "wait" meant two things, and the takeaway counted the whole answer; (2) nothing said the early parts were worth reading or made one answer; (3) Q1 and its key did not match; (4) "OCT 7, 2026" and "PART 1/2" were on screen and never said; should-fix "reasoning models" and "Extra High"/"Medium" had no kind word. Round 2 confirmed all six resolved.
Round 2 failed on 1 must-fix and 1 should-fix:
- Must-fix 1 (G10, G12/L66): the takeaway's 10 -> 6 never named its base, GPT-5.6 Instant. **Resolved.** The takeaway is now "So, what we learned: our ten-second web-search wait till it starts, on five point six Instant, becomes about six on GPT six Instant, parts still coming." It names both sides of row 6's comparison and keeps every earlier condition (our, web-search, till it starts, about, GPT six Instant, parts still coming). The fallback was taken: "Our ten seconds... becomes about six!" was cut, and its two meters ("BEFORE · GPT-5.6 INSTANT" 10, "NOW · GPT-6 INSTANT" 6) now play under the 44% line. "and" was cut from the Now line. "Here's how, on one web-search question." was kept on purpose (L46: the judge fails a cut turn). Words: 155 + 4 - 6 - 1 = 152 (`wc -w`), inside 157. The round-3 student puts the base in the right place ("44% sooner on average than 5.6 Instant. In the example, the wait went from about 10 seconds to about 6").
- Should-fix 2 (G9): "just as factual" as what? **Resolved** on screen: "ONE ANSWER, AS FACTUAL AS ONE WRITTEN AT ONCE (OPENAI)". The student repeats it: "just as factual as one written all at once".

G0 passes: `viewer.md`'s spoken lines equal `film/script.txt` line for line (diffed, empty). The on-screen part holds only words and pictures, with no notes, ids or shot numbers. Word budget: 152 of about 150 (cap 157).

## Student (round 3, verbatim from gate_student3.md)
### 1. Main idea
GPT-6 in ChatGPT no longer makes you stare at a blank screen while it thinks: it shows a first part of the answer early, keeps thinking, and adds more parts as it goes.

### 2. What I learned
**Answers arrive in parts.** Older thinking models thought first, then dropped one block of text. In the example, a web-search question meant a ten-second wait with nothing on screen. GPT-6 answers with what it has so far, keeps thinking, then adds the next parts. The video used a robot chef sliding out plates while its thinking bubble kept turning. OpenAI says the finished answer is just as factual as one written all at once.

**A part can be more than text.** A later part can be a chart or a calculator, when it fits your question. The video showed a bar-chart plate and a calculator plate coming out after the first text part.

**Faster start in the fast mode.** OpenAI says GPT-6 Instant starts web-search answers 44% sooner on average than 5.6 Instant. In the example, the wait went from about 10 seconds to about 6.

**Harder thinking doesn't delay the start.** In OpenAI's test on everyday agent tasks, GPT-6 on Extra High thinking showed its first part at the same time as 5.6 on Medium thinking. The extra thinking carries on behind the first part instead of holding it back.

### 3. What I can't explain, took on faith, or would scroll away from
- "GPT-6 Instant", "5.6 Instant", "Medium" and "Extra High" thinking: I don't know what these are in the app, or whether I choose them or ChatGPT does.
- "44% sooner": a percentage of what? It's presumably of the wait, but the video never says. The "10 s to about 6 s" figure is labeled "our example", so I can't tell whether it's a real measurement or an illustration. 44% off 10 s is 5.6 s, which only roughly matches.
- "Just as factual (OpenAI says)": I have to take this on faith. I don't know how they measured it, or what happens if the first part turns out wrong once more thinking is done.
- "Agent task test": I don't know what an agent task is. "Started as soon as" is also vague: how much sooner or later?
- Why it works: how can it answer before it has finished thinking? The video doesn't say.
- Do the parts get rewritten or corrected later, or only added? Not said.
- Which questions get a chart or calculator, and who decides? "When it fits your question" is all I get.
- Scroll-away moments: the opening line "you think smarter answers cost you a longer blank wait, but actually..." is a bit tangled. The stretch with "Instant", "Medium" and "Extra High" in quick succession is a pile of model names. The last "what we learned" recap repeats the 10 s and 6 s numbers.

### Questions, answered from memory
**Q1.** It answers with what it has so far, keeps thinking, and then adds more parts. A part can be more text, a chart or a calculator, when it fits your question.

**Q2.** On a web-search question, the answer starts sooner. In the video's example the wait went from about 10 seconds to about 6 on the fast mode. More parts keep coming after that. OpenAI says the fast mode starts 44% sooner on average.

**Q3.** The first part comes out early and the thinking continues behind it. So even at Extra High thinking, GPT-6 showed its first part as soon as 5.6 did on Medium.

## Critic (round 3, re-gate)

| # | Check | Result | Fix |
|---|---|---|---|
| G0 | viewer.md only what the viewer sees; spoken = `film/script.txt` | pass: diff empty; no notes, ids or shot numbers | |
| G1 | Main idea is an insight (full) | pass: "Harder thinking no longer has to mean a longer blank wait: the answer can start with what's found so far while the thinking goes on." 24 words. It is a belief, not a headline or a mechanism. "No longer" rests on row 7 ("begin answering in the same amount of time") and rows 1-2. No absolute word, no superlative | |
| G2 | Deepest true idea (full) | pass: the sources' only "not yet" gap is row 17's design judgment ("still work ahead"), which is another topic. Row 4's "take into account the user's waiting time" and row 5's "add more findings without another prompt" are the main idea's own mechanism, not a deeper idea. The "thinking not yet done when the answer starts" gap is the main idea itself | |
| G3 | The student got it (full) | pass, with 1 should-fix: the student's main idea ("no longer makes you stare at a blank screen while it thinks: it shows a first part early, keeps thinking, and adds more parts") matches lesson.md's. Graded on the whole notes: Q1 is full (so far, keeps thinking, more parts, text/chart/calculator, "one answer ... just as factual as one written all at once"). Q2 is full (web-search, starts sooner, 44% on average, "than 5.6 Instant", 10 -> about 6, fast mode, parts keep coming). Q3 is full (first part early while the thinking continues; Extra High = 5.6 Medium in "OpenAI's test on everyday agent tasks"). Every part of every key has a spoken line (lesson.md's L60 entry, ticked against the script). Wishes, not fails: how it works inside, how OpenAI measured "factual", whether parts get rewritten, what the tiers are in the app, what an agent task is, and who picks a chart. In each case the student repeats the spoken reason correctly. "Started as soon as ... how much sooner or later?" is answered right in Q3 and in the notes ("at the same time"). Should-fix 1: the student can't tell whether the 10 s is "a real measurement or an illustration" | 1 |
| G4 | Questions worth asking | pass (unchanged): how + what a part can be, what changes, why | |
| G5 | Shown, not asserted (changed shot 12) | pass: shot 12's BEFORE · GPT-5.6 INSTANT 10 vs NOW · GPT-6 INSTANT 6 now plays under the 44% line, so Q2's contrast stands next to the number it comes from. Q1 and Q3 contrasts unchanged | |
| G6 | Why it matters | pass (unchanged): each part is spoken (L72 entry re-ticked) | |
| G7 | Misconception | pass: "you think smarter answers cost you a longer blank wait, but actually it starts answering before it's done thinking." Found verbatim in `film/script.txt`. The student calls it "a bit tangled". That is hook craft, which is the judge's | |
| G8 | No faith steps (changed Now line) | pass: dropping "and" leaves "keeps thinking, adds parts, ...: one answer, OpenAI says, just as factual", and the trust step still has its credited reason in the same breath | |
| G9 | Every line serves (changed lines) | pass: the takeaway and the Now line serve Q2 and Q1. "Five point six Instant" sits in the line after "its fast mode, GPT six Instant" and is on screen as "GPT-5.6 INSTANT" next to "BEFORE"; the student read it as the older fast mode. Body scroll-aways: 2 (the run of model names in the 44% and agent-test lines, and the recap), not over 2. The hook is exempt | |
| G10 | True main idea (full) | pass: the takeaway claims only row 6 plus our example, with every condition: our, web-search, till it starts, base 5.6 Instant, about (on average), GPT six Instant, and parts still coming (rows 1, 5). Its unit (seconds till it starts) matches the picture it closes on (shot 16, "SECONDS UNTIL IT STARTS ANSWERING · OUR EXAMPLE"). It is 26 words, as long as the 26-word Now line, so it is not shorter (L66). The main idea claims no more than rows 1, 2, 4 and 7 | |
| G11 | Carry-over limits | pass (unchanged): "one answer" covers where the kitchen story stops | |
| G12 | Lessons | pass: every open `check: gate` lesson holds: L58-L72, L74, L76-L78, L81, L84. L66: the takeaway keeps every condition, including the base. L71: 10, 6, 44%, GPT-6 and GPT-5.6 are all said, and the brand marks are exempt. L74: every spoken quote in lesson.md's Lesson check and Misconception entries was found in `film/script.txt` with Python `str.find`, and none is stale. L76: "wait" always means until it starts, and "thinking" always means the model's thinking | |

Note for the claim check (3b), not a gate fail: the takeaway now ties our 10 s "before" to GPT-5.6 Instant. Meanwhile the before line ("Before, thinking models thought first: ... then one block of text") and shot 5's "THINKING MODEL" chef show that before as a thinking model that gave one block. Row 1 ("making it possible for ChatGPT to begin answering while it continues to think") supports "before GPT-6, no answer while thinking". No row says GPT-5.6 Instant thinks first and then delivers one block. 3b should read that pair (round 2 flagged the same thing).

### Fix 1 (should-fix): "our example" can be heard as a measured number
- **What**: G3 should-fix (a number whose basis is unclear). The student wrote: "The '10 s to about 6 s' figure is labeled 'our example', so I can't tell whether it's a real measurement or an illustration." The script says "our" (in "our ten-second wait" and in the takeaway), and the screen says "OUR EXAMPLE". Neither says the seconds are made up while OpenAI's 44% is real (research.md: "OpenAI gives no seconds; the 10 and the 6 are ours"). The student still answered Q2 right, so this is should-fix only.
- **Fix**: on screen only, 0 spoken words (the voice is tight, so nothing spoken is added).
  - Shot 4: the small "OUR EXAMPLE" under the meter becomes "OUR EXAMPLE · NOT OPENAI'S SECONDS".
  - Shot 16: the card line "OUR EXAMPLE, WEB SEARCH, GPT-5.6 INSTANT: 10 S TILL IT STARTS" becomes "OUR EXAMPLE (OPENAI GIVES ONLY THE 44%), WEB SEARCH, GPT-5.6 INSTANT: 10 S TILL IT STARTS". 44% is said, so L71 still holds.
  - Net 0 words. Also tidy lesson.md's Q1 picture, which still quotes the round-1 label "ONE ANSWER, AS FACTUAL (OPENAI)": it becomes "ONE ANSWER, AS FACTUAL AS ONE WRITTEN AT ONCE (OPENAI)". 0 words.
- **Rule**: none. L67 already covers it (say what a number is: a made-up example says it's made up, next to the maker's real one).
