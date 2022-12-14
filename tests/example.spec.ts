import { test, expect } from '@playwright/test';

test('Is there an H1 tag on the homepage?', async ({ page }) => {
  await page.goto("/");
  expect(page.locator('h1')).toHaveText('Hello, World!');
});