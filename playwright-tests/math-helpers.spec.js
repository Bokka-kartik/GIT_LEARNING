import { test, expect } from '@playwright/test'

test('math helper inputs update each calculation', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('spinbutton', { name: 'First value' }).fill('8')
  await page.getByRole('spinbutton', { name: 'Second value' }).fill('2')

  await expect(page.getByText('Addition: 10', { exact: true })).toBeVisible()
  await expect(page.getByText('Subtraction: 6', { exact: true })).toBeVisible()
  await expect(page.getByText('Division: 4', { exact: true })).toBeVisible()
  await expect(page.getByText('Multiplication: 16', { exact: true })).toBeVisible()
  await expect(page.getByText('Modulus: 0', { exact: true })).toBeVisible()
})

test('math helpers explain division by zero', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Division: Cannot divide by zero', { exact: true })).toBeVisible()
  await expect(page.getByText('Modulus: Cannot divide by zero', { exact: true })).toBeVisible()
})