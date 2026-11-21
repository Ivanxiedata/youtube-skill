# mcp-stateless progress

## Status
v2 steps 1-3 done; steps 4-5 next

## Next
v2 follows `docs/workflow.md` (branch `workflow-v2`, PR #11). Steps 1-3 are done: `research.md`, `brief.json`, `package.md`, `beats.md`, `script.md`, `film/script.txt`, and the new voice in `film/`.
`video.mp4`, `captions.srt`, `upload.json`, `evaluation.md` and `film/film.js` are still v1 (v1 kept at `/Users/ivanxie/orca/youtube-skill-originals/mcp-stateless/` and tag `ep-mcp-stateless-v1`).
1. **Step 4, voice:** done, do not re-voice unless the words change. `film/vo.wav` 58.35 s (speech ends 58.05 in vo time), `vo_lines.json`, `align.json` (estimated word times), from
   `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align` (venv `/Users/ivanxie/orca/youtube-skill/.skills/venv`, `STICKMAN_VOICE_DIR=/Users/ivanxie/orca/youtube-skill/.skills/voice-models`). Lay it in at 0.3 s as v1 does (`audio_mix.py`): speech then ends at 58.35 s film time.
2. **Step 4, picture:** rebuild `film/film.js` to the 28-shot table in `beats.md` "Shots" (times are film seconds). The v1 offset trick (`OFS`, `HK`, `D`, `NEWC`) no longer fits:
   most shots move and some are new, so give each shot its own times on the new cut list. What changes from v1, by v2 shot number:
   - 0 title card ends at 2.17 s (was 2.27). 1 the calendar (v1 3) moves up and gets an amber "BEFORE" tab.
   - 2-3 v1 0+1 and 2, with the waiter's thought bubble labelled "YOUR SESSION" (it confirms the title's "sessions"). 4 v1 17 (any waiter takes the slip) moves into the hook with a teal "NOW" tab.
   - 5 new: studio, "HOW?" and "WHY?" cards and the "IN 60 SECONDS" sticker on the spoken words. 6 wide diner + "THE OLD WAY → THE NEW WAY" (the turn).
   - 7-8 studio labels "AI APP = THE CUSTOMER", "MCP SERVER = THE WAITER" (tray of tool icons). 9-12 v1 6, 7+8 merged (add "(optional)" under the session ID), 9, 11.
   - 13 v1 12-15 compressed into one 2.6 s board shot: "BEFORE · MCP 2025-11-25" rows struck on "drops", slide to "NEW · MCP 2026-07-28 · the current version".
   - 14-18 v1 16, 22 + `FLY`, 18, 19, 20. 19 studio "FOR YOU" with a red string to one server that snaps (new element). 20-22 v1 21, 23, 24.
   - 23 new shot: night, the laptop closes; morning, the same chat on a phone still showing "ticket #42".
   - 24-25 payoff: the hook's "HOW?" / "WHY?" cards come back with teal checks over v1 26-27 and 28. 26 takeaway card (+ amber "STATELESS" pill). 27 Subscribe at 56.95 s, no "Next" line.
   - Drop the v1 cards whose words are no longer spoken ("any request → any server", "memory: out of the server, onto the request"); every on-screen word must be in `beats.md` (sources listed there).
3. **Step 4, sound:** a soft sampled sound on at least half the cuts (v1 had 23%, should-fix); keep door, paper, bell, steps; no noise beds. Music: v1 measured 12.3 dB under the voice, brand says 16: try `MUSIC_DB = -17` and check by ear with earshot.
4. **Step 4, finish:** stills by eye, `build.py` until `ISSUES 0`, film at most 60 s, copy to `video.mp4`; thumbnail text unchanged ("LEARN STATELESS MCP IN 60 SECONDS"), re-check at 160 px.
5. **Step 5:** `captions.srt` from the new `film/vo_lines.json` + 0.3 s; chapters (suggested: 0:00 old MCP, 0:25 MCP 2026-07-28, 0:47 how and why; each at least 10 s, check with `chapters.py`);
   `upload.json`: title "Does MCP Still Need Sessions in 2026?", first two description lines from `package.md`, then the v1 description's sources and music credit (update the chapter lines and the "invented examples" note: table 12, ticket #42).
6. **Step 6:** a fresh agent that did not make this judges it per `docs/roles/evaluator.md` and rewrites `evaluation.md`.

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

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-20 ep-mcp-stateless: claimed; premise verified from the MCP spec, changelog, SEPs and the maintainers' blog; script, voice.
- 2026-11-21 ep-mcp-stateless: film.js (diner, studio, board), stills checked, research.md, brief.json, thumbnail, captions.srt, upload.json; first build: 18 audit issues (state leak on a canvas context, a hand jump, a fast pan) fixed, full rebuild running.
- 2026-11-21 ep-mcp-stateless: rebuilt from scratch, then shots 20 and 23: audit ISSUES 0; `video.mp4`; earshot measure/describe/timeline/sheet; `evaluation.md` (ready to publish, should-fix: sound on cuts, music level to check by ear, missing Next line).
- 2026-11-21 ep-mcp-stateless: cut 2: new first line, title card as shot 0, whole film moved 0.933 s, re-voiced (only the hook re-spoken), rebuilt, `captions.srt`, chapters 0:22 / 0:47, `evaluation.md`.
- 2026-11-21 ep-mcp-stateless: v2 steps 1-3 per docs/workflow.md: research re-checked (2 wording fixes, resumption row, numbers table), package.md (title 100/88), beats.md (hook 100, 28 shots), script.md, film/script.txt, voice 58.35 s.
