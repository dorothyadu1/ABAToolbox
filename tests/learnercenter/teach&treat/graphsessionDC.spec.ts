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

test('Create Active Graph for a Lesson', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')
    await page.getByRole('tab', { name: 'Learner Center' }).click();
    
    //Select a Learner
    await page.getByRole('cell', { name: 'Cannoli Il.' }).click();

    //Click on Data Collections and ensure a new session is starting
    await page.getByRole('button', { name: 'Data Collection' }).click();

    await expect(page.getByText('You have started a new session')).toBeVisible();

    await page.getByRole('button', { name: 'OK' }).click();
    
    //Toggle a lesson on and ensure Lesson status is visible
    await page.locator('.col > .q-toggle > .q-toggle__inner > .q-toggle__thumb').first().click();
    
    await expect(page.getByRole('tab', { name: 'Lesson' }).getByRole('status')).toBeVisible();
    
    await page.getByRole('button', { name: 'Start' }).click();

    //Add data points, complete lesson and continue to Notes
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

    //Complete Note Details (Fill out form) and Save/Submit
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
    //await page.locator('div').filter({ hasText: /^Plan of Action \*$/ }).nth(3).click();
    await page.getByLabel('Plan of Action *').fill('Auto test');
    await page.getByRole('button', { name: 'SAVE / SUBMIT NOTES' }).click();

    //Expect to see all items completed
    await expect(page.getByText('Not Complete')).not.toBeVisible();
    //await expect(page.locator('tbody')).toContainText('Lessons Completed 1 of 1');
    
    await page.getByRole('button', { name: 'SUBMIT SESSION' }).click();

})