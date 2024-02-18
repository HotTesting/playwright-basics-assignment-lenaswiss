import { Locator, Page } from "@playwright/test";
import { FooterBlockComponent } from "../component/FooterBlockComponent";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";

export class RegisterPage {
    public page: Page;
    public header: HeaderNavigationBarComponent;
    public footer: FooterBlockComponent;
    private emailInput: Locator;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private passwordInput: Locator;
    private signupButton: Locator;

    constructor(page) {
        this.page = page;
        this.footer = new FooterBlockComponent(this.page);
        this.header = new HeaderNavigationBarComponent(page);
        this.emailInput = page.getByRole('main').getByPlaceholder('Please Enter Your Email');
        this.firstNameInput = page.getByPlaceholder('Please Enter Your First Name');
        this.lastNameInput = page.getByPlaceholder('Please Enter Your Last Name');
        this.passwordInput = page.getByPlaceholder('Please Enter Your Password');
        this.signupButton = page.getByRole('button', { name: 'Sign Up' });
    }

    async registerNewUser(email, firstName, lastName, password) {
        await this.emailInput.fill(email);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.passwordInput.fill(password);
        await this.signupButton.click();
        await this.page.waitForURL(/\/dashboard/, { timeout: 2000 });
    }
}