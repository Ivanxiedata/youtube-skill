# Mistakes: agent-compute-engine

One row per thing redone (`docs/pipeline/episode.md`, "Mistakes"). Steps 4-5 (make, finish) only; minutes are about, counted from the start of the make worker's run (2026-11-24).
Failed commands are listed too.

| when (min into the run) | step | what went wrong | cause | minutes lost | lesson it broke (L-id) or new |
|---|---|---|---|---|---|
| 25 | 4 make | Wrong stills, fixed in one round: the card "1 EMAIL · OUR EXAMPLE" touched the inbox panel (shot 5); the letter and the open envelope were the same cream and the letter hid the envelope, "COMPUTER'S KEYS" ran wider than the letter (shot 6); "ORDINARY CLOUD COMPUTER" ran over the cloud's edge (shot 9); the meter's "OUR EXAMPLE" pill covered the "0" tick label (meters); the cabinet was drawn over the request envelope (shot 15); the WHAT WE LEARNED mini scenes were too small to read (shot 17) | props sized by eye before measuring against their neighbours | 6 | L22 (repeated) |
| 32 | 4 make | First full `build.py` audit ISSUES 37: 27 x `hand-key` contact off by up to 66 px (the held key lifted on its own timeline, not on the hand's), and 10 still windows (shots 8, 9, 17: 14.0-15.5 s, 17.5 s, 20.0 s, 46.0-47.5 s) | the key's lift and the hand's waypoints were two separate tables; shots 8, 9 and 17 had nothing moving once their labels were in | 8 | L23 (repeated: a shot over 2 s with little motion needs motion, not only a push), L52 |
| 36 | 4 make | Second audit ISSUES 2: `robot.r` hand jump 40 px at the first key grab (85 px in 0.1 s), and a still window at 20.0 s (shot 9) | the grab waypoint was only 0.1 s after the lid waypoint; the cloud did not move | 4 | L52, L23 |
| 38 | 4 make | The `--shots` list for the head-sway change missed shots 13, 14, 15 and 18 (the sealed-room miniature has the same robot); caught by reading the list against the `film.js` diff, one more partial build | the sway sits in the shared `robot()`, and the miniature calls it | 3 | L18 (repeated: list every shot that calls a changed helper) |
| 41 | 4 make | Music gap 18.4 dB at MUSIC_DB -16 (as mixed: voice -16.0 LUFS, music x 0.55 -34.4 LUFS); set to -13.6 (16.0 dB) with one audio-only remix; cut brushes kept at the example's lead times: 13 of 19 cuts within 1 frame (68%) per `earshot timeline`, no second remix needed | the example's MUSIC_DB was the starting value; measured as mixed (trap L19), then corrected | 3 | L19, L47 (checked once, both fixed in one remix) |
| 43 | 4 make | The clerk was drawn as a woman; `viewer.md` says "a clerk ... behind him"; switched to the male `GUEST_B` palette and shots 13, 14, 15, 18 re-rendered | `beats.md` left the clerk's sex open and the pronoun in `viewer.md` was not re-read before drawing | 3 | new: re-read `viewer.md`'s pronouns and nouns for every figure before drawing it |
| 44 | 4 make | The left meter of WHAT WE LEARNED read 0 for the first 2.5 s of the card, then climbed at "three keys", so the BEFORE panel looked like 0; now it fills to 3 when the panel appears (shot 17 re-rendered) | the climb was timed to the spoken "three" instead of to the panel's entrance | 2 | L34 (a meter's state matches the panel's label at every frame) |
| 30-45 | 4 make | Failed commands: `sed -i` without an empty suffix on macOS (invalid command code e) while editing `MUSIC_DB`; the first `gap.py` call used `.skills/venv/bin/python` after a `cd` into the film folder (no such file); `build.py` and `earshot` were called from a wrong folder or off `PATH` (not found); each re-run with a full path | relative paths after a `cd`, BSD `sed` | 3 | L35 (repeated: full paths for stickman scripts and the venv) |
| 50 | 5 finish | First thumbnail: the room's top edge touched the bottom of the word ENGINE (checked at 160 px wide); the room and the robot moved 40 px down and the robot scaled to .6 | the picture area was set before the three-line title's height was measured | 2 | L22 (repeated) |

## Gate rows (step 3a, `gate.md`, three rounds) and judge round 1 (`evaluation.md`), copied here by the fix round
Rows from before the make step; minutes are not known (content-only trial), so "-".

| when (min into the run) | step | what went wrong | cause | minutes lost | lesson it broke (L-id) or new |
|---|---|---|---|---|---|
| - | gate round 1 | must-fix M1: "keys" was never said for what they are (passwords and tokens for email, files, calendar) | the script used the word before defining it | - | L67 |
| - | gate round 1 | should-fix S1: the gate limits a trick, it does not stop it, was not said | the takeaway stopped at the keys | - | L66 / G11 |
| - | gate round 1 | should-fix S2: "Gemini's work agent" unexplained, "not available yet" only on screen | a product name the viewer cannot place | - | G9, L59 |
| - | gate round 2 | must-fix 1: Q1 did not ask for the half of its answer that makes it matter | `lesson.md` question and answer out of step | - | L60 |
| - | gate round 2 | must-fix 2: the "before" said the agent can fetch keys, never why | the reason ("programs there can ask the machine") was left out | - | G8, L69 |
| - | gate round 2 | must-fix 3: the gate's limit was said about normal use, not about the trick | takeaway worded for the gate, not the tricked agent | - | L66 |
| - | gate round 2 | must-fix 4: "who asked" stood in for two identities | shorthand | - | L67 (repeated) |
| - | gate round 2 | should-fix 5: "already running Google's Gemini agent" names a product the viewer cannot place | same as round 1 S2 | - | G9 |
| - | gate round 3 | must-fix 1: `lesson.md` Lesson check entries (L59, L60, L64-L67, L69) and the takeaway condition list still quoted lines no longer spoken | script changed, `lesson.md` not re-quoted | - | G12 |
| - | gate round 3 | should-fix 2: the allowed tricked request read as approved, not as the trick getting through | the tag said "allowed" without "tricked" | - | G5 |
| 60 | judge M1 | shots 10 and 16: the open envelope (flap, letter, body) and the request envelope with its key faded part by part with `globalAlpha`, so parts showed through each other | `envDraw` set one alpha per part; the key was drawn in the same alpha pass | 6 | L44 (repeated) |
| 60 | judge M2 | shot 2 label "SOMETIMES IT OBEYS" stronger than Google's "does not [ignore it]" (`claims.md` row 7 named this label, the Fixes list did not) | the Fixes list covered the spoken line and the lanes, not this label | 1 | L17 (repeated) |
| 60 | judge M3 | chapter titles "One hidden line in email", "Three keys, then zero keys" stated the example's 1 and 3 without "our" | chapters retitled without the L26 check | 0 (fixed by the coordinator) | L26 (repeated) |
| 60 | judge M4 | description "in Google's words" added "computer" and dropped "the sandbox" from Google's sentence | paraphrase under a quote label | 0 (fixed by the coordinator) | L17 (repeated) |
| 60 | judge M5 | `research.md` rows 3, 15 and "Before" said "any program", "models", "obeys"; description said the design "does not try to stop the trick" | inference written as fact | 0 (fixed by the coordinator) | L26 (repeated) |
| 60 | judge S1 | first spoken sentence scored 59 alone (the 83 scored all three hook sentences) | scored the hook as a block | 0 (not fixed; words not reopened) | L33 |
| 60 | judge S2 | no turn sentence by 10 s ("Here's how." planned, not in the script) | dropped when the script was cut to 157 words | 0 (not fixed) | workflow step 3 |
| 60 | judge S3 | voice: line 1 "What if it held" heard as "Whoever held", line 6 "through" heard as "leads to", line 8 "Want more?" as "What more?" | the voice take | 10 | L56 (line 1 re-voiced by the coordinator; lines 6 and 8 listened to, not re-voiced) |
| 60 | judge S4 | tag "TRICKED, BUT ALLOWED: IT GOES THROUGH" on screen 0.6 s at full strength, six words | the takeaway card came 0.6 s after it | 3 | L23 / L48 |
| 60 | judge S5 | the "0 KEYS" card left the screen 0.1 s after it reached full strength, before "zero keys" was spoken | shot 3 was cut to leave room for the wordless shot 4 | 2 | new: a card stays until its spoken words end |
| 60 | judge S6 | the gate's check drops the machine identity ("which machine") | a source's list shortened | 0 (not fixed; `claims.md` row 18 notes it) | L26 |
| 60 | judge S7 | mini meters' tick labels about 20 px tall in WHAT WE LEARNED | labels scaled with the meter, minimum 28 px font gives a 20 px cap height | 1 | L48 (not repeated in lessons yet: measure cap height, use a 40 px font) |
| 60 | judge S8 | `gate.md` absent, no gate rows, `beats.md` and `script.md` stale, 142 words in `progress.md` | paperwork not updated after the gate fixes | 4 | new: copy gate rows and update beats/script/progress in the same session |

## Redos in the fix round (2026-11-24, after the re-voice of line 1)
| when (min into the run) | step | what went wrong | cause | minutes lost | lesson it broke (L-id) or new |
|---|---|---|---|---|---|
| 70 | 4 make | Every cut from line 1 on moved: line 1 was re-voiced (57.09 s) and the pause between "does." and "What if" disappeared, so shots 2-4 were re-timed from a silencedetect dip (5.35 s) and shots 5-19 all moved +0.3 s; the 19 shots re-rendered in one pass | a re-voice | 8 | L18 (all shots from the changed line on) |
| 72 | 4 make | Audit after the re-time ISSUES 3: still windows at 25.5 s (shot 10, keys at rest) and 50.5-51.0 s (shot 18, tag held for 1.5 s with nothing moving) | holding a tag for 1.5 s leaves nothing moving | 3 | L23 (repeated); fixed with a bobbing key and a repeating request along the arrow |
| 72 | 4 make | Every `envDraw` with an alpha now goes through one offscreen pass (`fadeProp`), also the lane rows (envelope, arrow, robot head) | the same part-by-part fade existed in shots 7, 8, 13 and 18 | 3 | L44 (repeated) |

## Vertical conversion redos (Codex, 2026-11-24)
| when (min into the run) | step | what went wrong | cause | minutes lost | lesson it broke (L-id) or new |
|---|---|---|---|---|---|
| 0 | judge round 2 / vertical | Request A's envelope, cross and label required one opaque offscreen picture; request B needed a separate, later label | multipart fade and shared text position in the landscape version (M1) | 0 | L44, L22; rebuilt the group and separated A/B by 50 ms |
| 0 | judge round 2 / vertical | Gate needed all three identities; drawer needed the exact tag PROGRAMS HERE CAN ASK FOR ITS KEYS | shortened labels (owner's conversion brief) | 0 | L26; all three identity checks and exact drawer wording restored |
| 0 | judge round 2 / vertical | Shot 2 label needed >=1.2 s at full strength | previous entrance consumed its reading time | 0 | L48; label now full on the cut for 37 frames (1.233 s) |
| 15 | vertical stills | BEFORE overlapped GOOGLE'S EXAMPLE; cloud overlapped the tab; long labels and the shot 9 count needed separate space; the request crossed the clerk's face | landscape geography compressed into vertical rows before inspecting | 8 | L22; moved labels, resized the cloud and routed the arrow and request beside the clerk |
| 19 | vertical stills | Fade screenshot script finished captures but failed before writing sheets (browser variable shadowed by a cut end); a subsequent listing glob had no sheets to match | reused variable b in the fade-time loop | 2 | new; renamed the browser binding and re-ran screenshots |
| 27 | vertical stills | Entry hands appeared below the desk before their grips; shot 9 keys needed an actual hand lift and a matching whole-number count; shot 18's closing card initially faded over the old room label | unconditional hand redraws and an overlay instead of a staged transition | 5 | L22, L44, L52; conditional grip redraws, shared hand/key targets, opaque room fade completed before the card |
| 30 | build setup | Shell safety review rejected the combined command containing rm -rf before it ran | broad shell delete syntax, although clearing shots was requested | 1 | new; cleared only the asserted episode shots path with pathlib/shutil, then ran the build |
| 34 | vertical build 1 | Audit ISSUES 32, all low-motion windows: shots 7, 8, 9, 11, 12, 14, 17, 18, 19; no reach/contact/pop/determinism errors | portrait pictures occupy less screen area and the held labels were static | 4 | L23; added a slow pan and slightly stronger picture push only in the named shots; rechecked text bounds and stills before partial rebuild |
| 0 | judge round 3 M1 / opacity fix | Apron edges, sleeves and old pocket seams showed through the unfolding linings at 5.60–6.10 s (frame 176) | Old pockets faded at 1-pk and linings at pk over the apron; flattening alone cannot cure internal transparency | not timed | L44 (repeated): opaque lining geometry, old seams removed on unfolding, whole robot flattened offscreen; grouped face/seal/tag fades too. Checked every 2 frames at 3x from 5.4–6.3 s and other touched fades; rebuilt only shots 2 and 3, audit ISSUES 0 |
