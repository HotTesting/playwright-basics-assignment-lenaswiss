import { Locator, Page, expect } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";
import { FooterBlockComponent } from "../component/FooterBlockComponent";

export class ShopPage {
    public page: Page;
    public header: HeaderNavigationBarComponent;
    public footer: FooterBlockComponent;
    private cherry: Locator;
    private cartBadge: Locator


    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(this.page);
        this.footer = new FooterBlockComponent(this.page);
        this.cherry = this.page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' });
        this.cartBadge = this.page.locator('.cart-badge').first();
    }

    async gotoCherryProductPage() {
        await this.cherry.click();
        await this.page.waitForURL(/\/product\/cherry-tomatoes/, { timeout: 2000 })
    }

    async checkCartValue(expectedValue: number) {
        const currentCartValue = Number(await this.cartBadge.innerText());
        expect(currentCartValue).toBeGreaterThanOrEqual(expectedValue);
    }
}