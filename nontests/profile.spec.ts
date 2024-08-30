import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('/')
  
})

test('add new signature and address alert', async({page}) => {
    
    //login as newly created team member


    await page.getByLabel('Company (Registered Acronym)').click();
    await page.getByLabel('Company (Registered Acronym)').fill('tac');
    await page.getByLabel('Username (Registered Email').click();
    await page.getByLabel('Username (Registered Email').fill('dorothy@tac.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Password1!');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Expect add new signature and address alert
    await expect(page.getByRole('alert')).toContainText('Please add a signature and address to continue.');
    
    await page.getByLabel('Address 1').click();
    await page.getByLabel('Address 1').fill('456 Gere Street');
    await page.getByLabel('City').click();
    await page.getByLabel('City').fill('Gerry');
    await page.getByLabel('State').click();
    await page.getByLabel('State').fill('GA');
    await page.getByLabel('Zip').click();
    await page.getByLabel('Zip').fill('45678');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    await page.goto('https://tac.qa.abatoolbox.com/');
    
})