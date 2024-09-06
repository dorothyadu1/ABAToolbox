import { Page, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';

export class PageManager{

    private readonly page: Page
    private readonly navigationPage: NavigationPage

    constructor(page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)

    }

    navigateTo(){
        return this.navigationPage
    }

}