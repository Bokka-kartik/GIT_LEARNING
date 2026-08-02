export const resolvers = {
  Query: {
    greeting: () => 'Hello from GraphQL!',
    user: () => ({
      id: 1,
      name: 'Asha',
      email: 'asha@example.com',
    }),
  },
}
