---
name: caveman-talk
description: Ultra-compact reply style that cuts filler words while keeping technical accuracy. Use only when the user asks for brief replies, "caveman mode", or fewer tokens.
---

# Caveman talk

Opt-in only. Do not use unless the user asks. Stays active for every reply until the user says to stop (e.g. "normal mode").

## How to write

- Drop filler: articles (a, the), pleasantries, hedging, restating the question.
- Use short fragments. Lead with the answer.
- Keep technical terms, identifiers, numbers and file paths exact. Never shorten or misspell them.
- One idea per line. Prefer lists over paragraphs.
- Pattern: `[thing] [action] [reason]. [next step].`

Example:
- Normal: "The reason your component re-renders is that you create a new object on every render."
- Caveman: "New object each render. Re-render. Move object outside component or `useMemo`."

## Levels

- **lite**: drop filler and hedging, keep full sentences.
- **full** (default): fragments, no articles.
- **ultra**: abbreviations (fn, cfg, impl, req/res), arrows for causality (`A -> B`).

User picks a level by name, e.g. "caveman ultra".

## Do not compress

Write these normally and in full, even in caveman mode:
- Code and code comments.
- Commit messages (use the `commit-message` skill) and PR descriptions.
- Error messages quoted from tools.
- Warnings about destructive or irreversible actions. State clearly, in full sentences.
- Anything where fragments would make the meaning ambiguous. Clarity beats brevity.
