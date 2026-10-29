# Unit and component tests

Folder: `test/`

Run with `npm test` (Vitest, jsdom environment, React Testing Library).

| File | Covers |
| --- | --- |
| `setup.js` | Loads jest-dom matchers and cleans up the DOM after each test. |
| `App.test.jsx` | The `App` component: rendering and interactions. |
| `functions.test.js` | The math helpers in `src/function/`. |
| `graphql.test.js` | The GraphQL demo modules in `src/graphql/`. |

Vitest config lives in `vite.config.js`. It excludes `playwright-tests/` so the two test types do not mix.

For browser-level tests see [playwright-tests](../playwright-tests/README.md). Both run in CI, see [.github](../.github/README.md).
