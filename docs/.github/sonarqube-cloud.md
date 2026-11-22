# SonarQube Cloud setup

This guide describes the SonarQube Cloud configuration required by this repository's GitHub Actions scan.

Workflow file: [`.github/workflows/sonarqube.yml`](../../.github/workflows/sonarqube.yml)

SonarQube Cloud analyzes source code for bugs, vulnerabilities, and maintainability issues. Snyk is a separate complementary check that scans npm dependencies for known vulnerabilities.

## Create the SonarQube Cloud project

1. Sign in to [SonarQube Cloud](https://sonarcloud.io) and create or import the GitHub repository as a project.
2. Note the organization key and project key shown for that project. The values must match the project you created.
3. Create or obtain a project analysis token in SonarQube Cloud. Store it securely; GitHub needs it to authenticate the scan.

## Configure GitHub Actions

In the GitHub repository, open **Settings → Secrets and variables → Actions**.

Under **Repository secrets**, add:

| Name | Value |
| --- | --- |
| `SONAR_TOKEN` | The analysis token for the SonarQube Cloud project. |

Under **Repository variables**, add:

| Name | Value |
| --- | --- |
| `SONAR_PROJECT_KEY` | The project key from SonarQube Cloud. |
| `SONAR_ORGANIZATION` | The organization key from SonarQube Cloud. |

The workflow checks that both variables are set before starting the scan. If either is missing, it reports which repository variable needs to be configured.

## When the scan runs

In this repository, the workflow runs on pushes to `dev` and pull requests targeting `dev`. Pull requests from forks are skipped because those runs do not receive repository secrets. A full Git history is fetched for analysis.

To reuse this workflow in another repository, copy the YAML file and set the three values above. Change the `dev` branch filters in the `on` section to the branch used by that repository. Ensure SonarQube Cloud has the repository project configured with matching project and organization keys.
