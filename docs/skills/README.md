# Skills

Vendor-neutral, reusable task instructions live in `skills/<skill-name>/SKILL.md`. This is the single source of truth.

Small discovery wrappers expose each skill to Codex and Gemini CLI through `.agents/skills/`, and Claude Code through `.claude/skills/`. Wrappers contain the skill name, description, and a pointer to the canonical file; do not copy full instructions into them.

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
- Add each new skill to `AGENTS.md` and create matching discovery wrappers in `.agents/skills/` and `.claude/skills/`.
- See `skills/new-skill/SKILL.md` for the creation steps.
