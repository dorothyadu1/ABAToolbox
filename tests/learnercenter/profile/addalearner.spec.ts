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

test('add new Learner', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')

    await page.getByRole('tab', { name: 'Learner Center' }).click();
    await page.getByRole('button', { name: 'Learner' }).click();
    
    //LEARNER INFORMATION

    //Add First Name and Last Name
    //await page.locator('div').filter({ hasText: /^First Name \* Middle InitialLast Name \*Customer ID #$/ }).getByLabel('First Name *').click();
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*Customer ID #$/ }).getByLabel('First Name *').click();
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*Customer ID #$/ }).getByLabel('First Name *').fill('August');
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*Customer ID #$/ }).getByLabel('Last Name *').click();
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*Customer ID #$/ }).getByLabel('Last Name *').fill('User');
    
    //Add DOB
    await page.locator('label').filter({ hasText: 'Date of Birth *event' }).locator('i').click();
    await page.locator('div:nth-child(4) > .q-btn').click();
    await page.locator('div:nth-child(4) > .q-btn').first().click();
    await page.locator('div:nth-child(4) > .q-btn').first().click();
    await page.locator('div:nth-child(4) > .q-btn').first().click();
    await page.locator('div:nth-child(4) > .q-btn').first().click();
    await page.locator('div').filter({ hasText: /^21$/ }).first().click();
    //await page.getByRole('button', { name: '21', exact: true }).click();
    //await page.getByRole('button', { name: '18' }).click();
    await page.getByRole('button', { name: 'Close' }).click();

    // await page.getByRole('button', { name: '20', exact: true }).click();
    // await page.getByRole('button', { name: 'Close' }).click();
    
    //Select Gender
    await page.locator('div').filter({ hasText: /^Gender \*$/ }).first().click();
    await page.getByRole('option', { name: 'Female' }).click();

    //Select Start Date
    // await page.getByLabel('Start Date *').click();
    // await page.getByRole('button', { name: '20', exact: true }).click();
    // await page.getByRole('button', { name: 'Close' }).click();

    await page.locator('label').filter({ hasText: 'Serv. Start Date *event' }).locator('i').click();
    await page.locator('div').filter({ hasText: /^23$/ }).click();
    await page.getByRole('button', { name: 'Close' }).click();

    //Select Timezone
    await page.locator('label').filter({ hasText: 'Mountain Standard Time (UTC-' }).locator('i').click();
    await page.getByText('Central Standard Time (UTC-06').click();

    //PRIMARY CONTACT INFORMATION
    
    //Add Email
    await page.getByLabel('Email *').click();
    await page.getByLabel('Email *').fill('augustcaregiver@test.com');

    //Add First Name and Last Name
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*$/ }).getByLabel('First Name *').click();
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*$/ }).getByLabel('First Name *').fill('August');
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*$/ }).getByLabel('Last Name *').click();
    await page.locator('div').filter({ hasText: /^First Name \*Middle InitialLast Name \*$/ }).getByLabel('Last Name *').fill('Caregiver');

    //Select Gender
    await page.locator('div').filter({ hasText: /^Gender \*$/ }).nth(1).click();
    await page.getByRole('option', { name: 'Female' }).locator('div').nth(1).click();
    
    //Select Relationship
    await page.locator('label').filter({ hasText: 'Relationship *' }).locator('i').click();
    await page.getByText('Mother').click();
    await page.getByRole('option', { name: 'Mother' }).click();

    //await page.locator('label').filter({ hasText: 'FatherRelationship *' }).locator('i').click();


    await page.locator('div').filter({ hasText: /^Department$/ }).first()
    //await page.getByText('PrimaryDepartment').click();
    await page.getByRole('option', { name: 'Primary' }).click();
    await expect(page.getByText('PrimaryDepartment')).toBeVisible();
    //await page.goto('https://tac.qa.abatoolbox.com/learner-center');

    await page.getByRole('button', { name: 'Save' }).click();
})