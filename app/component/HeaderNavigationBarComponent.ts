import { Locator, Page, expect } from "@playwright/test";

export class HeaderNavigationBarComponent {
    public page: Page;
    private shopLink: Locator;
    private welcomeMenu: Locator;
    private cart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shopLink = this.page.getByRole('link', { name: 'Shop' });
        this.welcomeMenu = this.page.getByText('Welcome');
        this.cart = this.page.locator('.empty-cart')
    }

    async clickOnShopLink() {
        await this.shopLink.waitFor();
        await this.shopLink.click();
        await this.page.waitForURL(/\/shop/, { timeout: 2000 });
    }

    async navigateToLoginPage() {
        await this.welcomeMenu.waitFor();
        await this.welcomeMenu.click();
        await this.page.getByRole('menuitem', { name: 'Login' }).click();
        await this.page.waitForURL(/\/login/, { timeout: 2000 });
    }

    async navigateToSignupPage() {
        await this.welcomeMenu.waitFor();
        await this.welcomeMenu.click();
        await this.page.getByRole('menuitem', { name: 'Sign Up' }).click();
        await this.page.waitForURL(/\/register/, { timeout: 2000 });
    }

    async checkIfCartIsEmpty() {
        expect(await this.cart.innerText()).toEqual('Your shopping cart is empty');
    }

}