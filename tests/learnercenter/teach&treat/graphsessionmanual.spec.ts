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

    //Add a manual graph
    await page.getByText('Builds Lego 1').click();
    
    //Set baseline
    await page.getByRole('button', { name: 'Graph', exact: true }).click();
    await page.locator('.grid > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
    await page.getByRole('option', { name: 'Per Opportunity Measure (POM' }).locator('div').nth(1).click();
    await page.getByText('Per Opportunity Measure (POM)Data Format *').click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('button', { name: 'Set Baseline' }).click();
    await page.locator('div').filter({ hasText: /^Modality Measurement \*$/ }).first().click();
    await page.getByRole('option', { name: 'Percentage' }).locator('div').nth(1).click();
    await page.getByLabel('Criterion Score *').click();
    await page.getByLabel('Criterion Score *').fill('78');
    await page.getByLabel('For Consecutive Sessions *').click();
    await page.getByLabel('For Consecutive Sessions *').fill('4');
    await page.getByRole('button', { name: 'Create' }).click();

    //Graph Baseline
    await page.getByRole('button', { name: 'Graph Baseline' }).click();
    await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
    await page.getByRole('option', { name: 'Aug 29, 2024 | 1:52 PM - 2:22' }).locator('div').nth(1).click();
    await page.getByLabel('Correct %').click();
    await page.getByLabel('Correct %').fill('70');
    await page.getByLabel('Learn Units').click();
    await page.getByLabel('Learn Units').fill('1');
    await page.locator('div').filter({ hasText: /^Tactic\/Note$/ }).nth(3).click();
    await page.getByLabel('Tactic/Note').fill('Automation Note');
    await page.getByRole('button', { name: 'Save' }).click();

    //Expect to see graphed baseline
    await expect(page.getByLabel('[object Object], 70. Baseline.')).toBeVisible();

})