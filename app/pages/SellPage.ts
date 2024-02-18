import { Locator, Page, expect } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";
import { FooterBlockComponent } from "../component/FooterBlockComponent";

export class SellPage {
    public page: Page;
    private header: HeaderNavigationBarComponent;
    private footer: FooterBlockComponent;
    private fullNameInput: Locator;
    private emailInput: Locator;
    private phoneInput: Locator;
    private brandNameInput: Locator;
    private businessDescriptionInput: Locator;
    private submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(this.page);
        this.footer = new FooterBlockComponent(this.page);
        this.fullNameInput = this.page.getByPlaceholder('Your Full Name');
        this.emailInput = this.page.getByPlaceholder('Your Email Address');
        this.phoneInput = this.page.getByPlaceholder('Your Phone Number');
        this.brandNameInput = this.page.getByPlaceholder('Your Business Brand');
        this.businessDescriptionInput = this.page.getByPlaceholder('Please Describe Your Business');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
    }

    async regiserSeller(seller, email: string, brandName: string) {
        await this.fullNameInput.fill(seller.fullName);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(seller.phone);
        await this.brandNameInput.fill(brandName);
        await this.businessDescriptionInput.fill(seller.businessDescription);
        await this.submitButton.click();
    }
}