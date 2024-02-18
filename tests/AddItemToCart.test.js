import { test, expect } from '@playwright/test'
import { StartPage } from '../app/pages/StartPage.ts';
import { LoginPage } from '../app/pages/LoginPage.ts';
import { adminDetails } from '../data/UserDitails.ts';
import { ShopPage } from '../app/pages/ShopPage.ts';
import { CherryProductPage } from '../app/pages/CherryProductPage.ts'
import { DashboardPage } from '../app/pages/DashboardPage.ts'

test('Add an cherry to the Cart by the registered user.', async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.open();
    await startPage.header.navigateToLoginPage();

    const loginPage = new LoginPage(page);
    await loginPage.loginByAdmin(adminDetails.email, adminDetails.password);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.header.clickOnShopLink();

    const shopPage = new ShopPage(page);
    await shopPage.gotoCherryProductPage();

    const cherryPage = new CherryProductPage(page);
    await cherryPage.addCherryToCart();

    await shopPage.checkCartValue(1);
    await shopPage.gotoCherryProductPage();
    await cherryPage.removeCheryFromCart();
    await cherryPage.header.checkIfCartIsEmpty();
});
