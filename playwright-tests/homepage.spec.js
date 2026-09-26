import { test, expect } from '@playwright/test'

test('homepage displays the Git Learning title', async ({ page }) => {
  await page.goto('/')

  console.log(await page.title())
  await expect(page).toHaveTitle('Git Learning')
})

test('calculator supports add, subtract, and reset interactions', async ({ page }) => {
  await page.goto('/')

  const input = page.getByRole('spinbutton', { name: 'Enter a number' })

  await input.fill('7')
  await page.getByRole('button', { name: 'Add' }).click()
  await expect(page.getByText('Current total: 7')).toBeVisible()
  await expect(page.getByText('+7 = 7', { exact: true })).toBeVisible()

  await input.fill('3')
  await page.getByRole('button', { name: 'Subtract' }).click()
  await expect(page.getByText('Current total: 4')).toBeVisible()
  await expect(page.getByText('-3 = 4', { exact: true })).toBeVisible()

  await page.getByRole('button', { name: 'Reset' }).click()
  await expect(page.getByText('Current total: 0')).toBeVisible()
  await expect(page.getByText('+7 = 7', { exact: true })).toHaveCount(0)
})