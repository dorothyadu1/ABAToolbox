import { test, expect } from '@playwright/test';

test('Setup BX Targets', async ({ page }) => {
  await page.goto('https://qa.abatoolbox.com/');
  await page.goto('https://qa.abatoolbox.com/login');
  await page.getByLabel('Company (Registered Acronym)').click();
  await page.getByLabel('Company (Registered Acronym)').fill('lc');
  await page.getByLabel('Username (Registered Email').click();
  await page.getByLabel('Username (Registered Email').fill('dorothyadmin@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password1!');
  await page.getByRole('button', { name: 'Sign in' }).click();

  //Click on Learner
  await page.getByRole('cell', { name: 'Aloha Le.' }).click();

  //Navigate to BX Treatments
  await page.getByRole('tab', { name: 'BX Treatments' }).click();
  await page.getByRole('button', { name: 'BX Treatment' }).click();
  await page.locator('div').filter({ hasText: /^Provider$/ }).first().click();
  await page.getByRole('option', { name: 'LaurieAdmin Test' }).click();

  //Add target behaviour
  await page.getByText('Target Behavior', { exact: true }).click();
  await page.getByLabel('Target Behavior (Max 90').click();
  //await page.getByLabel('Target Behavior (Max 90').click();
  await page.getByLabel('Target Behavior (Max 90').fill('1635 Duration Per Minute');
  await page.locator('div').filter({ hasText: /^Bx Category \*$/ }).first().click();


  //const dropDownMenu = page.locator('q-portal--menu--4 q-item__label')
    //await dropDownMenu.click()

  await page.locator('.q-form > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.getByRole('option', { name: 'Percentage of Intervals' }).locator('div').nth(1).click();
  await page.getByRole('option', { name: 'Percentage of Intervals'' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Continue to Bx Plan' }).click();

  await expect(page.getByRole('heading', { name: 'Behavior Treatment Plan Saved Successfully' })).toBeVisible();
  
  //getByRole('heading', { name: 'Behavior Treatment Plan Saved Successfully' })
  //await page.locator('#q-portal--dialog--2 form div').filter({ hasText: 'BX TREATMENTS Target' }).getByRole('button').click();
  //await page.locator('#q-portal--dialog--2').getByRole('button').first().click();
  //await page.getByRole('button', { name: 'Cancel' }).click()
  await page.locator('#q-portal--dialog--4').getByRole('button', { name: 'Cancel' })


  //await page.locator('#q-portal--dialog--7').getByRole('button').first().click();
  //await page.locator('#q-portal--dialog--5').getByRole('button').first().click();
  await page.getByRole('row', { name: '9/6/2024 1635 Rate Per Second' }).locator('i').first().click();
  await page.getByRole('tab', { name: 'Target Interventions' }).locator('div').nth(1).click();
  await page.getByText('Add New Phase').click();
  await page.getByLabel('Phase Name *').click();
  //await page.getByLabel('Phase Name *').click();
  await page.getByLabel('Phase Name *').fill('Percentage of Session Time');
  await page.locator('div').filter({ hasText: /^Modality Measurement\*$/ }).first().click();
  await page.getByRole('option', { name: '1635 Percentage of Session Time' }).click();
  await page.getByPlaceholder('Target Behavior *').click();
  await page.locator('#q-portal--dialog--11').getByText('Percentage of Session Time').click();
  await page.getByRole('button', { name: 'Create' }).click();
});