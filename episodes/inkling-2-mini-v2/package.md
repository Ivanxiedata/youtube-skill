# Package: inkling-2-mini-v2 (workflow step 2)

Made 2026-11-22 with `/yt-package` and `/yt-seo`, before the script. A remake of `episodes/inkling-2-mini/` under lesson L16:
the first version's title ("12 Layers, 3 Loops, Why?") and hook sold the architecture; this one sells the viewer's moment, with the tech as the proof.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses an AI chatbot or coding assistant at work, curious, not an ML engineer; may own a Mac.
- **The pain today:** you ask your AI a hard question and watch it think out loud, line after line of "thinking...", and you sit there waiting for every line before the answer comes.
- **The moment they're paying for:** same hard question, and the model does more of the thinking in its head and writes a short note: less written thinking to wait through
  (maker's research twin: 1,731 vs 3,703 reasoning tokens, less than half, `research.md`), on your own 32 GB Mac (about 20 GB).
  Honest limit, said in the video: each word takes more work, so real speed depends on the setup (`research.md`, "Waiting, honestly"). No seconds figure: the maker gives none.

## The 10 titles
`python3 .claude/skills/yt-package/title.py titles.txt` (alone). Thumbnail words: LEARN, IN, 60, SECONDS, so no "in" in the title.

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Inkling 2 Mini: Looped AI, Less Waiting | 39 | 100 | none |
| 2 | Inkling 2 Mini: The AI That Writes Less | 39 | 100 | none |
| 3 | Inkling 2 Mini: Less Waiting on a 32GB Mac | 42 | 98 | mobile |
| 4 | Inkling 2 Mini: Looped AI, Half the Writing | 43 | 98 | mobile ("half" is the research twin's number, not the released model's) |
| 5 | Inkling 2 Mini: Why It Makes You Wait Less | 42 | 94 | mobile |
| 6 | Inkling 2 Mini: Smart Answers, Less Waiting | 43 | 94 | mobile |
| 7 | Inkling 2 Mini: An AI That Thinks Quietly | 41 | 94 | mobile |
| 8 | Inkling 2 Mini (2026): Less Waiting for AI | 42 | 94 | mobile |
| 9 | What Is Inkling 2 Mini? Less Waiting, Explained | 47 | 94 | mobile |
| 10 | Thinking Machines' Inkling 2 Mini: Less Waiting | 47 | 94 | mobile |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN INKLING 2 MINI IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Inkling 2 Mini: Looped AI, Less Waiting** | 100 | 84 | duplicate (2, inkling, mini), thumb-length 7 (both by design) |
| Inkling 2 Mini: The AI That Writes Less | 100 | 80 | duplicate, thumb-length (by design) |
| Inkling 2 Mini: Less Waiting on a 32GB Mac | 98 | 70 | mobile, duplicate, thumb-length |

The pair issues are on purpose (`docs/workflow.md`, deviations): the brand card has 7 words and repeats the topic's name, which search needs in the title.

## Chosen
**Inkling 2 Mini: Looped AI, Less Waiting** (39 characters; subject at character 1; the name's "2"; no thumbnail word besides the topic's name).
The promise: the viewer's moment, less waiting, with "Looped" as the how (and the search word the first version missed, its should-fix 1).
The first seconds confirm it: the hook names Inkling 2 Mini and says "so you wait less, but how?".

## Thumbnail text
**LEARN INKLING 2 MINI IN 60 SECONDS** (brand card). Picture: the mascot holding up a stopwatch, the teal-screen robot handing over a short note.
Pair score 84/100 (only the by-design issues).

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| inkling 2 mini | Inkling, 2, Mini | line 1 |
| looped transformer explained | Looped | line 1 (looped, transformer, explained) |
| thinking machines inkling | Inkling | line 1 (Thinking, Machines, Inkling) |

Proposed first two description lines (step 5):
1. `Inkling 2 Mini, explained in 60 seconds: Thinking Machines' open-weights looped transformer (November 20, 2026) thinks more in its head, so you wait less.`
2. `An ordinary model writes its thinking out and you wait for every line; Inkling 2 Mini's middle 12 layers run 3 times with shared weights, so it writes less.`
