import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.abatoolbox.com/');
  await page.goto('https://qa.abatoolbox.com/login');
  await page.getByLabel('Company (Registered Acronym)').click();
  await page.getByLabel('Company (Registered Acronym)').fill('lc');
  await page.getByLabel('Username (Registered Email').click();
  await page.getByLabel('Username (Registered Email').fill('await page.getByRole(\'button\', { name: \'Add\' }).click()');
  await page.getByLabel('Username (Registered Email').press('ControlOrMeta+z');
  await page.getByLabel('Username (Registered Email').fill('dorothyadmin@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password1!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('cell', { name: 'Aloha Le.' }).click();
  await page.getByRole('tab', { name: 'BX Treatments' }).click();
  await page.getByRole('button', { name: 'BX Treatment' }).click();
  await page.locator('.app-dialog__body-header > div > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click();
  await page.getByRole('option', { name: 'Dorothy Educator A' }).locator('div').nth(2).click();
  await page.locator('.add-card').click();
  await page.getByLabel('Target Behavior (Max 90').click();
  await page.locator('div').filter({ hasText: /^Bx Category \*$/ }).first().click();
  await page.locator('.q-form > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await expect(page.locator('label').filter({ hasText: 'Bx Category *' }).locator('i')).toBeVisible();
  await page.locator('.q-form > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.goto('https://lc.qa.abatoolbox.com/learner-center/9c5f9e29-92d3-4a2f-9e46-ebb519501b22/behavior-plans');
  await page.getByRole('option', { name: 'Maladaptive Verbal Behavior' }).locator('div').nth(1).click();
});