import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('/')
  
})

test('login to the ABA Company Tenant', async({page}) => {
    await page.getByLabel('Company (Registered Acronym)').click();
    await page.getByLabel('Company (Registered Acronym)').fill('tac');
    await page.getByLabel('Username (Registered Email').click();
    await page.getByLabel('Username (Registered Email').fill('dorothy@tac.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Password1!');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Expect logged in user to be account owner
    await expect(page.getByLabel('Expand')).toContainText('Administrator / Director');
})