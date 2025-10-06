# Contributing Guide

## Branches
- `main`: stable, release-ready.
- `develop`: active development. Create feature branches from here.
- Feature branches: `feat/<short-name>`
- Fix branches: `fix/<short-name>`
- Chore/docs/test branches: `chore/<short-name>`, `docs/<short-name>`, `test/<short-name>`

## Workflow
1. Branch off from `develop`.
2. Commit small, clear changes.
3. Open a PR targeting `main` for releases, or `develop` for ongoing work.
4. Ensure CI passes before merge.

## Commits & Tags
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`
- Tags follow semantic versioning: `vMAJOR.MINOR.PATCH` (e.g., `v0.0.1`).

## Pull Requests
- Keep the title descriptive and simple.
- Fill the PR template (summary, type, testing, screenshots if UI).
- Link related issues with `Closes #<id>` when applicable.

## Issues
- Use the bug/feature templates.
- Add clear steps to reproduce or a simple problem statement.
