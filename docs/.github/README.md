# GitHub setup

Folder: `.github/`

## Workflows (`.github/workflows/`)

All run on pull requests.

| File | Job | What it checks |
| --- | --- | --- |
| `ci.yml` | `validate` | `npm test`, lint with `--max-warnings 0` (warnings fail), `npm run build`. |
| `ci.yml` | `e2e` | Playwright tests in Chromium. Uploads `test-results/` if they fail. |
| `codeql.yml` | `analyze` | CodeQL security scan. Also runs weekly. |
| `secret-scan.yml` | `trufflehog` | Looks for leaked keys and tokens in the PR. |

CI does not run on plain pushes, on purpose: a check only matters when a PR is raised.

## Dependabot (`dependabot.yml`)

- Weekly PRs for npm packages and for GitHub Actions versions.
- Minor and patch updates are grouped into one PR per ecosystem.
- **Major version bumps are ignored.** Remove the `ignore` entry when you are ready for one.
- Dependabot only opens PRs. Nothing is auto-merged.

### Reviewing a Dependabot PR

1. Wait for CI. The tests, E2E and build are the safety net; a bump that breaks the app fails here and never reaches `dev`.
2. If CI is green, skim the changelog and merge.
3. If CI is red, do not merge. Either fix the code, or add an `ignore` entry for that package/version in `dependabot.yml`.

`package-lock.json` is committed and CI uses `npm ci`, so everyone installs the exact same versions. Reverting a bad merge restores the old ones.

## Templates and ownership

| File | Purpose |
| --- | --- |
| `pull_request_template.md` | Pre-fills every new PR. Same structure as `skills/pr-description/`. |
| `ISSUE_TEMPLATE/bug_report.md`, `feature_request.md` | Pre-fill new issues. |
| `CODEOWNERS` | Requests a review from the owner on every PR. |

## Recommended repo settings (not stored in files)

Set these on GitHub under Settings:

- Branch protection on `dev`: require the CI, CodeQL and TruffleHog checks to pass before merging.
- Secret scanning and push protection: on.
- Dependabot alerts: on.
