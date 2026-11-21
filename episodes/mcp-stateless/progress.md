# mcp-stateless progress

## Status
Cut 1 done: 59 s, 31 shots, audit 0 issues, `evaluation.md` ready to publish (0 must-fix); not uploaded, PR open for the owner.

## Next
1. Owner listens to `video.mp4` (voice on "MCP", "session ID", the date; the music level, see `evaluation.md`) and watches it.
2. Owner decides the next episode; then add the "Next in 60 seconds: ..." card under the Subscribe button (one `card(...)` in `overlay()`), `build.py film --out mcp-stateless.mp4 --shots 30`, copy to `video.mp4`.
3. Upload only on the owner's go: `yt upload` with `upload.json`, `captions.srt`, `thumbnail.png`.
4. Rebuild from git if needed: `make skills`, venv as `make skills` prints, `python .claude/skills/stickman/scripts/new_film.py <tmp>` and copy its engine files into `film/`,
   `python scripts/music.py get efa007f6-a5fe-420c-a1a6-8d5dafa95005 film/music.mp3`, `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align`,
   then `build.py film --out mcp-stateless.mp4` from this folder; thumbnail: `python film/thumb.py thumbnail.png`.

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

## Log
<!-- append at the bottom, oldest first: - YYYY-MM-DD <branch>: what was done -->
- 2026-11-20 ep-mcp-stateless: claimed; premise verified from the MCP spec, changelog, SEPs and the maintainers' blog; script, voice.
- 2026-11-21 ep-mcp-stateless: film.js (diner, studio, board), stills checked, research.md, brief.json, thumbnail, captions.srt, upload.json; first build: 18 audit issues (state leak on a canvas context, a hand jump, a fast pan) fixed, full rebuild running.
- 2026-11-21 ep-mcp-stateless: rebuilt from scratch, then shots 20 and 23: audit ISSUES 0; `video.mp4`; earshot measure/describe/timeline/sheet; `evaluation.md` (ready to publish, should-fix: sound on cuts, music level to check by ear, missing Next line).
