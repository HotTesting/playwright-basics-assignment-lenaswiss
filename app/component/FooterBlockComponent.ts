import { Locator, Page } from "@playwright/test";

export class FooterBlockComponent {
    public page: Page;
    private contactUs: Locator;
    private sellWithUs: Locator;
    private shipping: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactUs = page.getByRole('link', { name: 'Contact Us' }).first();
        this.sellWithUs = page.getByRole('link', { name: 'Sell With Us' }).first();
        this.shipping = page.getByRole('link', { name: 'Shipping' }).first();
    }

    async goToContactUsPage() {
        await this.contactUs.click();
        await this.page.waitForURL(/\/contact/, { timeout: 2000 });
    }

    async goToSellWithUs() {
        await this.sellWithUs.click();
        await this.page.waitForURL(/\/sell/, { timeout: 2000 });
    }

    async goToShipping() {
        await this.shipping.click();
        await this.page.waitForURL(/\/shipping/, { timeout: 2000 });
    }
}