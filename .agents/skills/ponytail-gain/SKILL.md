---
name: ponytail-gain
description: >
  Show Ponytail's published benchmark results and explain their limits. Use
  for "ponytail gain", "what does Ponytail save", or "ponytail impact".
  One-shot display; does not change mode or write files.
---

# Ponytail gain

Display the upstream benchmark figures below when invoked. These are
measurements reported by the Ponytail project, not measurements of this
repository. Do not invent a per-repository savings estimate: the unbuilt
version is not available as a baseline.

The published benchmark compares Ponytail 5 with the same agent without the
skill on 39 tasks, five runs each. The source describes a headless Claude Code
benchmark using Opus 5.5, with hidden correctness and safety checks. Each
figure is the geometric mean of per-task medians. Source: Ponytail's
[`2026-10-07 benchmark`](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/benchmarks/results/2026-10-07-agentic.md)
and README.

```text
  ponytail gain           benchmark · 39 tasks × 5 runs · Opus 5.5

  no-skill        ████████████████████  100%
  Lines of code   █████████···········   47%   ▼ 53%
  Output tokens   ███████████·········   55%   ▼ 45%
  Cost            ███████████████·····   74%   ▼ 26%
  Time            ████████████········   59%   ▼ 41%
  Hidden checks passed   97%  (no-skill 96%)
  Tests where the logic needs one   98%  (no-skill 68%)
```

These are benchmark averages, not a guarantee or a local measurement. Point
users to `ponytail-debt` for a count of this repository's marked shortcuts and
`ponytail-audit` for a repository audit. Do not change mode or persist
anything.
