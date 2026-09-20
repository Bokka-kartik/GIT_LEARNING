import { describe, expect, it } from 'vitest'
import { add, subtract, divide, multiply, modulus } from '../src/function/index.js'

describe('math helpers', () => {
  it('adds two values', () => {
    expect(add(7, 5)).toBe(12)
  })

  it('subtracts two values', () => {
    expect(subtract(7, 5)).toBe(2)
  })

  it('multiplies two values', () => {
    expect(multiply(7, 5)).toBe(35)
  })

  it('divides two values', () => {
    expect(divide(10, 4)).toBe(2.5)
  })

  it('returns a useful message when dividing by zero', () => {
    expect(divide(10, 0)).toBe('Cannot divide by zero')
  })

  it('calculates a remainder', () => {
    expect(modulus(10, 4)).toBe(2)
  })

  it('returns a useful message when calculating a remainder by zero', () => {
    expect(modulus(10, 0)).toBe('Cannot divide by zero')
  })
})