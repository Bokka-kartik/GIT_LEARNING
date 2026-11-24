# End-to-end tests

Folder: `playwright-tests/`

Playwright drives a real Chromium browser against the running app. Config: `playwright.config.js` (it starts `pnpm run dev` on `127.0.0.1:5173` automatically).

| Command | What it does |
| --- | --- |
| `pnpm run test:e2e` | Run all E2E tests headless. |
| `pnpm run test:e2e:headed` | Run with the browser visible. |
| `pnpm run test:e2e:ui` | Open Playwright's interactive UI. |

First time on a machine: `pnpm exec playwright install chromium`.

| File | Covers |
| --- | --- |
| `homepage.spec.js` | Page title and the calculator add/subtract/reset flow. |
| `counter.spec.js` | The click counter. |
| `math-helpers.spec.js` | Math helper inputs and the divide-by-zero message. |
| `graphql-preview.spec.js` | The GraphQL preview section. |

In CI these run as the separate `e2e` job. If one fails, the workflow uploads `test-results/` as an artifact, see [.github](../.github/README.md).
