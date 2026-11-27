#!/bin/sh
# Install everything an episode needs on a fresh Ubuntu runner (GitHub Actions), and export its paths to $GITHUB_ENV.
# Local machines use `make skills` and the venv it prints instead.
# Big downloads (listening models, voice model, browser) go under .skills/, which the workflow caches by skills.lock.
set -eu
cd "$(git rev-parse --show-toplevel)"
here=$PWD

scripts/skills.sh >/dev/null
sudo apt-get update -qq
sudo apt-get install -y -qq ffmpeg >/dev/null

[ -x .skills/venv/bin/python ] || python3 -m venv .skills/venv
. .skills/venv/bin/activate
pip install -q --upgrade pip
# CPU-only torch first: the default Linux wheel brings CUDA (several GB) that a runner can't use.
pip install -q torch --index-url https://download.pytorch.org/whl/cpu
pip install -q pyyaml numpy scipy pillow playwright imageio-ffmpeg kokoro-onnx yt-dlp ".skills/earshot[listen,measure,images]"

export PLAYWRIGHT_BROWSERS_PATH="$here/.skills/browsers" STICKMAN_VOICE_DIR="$here/.skills/voice-models" EARSHOT_HOME="$here/.skills/earshot-home"
playwright install --with-deps chromium >/dev/null
earshot doctor --fetch >/dev/null

if [ -n "${GITHUB_ENV:-}" ]; then
	{
		echo "PLAYWRIGHT_BROWSERS_PATH=$PLAYWRIGHT_BROWSERS_PATH"
		echo "STICKMAN_VOICE_DIR=$STICKMAN_VOICE_DIR"
		echo "EARSHOT_HOME=$EARSHOT_HOME"
		echo "VIRTUAL_ENV=$here/.skills/venv"
	} >>"$GITHUB_ENV"
	echo "$here/.skills/venv/bin" >>"$GITHUB_PATH"
fi
echo "ci-setup: ready"
