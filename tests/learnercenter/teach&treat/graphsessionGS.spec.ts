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

test('Create Active Graph for a Lesson - Phase Created', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')
    await page.getByRole('tab', { name: 'Learner Center' }).click();
    
    //Select a Learner
    await page.getByRole('cell', { name: 'Cannoli Il.' }).click();

    //Click on Graph Sessions
    await page.getByRole('button', { name: 'Graph Sessions' }).click();

    //View Past Sessions
    await page.locator('.flex > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
    await page.getByRole('option', { name: '/29/2024 | 12:52 pm - 1:22 pm DA' }).locator('div').nth(1).click();
    await page.getByRole('button', { name: 'Save & Go to Graphing' }).click();
  
    //Expect Session Saved successfully pop-up
    await expect(page.getByLabel('Session saved successfully')).toBeVisible();

    //Toggle? Add graph data points and submit
    //await page.locator('div:nth-child(2) > div > div > div > .q-toggle > .q-toggle__inner > .q-toggle__thumb').click();
    await page.getByLabel('Percentage').click();
    await page.getByLabel('Percentage').fill('90');
    await page.getByLabel('Learn Units').click();
    await page.getByLabel('Learn Units').fill('1');
    await page.getByLabel('+ Tactic/Note').click();
    await page.getByLabel('+ Tactic/Note').fill('GS Auto Note');
    await page.getByRole('button', { name: 'Submit & Graph' }).click();

    //Add phase - no STO created
    // await page.getByRole('button', { name: 'Phase' }).first().click();
    // await expect(page.getByRole('heading', { name: 'No short term objectives' })).toBeVisible();
    
    // //Add STO and Create
    // await page.getByRole('button', { name: 'Short Term Objective' }).click();
    // await page.locator('div').filter({ hasText: /^Modality Measurement \*$/ }).first().click();
    // await page.getByRole('option', { name: 'Percentage' }).locator('div').nth(1).click();
    // await page.getByLabel('Criterion Score *').click();
    // await page.getByLabel('Criterion Score *').fill('78');
    // await page.getByLabel('For Consecutive Sessions *').click();
    // await page.getByLabel('For Consecutive Sessions *').fill('3');
    // await page.getByRole('button', { name: 'Create' }).click();

    // //Select STO and add graph data point
    // await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
    // await page.getByRole('option', { name: 'Baseline' }).locator('div').nth(1).click();
    // await page.getByRole('button', { name: 'Start Phase' }).click();
    // await page.locator('div:nth-child(2) > div > div > div > .q-toggle > .q-toggle__inner > .q-toggle__thumb').click();
    // await page.getByLabel('Percentage').click();
    // await page.getByLabel('Percentage').fill('70');
    // await page.getByLabel('Learn Units').click();
    // await page.getByLabel('Learn Units').fill('1');
    // await page.getByRole('button', { name: 'Submit & Graph' }).click();
    
    // //Expect success message
    // await expect(page.getByRole('heading', { name: 'Session has been successfully' })).toBeVisible();

})

test('Create Active Graph for a Lesson - Phase Not Created', async({page}) => {
    //await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')
    await page.getByRole('tab', { name: 'Learner Center' }).click();
    
    //Select a Learner
    await page.getByRole('cell', { name: 'Cannoli Il.' }).click();

    //Click on Graph Sessions
    await page.getByRole('button', { name: 'Graph Sessions' }).click();

    //View Past Sessions
    await page.locator('.flex > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
    await page.getByRole('option', { name: '/29/2024 | 12:52 pm - 1:22 pm DA' }).locator('div').nth(1).click();
    await page.getByRole('button', { name: 'Save & Go to Graphing' }).click();
  
    //Expect Session Saved successfully pop-up
    await expect(page.getByLabel('Session saved successfully')).toBeVisible();

    //Toggle? Add graph data points and submit
    //await page.locator('div:nth-child(2) > div > div > div > .q-toggle > .q-toggle__inner > .q-toggle__thumb').click();
    await page.getByLabel('Percentage').click();
    await page.getByLabel('Percentage').fill('90');
    await page.getByLabel('Learn Units').click();
    await page.getByLabel('Learn Units').fill('1');
    await page.getByLabel('+ Tactic/Note').click();
    await page.getByLabel('+ Tactic/Note').fill('GS Auto Note');
    await page.getByRole('button', { name: 'Submit & Graph' }).click();

    //Add phase - no STO created
    await page.getByRole('button', { name: 'Phase' }).first().click();
    await expect(page.getByRole('heading', { name: 'No short term objectives' })).toBeVisible();
    
    //Add STO and Create
    await page.getByRole('button', { name: 'Short Term Objective' }).click();
    await page.locator('div').filter({ hasText: /^Modality Measurement \*$/ }).first().click();
    await page.getByRole('option', { name: 'Percentage' }).locator('div').nth(1).click();
    await page.getByLabel('Criterion Score *').click();
    await page.getByLabel('Criterion Score *').fill('78');
    await page.getByLabel('For Consecutive Sessions *').click();
    await page.getByLabel('For Consecutive Sessions *').fill('3');
    await page.getByRole('button', { name: 'Create' }).click();

    //Select STO and add graph data point
    await page.locator('.column > div > .q-field > .q-field__inner > .q-field__control > .q-field__append').click();
    await page.getByRole('option', { name: 'Baseline' }).locator('div').nth(1).click();
    await page.getByRole('button', { name: 'Start Phase' }).click();
    await page.locator('div:nth-child(2) > div > div > div > .q-toggle > .q-toggle__inner > .q-toggle__thumb').click();
    await page.getByLabel('Percentage').click();
    await page.getByLabel('Percentage').fill('70');
    await page.getByLabel('Learn Units').click();
    await page.getByLabel('Learn Units').fill('1');
    await page.getByRole('button', { name: 'Submit & Graph' }).click();
    
    //Expect succes message
    await expect(page.getByRole('heading', { name: 'Session has been successfully' })).toBeVisible();

})