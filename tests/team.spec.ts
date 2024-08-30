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

// test('login as AO', async({page}) => {

//     await page.getByLabel('Company (Registered Acronym)').click();
//     await page.getByLabel('Company (Registered Acronym)').fill('tac');
//     await page.getByLabel('Username (Registered Email').click();
//     await page.getByLabel('Username (Registered Email').fill('dorothy@tac.com');
//     await page.getByLabel('Password').click();
//     await page.getByLabel('Password').fill('Password1!');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')
  
// })

test('add Admin Team Member', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')

    await page.getByRole('tab', { name: 'Team' }).click();
    await page.getByRole('button', { name: 'Team Member' }).click();
    
    //Add First Name and Last Name
    await page.getByLabel('First Name *').click();
    await page.getByLabel('First Name *').fill('Automation');
    await page.getByLabel('Last Name *').click();
    await page.getByLabel('Last Name *').fill('Admin');

    await page.getByText('First Name *Middle InitialLast Name *Post NominalEmail *Role * Start Date *').click();
    
    //Add Email
    await page.getByLabel('Email *').click();
    await page.getByLabel('Email *').fill('automationadmin@test.com');
    
    //Select Role
    await page.locator('div').filter({ hasText: /^Role \*$/ }).first().click();
    await page.getByRole('option', { name: 'Administrator / Director ' }).locator('div').nth(1).click();

    //Select Start Date
    await page.getByLabel('Start Date *').click();
    await page.getByRole('button', { name: '20', exact: true }).click();
    await page.getByRole('button', { name: 'Close' }).click();

    //Select Timezone
    await page.locator('label').filter({ hasText: 'Mountain Standard Time (UTC-' }).locator('i').click();
    await page.getByText('Central Standard Time (UTC-06').click();

    //Add Provider Designations
    await page.locator('label').filter({ hasText: 'Provider Designations *' }).locator('i').click();
    await page.getByText('Qualified Health Professional').click();
    await page.getByRole('option', { name: 'RBT Registered Behavior' }).click();
    await page.getByRole('option', { name: 'BT Behavior Technician' }).click();
    await page.getByRole('option', { name: 'SLP Speech-Language' }).click();
    await page.getByRole('option', { name: 'OT Occupational Therapist' }).click();
    await page.getByRole('option', { name: 'PT Physical Therapist' }).click();
    await page.locator('label').filter({ hasText: 'QHP, RBT, BT, SLP, OT,' }).locator('i').click();

    //Check box to send Email
    await page.getByLabel('Send Invite Email').click();

    await page.getByRole('button', { name: 'Add' }).click();
})

test('add Super A Team Member', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')

    await page.getByRole('tab', { name: 'Team' }).click();
    await page.getByRole('button', { name: 'Team Member' }).click();
    
    //Add First Name and Last Name
    await page.getByLabel('First Name *').click();
    await page.getByLabel('First Name *').fill('Automation');
    await page.getByLabel('Last Name *').click();
    await page.getByLabel('Last Name *').fill('SuperA');

    await page.getByText('First Name *Middle InitialLast Name *Post NominalEmail *Role * Start Date *').click();
    
    //Add Email
    await page.getByLabel('Email *').click();
    await page.getByLabel('Email *').fill('automationsupera@test.com');
    
    //Select Role
    await page.locator('div').filter({ hasText: /^Role \*$/ }).first().click();
    await page.getByRole('option', { name: 'Supervisor / Educator A ' }).locator('div').nth(1).click();

    //Select Start Date
    await page.getByLabel('Start Date *').click();
    await page.getByRole('button', { name: '21', exact: true }).click();
    await page.getByRole('button', { name: 'Close' }).click();

    //Select Timezone
    await page.locator('label').filter({ hasText: 'Mountain Standard Time (UTC-' }).locator('i').click();
    await page.getByText('Central Standard Time (UTC-06').click();

    //Add Provider Designations
    await page.locator('label').filter({ hasText: 'Provider Designations *' }).locator('i').click();
    await page.getByText('Qualified Health Professional').click();
    await page.getByRole('option', { name: 'RBT Registered Behavior' }).click();
    await page.getByRole('option', { name: 'BT Behavior Technician' }).click();
    await page.getByRole('option', { name: 'SLP Speech-Language' }).click();
    await page.getByRole('option', { name: 'OT Occupational Therapist' }).click();
    await page.getByRole('option', { name: 'PT Physical Therapist' }).click();
    await page.locator('label').filter({ hasText: 'QHP, RBT, BT, SLP, OT,' }).locator('i').click();

    //Check box to send Email
    await page.getByLabel('Send Invite Email').click();

    await page.getByRole('button', { name: 'Add' }).click();
})

test('add Super B Team Member', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')

    await page.getByRole('tab', { name: 'Team' }).click();
    await page.getByRole('button', { name: 'Team Member' }).click();
    
    //Add First Name and Last Name
    await page.getByLabel('First Name *').click();
    await page.getByLabel('First Name *').fill('Automation');
    await page.getByLabel('Last Name *').click();
    await page.getByLabel('Last Name *').fill('SuperB');

    await page.getByText('First Name *Middle InitialLast Name *Post NominalEmail *Role * Start Date *').click();
    
    //Add Email
    await page.getByLabel('Email *').click();
    await page.getByLabel('Email *').fill('automationsuperb@test.com');
    
    //Select Role
    await page.locator('div').filter({ hasText: /^Role \*$/ }).first().click();
    await page.getByRole('option', { name: 'Supervisor / Educator B ' }).locator('div').nth(1).click();

    //Select Start Date
    await page.getByLabel('Start Date *').click();
    await page.getByRole('button', { name: '21', exact: true }).click();
    await page.getByRole('button', { name: 'Close' }).click();

    //Select Timezone
    await page.locator('label').filter({ hasText: 'Mountain Standard Time (UTC-' }).locator('i').click();
    await page.getByText('Central Standard Time (UTC-06').click();

    //Add Provider Designations
    await page.locator('label').filter({ hasText: 'Provider Designations *' }).locator('i').click();
    await page.getByText('Qualified Health Professional').click();
    await page.getByRole('option', { name: 'RBT Registered Behavior' }).click();
    await page.getByRole('option', { name: 'BT Behavior Technician' }).click();
    await page.getByRole('option', { name: 'SLP Speech-Language' }).click();
    await page.getByRole('option', { name: 'OT Occupational Therapist' }).click();
    await page.getByRole('option', { name: 'PT Physical Therapist' }).click();
    await page.locator('label').filter({ hasText: 'QHP, RBT, BT, SLP, OT,' }).locator('i').click();

    //Check box to send Email
    await page.getByLabel('Send Invite Email').click();

    await page.getByRole('button', { name: 'Add' }).click();
})

test('add Provider Member', async({page}) => {
    await page.waitForResponse('https://tac.qa.abatoolbox.com/api/graphql/tenant')

    await page.getByRole('tab', { name: 'Team' }).click();
    await page.getByRole('button', { name: 'Team Member' }).click();
    
    //Add First Name and Last Name
    await page.getByLabel('First Name *').click();
    await page.getByLabel('First Name *').fill('Automation');
    await page.getByLabel('Last Name *').click();
    await page.getByLabel('Last Name *').fill('Provider');

    await page.getByText('First Name *Middle InitialLast Name *Post NominalEmail *Role * Start Date *').click();
    
    //Add Email
    await page.getByLabel('Email *').click();
    await page.getByLabel('Email *').fill('automationprovider@test.com');
    
    //Select Role
    await page.locator('div').filter({ hasText: /^Role \*$/ }).first().click();
    await page.getByRole('option', { name: 'Instructor / Provider ' }).locator('div').nth(1).click();

    //Select Start Date
    await page.getByLabel('Start Date *').click();
    await page.getByRole('button', { name: '21', exact: true }).click();
    await page.getByRole('button', { name: 'Close' }).click();

    //Select Timezone
    await page.locator('label').filter({ hasText: 'Mountain Standard Time (UTC-' }).locator('i').click();
    await page.getByText('Central Standard Time (UTC-06').click();

    //Add Provider Designations
    await page.locator('label').filter({ hasText: 'Provider Designations *' }).locator('i').click();
    await page.getByText('Qualified Health Professional').click();
    await page.getByRole('option', { name: 'RBT Registered Behavior' }).click();
    await page.getByRole('option', { name: 'BT Behavior Technician' }).click();
    await page.getByRole('option', { name: 'SLP Speech-Language' }).click();
    await page.getByRole('option', { name: 'OT Occupational Therapist' }).click();
    await page.getByRole('option', { name: 'PT Physical Therapist' }).click();
    await page.locator('label').filter({ hasText: 'QHP, RBT, BT, SLP, OT,' }).locator('i').click();

    //Check box to send Email
    await page.getByLabel('Send Invite Email').click();

    await page.getByRole('button', { name: 'Add' }).click();
})