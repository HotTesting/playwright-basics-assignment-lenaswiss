import { Locator, Page } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";

export class CherryProductPage {
    private addToCartButton: Locator;
    public page: Page;
    private placeOrderButton: Locator;
    private continueShoppingButton: Locator;
    private removeButton: Locator;
    public header: HeaderNavigationBarComponent;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(this.page);
        this.addToCartButton = this.page.getByRole('button', { name: 'Add To Bag' })
        this.placeOrderButton = this.page.getByRole('button', { name: 'Place Order' });
        this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue shopping' });
        this.removeButton = this.page.getByRole('button', { name: 'Remove From Bag' });
    }

    async addCherryToCart() {
        await this.addToCartButton.click();
        await this.continueShoppingButton.click()
        await this.page.waitForURL(/\/shop/, { timeout: 2000 });
    }

    async removeCheryFromCart() {
        await this.removeButton.click();

    }
}