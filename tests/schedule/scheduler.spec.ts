import { test, expect } from '@playwright/test';
import { NavigationPage } from '../../page-objects/navigationPage';

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

test('Create a New Appointment', async({page}) => {
    
    const navigateTo = new NavigationPage(page)
    
    await navigateTo.schedulePage()
   
    //Select a Learner
    await page.getByText('CICannoli Il').click();

    //Create an appointment for today
    await page.getByRole('button', { name: 'Appointment' }).click();
    await page.locator('div').filter({ hasText: /^Provider \*$/ }).first().click();
    await page.getByRole('option', { name: 'Automation Admin' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

})