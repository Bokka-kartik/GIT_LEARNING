import { describe, expect, it } from 'vitest'
import { apolloClient } from '../src/graphql/apollo.js'
import { resolvers } from '../src/graphql/reslover.js'
import { userSchema } from '../src/graphql/schema.js'

describe('GraphQL modules', () => {
  it('defines the user schema contract', () => {
    expect(userSchema).toEqual({
      name: 'UserSchema',
      queryName: 'getUser',
      fields: ['id', 'name', 'email'],
    })
  })

  it('returns the greeting and user from the resolvers', () => {
    expect(resolvers.Query.greeting()).toBe('Hello from GraphQL!')
    expect(resolvers.Query.user()).toEqual({
      id: 1,
      name: 'Asha',
      email: 'asha@example.com',
    })
  })

  it('exposes a connected Apollo client with a query placeholder', () => {
    expect(apolloClient.name).toBe('Apollo Client')
    expect(apolloClient.status).toBe('Connected')
    expect(apolloClient.query()).toBe('GraphQL query ready to run')
  })
})