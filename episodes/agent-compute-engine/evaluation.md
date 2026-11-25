ready to publish

## Round 3 (narrow re-check, 2026-11-24 19:45 CST)
The 2 must-fix of the Codex re-judge below are closed: (1) 5.60-6.10 s see-through pocket linings: Codex redrew the robot/pocket assembly as one offscreen picture and re-rendered shots 2-3, audit ISSUES 0; zoomed frames every 0.1 s from 5.4 to 6.3 s (checked by the orchestrator) show no part through another. (2) research.md row 10 now says "can't call a backend API directly if stolen" (the source's words). Not re-run: a full fresh judge (the round-2 judge's other rows passed and the inputs are unchanged).

## Round 2 verdict (Codex re-judge)
not ready: 2 must-fix

# Agent Compute Engine · portrait re-judge, round 3

Re-checked **rows 1–20, including 13b**, all three previous must-fixes and all six previous should-fixes. This comparison uses the portrait cut, the current narration and claims record, and the chapter-free upload description. Shot numbers below are zero-based, as in `film/film.js`. Times are on the final video clock.

## Must fix

| Finding | Evidence | Fix |
|---|---|---|
| **M1 · Shot 3, 5.60–6.10 s · row 9, L44.** The rubric blocks a fade where “limbs or clothes show through each other.” | At **5.87 s, frame 176**, the teal sleeves, vertical apron edges and outlines of the old rectangular pockets show through both white pocket linings. Compare the same area at 5.60 s with the linings fully opaque at 6.20 s. This happens *inside* the robot. In `film.js`, `robot()` draws the old pockets at `1-pk` and the front linings at `pk` over an opaque apron. | Keep the lining opaque while it turns out. Animate its shape or reveal it from the pocket opening, keeping the hands in front. Re-render shot 3 and check frames during the turn. |
| **M2 · Research only, no video timecode · row 12, L26.** The rubric blocks “a line in research.md or upload.json stating an inference no source says.” | `research.md`, fact 10 (line 30), says **“The one ID inside can't open anything if stolen”**. The supporting quotation in the same row establishes a specific limit: **“This identity is not usable to call a backend API directly, if it is exfiltrated off the machine.”** The fact column drops both “backend API” and “directly,” turning that limit into a claim about every possible use. The narrowing list at line 59, `claims.md` row 4 and the upload retain the limit. This is a previously unflagged source-note issue, separate from round 2's “obeys” finding. | Make the fact column read “A stolen sandbox ID cannot call a backend API directly.” This correction needs only `research.md`. |

## Should fix

| Row | Evidence and fix |
|---|---|
| **5 · First-sentence hook** | “Agent Compute Engine: your AI agent never falls for one scam email?” scored **55/100**, below the rubric's 72. The viewer gets the concrete stakes in the follow-up question about zero keys. Bring that stake into the opening sentence at the next script revision. |
| **8 · Turn** | “What if it held zero keys to lose?” ends at 7.35 s. At 7.60 s the narration goes straight to “Our example”. There is no sentence by about 10 s telling the viewer what the film will show. Give the transition that job at the next voicing. |
| **9 · Two prop/text collisions** | In shot 6 the magnifier rim runs through the lower strokes of **KEYS**, including the fully revealed hold at **11.77–12.13 s**. In shot 15 the cream vertical arrow runs directly through the **L** in **FILES** at **40.90–41.43 s**. Both words can be read and each occurs inside the safe area. Lower the lens's resting position and bend the arrow around the cabinet label, or give that label an opaque backing. |
| **9 · Keys and envelope, 23.57–26.67 s** | `viewer.md` says the three keys “slide toward the open scam envelope.” In shot 10 they stay in their three horizontal positions and bob while the envelope appears above them. The three-key count and Q1 still read. Animate the intended transfer or describe the held picture accurately in the handoff. |
| **12/13b · Handoff wording** | `lesson.md` Q1 still attributes “sometimes obey” to Google and says “any program”, although claims 7 and 12 narrow both. Its L64/L69 quotation still includes “the machine”, which the current spoken line omits. `claims.md`'s last Fixes entry is numbered 40 although it corrects claim 18. `viewer.md` describes two check pills, the film uses four. `beats.md` retains old timings (shot 17 begins at 42.90 s, not 44.60 s). Reconcile these entries against the finished cut and correct the stray “obeys”s in `research.md`'s Before paragraph. The audience hears the full triad and the scoped inbox example. |

## Passed

### Previous blockers and timing concerns

- **Round 2 M1, shot 18, closed.** At **48.87, 49.00 and 49.13 s** the envelope, cross and stranger-request labels fade together. The envelope flap terminates at the red cross's outline. Only the separate background scene is visible through the whole fading image. At **49.23 and 49.27 s** the request-label area is empty. The calendar request first begins on frame 1479 (**49.30 s**), after A has gone. No words from the two requests occupy that space together.
- **Round 2 M2, the missing machine check, closed.** At **36.83–40.30 s** four individual checks appear: **WHICH AGENT**, **WHICH MACHINE**, **FOR WHOM**, **COMPANY RULES**. All four are legible at 40.00 s. Voice line 6, description line 1, and the description's technical paragraph include user delegation, agent identity, node identity and policy, in everyday or technical terms.
- **Round 2 M3, Google's inbox example, closed.** `research.md` now quotes “Sometimes it does not” in the Before paragraph and calls the invented example conditional: “if the agent falls for it”. The film shows “GOOGLE'S EXAMPLE” above “USUALLY: IGNORED” and “SOMETIMES: NOT IGNORED”. The typo in the research paragraph does not reinstate the former attribution.
- **Round 2 S1–S6.** No confirmed spoken-word defect from the new line checks below. Shot 2's warning is fully visible from its first frame for **37 frames, 1.23 s** (4.37–5.60 s). The 3-versus-0 split now holds through the spoken “three keys” at the end of caption 21 (47.70 s) and cuts at 47.73 s before caption 22, “now zero” (47.78 s). The prior shot-2 and shot-18 timing concerns are closed. The hook, turn and handoff issues are recorded above.

### Click, watch and understand

| Row | Rule and result |
|---|---|
| **1–2** | “Under 60” and subject in first 40: **51 characters**, “Agent Compute Engine” starts at character 1. `title.py` scored 66/100. Its mobile warning leaves the subject intact. The only title/thumbnail duplicates are the three words of the topic name. |
| **3–4** | “Thumbnail at 160 px wide”: inspected at **160×90**. The amber three-line topic, LEARN, red IN 60 SECONDS sticker and bellhop mascot read at that size. The seven thumbnail words follow the brand card. The terms for all three searches in `package.md` (“agent compute engine”, “prompt injection”, and the combination) occur in the title and first description line. |
| **5–7** | The first spoken words name the topic, address “your AI agent” and place it in an inbox scam. The question and its correction use plain language. The “0 KEYS” image and the follow-up question deliver evidence for the title's promise by 7.35 s. The full-screen title starts at frame 0 and cuts at 1.50 s inside the measured post-name pause (1.39–1.63 s on the film clock at −34 dB). Hook score and turn are above. |
| **9–11** | Twenty shots give each beat a visual. The 3× transition crops distinguish flattened fades from the pocket defect in M1. Line 5 says “zero keys inside!” The “So, what we learned” conclusion supplies the counted result and policy limit. Shot 17 shows the 3/0 split, shot 18 carries the takeaway, and shot 19 pairs the spoken subscribe/comment ask with both controls. |
| **12** | Compared the visible strings with `viewer.md` and all 24 entries and Fixes in `claims.md`. The screen vocabulary matches, allowing for wrapping, four separate checkmarks and the intermediate ticks of the described counter. The screen retains **PREVIEW: COMING MONTHS**, **GOOGLE'S EXAMPLE**, **PROGRAMS HERE CAN ASK FOR ITS KEYS** and **OUR EXAMPLE** from the first count. The last drawer wording corresponds to the revised narration. The 1 and 3 remain explicitly illustrative. Upload quotes and source titles match `research.md`; availability, service-account scopes, the short-lived ID and policy limits retain their conditions. No stronger on-screen or upload claim found. The research-only exception is M2. |
| **13** | “Before → after ... shown side by side”: the same tricked robot and envelope appear in both columns from 42.90–47.73 s. BEFORE shows three keys and a meter at 3. NOW shows the sealed workplace and 0 under the same “KEYS A TRICK CAN FIND” label. In shot 9 the meter moves from zero to three as the keys emerge. The example moves from the inbox to the ordinary computer, sealed computer and outside gate. |
| **13b** | “Its main idea is said out loud and each of the 3 questions is answered on screen and in words.” **Q1, 7.60–26.57 s:** the usual/exception lanes explain why refusing sometimes fails, and the drawer and count illustrate the keys a program can request. **Q2, 30.80–42.79 s:** the sealed agent sends OPEN MY FILES. The four checks appear, the key attaches outside, the cabinet opens, and the agent's pockets stay empty. **Q3, 42.90–51.40 s:** the spoken 3 → 0 conclusion and “only what your rules allow” accompany the split, stopped stranger request and allowed calendar request. These preserve the answers passed on content in `gate.md` round 3. The new machine check completes the source's list. |

### Brand, lessons, sound and format

| Row | Rule and result |
|---|---|
| **14** | **Format** present, one technology taught through a hotel desk in 56 s. **Safe area** passes row 20. **Casting** present, screen-headed robot and human clerk. **Mascot** present, cream face, coral hoodie and bellhop cap. **Corner tag** present on every frame. **Opening**, **structure**, **takeaway card** with white statement and amber punchline, and **CTA** with two controls are present. **Voice** credited as the host's Chatterbox clone and addresses the viewer. **Music** is the credited CC0 “Blue Sky” by Sergmusic. Reconstructed music and voice stems with the mixer's gains, fades and music attenuation measured −32.2 and −16.1 integrated LUFS before common mastering, a **16.1 LU gap** (15.7 dB whole-program RMS). |
| **15** | Open evaluation lessons re-checked. L1, L2, L7, L9, L11, L12, L14, L25, L31, L32, L34, L36, L37, L46, L47, L48, L54 and L56 follow the applicable picture, sound, opening, meter, closing and title rules. L16's viewer-moment test passes with its hook-score advisory. L17's audience-facing claim check passes; the separate repeated L26 research-inference rule fails at M2. **Repeated L44 fails at M1.** L57's style-replica rule is inapplicable to this brand-format episode. L21 duration/word budget and the line-tail check are reported in row 19. |
| **16–18** | Earshot **measure**: **−17.0 LUFS, −4.2 dBTP, 2.9 LU LRA**, zero clipped samples. **Describe**: Speech 0.89, Music 0.77, voice-over narration, no noise or hum tag. **Timeline** and **sheet**: 19 picture cuts, **74%** with a sound onset within one frame (rule ≥50%), **95%** within 100 ms, 24 ms median absolute offset. The unmatched cut is 36.83 s. |
| **19** | Fresh stickman audit on an external scratch copy: **1,680 state frames expected and decoded**, max hand step 15.5 px, foot skate 0, **ISSUES 0**. The final video runs **56.000 s**; the last voiced interval ends at **55.385 s** including the 0.300 s offset. The spoken text is **157 words**, identical across `film/script.txt`, the body of `script.md`, `viewer.md`'s spoken section and `captions.srt` after whitespace normalization. |
| **20** | “1080x1920; every word and key drawing inside the safe area ... upload.json has no chapters.” **Pass.** ffprobe reports 1080×1920, 30 fps, H.264 video and AAC audio. The upload has neither a chapters field nor timestamped description lines. Checked all **56 one-second frames**, **20 shot midpoints** at the cut list's frame rate, and **53 transition details at 3×** against the final encode. No edge cuts or overlapping text labels found. A second canvas pass over all **1,680 frames** measured **11,761** visible text draws: ink **x 82.00–884.78, y 130.11–1499.54**, minimum effective type **44.00 px**, minimum cap height **31.50 px**. A foreground-only render of all frames found no artwork outside **x 60–918, y 100–1536** at ≥24/255 opacity after removing the background and full-frame grade. |

### Voice-line checks

Each row uses the final MP4 interval from `film/vo_lines.json` plus **0.300 s**, downmixed to 16 kHz mono. Ran `whisper-cli -m ~/.cache/whisper-cpp/ggml-base.bin -l en` on each clip and checked suspect readings against isolated narration. The last column is **mean RMS dBFS over the final 50 ms of each source line in `film/vo.wav`**. All nine pass the quieter-than-−28 dB threshold.

| VO line | Film interval (s) | Comparison with voiced script | Tail dBFS |
|---|---:|---|---:|
| 0 | 0.300–4.253 | Topic and full inbox question recovered. | −36.2 |
| 1 | 4.503–7.349 | Isolated take recovers “What if it held zero keys to lose?” | −36.6 |
| 2 | 7.599–12.011 | Isolated take recovers “Our example” and the complete hidden instruction. | −36.0 |
| 3 | 12.261–19.117 | Final mix recovers both “usually ignores it” and “sometimes it doesn't”. | −40.9 |
| 4 | 19.367–26.574 | Clean take recovers “there can ask for its keys” and “files and calendar”. Word boundaries near “computer, programs” are ambiguous in base Whisper. | −43.5 |
| 5 | 26.824–34.652 | The recognizer renders unstressed “to” as “the” before “customers yet”. Both the availability condition and “zero keys inside” are present. | −44.7 |
| 6 | 34.902–42.786 | The decode gives “leads to” for “leaves through”. It recovers agent, machine, for whom, company rules, adding the key and the agent never seeing it. | −41.7 |
| 7 | 43.036–51.174 | Full counted takeaway and gate limit recovered. | −44.5 |
| 8 | 51.424–55.385 | “Want”/“what” is ambiguous in the decode. Subscribe, comment and the complete ending are recovered. | −33.1 |

No confirmed dropped, repeated, garbled or cut-off spoken word. The ambiguous substitutions are recognition evidence only.

## Not evaluated

- Fine pronunciation and voice likeness still require the owner's ear. Earshot classifies sound and the base Whisper model cannot settle the short phonetic ambiguities above.
- The public source pages were not fetched again. Claim comparisons use their quotations in the episode's source record and the previous round's source verification.
