# AGENTS.md

Vendor-neutral instructions for any AI coding agent working in this repo.
This file and `skills/` are the single source of truth. Tool-specific files, if ever added, must only point here.

## Project

Small learning repo for Git/GitHub workflows and basic front-end development: a Vite + React app, arithmetic utility functions (`src/function/`), and a GraphQL-style demo (`src/graphql/`). Keep it simple and beginner-friendly.

## Git conventions

- Husky `commit-msg` hook: the commit message must **start with the committer's git username**, followed by a space and a description, e.g. `yourname added login page`. The username comes from `git config user.username`, falling back to `user.name`.
- Husky `pre-commit` hook runs `npm run lint`. Fix lint errors instead of bypassing hooks.
- PR descriptions: see `skills/pr-description/`.

## Docs

`README.md` is a short landing page. Detailed docs live in `docs/`, which mirrors the repo layout (`src/function/` -> `docs/src/function/README.md`). Do not duplicate docs content in the root README; link to it.

## Skills

Reusable task instructions live in `skills/<skill-name>/SKILL.md`. When a task matches a skill's description, read that file and follow it.

Available skills:

- `skills/caveman-talk/` - ultra-compact reply style. Opt-in only, when the user asks for brief replies.
- `skills/commit-message/` - write a commit message that satisfies the Husky username rule.
- `skills/pr-description/` - structured PR.md for the whole branch.
- `skills/branch-name/` - consistent branch names (`<type>/<kebab-description>`).
- `skills/code-review/` - review a diff or files, one line per finding.
- `skills/add-test/` - add Vitest or Playwright tests following repo patterns.
- `skills/readme-update/` - sync README.md and docs/ with the repo using minimal edits.
- `skills/new-skill/` - add a new skill and register it here.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.
