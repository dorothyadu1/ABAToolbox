import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';
import { PageManager } from '../page-objects/pageManager';

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

test('Navigate to Learner Center Page', async({page}) => {
    
    const pm = new PageManager(page)
    //const pm.navigateTo() = new NavigationPage(page)
    await pm.navigateTo().learnerCenterPage()
    await pm.navigateTo().toolsPage()
    await pm.navigateTo().teamPage()
    await pm.navigateTo().officePage()
    await pm.navigateTo().billingPage()
    await pm.navigateTo().schedulePage()
    await pm.navigateTo().adminPage()


})