import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App.jsx'

describe('App', () => {
  it('renders the utility and GraphQL output', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Welcome to Git Learning' })).toBeInTheDocument()
    expect(screen.getByText('Addition: 0')).toBeInTheDocument()
    expect(screen.getByText('Schema: UserSchema')).toBeInTheDocument()
    expect(screen.getByText('Greeting: Hello from GraphQL!')).toBeInTheDocument()
    expect(screen.getByText('User: Asha (asha@example.com)')).toBeInTheDocument()
  })

  it('supports repeated calculator operations and reset', () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Enter a number')
    fireEvent.change(input, { target: { value: '5' } })
    fireEvent.click(screen.getByRole('button', { name: 'Add' }))

    expect(screen.getByText((_, element) => element?.textContent?.replace(/\s+/g, ' ').trim() === 'Current total: 5')).toBeInTheDocument()
    expect(screen.getByText('+5 = 5')).toBeInTheDocument()
    expect(input).toHaveValue(null)

    fireEvent.change(input, { target: { value: '2' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subtract' }))
    expect(screen.getByText((_, element) => element?.textContent?.replace(/\s+/g, ' ').trim() === 'Current total: 3')).toBeInTheDocument()
    expect(screen.getByText('-2 = 3')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByText((_, element) => element?.textContent?.replace(/\s+/g, ' ').trim() === 'Current total: 0')).toBeInTheDocument()
    expect(screen.queryByText('+5 = 5')).not.toBeInTheDocument()
  })

  it('updates the math helper output from both inputs', () => {
    render(<App />)

    fireEvent.change(screen.getByPlaceholderText('First value'), { target: { value: '9' } })
    fireEvent.change(screen.getByPlaceholderText('Second value'), { target: { value: '4' } })

    expect(screen.getByText('Addition: 13')).toBeInTheDocument()
    expect(screen.getByText('Subtraction: 5')).toBeInTheDocument()
    expect(screen.getByText('Division: 2.25')).toBeInTheDocument()
    expect(screen.getByText('Multiplication: 36')).toBeInTheDocument()
    expect(screen.getByText('Modulus: 1')).toBeInTheDocument()
  })

  it('increments the UI demo counter', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: 'Clicked 0 times' })
    fireEvent.click(button)

    expect(screen.getByRole('button', { name: 'Clicked 1 times' })).toBeInTheDocument()
  })
})