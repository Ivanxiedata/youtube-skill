# mcp-stateless progress

## Status
v2 steps 4-5 done; step 6 (judge) next

## Next
v2 follows `docs/workflow.md` (branch `workflow-v2`, PR #11). Steps 1-5 are done: `research.md`, `brief.json`, `package.md`, `beats.md`, `script.md`, `film/script.txt`, the voice, and now `film/film.js` (28 shots), `video.mp4` (60.000 s), `thumbnail.png`, `captions.srt`, `upload.json`.
`evaluation.md` is still the **v1** scorecard (the sound-on-cuts, music-level and Next-line rows in it are obsolete). v1 is kept at `/Users/ivanxie/orca/youtube-skill-originals/mcp-stateless/` and tag `ep-mcp-stateless-v1`.
1. **Step 6:** a fresh agent that did not make this episode judges it per `docs/roles/evaluator.md` (20 rows) and rewrites `evaluation.md`. Evidence to re-run: `title.py --title "Does MCP Still Need Sessions in 2026?" --thumb "LEARN STATELESS MCP IN 60 SECONDS"`, `hookscore.py`, `earshot measure|describe|timeline --video video.mp4`, `chapters.py captions.srt`, `film/contact_sheet.jpg`, the build log's audit.
   Numbers from the step-4 run for that agent to confirm: audit `ISSUES 0`, 60.000 s, 28 shots, -17.1 LUFS, true peak -4.4 dBTP, noise floor -40.6 dBFS, no noise or hum tag, `timeline` 71% of 28 cuts within 1 frame (93% within 100 ms), chapters 0:00 / 0:11 / 0:25 / 0:37 / 0:47.
2. **What the picture does not show as `beats.md` wrote it** (closest drawing used; judge as should-fix at most): shot 2 has no apron to take off (he walks out with the "YOUR SESSION" bubble over his head); shot 20 has no queue at the door (a "BUSY DAY: + SERVERS" card and two waiters rising behind the counter); shots 7-8, 16 and 23 use the big desk monitor for "the laptop";
   shot 6's "booths" are the diner's tables. Listen by ear (earshot does not transcribe): pronunciation of "MCP" and "July twenty-eighth" is the owner's to judge.
3. **After the judge:** a must-fix on words goes back to step 3 (re-voice, then rebuild with `build.py film --out mcp-stateless.mp4`); on picture or sound, to step 4. `build.py ... --shots N` re-renders only shot N; `--audio-only` remixes in about two minutes.

## Blockers
none

## Decisions
- 2026-11-20: Premise checked against primary sources before anything else, because it came from an unverified scan. It holds:
  MCP spec 2026-07-28 removed the `initialize` handshake (SEP-2575) and protocol-level sessions / `Mcp-Session-Id` (SEP-2567); both SEPs are Final,
  and 2026-07-28 is the *current* protocol version (versioning page), released July 28, 2026 (maintainers' blog). The video says "shipped".
- 2026-11-20: Predecessor is MCP revision 2025-11-25 (handshake first; a server MAY assign `MCP-Session-Id`). Said as "could be given a session ID", because the ID was optional.
- 2026-11-20: Read the maker's own documents directly instead of the Deep-Research fan-out (two items), as Episode 0 did.
- 2026-11-20: Story: a diner (everyday life). Customer = AI app, waiter = MCP server instance, handshake = `initialize`, table number = session ID,
  order in the waiter's head = session state on one instance, complete order slip = self-describing request, ticket for your basket = explicit state handle (SEP-2567's own `create_basket()` example).
  Chosen because restaurants are universal and each piece maps onto a real protocol element. Limits of the analogy are in `research.md`.
- 2026-11-20: Costume: a paper diner cap and bow tie, drawn after `actor()` in the head/body transforms (`cap`, `bowTie` in `film.js`), the way Episode 0 drew `bicorne`.
- 2026-11-20: Hook: five scored with `hookscore.py`; kept "You lose your whole order when your waiter goes home. That is how MCP worked until July 28, 2026." (73, STRONG; next best 56).
- 2026-11-20: Voice `am_michael`, speed 1.2, `--no-align`; 174 words, 56.95 s, laid in at .3 s; film 59.0 s. `script.txt` = `script.md` sections, one line each, a blank line (0.95 s) only before `new`; the date is spelled "July twenty-eighth, twenty twenty-six" for the voice.
  Phoneme check (`kokoro_onnx.tokenizer.Tokenizer().phonemize`): "MCP" -> ˌɛmsˌiːpˈiː (letters, as wanted), "session ID" -> sˈɛʃən aɪdˈiː; no respelling needed.
- 2026-11-20: No "Next in 60 seconds" line on the end card, because no next episode is decided (coordinator's brief).
- 2026-11-21: 31 shots in 59 s (1.9 s average); three places on one clock: diner, studio, board. Cards with spoken words removed where the board already shows them ("no handshake", "no session ID").
- 2026-11-21: Sound on picture cuts: a soft sampled cloth brush on the cuts that change place (Episode 0's should-fix), plus steps, door, paper, a service bell and ticks; no noise beds.
- 2026-11-21: Canvas state must not leak between frames: a `lineCap` set without save/restore on the wall layer made frame 354 differ after a jump (audit "not deterministic"). Every stroke style change in film.js now sits inside save/restore. Engine lesson worth adding to docs/lessons.md.
- 2026-11-21: A `//` comment inserted into one of film.js's long one-line functions swallowed the rest of the line ("FILM is not defined"); use `/* */` inside lines and `node --check film/film.js` before a build.
- 2026-11-21: Music level: same `MUSIC_DB = -13.5` as Episode 0 for a consistent brand mix. Integrated stems put it 12.3 dB under the voice, not the 16 dB Episode 0 recorded; the method behind Episode 0's number is not written down. Left for the owner's ears (should-fix in `evaluation.md`).
- 2026-11-21: Title "Why MCP Threw Away Sessions in 2026" (100/100 alone, 84/100 with the thumbnail: it repeats "MCP" and the template's 6 words exceed the tool's 3). The brand template overrides the word count, as in Episode 0.
- 2026-11-21: Owner said the opening was unclear: viewers must know the topic in the first second. Cut 2: new first line "MCP just stopped remembering you. You would lose your whole order if your waiter went home, and that is how MCP worked until July."
  (hookscore 61 WORKABLE, down from 73 because the date left the spoken hook; the owner chose it; the calendar still shows July 28), and a title card as shot 0 (frames 0-67, 2.27 s, cut not faded):
  "LEARN / STATELESS MCP / IN 60 SECONDS" in the thumbnail's style, corner tag on. It ends 0.02 s after "you" (2.249 s).
- 2026-11-21: Retiming method in `film.js`: the old shots keep their old clock. `FILM.draw` hands each shot `t - OFS(s)` (hook shots 1-3: +2.867 s, calendar shot: +2.0 s, shot 5 on: +0.933 s = the longer hook), so no time constant in the film changed;
  only `NEWC` (the real cut list), the `say()` events (+HK / +D), and the two hook cards (shortened to finish fading before their cut) moved. The first hook shot starts at old t = -0.6 s (he just stands) to fill the longer line.
  Voice is 0.927 s later after the hook, picture 0.933 (28 frames), so 6 ms apart. `fadeIn` is 0 so frame 0 is the card. `dur` 60 (last cut 1800).
- 2026-11-21 (v2): Rebuilt to `docs/workflow.md` because the owner replaced the process; v1 kept for comparison (originals folder, tag `ep-mcp-stateless-v1`).
- 2026-11-21 (v2) step 1: research re-checked against the live changelog, versioning page, both SEPs, both transport pages and both blog posts; it holds.
  Fixed two wordings in `research.md` (`server/discover` is mandatory for servers and optional for clients; an old client's session ID is SHOULD-ignored),
  added SEP-2567's resumption row (the handle lives in the chat transcript) and a numbers table, so every number or date in the video is a row.
  The video's length ("60 seconds") is not given a URL in `brief.json`: it is our own measurement, not a claim about MCP.
- 2026-11-21 (v2) step 2: title "Does MCP Still Need Sessions in 2026?" (100 alone, 88 with the brand thumbnail; the two issues are the by-design ones).
  Pattern B (the study's strongest for an infrastructure change); it names the "before", and the thumbnail ("LEARN STATELESS MCP IN 60 SECONDS", unchanged) promises the answer.
  v1's "Why MCP Threw Away Sessions in 2026" scores 84 in the pair: no open question. Searches: stateless mcp, mcp sessions removed, mcp 2026 spec changes (`package.md`).
- 2026-11-21 (v2) step 3: hook "MCP before July 28, 2026: your server quit, you lost your order; now any server takes it, but how, and why, in 60 seconds?"
  hookscore 100 (v1 61): one sentence, topic first, before -> after, only true figures (the release date, the video's length). Not "just dropped": the change is almost four months old (July 28 to November 21).
  Story kept: the diner, because every piece maps onto a protocol element; added the true double meaning of "server" (waiter and machine). Considered a call centre (case number = handle)
  and dropped it: people know being passed around, not being pinned to one agent, so the "before" would read backwards.
- 2026-11-21 (v2): "Why it matters to you" made concrete for a non-engineer: add servers on a busy day, a server that quits doesn't stop you, and the ticket survives a closed app or another device (SEP-2567 resumption, new in v2).
  The payoff repeats the hook's two questions and answers them ("How? ... Why? ..."), so the promise is delivered out loud.
- 2026-11-21 (v2): voice fitted in three trims (64.7 s -> 60.3 -> 59.35 -> 58.35 s, 166 words): the date is said once (hook) and "The new MCP drops both" replaces the repeated date, short sentences merged (each sentence break costs 0.3 s).
  Phoneme spellings as v1 ("MCP" as letters needs no respelling); dates and "60" written out in `film/script.txt`; one blank line (beat gap) only before `new`, as v1.
- 2026-11-21 (v2): the mascot stays the waiter (paper cap, bow tie), the customer is v1's guest at table 12; three places as v1 (diner, studio, board). No "Next" line: no next episode decided.

- 2026-11-21 (v2) step 4, picture: `film.js` rewritten on one clock of 28 shots (`CF` = the cut frames of `beats.md` "Shots", `ST(i)` = shot i's start second, `inS(t,a,b)` a time window of shots): the v1 `OFS`/`HK`/`D`/`NEWC` offsets are gone, every state change is a function of film time and sits on a cut frame.
  Kept from v1: the diner, the waiters with paper cap and bow tie, the studio, the board, the title card, the corner tag, the slip, the subscribe button. New: the calendar's "BEFORE" tab, the "YOUR SESSION" bubble with burger and fries, the neon DINER sign, the tray with three tool icons, the server boxes and the red string that snaps, night-and-morning with a phone showing "ticket #42", the HOW?/WHY? cards with teal checks, the STATELESS pill, top-left tabs (NOW, BEFORE, NEW).
  Words on screen are only those in `beats.md` (the old "any request -> any server", "memory: out of the server", "does not know you", "like an order slip" are gone). The slip's three lines are the beat's: "version 2026-07-28", "what the app can handle", "burger, fries".
- 2026-11-21 (v2): the mascot is out of shots 3-4 on purpose: he went home in shot 2, so "any server takes it" is another waiter (w3). The counter was extended to x = -340 for five staff (w4 and w5 rise in shot 20). In shot 25 the slip passes mascot -> w2 -> w1 -> w4; in shot 26 the waiters swap places in five pairs.
  Shot 13 ends zoomed out on the whole board (BEFORE left, NEW right, one frame) instead of sliding to the NEW half only, so "side by side" is in one frame; shots 15, 17, 18 then work the NEW half.
- 2026-11-21 (v2): the full "BEFORE" and "NEW" markers: calendar tab (1), top-left tab BEFORE (9-12), tab NEW on the slip shot (14), "NEW" tags on the Request node, the slip and the ticket, header "NEW · MCP 2026-07-28 · the current version".
- 2026-11-21 (v2) step 4, sound: the cut sound is a cloth brush on every cut, stronger on cuts that change place (15 of 27), lighter inside a place; plus door open and shut, steps, paper, a bell, a sticker stamp, a string snap, soft ticks. No noise beds (L2).
  Music `MUSIC_DB = -14.5`: measured by writing the voice stem and the music stem as mixed and running `ebur128` on each: -16.7 and -31.9 LUFS at -13.5 dB (gap 15.2), so -14.5 gives 16.2 dB under the voice, the brand number. v1's "12.3 dB" came from a different method (not written down); this one is.
- 2026-11-21 (v2): hook and corner-tag wording unchanged; title card runs 0-2.17 s (65 frames), zoom 2.5%; the first spoken word "MCP" is at 0.30 s.
- 2026-11-21 (v2) step 5: `captions.srt` = 26 cards (script.md's wording, numbers as digits); card starts and ends come from `film/align.json` (word times estimated inside each line, `--no-align`) snapped to the exact line starts and ends in `film/vo_lines.json`, plus the 0.3 s voice offset.
  `chapters.py` found 0:00, 0:11, 0:25, 0:37, 0:47 (all at least 10 s); retitled "Why old MCP lost orders", "How old MCP pinned you", "New MCP: the order slip", "Why it matters to you", "How, why, and stateless".
  `upload.json`: title exactly "Does MCP Still Need Sessions in 2026?" (37 characters); description lines 1-2 are `package.md`'s, then the changelog link, the chapters, then the long version (status, the diner story, the takeaway, sources, the "invented examples" note, the music credit) and 3 hashtags; 15 tags.
  "ticket 42" is spelled without the hash in the description so `#42` is not a fourth hashtag. "The ticket survives another device" is qualified "in apps that save chats" (SEP-2567 Resumption).
- 2026-11-21 (v2) engine lessons (worth adding to `docs/lessons.md`): (1) earshot's sync counts an onset, and a sampled brush swells for 90-110 ms: laid on the cut it measured 32% of cuts within 1 frame; laid 125 ms early (cloth2) or 65 ms early (cloth4) it measures 71% (v1: 23%). Look at each sample's attack before placing it.
  (2) The audit's "pop" is a mean frame difference over 6: a pan of 430 px in 1.5 s, a 2x zoom in 1.8 s and a full-screen dim lifted in 0.25 s all trip it; use about 150 px, 1.6x in 2 s and 0.5 s. (3) "hand jump" is over 40 px a frame: lowering a raised arm needs 0.5 s, and a 1 s brisk walk needs the arm swing damped (0.55) and a shorter path.
  (4) `contact()` only when the hand has fully arrived (the blend is over), or the audit measures the blend. (5) Draw a held prop in the layer under the character so the hand wraps over it. (6) `thumb.js` calls `slip()` from `film.js`: changing the slip changes the thumbnail (re-render it).
  (7) A card crossing a cut reads as a glitch: every card's fade-out ends 0.04 s before its shot's cut (`out(i)`); a dim may stay to the cut.

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-20 ep-mcp-stateless: claimed; premise verified from the MCP spec, changelog, SEPs and the maintainers' blog; script, voice.
- 2026-11-21 ep-mcp-stateless: film.js (diner, studio, board), stills checked, research.md, brief.json, thumbnail, captions.srt, upload.json; first build: 18 audit issues (state leak on a canvas context, a hand jump, a fast pan) fixed, full rebuild running.
- 2026-11-21 ep-mcp-stateless: rebuilt from scratch, then shots 20 and 23: audit ISSUES 0; `video.mp4`; earshot measure/describe/timeline/sheet; `evaluation.md` (ready to publish, should-fix: sound on cuts, music level to check by ear, missing Next line).
- 2026-11-21 ep-mcp-stateless: cut 2: new first line, title card as shot 0, whole film moved 0.933 s, re-voiced (only the hook re-spoken), rebuilt, `captions.srt`, chapters 0:22 / 0:47, `evaluation.md`.
- 2026-11-21 ep-mcp-stateless: v2 steps 1-3 per docs/workflow.md: research re-checked (2 wording fixes, resumption row, numbers table), package.md (title 100/88), beats.md (hook 100, 28 shots), script.md, film/script.txt, voice 58.35 s.
- 2026-11-21 ep-mcp-stateless: v2 steps 4-5 per docs/workflow.md: film.js rebuilt (28 shots), audit ISSUES 0, video.mp4 60.000 s, -17.1 LUFS / -4.4 dBTP, 71% of cuts with a sound within 1 frame, thumbnail checked at 160 px, captions.srt, chapters, upload.json; step 6 (judge) next.
- 2026-11-21 ep-mcp-stateless: step 6 judge (independent agent, docs/roles/evaluator.md): `evaluation.md` rewritten for v2: ready to publish, 0 must-fix, 4 should-fix (title lacks the "stateless"/"removed"/"spec changes" search words; no "Next" line under Subscribe; shot 10 "TABLE 12 = SESSION ID" label readable ~0.5 s; spoken "drops both" unclear by ear). Hook 100, title+thumb 88, -17.1 LUFS / -4.4 dBTP, 71% of 28 cuts with a sound within 1 frame, audit re-run ISSUES 0, all protocol claims match the live changelog and SEPs.
- 2026-11-21 ep-mcp-stateless: judge Should-fix 3 (shot 10 label readable ~0.5 s) fixed in 45fb4af: `film.js` line 142, "TABLE 12 = SESSION ID" now fades in at 18.55 s (was 19.95) and "(optional)" at 18.9 s, fully readable 18.80-20.44 s (~1.6 s), fade-out still ends before the cut at 20.73 s; no spoken word or cut time changed. Shot 10 rebuilt alone (`build.py film --out mcp-stateless.mp4 --shots 10`), audit ISSUES 0, 60.000 s, -17.1 LUFS / -4.4 dBTP unchanged, stills checked, copied to `video.mp4`; `evaluation.md` row moved to Passed (9b). Still open: Should fix 1 (title search words, optional), 2 (no "Next" line), 3 ("drops both" wording).
