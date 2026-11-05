---
name: branch-name
description: Suggest a consistent git branch name from a task description. Use when the user is about to create a branch or asks what to call one.
---

# Branch name

## Format

```
<type>/<short-kebab-description>
```

| Type | Use for |
| --- | --- |
| `feat` | new feature or behavior |
| `fix` | bug fix |
| `docs` | README, notes, AGENTS.md, skills |
| `test` | adding or changing tests only |
| `refactor` | restructuring with no behavior change |
| `chore` | tooling, config, CI, dependencies |

## Rules

- Lowercase, words separated by hyphens, no spaces or underscores.
- 2 to 5 words that say what the branch is for, e.g. `feat/graphql-preview-panel`, `fix/divide-by-zero-message`.
- Never random or vague names like `test1`, `changes`, `my-branch`.
- One branch, one purpose. If the task covers two unrelated things, suggest two branches.
- Branch from the up-to-date base branch (`dev` unless the user says otherwise).

## Output

Give one suggested name, plus the command to create it: `git switch -c <name>`. Do not run it unless asked.
