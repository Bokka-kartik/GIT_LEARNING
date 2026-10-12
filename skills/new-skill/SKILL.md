---
name: new-skill
description: Add a new skill to this repo's skills/ folder in the standard format and register it in AGENTS.md. Use when asked to create or add a skill.
---

# New skill

## Steps

1. Create `skills/<skill-name>/SKILL.md`. The name is lowercase kebab-case and matches the folder.
2. Start the file with frontmatter:

   ```markdown
   ---
   name: <skill-name>
   description: <one line: what it does and when to use it>
   ---
   ```

3. Write plain step-by-step instructions. Suggested sections: process or format, rules, "Do not".
4. Add one line to the "Available skills" list in `AGENTS.md`:
   `- \`skills/<skill-name>/\` - <short purpose>`

## Rules

- Vendor-neutral: say "run this command", not a specific tool's feature names.
- The description must say when to use the skill, since that is how an agent decides to load it.
- One skill, one job. Split if it does two unrelated things.
- Point to existing repo files as examples instead of pasting code that will go stale.
- Keep it short. Every line costs tokens whenever the skill is read.
- Content lives only in `skills/`. Never duplicate it elsewhere.

## Do not

- Do not commit; leave it for the user to review.
