import { Page } from "@playwright/test"

export class NavigationPage {

    readonly page: Page

    constructor (page: Page){
        this.page = page
    }

    async learnerCenterPage(){
        await this.page.getByRole('tab', { name: 'Learner Center' }).click();
    }

    async toolsPage(){
        await this.page.getByRole('tab', { name: 'Tools' }).click();
    }

    async teamPage(){
        await this.page.getByRole('tab', { name: 'Team' }).click();
    }

    async officePage(){
        await this.page.getByRole('tab', { name: 'Office' }).click();
    }

    async schedulePage(){
        await this.page.getByRole('tab', { name: 'Schedule' }).click();
    }

    async billingPage(){
        await this.page.getByRole('tab', { name: 'Billing' }).click();
    }

    async adminPage(){
        await this.page.getByRole('tab', { name: 'admin' }).click();
    }
}