"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE: set this from the sound brief ----
SFX, MUSIC, VOICE = True, True, "vo.wav"

MUSIC_DB = -14.5   # integrated music stem measured 16 dB under the voice stem (ebur128 of each stem as mixed): the brand number, docs/brand.md
# No room tone, drone or other noise beds (docs/lessons.md L2). Sampled effects only.
if SFX:
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "step": m.step(t, pan=.4, g=.1, surface="wood")
        elif k == "door": m.sfx("doorclose-1", t, 1, 4000, .22, .35, .2)
        elif k == "dooropen": m.sfx("dooropen-1", t, 1, 4000, .2, .35, .2)
        elif k == "tick": m.tick(t, g=.05, pan=.2)
        elif k == "paper": m.sfx("bookplace1", t, 1.1, 5000, .2, .2, .1)
        elif k == "bell": m.sfx("impactbell-heavy-000", t, 1.7, 6000, .12, 0, .25)   # the diner's service bell
        elif k == "stamp": m.sfx("impactwood-medium-001", t, .9, 3000, .16, 0, .1)   # the red sticker lands
        elif k == "snap": m.sfx("metalclick", t, 1.1, 5000, .14, 0, .1)              # the string snaps
        # the brush starts before the cut: the samples swell for 90-110 ms, and the swell should peak on the cut (earshot timeline: 71% of cuts within 1 frame)
        elif k == "cut": m.sfx("cloth2", t - .125, 1, 3500, .13, 0, .15)               # a soft brush on a cut that changes place
        elif k == "cut2": m.sfx("cloth4", t - .065, 1.15, 3500, .1, 0, .12)            # a lighter one on a cut inside a place
if MUSIC:
    m.music_file("music.mp3", gain_db=MUSIC_DB)   # "Blue Sky" by Sergmusic, CC0, found through Openverse: ../music.json
if VOICE:
    m.voice(VOICE, at=.3)
# ---- TO HERE ----
m.write("audio.wav")
