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
an AI voice (below), quiet instrumental music. One call to action, at the end. Details: `docs/brand.md`.

## My voice (L91)
Every episode is voiced by Kokoro `am_michael` at speed 1.2 through the stickman skill's `tts.py` (about 2.8 words a second while speaking). Write about 120-125 words for 60 s, so the picture can hold about 1.5 s at each beat change (L92).
The owner tried a cloned voice with an excited delivery (Chatterbox, 2026-11-24) and went back to this one (2026-11-27): the tone stays calm.

Write in a calm, conversational tone, like a friend explaining at a table: plain full sentences, a real question with `?` where it helps.
No hype: no `!` on punch lines, no one-word turns ("Nope."), no `...` before a number for drama, no "huge", "insane", "game-changer".
Let the surprise come from the idea, not the delivery. Example:
"You might think a 100-page PDF costs you once. Without prompt caching, 30 questions about it cost you full price 30 times."
