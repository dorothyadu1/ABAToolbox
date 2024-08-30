import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.abatoolbox.com/login');
  await page.getByLabel('Company (Registered Acronym)').click();
  await page.getByLabel('Company (Registered Acronym)').fill('tac');
  await page.getByLabel('Username (Registered Email').click();
  await page.getByLabel('Username (Registered Email').fill('dorothy@tac.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password1!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('tab', { name: 'Team' }).click();
  await page.getByRole('button', { name: 'Team Member' }).click();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('Drr');
  await page.getByLabel('Last Name *').click();
  await page.getByLabel('Last Name *').fill('SDD');
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('dff@ee.com');
  await page.locator('div').filter({ hasText: /^Role \*$/ }).first().click();
  await page.getByRole('option', { name: 'Administrator / Director ' }).locator('div').nth(1).click();
  await page.getByLabel('Start Date *').click();
  await page.locator('div').filter({ hasText: /^20$/ }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByLabel('Send Invite Email').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});