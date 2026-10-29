# Git hooks (Husky)

Folder: `.husky/`

Hooks are installed automatically by `npm install` (the `prepare` script runs `husky`).

| Hook | What it does |
| --- | --- |
| `pre-commit` | Runs `npm run lint`. The commit is blocked if lint fails. |
| `commit-msg` | The message must start with your git username and a space, e.g. `bsai added login page`. |

The username comes from `git config user.username`, falling back to `user.name`. If it is not set:

```
git config user.username yourname
```

Fix the problem instead of bypassing with `--no-verify`; CI runs the same lint check anyway.
