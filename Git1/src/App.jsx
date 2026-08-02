import React, { useState } from 'react'
import { add, subtract, divide, multiply, modulus } from './function'
import { userSchema } from './graphql/schema'
import { resolvers } from './graphql/reslover'
import { apolloClient } from './graphql/apollo'

const features = ['React', 'Vite', 'GraphQL']

const App = () => {
  const [count, setCount] = useState(0)

  const sum = add(8, 5)
  const difference = subtract(12, 4)
  const quotient = divide(20, 4)
  const product = multiply(6, 7)
  const remainder = modulus(17, 5)
  const graphqlUser = resolvers.Query.user()

  return (
    <main className="app-shell">
      <section className="card">
        <h1>Welcome to Git Learning</h1>
        <p>This page now shows live output from the app’s utility files and GraphQL modules.</p>

        <div className="section">
          <h2>Math helpers</h2>
          <p>Addition: {sum}</p>
          <p>Subtraction: {difference}</p>
          <p>Division: {quotient}</p>
          <p>Multiplication: {product}</p>
          <p>Modulus: {remainder}</p>
        </div>

        <div className="section">
          <h2>GraphQL preview</h2>
          <p>Schema: {userSchema.name}</p>
          <p>Greeting: {resolvers.Query.greeting()}</p>
          <p>Client: {apolloClient.name} - {apolloClient.status}</p>
          <p>User: {graphqlUser.name} ({graphqlUser.email})</p>
        </div>

        <div className="section">
          <h2>UI demo</h2>
          <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
