import { Page, Locator } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";
import { builtinModules } from "module";
import { time } from "console";

export class DashboardPage {
    public page: Page;
    public header: HeaderNavigationBarComponent;
    private saveCahngesButton: Locator;
    private wishlistLink: Locator;

    public pagePath = '/dashboard'

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(this.page);
        this.saveChangesButton = this.page.getByRole('button', { name: 'Save changes' });
        this.wishlistLink = this.page.getByRole('link', { name: 'Wishlist' });
    }

    async openWishlist() {
        await this.wishlistLink.click();
        await this.page.waitForURL(/\/dashboard\/\wishlist/is, { timeout: 2000 })
    }
}