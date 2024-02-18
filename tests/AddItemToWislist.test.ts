import { test, expect } from '@playwright/test'
import { StartPage } from '../app/pages/StartPage.ts';
import { LoginPage } from '../app/pages/LoginPage.ts';
import { adminDetails } from '../data/UserDitails.ts';
import { ShopPage } from '../app/pages/ShopPage.ts';
import { DashboardPage } from '../app/pages/DashboardPage.ts';
import { WishlistPage } from '../app/pages/WishlistPage.js';

test('Add the first product to the Wishlist by the registered user.', async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.open();
    await startPage.header.navigateToLoginPage();

    const loginPage = new LoginPage(page);
    await loginPage.loginByAdmin(adminDetails.email, adminDetails.password);

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.header.clickOnShopLink();

    const shopPage = new ShopPage(page);
    await shopPage.addFirstItemToWishlist();
    await shopPage.header.openDashboadr();

    await dashboardPage.openWishlist();

    const wishlistPage = new WishlistPage(page);
    await wishlistPage.removeItemFromWishlist();
    await page.pause()
});
