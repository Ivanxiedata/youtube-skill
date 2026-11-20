.PHONY: setup check status structure imports progress spec new-feature worktree

# Run once per clone or worktree.
setup:
	git config core.hooksPath .githooks
	@[ -f .env ] || [ ! -f .env.example ] || cp .env.example .env
	go mod download

# The only definition of "done". CI runs it in full; the pre-commit hook adds TESTFLAGS=-short.
check: structure imports progress spec
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

structure:
	@scripts/check-structure.sh

imports:
	@scripts/check-imports.sh

progress:
	@scripts/check-progress.sh

spec:
	@scripts/check-spec.sh

new-feature:
	@scripts/new-feature.sh "$$NAME" "$$DESC"

worktree:
	@scripts/worktree.sh "$$NAME"
