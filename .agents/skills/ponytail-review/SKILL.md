---
name: ponytail-review
description: >
  Review a change for bugs, security risks, expected load, missing tests,
  speed, and unnecessary code. Use for "review this", "code review", "review
  my PR", or "is this over-engineered". Read-only report.
---

# Ponytail review

Review the change like the person who will be paged if it breaks. Prioritize
correctness, safety, expected load, tests, speed, and lean code. Report
findings; do not change code.

## Understand the change

- Review what the user names: staged or unstaged changes, a branch, a PR, or
  specific files. Otherwise review uncommitted changes, or the latest commit
  if there are none.
- Read the diff and the connected code: callers, functions it invokes, tests,
  and relevant documentation.
- Trace the real flow from input through stored state to output.
- If a signature, return value, or behavior changed, find all callers.
- Establish expected load from project docs or deployment config and state the
  assumption.

## Look for

1. **Bugs:** wrong results, crashes, edge cases, broken callers, or a fix
   applied in only one caller instead of shared code.
2. **Risks:** injection, weak randomness, exposed secrets, missing input
   checks, swallowed errors, or unsafe write ordering.
3. **Scale:** races, repeated work, unbounded memory, per-item queries,
   quadratic work on large input, or state that must be shared across
   processes.
4. **Missing tests:** risky new logic or a bug fix without a test that would
   catch a regression. One useful test matters more than broad coverage.
5. **Speed:** meaningful slowdowns or repeated work in a hot path.
6. **Lean code:** dead code, duplication, unnecessary dependencies,
   one-implementation abstractions, speculative config, near-copies that
   should change together, or functions mixing unrelated jobs.

## Verify findings

- Give a concrete case for every finding; otherwise omit it.
- Re-read the relevant lines and confirm the behavior, caller, or risk exists.
- Treat a `shortcut:` comment with a stated limit as an intentional decision
  unless expected usage already crosses that limit.
- Propose the smallest fix. Avoid style opinions and vague concerns.

## Report

Start with `What this change does:` in two or three plain-English sentences.
Group findings by severity, omitting empty groups:

- **Must fix:** bugs, security, data loss, or failure at expected load.
- **Should fix:** risky untested code, real slowness, duplication, or
  unnecessary code.
- **Nice to have:** small speed-ups or simplifications.

Number findings so the user can refer to them. Each should explain what it is,
the concrete problem, the smallest fix, and what happens if skipped. End with
a one-line verdict, `Lean: -<N> lines possible.` when applicable, and
`Not checked:` for material areas you could not inspect or run. If nothing is
found, say what you checked.
