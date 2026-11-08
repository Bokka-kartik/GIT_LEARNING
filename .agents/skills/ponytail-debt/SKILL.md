---
name: ponytail-debt
description: >
  Collect deliberate `shortcut:` comments into a debt ledger. Use for
  "ponytail debt", "what did we defer", or "list the shortcuts". Read-only
  unless the user asks to save the ledger.
---

# Ponytail debt

Every deliberate shortcut should name its limit and upgrade path in a
`shortcut:` comment. Collect those comments so a deferral does not quietly
become permanent. Older comments may use `ponytail:`.

## Scan

Search tracked files while respecting ignore rules:

```sh
git grep --no-index --exclude-standard -nE '(#|//|/[*]) ?(shortcut|ponytail):'
```

Add comment prefixes used by the current language if needed. If the user names
a different marker word, search for that word instead. Count actual
intentional deferrals, not prose mentioning the convention or unrelated uses
such as keyboard shortcuts.

## Output

List one entry per marker, grouped by file:

`<file>:<line>, <what was simplified>. ceiling: <limit>. upgrade: <trigger>.`

Add a `no-trigger` tag when a comment gives no upgrade path or trigger. End
with `<N> markers, <M> with no trigger.` If none are found, say
`No shortcut debt. Clean ledger.`

This is read-only. Write a ledger file only if the user asks.
