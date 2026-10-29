# Docs

Detailed documentation for this repo. The root [README](../README.md) is the short landing page; the detail lives here.

## How this folder is organised

`docs/` mirrors the repo layout. To find the doc for a folder, look for the same path under `docs/`:

| Repo folder | Doc |
| --- | --- |
| `src/function/` | [src/function/README.md](src/function/README.md) |
| `src/graphql/` | [src/graphql/README.md](src/graphql/README.md) |
| `test/` | [test/README.md](test/README.md) |
| `playwright-tests/` | [playwright-tests/README.md](playwright-tests/README.md) |
| `.github/` | [.github/README.md](.github/README.md) |
| `.husky/` | [.husky/README.md](.husky/README.md) |
| `skills/` | [skills/README.md](skills/README.md) |

## Files that stay where they are

Some Markdown files must live in their original place because a tool reads them from there:

- `README.md` - the GitHub landing page.
- `AGENTS.md` - instructions for AI agents.
- `skills/*/SKILL.md` - the skills themselves.
- `.github/pull_request_template.md` and `.github/ISSUE_TEMPLATE/` - GitHub only loads templates from `.github/`.

## Adding a doc

When you add a folder worth explaining, add `docs/<same path>/README.md` and one row to the table above.
