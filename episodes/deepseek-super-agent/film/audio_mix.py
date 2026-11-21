"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE: set this from the sound brief ----
SFX, MUSIC, VOICE = True, True, "vo.wav"

MUSIC_DB = -13.5   # track gain; measured: the music sits 16 dB under the voice
# No room tone, drone or other noise beds: the owner heard them as white noise under the voice. Sampled effects only.
if SFX:
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "drum": m.sfx("impactsoft-heavy-000", t, .5, 420, .5, 0, .15)
        elif k == "paper": m.sfx("bookplace1", t, 1.1, 5000, .2, .25, .1)
        elif k == "march": m.step(t, pan=.3, g=.05 if e.get("soft") else .1, surface="grass")
        elif k == "tick": m.tick(t, g=.05, pan=.2)
if MUSIC:
    m.music_file("music.mp3", gain_db=MUSIC_DB)   # "Blue Sky" by Sergmusic, CC0, found through Openverse: ../music.json
if VOICE:
    m.voice(VOICE, at=.08)
# ---- TO HERE ----
m.write("audio.wav")
