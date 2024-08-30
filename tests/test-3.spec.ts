import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.abatoolbox.com/login');
  await page.getByLabel('Company (Registered Acronym)').click();
  await page.getByLabel('Company (Registered Acronym)').fill('lc');
  await page.getByLabel('Username (Registered Email').click();
  await page.getByLabel('Username (Registered Email').fill('dorothyadmin@test.com');
  await page.getByLabel('Username (Registered Email').press('Tab');
  await page.getByLabel('Password').fill('Password1!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('tab', { name: 'Learner Center' }).click();
  await page.getByRole('cell', { name: 'Aloha Le.' }).click();
  await page.getByRole('button', { name: 'Data Collection' }).click();
  await expect(page.getByText('Welcome back Dorothy Admin')).toBeVisible();
  await page.getByText('You have started a new session').click();
  await expect(page.getByText('You have started a new session')).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('.q-item > div > div:nth-child(2) > div > .q-btn').first().click();
  await page.locator('#q-portal--dialog--3').getByRole('button').first().click();
  await page.locator('div:nth-child(5) > div > div:nth-child(2) > div > .q-btn').click();
  await page.locator('#q-portal--dialog--4').getByRole('button').first().click();
  await page.locator('div:nth-child(2) > .app-card__body > .q-list > div > div > div:nth-child(2) > div > .q-btn').first().click();
  await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.getByLabel('Short Term Objective').click();
  await page.locator('#q-portal--dialog--5').getByRole('button').first().click();
  await page.locator('div:nth-child(6) > div > div:nth-child(2) > div > .q-btn').click();
  await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.locator('#q-portal--dialog--7').getByRole('button').first().click();
  await page.locator('div:nth-child(3) > div > div:nth-child(2) > div > .q-btn').first().click();
  await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.getByLabel('Short Term Objective').click();
  await page.locator('#q-portal--dialog--9').getByRole('button').first().click();
  await page.locator('.col > .q-toggle > .q-toggle__inner > .q-toggle__thumb').first().click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: '0' }).first().click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('button', { name: '4' }).click();
  await page.getByRole('button', { name: '0' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('button', { name: '6' }).click();
  await page.getByRole('button', { name: '7' }).click();
  await page.getByLabel('+ Tactic / Note').click();
  await page.getByLabel('+ Tactic / Note').fill('Auto Note');
  await page.getByRole('button', { name: 'Complete Lesson' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('.grid > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
  await page.getByRole('option', { name: '   New Appointment ' }).locator('div').nth(1).click();
  await page.locator('label').filter({ hasText: 'Non-Billable ServiceType of' }).locator('i').click();
  await page.getByRole('option', { name: '- Treatment w/Mod.' }).locator('div').nth(2).click();
  await page.getByLabel('Subjective *').click();
  await page.getByLabel('Subjective *').fill('Auto test');
  await page.getByLabel('Objective *').click();
  await page.getByLabel('Objective *').fill('Auto test');
  await page.getByLabel('Assessment *').click();
  await page.getByLabel('Assessment *').fill('Auto test');
  await page.locator('div').filter({ hasText: /^Plan of Action \*$/ }).nth(3).click();
  await page.getByLabel('Plan of Action *').fill('Auto test');
  await page.getByRole('button', { name: 'SAVE / SUBMIT NOTES' }).click();
  await page.locator('label:nth-child(2) > .q-field__inner > .q-field__control > div:nth-child(3)').click();
  await page.getByRole('option', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'SAVE / SUBMIT NOTES' }).click();
  await page.getByText('- Treatment w/Mod.Type of Session *').click();
  await page.getByText('97112-OT-QH-BT-ST -').click();
  await page.getByRole('button', { name: 'SAVE / SUBMIT NOTES' }).click();
  
  await expect(page.locator('td').nth(1)).toBeVisible();
  await expect(page.locator('td').nth(3)).toBeVisible();
  await expect(page.locator('tbody')).toContainText('Lessons Completed 1 of 1');
  await expect(page.locator('form')).toContainText('Submit Session');
});