# Mistakes: claude-meetings

One row per thing redone (`docs/pipeline/episode.md`, "Mistakes"). Minutes from the start of the run (00:26 UTC, 2026-11-23).

| when (min into the run) | step | what went wrong | cause | minutes lost | lesson it broke (L-id) or new |
|---|---|---|---|---|---|
| 8 | 1 research | WebFetch returned paraphrased summaries instead of the pages' sentences, so quotes could not be taken from it | the fetch tool summarises with a small model | 2 (re-fetched with curl and stripped the HTML) | new |
| 13 | 2 promise | First round of 10 titles all scored 76: no number, date or name the tool counts | wrote titles before checking the `no-number` rule | 2 | new |
| 16 | 3 script | First draft of the script was 203 words (about 66 s), then 186 | wrote all the beats before counting | 2 | new |
| 20 | 3b claim check | 9 narrower claims, 0 wrong: "in beta since Nov 12" (rolling out since), "looks it up in your connected tools" (the maker's example says only "asks for their approval to look it up"), "so no one has to" (maker: "no one on the call"), "ACTION ITEMS" shown during the call (maker: on the page after), "PLAN WRITTEN" and a finished, checked plan in shots 5, 26, 29 (maker: teammates keep editing), and their on-screen twins | words and pictures written a step looser than the quoted sentences | 4 (words fixed before voicing) | L17 (caught in time, as it asks) |
| 45 | 4 make (stills) | 10 stills wrong before the build: torsos floating above tile bottoms, shot 6 broken arm, shot 10 all three tiles shrugging, shot 14 title overflowing its card, shot 21 cards touching the edge and label over the CLAUDE pill, shot 22 "YES" over its check, shot 25 cards clipped, shot 28 a lone "·" line, shot 29 no warm light, shot 30 Subscribe text over its triangle | new drawings (call grid, doc, chat strip) laid out without measuring text and panel sizes | ~8 | new |
| 55 | 4 make (audit) | First full build ISSUES 17: 15 pops (shot 4 and 17 doc opening, shot 14 cards) and 2 still windows (50.5 s shot 27, 55.0 s shot 29) | panels faded in in too few frames; two shots with almost no motion | 1.2 (5-shot re-render) | new |
| 57 | 4 make (audit) | After the fix, ISSUES 5, all in shot 14; two more single-shot re-renders to reach 0 | cards still popping, replaced by easing | 1.2 | new |
| 60 | 4 make | Two more single-shot re-renders after ISSUES 0: shot 27 sweep drawn before its card, shot 22 bar card clipping "THIS PLAN" | caught by eye after the audit passed | 1.2 | new |
| 62 | 4 make (sound) | Music-to-voice gap first measured on the stems (both -17 LUFS, since Mix.write normalises each file); re-measured by hand on the mix: 16.0 dB | stem numbers don't show the mix | ~1 | L19 (followed in the end) |
| 64 | 4 make (thumbnail) | Mascot's raised hand covered a call tile; removed | layout | ~1 | new |
| 70 | 6 judge | Should-fix 1: the topic's name is not the first spoken words ("Claude Meetings" heard at about 4.9 s, after "Before, you'd waste time after every Google Meet call ...") | chose a Before/After hook built like the last episode's; L14 asks for the name first, while row 7 only checks the first sentence | 0 (not re-voiced) | L14 |
| 70 | 6 judge | Should-fix 2: Subscribe card says "NEXT IN 60 SECONDS" with no next episode's name (`docs/brand.md`) | no next episode is decided in the daily run | 0 (owner decides the wording) | L9 |
| 70 | 6 judge | Should-fix 3: `claims.md` still said "9 narrower" with no note that they were fixed | fixed the words but not the record | 1 (added "Fixes applied") | L17 |
| 72 | 5 finish | Chapter 1 titled "Plan ready before hang-up": says the plan is finished, which `claims.md` rows 21/35 ruled narrower; retitled "Plan written before hang-up" | the finisher retitled chapters without reading `claims.md` | 1 | L17 |
