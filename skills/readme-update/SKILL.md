---
name: readme-update
description: Keep README.md in sync with the repo after files or features are added, with minimal edits and no rewrite. Use when asked to update the README or after structural changes.
---

# README update

## Process

1. Compare `README.md` against the actual repo: top-level folders, `package.json` scripts, `.github/workflows/`, `.husky/`.
2. Find what is missing or stale: new folders (e.g. `playwright-tests/`, `skills/`), new scripts, removed things still mentioned.
3. Edit only those lines. Keep the existing sections, order and tone.
4. Show the user the change as a short list of what was added, changed or removed.

## Rules

- Minimal diff. Do not reword sections that are still correct.
- Keep it beginner-friendly and short; this is a learning repo.
- Only document things that exist. Never describe planned or guessed features.
- Keep the "Project structure" list matching real folders.
- Do not touch `README.template.md` unless asked.

## Do not

- Do not rewrite the README from scratch.
- Do not commit; leave the change for the user to review.
