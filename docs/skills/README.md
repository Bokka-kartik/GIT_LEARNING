# Skills

Vendor-neutral, reusable task instructions live in `.agents/skills/<skill-name>/SKILL.md`. This is the single source of truth and is discovered by Codex and Gemini CLI.

Claude Code discovers skills through `.claude/skills/`, so each entry there contains its name, description, and a pointer to the canonical file. Keep full instructions only in `.agents/skills/`.

## SKILL.md format

```markdown
---
name: <skill-name>        # matches the folder name
description: <one line: what it does and when to use it>
---

Plain step-by-step instructions.
```

## Rules

- Keep canonical skill instructions vendor-neutral.
- Add each new skill under `.agents/skills/` and create a small Claude discovery entry in `.claude/skills/`.
- See `.agents/skills/new-skill/SKILL.md` for the creation steps.
