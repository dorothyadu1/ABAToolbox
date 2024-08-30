import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://admin.qa.abatoolbox.com/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ABA/);
})

test('login to core', async ({ page }) => {
    await page.goto('https://admin.qa.abatoolbox.com/login');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/ABA/);
  });