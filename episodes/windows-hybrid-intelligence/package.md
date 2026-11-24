# Package: windows-hybrid-intelligence (workflow step 2)

Made 2026-11-24 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses Copilot or a chatbot at work on a Windows PC; curious, not an engineer.
- **The pain today:** your Downloads folder holds 20 files you want sorted; to get Copilot's help you upload them one by one, then drag each into its folder yourself: 40 steps (our example; today Copilot mostly works in the cloud on what you give it, `research.md` rows 18, 19).
- **The moment they're paying for:** soon, on a Copilot+ PC, you ask once and say yes; Copilot reads the files on your PC and sorts them on your device: 2 steps (`research.md` rows 4-7, 9, 10; coming months, with your permission).

## The 10 titles
Gate first (L21): `title.py` counts only digits and dates, so every title carries a digit. Then `python3 .claude/skills/yt-package/title.py titles.txt`.
Thumbnail words: LEARN, WINDOWS, HYBRID, INTELLIGENCE, IN, 60, SECONDS; besides the topic's name, no "in", "learn", "60" or "seconds" in the title.

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Windows Hybrid Intelligence: Copilot Uses Your PC, Oct 2026 | 59 | 98 | mobile; drops "with your permission", "soon" |
| 2 | Windows Hybrid Intelligence: 20 Files, 2 Steps, No Uploads | 58 | 94 | mobile; "No Uploads" says more than the sources (the cloud is still used when needed) |
| 3 | Windows Hybrid Intelligence: 40 Steps Down to 2 With Copilot | 60 | 94 | mobile; at the 60 cut |
| 4 | Windows Hybrid Intelligence: Copilot Works on Your PC (2026) | 60 | 94 | mobile; sells the feature, not the moment |
| 5 | Windows Hybrid Intelligence: Sort 20 Files Without Uploading | 60 | 94 | mobile; "without uploading" reads as "nothing leaves the PC" |
| 6 | Windows Hybrid Intelligence: 1 Ask, 20 Files Sorted Locally | 59 | 94 | mobile; "locally" unsure per task |
| 7 | Windows Hybrid Intelligence: Copilot Sorts 20 Files on Your PC | 62 | 76 | length |
| 8 | Windows Hybrid Intelligence: Local or Cloud, Task by Task, 2026 | 63 | 76 | length; no moment |
| 9 | Windows Hybrid Intelligence: Stop Uploading 20 Files to Copilot | 63 | 76 | length |
| 10 | Windows Hybrid Intelligence: Your PC Does Part of the AI Work, 2026 | 67 | 76 | length |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN WINDOWS HYBRID INTELLIGENCE IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Windows Hybrid Intelligence: 40 Steps to 2, Soon on Copilot+** (after the claim check) | 94 | 66 | same |
| Windows Hybrid Intelligence: 40 Steps Down to 2 With Copilot (first choice, narrower) | 94 | 66 | mobile, duplicate (windows, hybrid, intelligence), thumb-length 7 (by design) |
| Windows Hybrid Intelligence: 20 Files, 2 Steps, No Uploads | 94 | 66 | same |
| Windows Hybrid Intelligence: Sort 20 Files Without Uploading | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Windows Hybrid Intelligence: 40 Steps..." and the subject survives.

## Chosen
**Windows Hybrid Intelligence: 40 Steps to 2, Soon on Copilot+** (60 characters; subject at character 1; numbers 40 and 2; no thumbnail word besides the topic's name; alone 94, pair 66 with the by-design issues only).
Changed after the claim check (`claims.md` row 43, narrower): the first choice "Windows Hybrid Intelligence: 40 Steps Down to 2 With Copilot" read as a Microsoft count and dropped "soon" and "Copilot+ PCs"; `title.py` re-run on the new one (L26).
The promise is the viewer's moment: the same 20-file job, from 40 of your steps to 2. The 40 and 2 are our example (said in description line 2), inside the maker's "organizing files" (row 7).
The first seconds confirm it: the hook names Windows hybrid intelligence and corrects the belief that sorting 20 files with Copilot costs 40 steps; "soon" and "Copilot+" are in the title and the hook.

## Thumbnail text
**LEARN WINDOWS HYBRID INTELLIGENCE IN 60 SECONDS** (brand card: "LEARN WINDOWS" small, "HYBRID / INTELLIGENCE" huge amber, the red tilted sticker).
Picture: the mascot, left; bottom centre, a PC monitor with a small teal-screen robot inside it sorting file icons into folders, a small cloud above it joined by a dotted arrow; nothing in the bottom-right corner. No logos.

## The 3 searches this video should win (`/yt-seo`, picked after the title, L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| windows hybrid intelligence | Windows, Hybrid, Intelligence | line 1 |
| windows hybrid intelligence copilot | Windows, Hybrid, Intelligence, Copilot | line 1 |
| copilot windows | Copilot, Windows | line 1 |

Proposed first two description lines (step 5):
1. `Windows hybrid intelligence explained in 60 seconds: announced October 7, 2026, Windows runs each AI task on your PC or in the cloud, and on Copilot+ PCs Copilot will use your files and act on your PC, with your permission (expected to begin rolling out in the coming months).`
2. `Our example: sorting 20 files with Copilot. Today, 20 uploads and 20 moves: 40 steps; soon, on a Copilot+ PC, you ask and say yes: 2 steps. The 40 and 2 are our illustration, not Microsoft's numbers.`
