# Function helpers

Folder: `src/function/`

These simple utility modules are used to demonstrate basic math operations inside the app UI.

| Function | File | Notes |
| --- | --- | --- |
| `add(a, b)` | `adding.js` | |
| `subtract(a, b)` | `subtracting.js` | |
| `multiply(a, b)` | `multiplying.js` | |
| `divide(a, b)` | `dividing.js` | Returns `'Cannot divide by zero'` when `b` is `0`. |
| `modulus(a, b)` | `modulus.js` | Returns `'Cannot divide by zero'` when `b` is `0`. |

All five are re-exported from `index.js`, so the app imports them with `import { add } from './function'`.

## Tests

- Unit: `test/functions.test.js`
- E2E: `playwright-tests/math-helpers.spec.js`
