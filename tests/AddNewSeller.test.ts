import { test } from '@playwright/test';
import { StartPage } from '../app/pages/StartPage';
import { sellerDitails } from '../data/SellerDitails';
import { SellPage } from '../app/pages/SellPage';

test('Add seller test.', async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.open();
    await startPage.footer.goToSellWithUs();

    const sellPage = new SellPage(page);
    const brandName = `Test${new Date().valueOf()}`;
    await sellPage.regiserSeller(sellerDitails, brandName + '@gmail.co', brandName)
});