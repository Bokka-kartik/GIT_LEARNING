---
name: ponytail-help
description: >
  Show a quick reference to the Ponytail skills and levels. Use for
  "ponytail help", "how do I use Ponytail", or "ponytail commands".
  One-shot display; does not change mode or write files.
---

# Ponytail help

Display this reference when invoked. These skills are available in this
repository through its agent-skill integrations; exact invocation depends on
the agent host.

## Levels

| Level | Meaning |
|---|---|
| Lite | Build what was asked and briefly mention a smaller alternative. |
| Full | Make the smallest complete change, check non-trivial logic, and state what was skipped and any risk. |
| Ultra | Also question whether each requested part is justified before building. |

The selected level stays active for the session, or until the user changes it.

## Skills

| Skill | Purpose |
|---|---|
| `ponytail` | Prefer the smallest complete change and clear replies. |
| `ponytail-review` | Review a change for correctness, safety, load, tests, speed, and unnecessary code. |
| `ponytail-audit` | Report ranked quality findings for a repository. |
| `ponytail-debt` | Collect `shortcut:` comments into a debt ledger. |
| `ponytail-gain` | Show the upstream benchmark and its limitations. |
| `ponytail-help` | Show this reference. |

Say "stop ponytail" or "normal mode" to stop using the mode. These skills
describe behavior only; they do not install global settings or plugins.

More information: https://github.com/DietrichGebert/ponytail
