import { Page, expect } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";
import { FooterBlockComponent } from "../component/FooterBlockComponent";

export class StartPage {
    public page: Page;
    public header: HeaderNavigationBarComponent;
    public footer: FooterBlockComponent;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(this.page);
        this.footer = new FooterBlockComponent(this.page);
    }

    async open() {
        await this.page.goto("/");
        await expect(this.page.getByRole('img').first()).toBeVisible();
    }
}