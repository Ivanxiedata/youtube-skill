#!/usr/bin/env python3
"""Ivan's voice: the stickman skill's tts.py, with Chatterbox speaking every line in Ivan's cloned voice instead of Kokoro.

    .skills/chatterbox-venv/bin/python scripts/voice.py <film folder> <script.txt> --no-align
    python3 scripts/voice.py --install      # one time: Chatterbox into .skills/chatterbox-venv (CPU torch)

Same arguments and outputs as tts.py (vo.wav, vo_lines.json, vo_script.txt, align.json, voice_parts/ cache).
The voice sample docs/voice/ivan.wav.gpg is AES-256 encrypted (the repo is public). The daily run decrypts it before the
maker starts and passes the file as VOICE_SAMPLE; locally it is decrypted with ~/.config/youtube-skill/voice/key
into a temp folder deleted on exit.
Chatterbox (MIT) keeps its Perth watermark on: the audio is marked as AI-made.
"""
import os, subprocess, sys, tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHATTERBOX = "git+https://github.com/resemble-ai/chatterbox@ab55923c27757c90cfcc407baa57dc25a7d25217"
EXAGGERATION, CFG = 1.2, 0.3  # the owner's pick (2026-11-24): excited, strong intonation; docs/voice.md
VOICE = "am_ivan"  # tts.py reads the language from the first letter: a = US English


def sample(tmp):
    if os.environ.get("VOICE_SAMPLE"):
        return os.environ["VOICE_SAMPLE"]
    key = (Path.home() / ".config/youtube-skill/voice/key").read_text()
    out = Path(tmp) / "ivan.wav"
    subprocess.run(["gpg", "--batch", "--quiet", "--passphrase-fd", "0", "--decrypt", "-o", str(out),
                    str(ROOT / "docs/voice/ivan.wav.gpg")], input=key.strip().encode(), check=True)
    return str(out)


class Ivan:
    """The two calls tts.py makes on its Kokoro engine."""

    def __init__(self, ref):
        import torch
        from chatterbox.tts import ChatterboxTTS
        self.m = ChatterboxTTS.from_pretrained(device="mps" if torch.backends.mps.is_available() else "cpu")
        self.ref = ref

    def get_voices(self):
        return [VOICE]

    def create(self, text, voice, speed, lang):  # speed: Chatterbox has none; the script's punctuation sets the pace
        wav = self.m.generate(text, audio_prompt_path=self.ref, exaggeration=EXAGGERATION, cfg_weight=CFG)
        return wav.squeeze(0).cpu().numpy(), self.m.sr


def main():
    if sys.argv[1:] == ["--install"]:
        venv = ROOT / ".skills/chatterbox-venv"
        subprocess.run([sys.executable, "-m", "venv", str(venv)], check=True)
        pip = [str(venv / "bin/python"), "-m", "pip", "install", "-q"]
        # CPU torch first: the default Linux wheel brings CUDA (several GB) that a runner can't use.
        subprocess.run(pip + ["torch==2.6.0", "torchaudio==2.6.0", "--index-url", "https://download.pytorch.org/whl/cpu"], check=True)
        subprocess.run(pip + [f"chatterbox-tts @ {CHATTERBOX}"], check=True)
        return print("installed:", venv / "bin/python")
    sys.path.insert(0, str(ROOT / ".claude/skills/stickman/scripts"))
    import tts
    with tempfile.TemporaryDirectory() as tmp:
        ref = sample(tmp)
        tts.load_engine = lambda: lambda *_: Ivan(ref)
        tts.model_dir = lambda _: Path(tmp)
        tts.fetch = lambda d, name: d / name
        tts.MODEL["full"] = f"chatterbox-ab55923-{EXAGGERATION}-{CFG}"  # in the line-cache key: a new setting re-speaks every line
        # One take per script line, not per sentence: Chatterbox keeps its excitement across a line and drags short sentences.
        tts.sentences = lambda t: [t] if any(c.isalnum() for c in t) else []
        tts.GAPS = {"sentence": .1, "reveal": .35, "line": .25, "beat": .6}
        sys.argv += [] if "--voice" in sys.argv else ["--voice", VOICE]
        tts.main()


if __name__ == "__main__":
    main()
