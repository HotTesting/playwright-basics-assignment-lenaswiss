
export class HeaderNavigationBarComponent {

    constructor(page) {
        this.page = page;
        this.shopLink = page.getByRole('link', { name: 'Shop' });
        this.welcomeMenu = page.getByText('Welcome');

    }

    clickOnShopLink = async () => {
        await this.shopLink.waitFor();
        await this.shopLink.click();
        await this.page.waitForURL(/\/shop/, { timeout: 2000 });
    }

    navigateToLoginPage = async () => {
        await this.welcomeMenu.waitFor();
        await this.welcomeMenu.click();
        await this.page.getByRole('menuitem', { name: 'Login' }).click();
        await this.page.waitForURL(/\/login/, { timeout: 2000 });
    }

    navigateToSignupPage = async () => {
        await this.welcomeMenu.waitFor();
        await this.welcomeMenu.click();
        await this.page.getByRole('menuitem', { name: 'Sign Up' }).click();
        await this.page.waitForURL(/\/register/, { timeout: 2000 });
    }
}