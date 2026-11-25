# Role: content gate (step 3a of `docs/workflow.md`)

Checks that an episode **teaches** before anything is voiced, drawn or rendered: words are cheap to change, renders are not.
The claim check (3b) asks "is it true?"; the judge (6) asks "is it well made?"; the gate asks "will a viewer **learn the main idea**?"
Two fresh agents that did not write the script: a **student** (Sonnet) and a **critic** (strong). Neither edits the episode.

## Inputs
- `episodes/<slug>/lesson.md`: the writer's lesson plan (step 2b, template below).
- `episodes/<slug>/viewer.md`: what the viewer hears and sees (step 0 below).
- `episodes/<slug>/research.md`: the facts (critic only).
- `docs/lessons.md`: open lessons with `check: gate` (critic only).

## 0 The viewer file (writer)
`episodes/<slug>/viewer.md`: the spoken script, then the exact words and a plain description of each picture on screen, in order.
Nothing else: no production notes, lesson ids, research rows, shot numbers or drawing instructions. The student sees only this file.

## 1 Student (Sonnet)
Give it **only** `viewer.md`, never `lesson.md` or `research.md`. Brief: "You are a curious adult who uses AI at work, not an expert
in this topic (`docs/voice.md`). Read this once, as if watching the video. Then, without looking back:"
1. Say the video's main idea in one sentence, in your own words.
2. Explain each idea you learned to a friend in two or three sentences, with the example the video used.
3. List every word, label or number you can't explain (what is "the saved work"? a tenth of what?), every claim you had to take on faith ("it says X but not why"),
   and every moment you'd scroll away, with the line.
Only after that, it gets the 3 questions from `lesson.md` (questions only, not the answers) and answers each from memory.
It writes everything to `gate.md`'s student section; it does not grade itself.

## 2 Critic (strong)
First, G0: if `viewer.md` holds anything the viewer wouldn't see (notes, lesson ids, rows, shot numbers), stop and return `gate: fail (viewer.md)`; nothing else is graded.
Reads everything above plus the student's answers. Grade the student's **whole** notes, not only its answers to the 3 questions.
Tick every entry of `lesson.md`'s Lesson check against the script yourself; a wrong entry is the lesson it claims to meet, broken.
**Count fixes, not rows:** one root cause (one line or one gap, fixed by one rewrite) is one must-fix or should-fix, listing every row it touches.
**Word budget:** style A about 150 spoken words (60 s); another style, the length its `style.md` states (about 2.6 words a second; a style without a stated length fails G0), with at most 5% over. Every fix names the line it replaces and its net words; the fixes together stay inside the budget.
**Open lessons win:** a case an open `check: gate` lesson covers is a must-fix under G12, whatever its row's severity. **Overlaps:** a correct answer whose reason was missing is G8's, not G3's; a takeaway dropping a condition is G10's. Tone, hook craft and visual style are out of scope (the judge and `style.md` own them). A student's wish for more detail than the length can hold (who built a tool, how it works inside) is not a fail by itself: judge against the 3 questions, the rows and the budget. When the student repeats a spoken reason correctly and then asks how it works inside, the wish rule wins over G3's "taken on faith". A condition inside the takeaway is G10's, not G8's. A safeguard that limits a trick without stopping it, never said, is G11's (should-fix) unless an open lesson names it. Brand elements (`docs/brand.md`: corner tag, "IN 60 SECONDS") are exempt from G9's on-screen number rule.
**Must-fix** rows block the gate; **should-fix** rows are fixed when they fit the word budget. Both give a rule.

| # | Check | Must-fix when | Should-fix when |
|---|---|---|---|
| G1 | **Main idea is an insight** | `lesson.md`'s main idea is a headline (it hinges on who/when/what happened) or a mechanism ("a computer checks each step") instead of what the viewer will think differently; or it runs over 25 words; or it uses an absolute word (any, no one, every, first) that no `research.md` row says | |
| G2 | **Deepest true idea** | a quoted `research.md` row supports a deeper idea that still fits the length (name it and the row); a "done, but not yet" gap in the sources is the usual candidate | |
| G3 | **The student got it** | the student's main idea differs from `lesson.md`'s (when G1 fails, compare with its core claim), it misses a question's answer, or it marks part of an answer as taken on faith; or a part of an answer key has no spoken line (tick every part against the script yourself) | it gets a question only partly (a label without what it means, a number without its base) |
| G4 | **Questions worth asking** | a question asks only what happened, who or when; every question must be how, why, or what changes for the viewer, and must ask for every part of its answer key | |
| G5 | **Shown, not asserted** | a question's answer has no picture that shows it **working**: a contrast (without vs with), a mistake caught, a count; a picture that only illustrates the claim doesn't count | |
| G6 | **Why it matters** | `lesson.md`'s reason, or the script's, is only proxies (how old, a prize, "it's huge", "most important"): it must say what changes or becomes possible, with its row | part of `lesson.md`'s reason doesn't reach the script |
| G7 | **Misconception** | `lesson.md` names none, or the script doesn't say the wrong belief out loud and correct it | |
| G8 | **No faith steps** | a core step ("so we can trust it", "so it's cheaper", "it matters because") has no reason in the same breath, and the sources give one (restating the thing is not a reason); or a condition the viewer must follow ("put it first") has no reason or no picture of what breaks without it (G8 owns this, not G5) | a side step has no reason |
| G9 | **Every line serves** | a line serves none of the 3 questions (the opening, the hook and its announcement, and the closing ask are exempt) | a label, group or named tool never explained (say what kind of thing it is in a few words); a fraction without its base; a hedge without its other case; more than 2 scroll-away moments in the body |
| G10 | **True main idea** | the main idea or the takeaway claims more than `research.md` supports, drops or contradicts a condition it needs, or uses a different unit than the picture it closes on (the claim check reads lines, not the idea) | |
| G11 | **Carry-over limits** | | an analogy, or advice carrying the lesson over to the viewer's own work, suggests something false (`research.md` "where the analogy stops") |
| G12 | **Lessons** | an open `check: gate` lesson in `docs/lessons.md` is broken (a row marked `Repeated:` is broken again) | |

## Output: `episodes/<slug>/gate.md`
First line: `gate: pass (N should-fix)` or `gate: fail (N must-fix, M should-fix)`, counting fixes (root causes), not rows. Then the student's notes and answers (verbatim), the G1-G12 table, and for every fail:
- **What**: the line or gap, and its severity.
- **Fix**: a concrete rewrite or the missing example, naming the line it replaces, so the script stays inside its word budget.
- **Rule**: if a writer could repeat it, one general rule ("Say once what a plain-word label really is, the first time you use it"), else `none`.
Pass when no must-fix is left.

## The loop
The writer fixes `lesson.md`, the script and `viewer.md` (every must-fix, and every should-fix that fits), fills `lesson.md`'s **Lesson check**, then a **fresh** student and critic run again; at most 3 rounds, then the owner decides.
Every must-fix and should-fix of every round is copied to `mistakes.md` (step `gate`) before the next round overwrites `gate.md`.
Each **Rule** becomes a lesson: in a session, the writer adds it to `docs/lessons.md` with `check: gate` (or marks an open one `Repeated:`);
in the daily run the learn job does it (`docs/pipeline/learn.md`). The writer reads every `check: gate` lesson before writing `lesson.md`, and the critic fails a repeat (G12).

## `lesson.md` (step 2b, written by the writer before the script)
```
# Lesson: <slug>
Main idea (one sentence, at most about 25 words: what the viewer will think differently; not the headline, not the mechanism):
Why it matters (to the viewer or the field, with the research.md row):
Misconception it corrects:
The 3 questions a viewer can answer afterwards (how / why / what changes, never "what happened"), each with its full answer and the picture that shows it working:
1. Q: ... / A: ... / Picture: ... [research.md row]
2. ...
3. ...
What we leave out on purpose (and why):
Lesson check (before every student run): each open `check: gate` lesson, then the line that meets it, or "n/a" and why.
For the takeaway, list every condition the main idea's trust rests on and the word that carries each.
```
