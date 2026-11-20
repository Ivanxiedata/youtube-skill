.PHONY: setup check structure imports new-feature worktree

# Run once per clone or worktree.
setup:
	git config core.hooksPath .githooks
	@[ -f .env ] || [ ! -f .env.example ] || cp .env.example .env
	go mod download

# The only definition of "done". CI runs it in full; the pre-commit hook adds TESTFLAGS=-short.
check: structure imports
	@out=$$(gofmt -l .); [ -z "$$out" ] || { echo "$$out"; echo "gofmt: run 'gofmt -w .'"; exit 1; }
	go vet ./...
	go test -race $(TESTFLAGS) ./...

# Fast loop while working inside one feature: make check-anomaly
check-%:
	go vet ./$*/...
	go test ./$*/...

structure:
	@scripts/check-structure.sh

imports:
	@scripts/check-imports.sh

new-feature:
	@scripts/new-feature.sh "$$NAME"

worktree:
	@scripts/worktree.sh "$$NAME"
