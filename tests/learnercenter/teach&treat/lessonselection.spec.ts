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

test('Add Lessons', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')
    await page.getByRole('tab', { name: 'Learner Center' }).click();
    
    //Select a Learner
    await page.getByRole('cell', { name: 'Cannoli Il.' }).click();
    
    //LESSON SELECTION - Select lessons to add
    await page.getByRole('button', { name: 'Lesson Selection' }).click();

    await page.getByText('Calendar. Advanced3').click();
    await page.getByText('Colors. Label').click();
    await page.getByText('Attends. Own Activity').click();
    await page.getByText('Show & Tell').click();

    //Uncheck Cognitive Domain
    await page.locator('label').filter({ hasText: 'Cognitive' }).getByRole('checkbox').click();

    await page.getByText('Builds Lego').click();
    await page.getByText('Connect Four2', { exact: true }).click();
    await page.getByText('Computer. Logs On2').click();
    await page.getByText('Car Wash3').click();
    await page.getByText('Vacuums').click();
    await page.getByText('Homework Completion').click();

    //Uncheck Self-Management Domain
    await page.locator('label').filter({ hasText: 'Self-Management' }).getByRole('checkbox').click();

    await page.getByText('Stand up1').click();
    await page.getByText('Describes Pictures', { exact: true }).click();

    // Expect number of selected lessons added (HOW TO ASSERT!!)
    //await expect(page.getByRole('main')).toContainText('12 of Lessons Added');

    await page.getByRole('button', { name: 'Add/Remove Lessons' }).click();

})

test('Make a Lesson(s) Current', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')
    await page.getByRole('tab', { name: 'Learner Center' }).click();
    
    //Select a Learner
    await page.getByRole('cell', { name: 'Cannoli Il.' }).click();
    
    //LESSON STATUS

    //- Cognitive
    await page.getByRole('button', { name: 'Lesson status' }).first().click();
  
    await page.locator('td:nth-child(3)').first().click();
    await page.locator('td:nth-child(3) > div').first().click();
    await page.getByRole('row', { name: 'Typing Words' }).getByRole('radio').nth(1).click();
    await expect(page.getByRole('cell', { name: 'Aug 23,' }).getByRole('radio')).toBeVisible();

    await page.getByRole('button', { name: 'Save' }).click();

    //- Leisure Skills
    await page.getByRole('button', { name: 'Lesson status' }).nth(1).click();

    await page.locator('td:nth-child(3)').first().click();
    await page.locator('td:nth-child(3) > div').first().click();
    await page.getByRole('row', { name: 'Builds Lego' }).getByRole('radio').nth(1).click();
    await expect(page.getByRole('cell', { name: 'Aug 23,' }).getByRole('radio')).toBeVisible();

    await page.getByRole('button', { name: 'Save' }).click();

    //- Self-Management
    await page.getByRole('button', { name: 'Lesson status' }).nth(2).click();

    await page.locator('td:nth-child(3)').first().click();
    await page.locator('td:nth-child(3) > div').first().click();
    await page.getByRole('row', { name: 'Vacuums' }).getByRole('radio').nth(1).click();
    await expect(page.getByRole('cell', { name: 'Aug 23,' }).getByRole('radio')).toBeVisible();

    await page.getByRole('button', { name: 'Save' }).click();

   //- Verbal-Behavior
    await page.getByRole('button', { name: 'Lesson status' }).nth(3).click();

    await page.locator('td:nth-child(3)').first().click();
    await page.locator('td:nth-child(3) > div').first().click();
    await page.getByRole('row', { name: 'Describes Pictures' }).getByRole('radio').nth(1).click();
    await expect(page.getByRole('cell', { name: 'Aug 23,' }).getByRole('radio')).toBeVisible();

    await page.getByRole('button', { name: 'Save' }).click();

})