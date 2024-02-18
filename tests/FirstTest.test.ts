import { test } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../app/component/HeaderNavigationBarComponent_old";
import { StartPage } from "../app/pages/StartPage";

test.skip('First test', async ({ page }) => {
    const startPage = new StartPage(page);
    startPage.open();
    const header = new HeaderNavigationBarComponent(page);
    // await header.clickOnShopLink();
    header.navigateToLoginPage();
    await page.pause();
});