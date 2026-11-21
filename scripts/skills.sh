#!/bin/sh
# Install the third-party agent skills pinned in skills.lock into this repo (format: see skills.lock).
# Fetches exact commits into .skills/<name>, verifies the sha, copies (never symlinks) into .claude/, .agents/, .codex/.
# Never writes into $HOME. Never runs the skills' own code: no doctor.py, no pip, no npm.
set -eu

cd "$(dirname "$0")/.."
lock=skills.lock
store=.skills
manifest=$store/manifest

# Public https only: stops ext:: and file:: transports; no credential prompts.
export GIT_ALLOW_PROTOCOL=https GIT_TERMINAL_PROMPT=0

die() { echo "skills: $*" >&2; exit 1; }
[ -f "$lock" ] || die "$lock not found in $(pwd)"

# A repo-relative path we are willing to write or delete: under .claude/, .agents/ or .codex/, no '..',
# and no component that is a symlink (so a symlinked .claude/ can never redirect us into $HOME or elsewhere).
okdest() {
	case $1 in .claude/* | .agents/* | .codex/*) ;; *) return 1 ;; esac
	case $1 in *..*) return 1 ;; esac
	_p=
	for _part in $(printf '%s' "$1" | tr / ' '); do
		_p=${_p:+$_p/}$_part
		[ ! -L "$_p" ] || return 1
	done
}
# Walk the lock: each(kind, callback) calls callback with the three fields of every line of that kind.
each() {
	while read -r k a b c x || [ -n "$k" ]; do
		[ "$k" = "$1" ] || continue
		"$2" "$a" "$b" "$c" </dev/null
	done <"$lock"
}

# ---- 1. validate the whole lock before touching anything ----
declared=" "
while read -r k a b c x || [ -n "$k" ]; do
	case $k in '' | '#'*) continue ;; esac
	case $x in '' | '#'*) ;; *) die "too many fields: $k $a" ;; esac
	case "$a$b$c" in *'|'*) die "'|' not allowed in $k $a" ;; esac
	[ -n "$c" ] || die "need 3 fields after '$k': $a"
	case $k in
	source)
		case $a in '' | -* | .* | *[!A-Za-z0-9._-]*) die "bad source name: $a" ;; esac
		case $b in https://*) ;; *) die "$a: url must start with https://" ;; esac
		case $c in *[!0-9a-f]*) die "$a: sha must be 40 lowercase hex chars, got $c" ;; esac
		[ ${#c} -eq 40 ] || die "$a: sha must be 40 lowercase hex chars, got $c"
		declared="$declared$a "
		;;
	copy)
		case $declared in *" $a "*) ;; *) die "copy: unknown source $a (declare it first)" ;; esac
		case $b in /* | *..*) die "copy $a: unsafe subpath $b" ;; esac
		okdest "$c" || die "copy $a: dest must be under .claude/, .agents/ or .codex/, with no symlink in the path: $c"
		;;
	rewrite)
		case $declared in *" $a "*) ;; *) die "rewrite: unknown source $a" ;; esac
		;;
	*) die "unknown directive: $k" ;;
	esac
done <"$lock"

# ---- 2. fetch each source at exactly its pinned commit (before deleting anything, so a bad sha changes nothing installed) ----
[ ! -L "$store" ] || die "$store is a symlink; refusing to write through it"
mkdir -p "$store"
do_fetch() { # name url sha
	d=$store/$1
	if [ -d "$d/.git" ] && [ "$(git -C "$d" rev-parse HEAD 2>/dev/null)" = "$3" ] && [ -z "$(git -C "$d" status --porcelain)" ]; then
		echo "skills: $1 already at $(printf '%.7s' "$3")"
	else
		rm -rf -- "$d"
		git init -q "$d"
		echo "skills: fetching $1 $2 @ $3"
		git -C "$d" fetch -q --depth 1 "$2" "$3" || die "$1: cannot fetch commit $3 from $2 (does it exist upstream?)"
		git -C "$d" checkout -q --detach FETCH_HEAD
	fi
	[ "$(git -C "$d" rev-parse HEAD)" = "$3" ] || die "$1: HEAD is not the pinned commit $3"
}
each source do_fetch

# ---- 3. remove what the previous run installed (only what the manifest names) ----
if [ -f "$manifest" ]; then
	while read -r n t; do
		okdest "$t" || { echo "skills: ignoring manifest entry $t" >&2; continue; }
		rm -rf -- "$t"
	done <"$manifest"
fi
: >"$manifest"

# ---- 4. copy the listed subpaths ----
do_copy() { # name subpath dest
	src=$store/$1
	mkdir -p "$3"
	found=0
	for p in "$src"/$2; do # unquoted on purpose: the subpath may end in *
		[ -e "$p" ] || die "$1: nothing matches $2"
		[ -z "$(find "$p" -type l)" ] || die "$1: $p contains a symlink; refusing to copy"
		t=$3/$(basename "$p")
		okdest "$t" || die "$t: unsafe destination (symlink in path)"
		{ [ ! -e "$t" ] && [ ! -L "$t" ]; } || die "$t exists and was not installed by this script; move it away first"
		echo "$1 $t" >>"$manifest"
		cp -R "$p" "$t"
		found=$((found + 1))
	done
	echo "skills: $1 $2 -> $3 ($found)"
}
each copy do_copy

# ---- 5. rewrite hard-coded ~ paths in the installed copies ----
tmp=$store/.files
do_rewrite() { # name from to
	from=$(printf '%s' "$2" | sed 's/[][\.*^$]/\\&/g')
	to=$(printf '%s' "$3" | sed 's/[&\]/\\&/g')
	while read -r n t; do
		[ "$n" = "$1" ] || continue
		find "$t" -type f >"$tmp"
		while IFS= read -r f; do
			grep -Iq -F -- "$2" "$f" || continue
			sed "s|$from|$to|g" "$f" >"$f.tmp"
			cat "$f.tmp" >"$f" # keeps the file mode
			rm -f "$f.tmp"
			echo "skills: $f: $2 -> $3"
		done <"$tmp"
	done <"$manifest"
}
each rewrite do_rewrite
rm -f "$tmp"

cat <<'EOF'

skills: installed. This script installed no packages and ran no skill code. YOU install what they need.
Runtime deps (not installed, not checked):
  all          Python 3 (3.10-3.13 if you want the free voice), git
  deep-research  pip install pyyaml          (validate_json.py); the agent's web search/fetch tools
  stickman     pip install numpy scipy pillow playwright imageio-ffmpeg    (or a system ffmpeg)
               playwright install chromium   (~150 MB browser download)
               free voiceover: pip install kokoro-onnx pocketsphinx; first run downloads ~350 MB of model
               files from github.com/thewh1teagle/kokoro-onnx releases (no checksum check upstream)
               3D films only: node + npm (new_film.py --3d runs `npm i three@0.169.0`)
  youtube-agent  nothing (stdlib only); yt-dlp and whisper are optional extras it mentions
  earshot      pip install ".skills/earshot[listen,measure,images]"   (the pinned checkout; brings torch and transformers)
               the first listening call downloads two models (about 1.1 GB, 2.2 GB on disk) from huggingface.co
               at pinned revisions into EARSHOT_HOME; ffmpeg and ffprobe on PATH to read video
Keep installs out of $HOME and the system Python, because stickman's doctor.py and tts.py pip-install
by themselves (retrying with --user and --break-system-packages) when something is missing. Start the agent from:
  python3 -m venv .skills/venv && . .skills/venv/bin/activate
  export PLAYWRIGHT_BROWSERS_PATH="$PWD/.skills/browsers" STICKMAN_VOICE_DIR="$PWD/.skills/voice-models" EARSHOT_HOME="$PWD/.skills/earshot-home"
  pip install pyyaml numpy scipy pillow playwright imageio-ffmpeg kokoro-onnx pocketsphinx && playwright install chromium
  pip install ".skills/earshot[listen,measure,images]"
youtube-agent skills read docs/voice.md if it exists (seed it from .skills/youtube-agent/templates/voice.md).
EOF
