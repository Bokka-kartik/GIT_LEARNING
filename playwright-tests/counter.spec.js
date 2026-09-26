import { test, expect } from '@playwright/test'

test('counter increases when clicked', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Clicked 0 times' }).click()
  await expect(page.getByRole('button', { name: 'Clicked 1 times' })).toBeVisible()

  await page.getByRole('button', { name: 'Clicked 1 times' }).click()
  await expect(page.getByRole('button', { name: 'Clicked 2 times' })).toBeVisible()
})