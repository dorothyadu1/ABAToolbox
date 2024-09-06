import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.abatoolbox.com/');
  await page.goto('https://qa.abatoolbox.com/login');
  await page.getByLabel('Company (Registered Acronym)').click();
  await page.getByLabel('Company (Registered Acronym)').fill('tac');
  await page.getByLabel('Username (Registered Email').click();
  await page.getByLabel('Username (Registered Email').fill('dorothy@tac.com');
  await page.getByLabel('Username (Registered Email').press('Tab');
  await page.getByLabel('Password').fill('Password1!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('cell', { name: 'Cannoli Il.' }).click();

  await page.getByRole('button', { name: 'Graph Sessions' }).click();
  await page.locator('.flex > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.getByRole('option', { name: '/29/2024 | 12:52 pm - 1:22 pm DA' }).locator('div').nth(1).click();
  await page.getByRole('button', { name: 'Save & Go to Graphing' }).click();
  await expect(page.getByLabel('Session saved successfully')).toBeVisible();
  await expect(page.getByLabel('Session saved successfully')).toContainText('× Session saved successfullyOKNoCancel');

  await page.getByLabel('Percentage').click();
  await page.getByLabel('Percentage').fill('90');
  await page.getByLabel('Percentage').press('Enter');
  await page.getByRole('button', { name: 'Graph Sessions' }).click();
  await page.locator('#q-portal--dialog--3 label div').filter({ hasText: 'View/Edit Past Sessions' }).nth(1).click();
  await page.getByRole('option', { name: '/29/2024 | 12:52 pm - 1:22 pm DA' }).click();
  await page.getByRole('button', { name: 'Save & Go to Graphing' }).click();
  await page.getByLabel('Percentage').click();
  await page.getByLabel('Percentage').fill('90');
  await page.getByLabel('Learn Units').click();
  await page.getByLabel('Learn Units').fill('1');
  await page.getByLabel('+ Tactic/Note').click();
  await page.getByLabel('+ Tactic/Note').fill('GS Auto Note');
  await page.getByRole('button', { name: 'Submit & Graph' }).click();
  
  await expect(page.getByLabel('Expand', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'View Sessions' }).click();
  await page.locator('#q-portal--dialog--5').getByRole('button').click();
  await page.getByRole('button', { name: 'Graph Sessions' }).click();
  await page.locator('#q-portal--dialog--6 label div').filter({ hasText: 'View/Edit Past Sessions' }).nth(1).click();
  await page.getByRole('option', { name: '/29/2024 | 12:26 pm - 12:56 pm DA' }).click();
  await page.getByRole('button', { name: 'Save & Go to Graphing' }).click();
  
  await page.getByRole('button', { name: 'Phase' }).first().click();
  await expect(page.getByRole('heading', { name: 'No short term objectives' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('No short term objectives available to start a new phase.');
  await page.getByRole('button', { name: 'Short Term Objective' }).click();
  await page.locator('div').filter({ hasText: /^Modality Measurement \*$/ }).first().click();
  await page.getByRole('option', { name: 'Percentage' }).locator('div').nth(1).click();
  await page.getByLabel('Criterion Score *').click();
  await page.getByLabel('Criterion Score *').fill('78');
  await page.getByLabel('For Consecutive Sessions *').click();
  await page.getByLabel('For Consecutive Sessions *').fill('3');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.getByRole('option', { name: 'Baseline' }).locator('div').nth(1).click();
  await page.getByRole('button', { name: 'Start Phase' }).click();
  await page.locator('div:nth-child(2) > div > div > div > .q-toggle > .q-toggle__inner > .q-toggle__thumb').click();
  await page.getByLabel('Percentage').click();
  await page.getByLabel('Percentage').fill('70');
  await page.getByLabel('Learn Units').click();
  await page.getByLabel('Learn Units').fill('1');
  await page.getByRole('button', { name: 'Submit & Graph' }).click();
  await expect(page.getByRole('heading', { name: 'Session has been successfully' })).toBeVisible();
  await page.getByRole('button', { name: 'View Sessions' }).click();
  await page.locator('#q-portal--dialog--12').getByRole('button').click();
});