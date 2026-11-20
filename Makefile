.PHONY: setup check status new-feature new-episode worktree skills

# Run once per clone or worktree.
setup:
	git config core.hooksPath .githooks
	@[ -f .env ] || [ ! -f .env.example ] || cp .env.example .env
	go mod download

# The only definition of "done". CI runs it in full; the pre-commit hook adds TESTFLAGS=-short.
# Runs every scripts/check-*.sh (stops at the first failure), so a new check needs no edit here.
check:
	@for s in scripts/check-*.sh; do "$$s" || exit 1; done
	@out=$$(gofmt -l .); [ -z "$$out" ] || { echo "$$out"; echo "gofmt: run 'gofmt -w .'"; exit 1; }
	go vet ./...
	go test -race $(TESTFLAGS) ./...

# Fast loop while working inside one feature: make check-anomaly
check-%:
	go vet ./$*/...
	go test ./$*/...

# Start every session here: each feature's status and next step, plus in-flight branches.
status:
	@scripts/status.sh

# A literal $ in DESC must be written $$ (make expands $ in command-line variables).
new-feature:
	@scripts/new-feature.sh "$$NAME" "$$DESC"

new-episode:
	@scripts/new-episode.sh "$$NAME"

worktree:
	@scripts/worktree.sh "$$NAME"

# Pinned third-party agent skills from skills.lock (needs git + network). Per worktree; not part of setup or check.
skills:
	@scripts/skills.sh
