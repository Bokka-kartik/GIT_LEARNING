import { useState } from 'react'
import { add, subtract, divide, multiply, modulus } from './function'
import { userSchema } from './graphql/schema'
import { resolvers } from './graphql/reslover'
import { apolloClient } from './graphql/apollo'

const features = ['React', 'Vite', 'GraphQL']

const App = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [total, setTotal] = useState(0)
  const [history, setHistory] = useState([])
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')

  const sum = add(Number(firstValue) || 0, Number(secondValue) || 0)
  const difference = subtract(Number(firstValue) || 0, Number(secondValue) || 0)
  const quotient = divide(Number(firstValue) || 0, Number(secondValue) || 0)
  const product = multiply(Number(firstValue) || 0, Number(secondValue) || 0)
  const remainder = modulus(Number(firstValue) || 0, Number(secondValue) || 0)
  const graphqlUser = resolvers.Query.user()

  const applyOperation = (type) => {
    const value = Number(inputValue)

    if (Number.isNaN(value)) {
      return
    }

    const nextTotal = type === 'add' ? total + value : total - value
    const operationLabel = type === 'add' ? `+${value}` : `-${value}`

    setTotal(nextTotal)
    setHistory((prev) => [...prev, `${operationLabel} = ${nextTotal}`])
    setInputValue('')
  }

  const resetCalculator = () => {
    setTotal(0)
    setHistory([])
    setInputValue('')
  }

  return (
    <main className="app-shell">
      <section className="card">
        <h1>Welcome to Git Learning</h1>
        <p>This page now shows live output from the app’s utility files and GraphQL modules.</p>

        <div className="section">
          <h2>Live calculator</h2>
          <p>Enter a number and use the buttons to add or subtract it repeatedly.</p>
          <input
            type="number"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Enter a number"
            style={{ marginBottom: '0.75rem', padding: '0.5rem', width: '100%' }}
          />
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <button type="button" onClick={() => applyOperation('add')}>Add</button>
            <button type="button" onClick={() => applyOperation('subtract')}>Subtract</button>
            <button type="button" onClick={resetCalculator}>Reset</button>
          </div>
          <p><strong>Current total:</strong> {total}</p>
          <ul>
            {history.map((entry, index) => (
              <li key={`${entry}-${index}`}>{entry}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Math helpers</h2>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <input
              type="number"
              value={firstValue}
              onChange={(event) => setFirstValue(event.target.value)}
              placeholder="First value"
              style={{ padding: '0.5rem', flex: 1 }}
            />
            <input
              type="number"
              value={secondValue}
              onChange={(event) => setSecondValue(event.target.value)}
              placeholder="Second value"
              style={{ padding: '0.5rem', flex: 1 }}
            />
          </div>
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
          <button type="button" onClick={() => setCount(count + 1)}>Clicked {count} times</button>
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
