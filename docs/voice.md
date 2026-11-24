# Voice and audience

The youtube-agent skills read this file before they write a hook, title or description (`skills.lock` points them here).
Draft v1 from `docs/product.md` and Episode 0; the owner corrects it.

## Who I am talking to
One person: someone who uses an AI chatbot or a coding assistant at work, hears a new AI product name every week,
and has one minute to find out what it is and whether it matters. Curious, not a machine-learning engineer.
(Draft: no viewer data yet. Replace with what YouTube's audience report shows once there are views.)

## How I actually talk
Short sentences, said to "you". A story first, the technology second. Episode 0, the takeaway:
"It is still a research prototype. But the lesson is two hundred years old. The limit was never the soldiers.
It was the general's attention. And now, that general is you."

## Words I never use
"game-changer", "revolutionary", "this changes everything", "unlock", "dive in", "mind-blowing", "insane", "killer".

## Words I do use
"you", "learn", "in 60 seconds", "before" and "now", plain verbs. The technology's real name, said early.

## What I will not claim
- A number without a source in the episode's `brief.json`.
- A speed-up or benchmark I can't trace to the maker's own material.
- That a prototype is a product, or that one tool beats another.
- Predictions.

## My format
60 seconds. No intro: the hook is the first sentence. Nobody on camera: a stickman mascot rendered from code,
Ivan's cloned voice (below), quiet instrumental music. One call to action, at the end. Details: `docs/brand.md`.

## My voice (L56)
Every episode is voiced in Ivan's cloned voice: `scripts/voice.py`, the stickman `tts.py` with Chatterbox (MIT, pinned in the script)
speaking each script line in one take, exaggeration 1.2, cfg 0.3 (the owner's pick, 2026-11-24). About 155 words a minute, so about 150 words for 60 s.
Chatterbox's Perth watermark stays on: the audio is marked as AI-made.

Write for it, because the punctuation is the delivery: short lines, `!` on the punch, a real question with `?`,
a one-word turn ("Nope."), `...` before the number that lands. Example:
"Prompt caching! You think your 100-page PDF costs you once? / Nope. Without it, 30 questions cost you full price... 30 times!"

The sample is Ivan's own voice. It lives encrypted in `docs/voice/ivan.wav.gpg` (AES-256; the repo is public), never as a plain file in git.
The key: `~/.config/youtube-skill/voice/key` on the owner's Mac, and the GitHub secret `VOICE_KEY` for the daily run, which decrypts it outside the checkout.
New machine: `python3 scripts/voice.py --install`, then copy the key file there yourself.
