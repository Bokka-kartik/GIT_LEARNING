---
name: code-review
description: Review a diff, file or branch and report findings one line each as location, problem, fix. Use when the user asks for a code review or to check changes.
---

# Code review

## Scope

Review only what was asked: the staged diff, a branch diff (`git diff <base>...HEAD`), or named files. Read the actual code first; do not review from file names or the commit message.

## Check, in this order

1. **Correctness:** wrong logic, off-by-one, unhandled null/undefined, bad edge cases (e.g. divide by zero), broken async handling.
2. **Tests:** is the new behavior covered? Do changed tests still assert something meaningful?
3. **Security:** secrets or tokens in code, unsafe input handling.
4. **Clarity:** misleading names, dead code, unnecessary complexity.
5. **Repo conventions:** see `AGENTS.md` and the matching skills.

Skip style nits the linter already enforces.

## Output format

One line per finding, most severe first:

```
<file>:<line> <severity> - <problem>. <fix>.
```

Severity: `bug`, `risk`, `nit`.

Example:

```
src/function/dividing.js:4 bug - returns Infinity when divisor is -0. Check `b === 0` covers -0 or use Object.is.
```

If nothing is wrong, say "No issues found" and list what was checked. Do not invent findings to look thorough.

## Do not

- Do not edit files unless the user asks for fixes.
- Do not run the test or build commands unless the user asks.
