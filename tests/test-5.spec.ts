import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.abatoolbox.com/');
  await page.goto('https://qa.abatoolbox.com/login');
  await page.getByLabel('Company (Registered Acronym)').click();
  await page.getByLabel('Company (Registered Acronym)').fill('lc');
  await page.getByLabel('Username (Registered Email').click();
  await page.getByLabel('Username (Registered Email').fill('dorothyadmin@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password1!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('cell', { name: 'Aloha Le.' }).click();
  await page.getByRole('tab', { name: 'BX Treatments' }).click();
  await page.locator('tr:nth-child(2) > td:nth-child(4) > .icon-container').click();
  await expect(page.locator('#q-portal--dialog--2 form div').filter({ hasText: 'BX TREATMENTS Target' }).getByRole('button')).toBeVisible();
});