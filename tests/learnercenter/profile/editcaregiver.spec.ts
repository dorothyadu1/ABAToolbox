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
    
    //Caregivers (Send Email)
    
    await page.getByLabel('Expand "Caregivers"').click();
    await page.locator('div').filter({ hasText: /^Cannoli Caregiver RelativePRIMARY$/ }).locator('i').click();
    await page.getByText('Edit').click();
    await page.getByLabel('Send Email').click();
    await page.getByRole('button', { name: 'Save' }).click();

})