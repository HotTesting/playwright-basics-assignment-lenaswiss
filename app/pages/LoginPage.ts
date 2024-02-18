import { Locator, Page } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";

export class LoginPage {
    public page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    public header: HeaderNavigationBarComponent;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(page);
        this.emailInput = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email');
        this.passwordInput = this.page.getByPlaceholder('Please Enter Your Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async loginByAdmin(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}