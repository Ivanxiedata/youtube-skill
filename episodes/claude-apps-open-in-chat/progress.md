# claude-apps-open-in-chat progress

## Status
ready to publish (judge round 1: 0 must-fix, 1 should-fix fixed in package.md); owner watches, then upload

## Next
1. Step 7: the owner watches and listens (unjudged: pronunciation of "M C P Apps", Asana, Canva, Notion; the judge flags 0:48-0:58, where `earshot describe` once reads "a busy cafe" (z +2.7), for a listen), then `yt upload` (dry run first, then `--confirm`).
2. If the owner wants changes: words go back to step 3 (and a claim check), picture to `build.py film --out claude-apps-open-in-chat.mp4 --shots <n>`; after a re-voice, copy `film/film.json` first and re-render every shot whose cut moved (L18).

## Blockers
none

## Decisions
- 2026-11-23 (step 1): premise holds in the maker's own page (claude.com article, November 10, 2026: "Earlier this year, we launched interactive connectors to bring a small live view of tools into Claude. Starting today, where a connector supports it, you can open a tool beside your conversation or expand it to full screen..."). The release notes have no November 10 entry, so the article is the source; the January 26 article is the predecessor's. Two items, so no Deep-Research fan-out.
- 2026-11-23 (step 1): the topic's "you moved Claude's answer into the tool yourself" is not in the maker's words, so it is left out; the pain is "a small preview; the full editor in another tab" ("rather than a limited preview", "without switching tabs").
- 2026-11-23 (step 2): title "Claude Apps: Watch Claude Edit 10 Notion Tasks Live" (alone 94, pair 66 with by-design issues only); thumbnail "LEARN CLAUDE APPS IN 60 SECONDS". Counted example: ten tasks in one Notion project page (Notion is named by the maker as getting "the full editor, signed into your own account"); the "TAB SWITCHES" meter (10 before, 0 now) is our illustration, said so in the description.
- 2026-11-23 (step 3): hook "Claude apps: you think 10 Notion edits cost you 10 trips to another tab, but actually, in supported apps, you never leave the chat." (74 STRONG, digits in the scored text) + "You watch Claude make them."; corrects a belief, no "but how?" (L31). 162 words; draft voice 56.69 s, ends 56.89 s film.
- 2026-11-23 (step 3b): a fresh Sonnet claim check, 23 rows: 14 hold, 9 narrower, 0 wrong; 8 fixed in the words before voicing, the title kept with its reason (`claims.md` row 19).
- 2026-11-23 (step 4): `film/` scaffolded empty first (L30), then `script.txt` copied from the draft. `tts.py ... --voice am_michael --speed 1.2 --no-align`: 56.69 s, 15 lines, line starts/ends identical to the draft, so the beats clock was exact. Cut times `TS` = word starts + .5 s - .02 s on frames; film 58.5 s (voice laid in at .5 s; ends 56.89 s, a 1.6 s tail for the Subscribe card).
- 2026-11-23 (picture): 25 shots as beats.md. Window drawn once (`windowDraw`) and reused for the hook, BEFORE, NOW, the mini panels in shot 22 and the thumbnail. Meter "TAB SWITCHES" is whole numbers, amber -> teal by cross-fade. In the how diagram (shot 19) the tool's screen slides in from the right into Claude's frame while the MCP APPS band's amber highlight fades and the card turns teal; it does not pass through the band (the band sits under the frame): a small change from beats.md, same idea.
- 2026-11-23 (audit): first full build `ISSUES 22` = 22 x pop (frames 100-134 shot 2's tab flips, 560-611 shots 9-10's flips: a dark chat view cross-fading to the bright page, mean difference 6.0-6.6). Fix: flips over 0.7-0.75 s instead of 0.5 s; `build.py --shots 2 9 10`: `ISSUES 0`. Stills of those shots looked at again.
- 2026-11-23 (sound): the example's `audio_mix.py` laid the voice in at .3 s (its film's clock); here the clock is +.5 s, so `m.voice(VOICE, at=.5)`; fixed before delivery with `build.py --audio-only` (cuts and voice were 0.2 s apart in the first build). `MUSIC_DB = -14.5`. Gap as mixed (music x .55 vs voice, scratch script): music -32.9 LUFS, voice -16.8, gap 16.1 dB. `video.mp4` 58.514 s, -17.0 LUFS, true peak -4.4 dBTP, LRA 1.4. `earshot describe`: no noise or hum tag (top: a knock on a door +2.0, a mouth pop +1.9; voice-over narration +3.8; Speech 0.74, Music 0.74). `earshot timeline --video`: 24 cuts, 62% with an onset within 1 frame (chance 43%), 100% within 100 ms.
- 2026-11-23 (thumbnail): `film/thumb.js` from prompt-caching-v2: mascot left with the headset, "LEARN" small, "CLAUDE / APPS" amber, red tilted "IN 60 SECONDS" top right, bottom centre one window (chat strip left, task list right, 7 of 10 rows teal ticked), bottom-right corner empty. 1280x720, 614 KB; looked at at 160 px wide: promise and topic read.
- 2026-11-23 (step 5): `captions.srt` from `vo_lines.json` + .5 s (15 cues, "M C P" written MCP). `chapters.py` found 0:00 / 0:10 / 0:20 / 0:31 / 0:45 (10, 10, 11, 14, 13 s); retitled with the "supported" condition kept. `upload.json`: title exactly "Claude Apps: Watch Claude Edit 10 Notion Tasks Live"; lines 1-2 verbatim from package.md; every sentence carries where-supported / rolling out / web and desktop / all plans / new Claude / you approve / small group to start / 10 and the meter are our example / developer preview; 15 tags, 3 hashtags.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-23 daily run: steps 1-3b: research.md, brief.json, package.md, beats.md, script.md, claims.md (9 narrower, fixed or kept with reason).
- 2026-11-23 daily run: steps 4-5 made: video.mp4 58.514 s, audit ISSUES 0 after one fix round, -17.0 LUFS, gap 16.1 dB, thumbnail.png, captions.srt, upload.json; judge next.
- 2026-11-23 daily run: step 6: a fresh Opus judge wrote evaluation.md, `ready to publish`, 0 must-fix, 1 should-fix (search 3 "mcp apps claude" lacked MCP in the title); fixed in package.md (search 3 now "claude apps notion"), words only, no re-judge needed.
