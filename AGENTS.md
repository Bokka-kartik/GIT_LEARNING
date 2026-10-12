# AGENTS.md

Vendor-neutral instructions for any AI coding agent working in this repo.
This file and `skills/` are the single source of truth. Tool-specific files, if ever added, must only point here.

## Project

Small learning repo for Git/GitHub workflows and basic front-end development: a Vite + React app, arithmetic utility functions (`src/function/`), and a GraphQL-style demo (`src/graphql/`). Keep it simple and beginner-friendly.

## Git conventions

- Husky `commit-msg` hook: the commit message must **start with the committer's git username**, followed by a space and a description, e.g. `yourname added login page`. The username comes from `git config user.username`, falling back to `user.name`.
- Husky `pre-commit` hook runs `npm run lint`. Fix lint errors instead of bypassing hooks.
- PR descriptions: see `skills/pr-description/`.

## Skills

Reusable task instructions live in `skills/<skill-name>/SKILL.md`. When a task matches a skill's description, read that file and follow it.

Available skills:

- `skills/caveman-talk/` - ultra-compact reply style. Opt-in only, when the user asks for brief replies.
- `skills/commit-message/` - write a commit message that satisfies the Husky username rule.
- `skills/pr-description/` - structured PR.md for the whole branch.
- `skills/branch-name/` - consistent branch names (`<type>/<kebab-description>`).
- `skills/code-review/` - review a diff or files, one line per finding.
- `skills/add-test/` - add Vitest or Playwright tests following repo patterns.
- `skills/readme-update/` - sync README.md with the repo using minimal edits.
- `skills/new-skill/` - add a new skill and register it here.
