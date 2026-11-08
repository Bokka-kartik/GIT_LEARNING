---
name: ponytail-audit
description: >
  Audit a repository for bugs, security risks, load issues, missing tests,
  slow paths, and unnecessary code. Use for "audit this codebase", "review
  the whole repo", "find bloat", or "what can I delete". Read-only report.
---

# Ponytail audit

Audit the named folder or package; if none is named, audit the repository.
Prioritize correctness, safety, expected load, tests, speed, and lean code.
Report findings; do not change code.

## Map the project

- Read the README, build and deployment config, dependency list, entry points,
  and relevant tests.
- Establish expected usage and load; state the assumption.
- Trace important flows end to end, especially user input, authentication,
  data writes, money, and background jobs.
- For large repositories, focus on the highest-risk paths and say what was
  not read.

## Check for

1. **Bugs:** incorrect results, crashes, edge cases, inconsistent behavior,
   or callers that disagree with a function's contract.
2. **Risks:** injection, weak randomness, exposed secrets, missing input
   checks, swallowed errors, or unsafe write ordering.
3. **Scale:** races, repeated work, unbounded memory, per-item queries,
   quadratic work on large input, or state that must be shared across
   processes.
4. **Missing tests:** risky logic without a test that would catch a regression.
   One useful test matters more than broad coverage.
5. **Speed:** meaningful slowdowns or repeated work in a hot path.
6. **Lean code:** dead code, duplicated helpers, unnecessary dependencies,
   one-implementation abstractions, speculative config, near-copies that
   should change together, or functions mixing unrelated jobs.

## Verify findings

- Give a concrete case for every finding; otherwise omit it.
- Search the full repository, including tests, fixtures, config, and dynamic
  references before calling code unused.
- A `shortcut:` comment that states a limit is an intentional decision unless
  expected usage already exceeds that limit.
- Propose the smallest fix. Avoid style opinions and vague concerns.

## Report

Start with `What this repo does:` in two or three plain-English sentences,
including the load assumption.

Group findings by severity, omitting empty groups:

- **Must fix:** bugs, security, data loss, or failure at expected load.
- **Should fix:** risky untested code, real slowness, duplication, or
  unnecessary code.
- **Nice to have:** small speed-ups or simplifications.

Number findings across groups, with at most 20. Each finding should say what
it is, the concrete problem, the smallest fix, and what happens if skipped.
End with a one-line verdict and `Not checked:` for material areas you could
not inspect or run. If nothing is found, say what you checked.
