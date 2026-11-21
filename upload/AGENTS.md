# upload

Publishes a finished episode to the owner's YouTube channel (private by default) and records the video id.

Spec: `docs/specs/upload.md` · Progress: `upload/progress.md` (update before you stop) · Check: `make check-upload`

## Notes
- Never pass `--confirm` or `--privacy public` unless the owner said so for this specific video.
- Never read, print, copy or commit anything from `~/.config/youtube-skill/`.
- Tests use `httptest`; never call the real API from tests.
