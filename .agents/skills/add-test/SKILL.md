---
name: add-test
description: Add a test following this repo's conventions (Vitest unit/component tests in test/, Playwright E2E in playwright-tests/). Use when asked to add or extend tests.
---

# Add a test

## Pick the kind

| Kind | Tool | Location | File name |
| --- | --- | --- | --- |
| Pure function / module logic | Vitest | `test/` | `<area>.test.js` |
| React component | Vitest + React Testing Library | `test/` | `<Component>.test.jsx` |
| Real browser behavior | Playwright | `playwright-tests/` | `<feature>.spec.js` |

Prefer the cheapest kind that proves the behavior. Use Playwright only when a browser is genuinely needed.

## Follow existing patterns

Before writing, open one existing test of the same kind and match its style:

- Unit: `test/functions.test.js` (`describe` + small `it` per behavior, import from `../src/...`).
- Component: `test/App.test.jsx`, shared setup in `test/setup.js`.
- E2E: `playwright-tests/math-helpers.spec.js` (role/text-based locators, `await expect(...)`).

## Rules

- One behavior per test; name it as a sentence ("returns a useful message when dividing by zero").
- Cover the normal case and at least one edge case.
- Assert on visible behavior, not implementation details.
- Do not duplicate an existing test. Extend the existing file if the area already has one.

## Do not

- Do not run the test suite unless the user asks.
- Do not change source code to make a test pass without telling the user.
