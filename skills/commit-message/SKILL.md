---
name: commit-message
description: Write a short, intent-focused git commit message that passes this repo's Husky commit-msg hook (must start with the committer's git username). Use when asked to write or suggest a commit message.
---

# Commit message

## Hard rule (enforced by `.husky/commit-msg`)

The message must start with the committer's username, then a space, then the description:

```
<username> <description>
```

Find the username with `git config --get user.username`, falling back to `git config --get user.name`. If neither is set, stop and tell the user to run `git config user.username <name>`. Do not invent one.

## Style

- Subject line only is fine; add a body only when the *why* is not obvious.
- Subject: imperative or past tense, consistent with the history (`git log --oneline`), under ~72 characters, no trailing period.
- Say what changed and why, not how. Describe intent, not a file list.
- One logical change per commit. If the diff mixes unrelated changes, suggest splitting.
- Check the actual staged diff (`git diff --staged`) before writing. Do not guess from file names.

## Examples

```
bsai added login page validation
bsai fixed divide-by-zero in dividing function
bsai moved graphql resolver tests into test folder
```

## Do not

- Do not skip hooks (`--no-verify`) to get around a rejected message. Fix the message.
- Do not commit unless the user asked you to. Suggesting a message is not committing.
