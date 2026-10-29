# Skills

Vendor-neutral, reusable task instructions for AI agents. One folder per skill:

```
skills/
└── <skill-name>/
    ├── SKILL.md      # required
    └── ...           # optional scripts / reference files
```

## SKILL.md format

```markdown
---
name: <skill-name>        # matches the folder name
description: <one line: what it does and when to use it>
---

Plain step-by-step instructions.
```

## Rules

- Keep skills vendor-neutral: no references to a specific tool's features (say "run this command", not "use the X tool").
- Keep content here only. Vendor-specific files may point to this folder but must not duplicate it.
- Add each new skill to the list in `AGENTS.md`.
