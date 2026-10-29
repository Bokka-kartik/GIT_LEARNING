# Git Learning Project

A small learning repo for Git, GitHub and basic front-end workflows: a Vite + React app with tests, CI, Git hooks and reusable AI-agent instructions. Kept simple and beginner-friendly.

## Quick start

```
npm install
npm run dev
```

Checks you can run locally:

| Command | Runs |
| --- | --- |
| `npm test` | Unit and component tests (Vitest) |
| `npm run test:e2e` | Browser tests (Playwright) |
| `npm run lint` | ESLint |
| `npm run build` | Production build |

## What is in here

- A Vite + React app (`src/`) with math helpers and a GraphQL-style demo.
- Tests: Vitest in `test/`, Playwright in `playwright-tests/`.
- GitHub Actions for CI, CodeQL and secret scanning, plus Dependabot, in `.github/`.
- Husky Git hooks in `.husky/`.
- Reusable AI-agent instructions in `AGENTS.md` and `skills/`.

## Documentation

Detailed docs are in [docs/](docs/README.md), organised to mirror the repo folders:

- [Function helpers](docs/src/function/README.md)
- [GraphQL demo](docs/src/graphql/README.md)
- [Unit tests](docs/test/README.md)
- [E2E tests](docs/playwright-tests/README.md)
- [GitHub setup: CI, Dependabot, templates](docs/.github/README.md)
- [Git hooks](docs/.husky/README.md)
- [Skills](docs/skills/README.md)

## Contributing

Branch from `dev`, name it `<type>/<short-description>` (see `skills/branch-name/`), and open a PR. Commit messages must start with your git username, see [Git hooks](docs/.husky/README.md).
