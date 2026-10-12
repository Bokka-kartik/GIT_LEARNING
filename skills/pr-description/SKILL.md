---
name: pr-description
description: Write a structured pull request description (PR.md) for the whole branch, not a single commit. Use when asked for a PR description or PR.md.
---

# PR description

One PR covers the whole branch. Build it from every commit on the branch, not just the latest.

## Gather facts first

- Commits: `git log <base>..HEAD --oneline` (base is `dev` unless the user says otherwise).
- Changes: `git diff <base>...HEAD` (use `--stat` first, then read the files that matter).
- Do not guess from commit messages or file names alone.

## Output

Write to `PR.md` in the repo root (overwrite the previous one). Use exactly these sections, in this order:

```markdown
# <Title>

## Problem
What was wrong or missing before this change.

## Rationale
Why this approach, and any alternative that was rejected.

## Changes
Short bullets of what the branch does, grouped by behavior, not by commit.

## Files changed
- `path/to/file` (added|modified|deleted) - one-line note on what changed in it

## Testing
What the user told you was run and the result. Use "Not reported" if they did not say.

## Reviewer notes
Risks, limitations, or where to look closely. Omit this section if there is nothing to say.
```

## Rules

- Title: imperative, under 70 characters, describes the outcome. No username prefix (that rule is for commits only).
- List every changed file in "Files changed", one line each, with the note on the same line.
- Be specific and short. No "did this and that"; each bullet states one concrete change.
- Only state what the diff shows. Never invent a problem or a rationale; if the reason is not clear from the diff or the user, ask.

## Testing section

- Never run tests, lint or build yourself.
- Record only what the user reports, e.g. "npm test passed, lint passed, build not run".
- If the user says nothing, write `Not reported`. Do not tick or assume anything.

## Keep in sync

`PR_TEMPLATE.md` at the repo root is the manual version of this same format. If the sections change here, update it too (and vice versa).

## Do not

- Do not create the PR on the host service or push anything; only write `PR.md`.
- Do not commit `PR.md` unless the user asks.
