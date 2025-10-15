import { Page, expect } from '@playwright/test';

export async function loginToDemoApp(page: Page) {
  await page.goto('/');

  // Fill login form
  await page.fill('input[id="username"]', 'admin');
  await page.fill('input[id="password"]', 'password123');

  // Submit
  await page.click('button[type="submit"]');

  // Wait for post-login element (dashboard or welcome message)
  await expect(page.locator('text=Logout')).toBeVisible();
}
