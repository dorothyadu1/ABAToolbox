import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async({page}) => {
    await page.goto('https://qa.abatoolbox.com/login')

    await page.getByLabel('Company (Registered Acronym)').click();
    await page.getByLabel('Company (Registered Acronym)').fill('tac');
    await page.getByLabel('Username (Registered Email').click();
    await page.getByLabel('Username (Registered Email').fill('dorothy@tac.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Password1!');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')
})

test('edit existing Learner', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')

    await page.getByRole('tab', { name: 'Learner Center' }).click();
    
    //Select a Learner

    await page.getByRole('cell', { name: 'Cannoli Il.' }).click();
    await page.getByRole('tab', { name: 'Profile' }).click();
    
    //Add Diagnosis
    await page.locator('a').filter({ hasText: 'Diagnostic Information' }).click();
    await page.getByText('Diagnosis', { exact: true }).click();
    await page.getByLabel('Diagnosis *', { exact: true }).click();
    await page.getByLabel('Diagnosis *', { exact: true }).fill('Emotional disorders with onset specific to childhood');
    await page.getByLabel('Diagnosis Code *').click();
    await page.getByLabel('Diagnosis Code *').fill('F93');
    await page.getByLabel('Date of Diagnosis * (YYYY-MM-').click();
    await page.getByText('event').click();
    await page.getByRole('button', { name: '18' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('button', { name: 'Add' }).click();

    // Expect diagnosis added
    await expect(page.getByRole('main')).toContainText('Emotional disorders with onset specific to childhood');

    //Funding
    await page.locator('a').filter({ hasText: 'Funding Source' }).click();
    await page.getByText('Add Funding Source').click();
    await page.locator('label').filter({ hasText: 'Company *' }).locator('i').click();
    await page.getByRole('option', { name: 'United Healthcare' }).locator('div').nth(1).click();
    await page.locator('label').filter({ hasText: 'Policy Holder *' }).locator('i').click();
    await page.getByRole('option', { name: 'Cannoli Caregiver' }).locator('div').nth(1).click();

    // Expect selected policy holder to be added
    await expect(page.getByLabel('First Name *')).toBeVisible();
    await expect(page.getByLabel('Last Name *')).toBeVisible();

    //Add a Team Member
    await page.getByRole('main').locator('a').filter({ hasText: 'Team' }).click();
    await page.locator('div').filter({ hasText: /^Select Personnel to add$/ }).first().click();
    await page.getByRole('option', { name: 'Automation Provider' }).click();

    //await page.getByRole('main').locator('a').filter({ hasText: 'Team' }).click();
    await page.locator('label').filter({ hasText: 'Billing Supervisor' }).locator('i').click();
    await page.getByRole('option', { name: 'Automation Provider' }).click();

    await page.goto('https://tac.qa.abatoolbox.com/learner-center/9cd223b7-48b4-4f39-88d0-9e3e7919ebb2/profile/team');

})