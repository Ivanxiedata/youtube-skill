# copilot-autopilot progress

## Status
ready to publish (judge round 1: 0 must-fix, 2 should-fix); waiting for the owner

## Next
1. Owner watches video.mp4 and thumbnail.png, listens to "Entra", "Frontier" and "Copilot Autopilot", then says ship it (step 7).
2. Optional should-fixes from evaluation.md: drop the "1 GOAL" card from film/thumb.js (it repeats the title) and re-render thumbnail.png; in shot 7 show the stall on the route (lit to waypoint 4, meter at 4 prompts typed, 6 grey under "WAITING") and re-render only shot 7 (`build.py ... --shots 7`, `--out` a bare name inside film/), re-audit, re-copy video.mp4. Then a re-judge of rows 2, 9, 13-15.
3. film/ build output is gitignored: to re-render, scaffold with new_film.py in scratch, re-voice film/script.txt with tts.py, fetch the music, then build.py.

## Blockers
none

## Decisions
- 2026-11-24: topic name "Copilot Autopilot" (title, thumbnail, corner tag), because Microsoft calls it Autopilot in Copilot and "Microsoft Autopilot" alone collides with Windows Autopilot, an older device-setup product.
- 2026-11-24: the video says "rolling out to Frontier customers", never "announced at Ignite", because Autopilot was introduced Sep 25, 2026 (previously Scout) and only its Frontier rollout began at Ignite on Nov 17.
- 2026-11-24: before = Copilot Chat, not all of Copilot, because Cowork already ran one task end to end when asked (Microsoft's own FAQ).
- 2026-11-24: story = a plane's autopilot (the product's own name); counted example = our two-week supplier review with 10 follow-ups inside Microsoft's own supplier-review example; meter "PROMPTS YOU TYPE" 10 vs 1 (checks you approve are never counted on it, L34).
- 2026-11-24: proof = Microsoft's own number, the last 30 days of mail, meetings, chats and files it gets its bearings from; no time or money saving claimed, because Microsoft gives none.

- 2026-11-24: the 2 should-fixes left for the owner, because the run's fix round is for must-fix rows only.

## Log
- 2026-11-24 develop (daily run): steps 1-3b: research.md, brief.json, package.md, beats.md, script.md, film/script.txt (153 words, draft voice 55.8 s), claims.md (11 narrower fixed), mistakes.md.
- 2026-11-24 daily run (steps 4-5, maker): voiced (55.67 s, hook line ends 9.2 s film, "Here's how." at 9.7 s, laid in at 0.5 s), film.js with 21 shots cut to vo_lines.json and the measured pauses, one full build (audit ISSUES 1: shot 1 left-hand jump, fixed, shot 1 re-rendered, ISSUES 0), audio-only remixes for music -16 dB (gap 16.0 dB as mixed) and cut brushes (78% of cuts within 1 frame), video.mp4 58.4 s, -17.0 LUFS, true peak -3.7 dBTP, thumbnail.png, captions.srt, upload.json (4 chapters, 4897 chars).
- 2026-11-24 develop (daily run): step 6: judge (opus) ready to publish, 0 must-fix, 2 should-fix (thumbnail card repeats "1 Goal"; shot 7 stall reads weakly); mistakes.md current.
