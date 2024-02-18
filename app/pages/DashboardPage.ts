import { Page, Locator } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";
import { builtinModules } from "module";

export class DashboardPage {
    public page: Page;
    public header: HeaderNavigationBarComponent;
    private saveCahngesButton: Locator;

    public pagePath = '/dashboard'

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(this.page);
        this.saveChangesButton = this.page.getByRole('button', { name: 'Save changes' });
    }

    async assertSuccessLogin() {
        const message = 'Hey John, Welcome Back!';
        await expect(this.page.getByRole('heading', { name: message })).toBeVisible({ timeout: 10000 });
    }
}