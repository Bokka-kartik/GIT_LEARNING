# Telegram notifications

This guide explains how to configure the repository's GitHub Actions workflow to send Telegram messages, and how to adapt it for another repository.

Workflow file: [`.github/workflows/telegram-notify.yml`](../../.github/workflows/telegram-notify.yml)

## Notifications sent

| Event | Trigger | Message |
| --- | --- | --- |
| Manual test | `workflow_dispatch` | 🧪 Bot test successful |
| Pull request opened | `pull_request: opened`, targeting the default branch | 🔔 New Pull Request |
| Pull request merged | `pull_request: closed`, targeting the default branch and merged | 🎉 Pull Request Merged! |
| Pull request closed | `pull_request: closed`, targeting the default branch and not merged | 🚫 Pull Request Closed |
| Issue opened | `issues: opened` | 🐛 New Issue |
| Push | `push` to any branch except the default branch | 🚀 New Code Push |

The workflow checks the repository's default branch at run time. Pull requests targeting other branches are skipped. Pushes to the default branch are skipped because the merged pull request has already been announced. This lets you copy the workflow without changing a branch name in the file.

Messages use Telegram HTML formatting, with bold headings and labels and a blank line between fields. Free-text values such as titles and commit messages are HTML-escaped before sending.

## Set up the Telegram bot

1. In Telegram, message [@BotFather](https://t.me/BotFather), create a bot with `/newbot`, and copy the bot token it gives you.
2. Open a chat with your new bot and send it a message. For a group, add the bot and send a message in the group.
3. In a browser, visit `https://api.telegram.org/bot<TOKEN>/getUpdates`, replacing `<TOKEN>` with the bot token. Find the `chat.id` value for your message. A group chat ID may be negative.

Keep the bot token private. The `getUpdates` URL contains the token, so do not share or publish it. If the response has no updates, send the bot another message and check again.

## Add repository secrets

In GitHub, open the repository's **Settings → Secrets and variables → Actions**. Under **Repository secrets**, add:

| Name | Value |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | The token from BotFather. |
| `TELEGRAM_CHAT_ID` | The user or group chat ID from `getUpdates`. |

The workflow exits with `Telegram credentials are missing.` if either secret is unset.

## Test delivery

1. Open the repository's **Actions** tab.
2. Select **GitHub Telegram Notifications**.
3. Choose **Run workflow**, select a branch containing the workflow, and run it.
4. Confirm that the bot test message arrives in the configured chat.

## Reuse in another repository

Copy `telegram-notify.yml` into the other repository's `.github/workflows/` directory, then add the same two repository secrets and run the manual test. The workflow uses GitHub's runtime event context to identify the repository and default branch, so there is no repository name or branch name to edit. Check the `permissions` block if you change what event data the workflow reads.

## Planned

Notifications for failed workflows are not configured yet; the workflow to monitor still needs to be identified.
