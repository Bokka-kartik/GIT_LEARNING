# GraphQL demo

Folder: `src/graphql/`

A small, front-end-only demo of how GraphQL pieces fit together. There is no real server or network call; each file is a plain object that stands in for one part.

| File | Role |
| --- | --- |
| `schema.js` | `userSchema`: the shape of a user query (`getUser` with `id`, `name`, `email`). |
| `reslover.js` | `resolvers`: functions that return the data (`greeting` and `user`). The filename keeps its original spelling. |
| `apollo.js` | `apolloClient`: a stand-in client with a `query()` placeholder. |

The app shows these in the "GraphQL preview" section of `App.jsx`.

## Tests

- Unit: `test/graphql.test.js`
- E2E: `playwright-tests/graphql-preview.spec.js`
