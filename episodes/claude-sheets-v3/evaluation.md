# Evaluation: claude-sheets-v3 (judge, workflow step 6)

Judged 2026-11-27 by an agent that did not make the episode, against the owner's L92 pace rules (`docs/pipeline/episode.md`, `docs/lessons.md` L92), `docs/brand.md`, `claims.md` and `research.md`.
Evidence: `video.mp4` (50.27 s, 1080x1920, video and audio), 1 frame a second tiled into three contact sheets, `thumbnail.png`, `film/vo_lines.json` (line timings), `film/script.txt`, `captions.srt`, `upload.json`.
Pace was measured per line as words / (end - start) from `film/vo_lines.json`.

## Criteria

| criterion | status | evidence |
|---|---|---|
| Start: story first, no unexplained labels | MET | 0-3 s: the teacher's "answers only" page; the voice opens on the teacher; "TOTAL ?" robot at 3-8 s matches "check an AI total". The corner tag "CLAUDE SHEETS · 60s" is brand. |
| One idea per line | MET | 14 lines, each one point (`film/vo_lines.json`). |
| No line over 3.2 words a second | NOT MET | 10 of 14 lines are over: n0 3.38, n1 3.56, n2 3.80, n5 4.25, n6 3.62, n8 3.44, n9 3.41, n10 3.40, n12 4.03, n13 3.48. Only n3 3.08, n4 3.04, n7 3.12, n11 3.15 pass. 119 words total is within budget; the speaking rate (Kokoro speed 1.2) is the problem, not the word count. |
| ~1.5 s hold at each beat change | MET | Gaps between beats are 1.75 s (e.g. 6.06 to 7.81, 9.91 to 11.66); the picture holds in the sheets. |
| ~120-125 words | MET | 119 words (`script.md`). |
| End: no new feature after the payoff | MET | After the skipped-Q4 payoff (34-38 s) only the recap "HIDES / SHOWS THE WORK" (39-43 s) and the subscribe card follow. Edit outlines, undo card and version history moved to the description. |
| Recap in plain words, reusing the story | MET | "So, plain totals hide the work. Formulas show it." and the card "HIDES THE WORK / SHOWS THE WORK"; no "paid-plan beta" jargon. |
| Every spoken claim backed and narrowed | NOT MET | See must-fix 2 and 3. `claims.md` is still the v2 table (header "claude-sheets-v2") and was not re-run for the v3 lines; two new lines undo v2's own narrowing fixes (#3, #4) and break `research.md` narrowing rule 7 ("many" math teachers, "can help"; never "every teacher" or "always"). |
| Every on-screen claim backed | NOT MET (minor) | "THE WRONG STEP SHOWS" (9-11 s) is absolute; [P] says showing work "can help". It is carried by v2 row 21 ("the teacher will see..." in the Mica example) so it is borderline; listed as should-fix. Other labels ("OUR EXAMPLE", "PAID PLANS", "CLAUDE SHEETS · BETA", "=SUM(Q1:Q3)", "SKIPPED Q4", "ALL 3 SHOW THEIR WORK") map to v2 rows 22-29 and hold. |
| Description claims backed | MET | Every quoted sentence in `upload.json` matches `claims.md` rows 39-41 and the [A]/[B]/[P] quotes. |
| `upload.json` has no '<' or '>' | NOT MET | Description: "...turned on in Organization settings > Artifacts." (YouTube rejects '<' and '>' in descriptions). |
| Captions match the voice | MET | `captions.srt` text equals `film/vo_lines.json` word for word; cues follow the line timings (+0.5 s offset). |
| Thumbnail | MET | "LEARN CLAUDE SHEETS IN 60 SECONDS" brand card, stickman with a worked sum; no claim beyond the brand. |

## Must-fix

1. **0:00-0:48, pace (L92).** 10 of 14 lines are over 3.2 words a second (worst: 0:19.8 "To check one, you redid the math." 4.25 w/s; 0:44.5 "Want the next one?" 4.03 w/s; 0:07.8 "Showing your work shows where a mistake happened." 3.80 w/s; 0:23.2 "Now, Claude Sheets, a beta on paid plans..." 3.62 w/s; 0:03.0 "But before Claude Sheets, how could you check an AI total?" 3.56 w/s). Re-voice slower (e.g. Kokoro speed 1.0) or split the long lines, then re-measure every line.
2. **0:00-0:03, "Your teacher never took 1 answer without the work."** Unbacked absolute: [P] says "Many math teachers ask their students to show their work"; `research.md` narrowing rule 7 forbids "every teacher"/"always", and v2 `claims.md` #3 already narrowed "your" teacher. Say e.g. "Many math teachers ask you to show your work."
3. **0:07.8-0:10, "Showing your work shows where a mistake happened."** [P]: "Showing work can help you figure out where you made a mistake." v2 `claims.md` #4 already narrowed this to "can". Say e.g. "Showing your work can show where a mistake is."
4. **upload.json description, line 3:** "Organization settings > Artifacts" contains '>'. Replace with e.g. "Organization settings, then Artifacts".
5. **claims.md:** re-run the claim check for the v3 script and picture (the table still covers v2 lines and shots only), and mark each fix.

## Should-fix

- 0:09-0:11, label "THE WRONG STEP SHOWS": "THE WRONG STEP CAN SHOW" matches [P]'s "can help".
- 0:30-0:32, the meter box still reads "TOTALS WITH NO WORK SHOWN / OUR EXAMPLE" while its check says "ALL 3 SHOW THEIR WORK": the title contradicts the result for a second. Change the box title once the formulas arrive (e.g. "OUR EXAMPLE").
- Description title says "Explained Slowly": fine, but drop it if the re-voice is still quick.

VERDICT: not ready

## Round 2

Judged 2026-11-27 by an agent that made neither the episode nor round 1, against the L94 pace rules (`docs/pipeline/episode.md`), `docs/brand.md`, `claims.md` and the three sources themselves.
Evidence: `video.mp4` (57.27 s), the mid-shot frame sheet of the final mp4, frames 33-41 s at 2 fps, `thumbnail.png`, `film/vo_lines.json`, `film/vo.wav` (55.32 s), `film/script.txt`, `film/vo_script.txt`, `script.md`, `captions.srt`, `upload.json`, `claims.md`; [A] [B] [P] re-fetched with `curl -sL` today and each quote found with `str.find`.

### Round-1 items

| item | status | evidence |
|---|---|---|
| 1. No line over 3.2 words a second | MET | words / (end - start) from `film/vo_lines.json`: n0 3.12, n1 3.15, n2 3.10, n3 2.73, n4 2.63, n5 3.10, n6 3.07, n7 2.78, n8 2.95, n9 3.04, n10 3.11, n11 2.71, n12 3.10, n13 3.07; max 3.15. The timings are real: `silencedetect` on `film/vo.wav` finds all 13 line gaps within 0.05 s of the JSON (e.g. 7.94-9.72, 25.74-27.52, 49.07-50.85), plus one comma pause inside n7. 124 words. |
| 2. Absolute hook claim | MET | 0:00.5 "Many math teachers ask you to show your work, not just 1 answer." [P] "Many math teachers ask their students to show their work" (found). |
| 3. "shows where a mistake happened" | MET | 0:10.2 "Showing your work can show where a mistake happened." [P] "Showing work can help you figure out where you made a mistake." (found). |
| 4. '<' or '>' in `upload.json` | MET | `grep -n '[<>]' upload.json`: no match (exit 1). Now "Organization settings, then Artifacts". |
| 5. `claims.md` for v3 | MET | v3 table at the top covers every spoken line and the new labels; the other labels on screen ("CLAUDE SHEETS · BETA", "PAID PLANS", "=SUM(Q1:Q4)", "ALL 3 SHOW THEIR WORK", "SKIPPED Q4", "HIRING BUDGET", "OTHER TOOL", "PASTE") are carried by v2 rows 22, 25, 27-29. |
| Should-fix: "THE WRONG STEP CAN SHOW" | MET | Frame sheet, beat 1: label reads "THE WRONG STEP CAN SHOW". |
| Should-fix: meter title vs tick | MET | Frames 33.0-34.0 s: "TOTALS WITH NO WORK SHOWN" while the meter drains as the fx cells arrive; from 34.5 s the box reads "OUR EXAMPLE" with the tick "ALL 3 SHOW THEIR WORK". The old title never sits next to the tick. |

### Full pass

| criterion | status | evidence |
|---|---|---|
| Start: story first | MET | 0-3 s "ANSWERS ONLY" page, voice opens on math teachers; "TOTAL ?" robot under the question line. |
| One idea per line; ~1.5 s hold at beat changes | MET | 14 lines; beat gaps 1.75 s in `vo_lines.json`, ~1.78 s measured in `vo.wav`. |
| End: no new feature after the payoff | MET | After "SKIPPED Q4" (about 0:39-0:44): the recap card "HIDES / SHOWS THE WORK", then the subscribe card. |
| Every spoken and on-screen claim backed | MET | Every quote behind the v3 lines and the description was found in today's copies of [A], [B], [P], including "can stay in Claude", "available on all paid plans", "Formulas stay in the cells, so you can see and check how each number was calculated", "Organization settings > Artifacts" (source text; the description paraphrases it without '>'). "For now, sheets have simple spreadsheet functionality..." is in [A], not [B]; the description's "Limits" paragraph does not name which page, and both are listed under Sources, so it holds. |
| Captions match the voice | MET | Joined caption text equals the joined `vo_lines.json` text exactly; cues run 0.5-55.56 s, each start before its end; `film/vo_script.txt` equals `film/script.txt` word for word. No speech recognizer is installed here, so the audio itself was checked by its line gaps, not transcribed. |
| Length | MET | 57.27 s, under 60 s. |
| Thumbnail | MET | "LEARN CLAUDE SHEETS IN 60 SECONDS" brand card; the sum 48 + 36 = 84 is right. |

### Must-fix

None.

### Should-fix (optional)

- None that blocks. The title's "Explained Slowly" now fits: the fastest line is 3.15 words a second.

VERDICT: ready
