import { test, expect } from '@playwright/test'

test('GraphQL preview displays schema, client, and user data', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Schema: UserSchema', { exact: true })).toBeVisible()
  await expect(page.getByText('Greeting: Hello from GraphQL!', { exact: true })).toBeVisible()
  await expect(page.getByText('Client: Apollo Client - Connected', { exact: true })).toBeVisible()
  await expect(page.getByText('User: Asha (asha@example.com)', { exact: true })).toBeVisible()
})