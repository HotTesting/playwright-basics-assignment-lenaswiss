import { Page } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../component/HeaderNavigationBarComponent";
import { FooterBlockComponent } from "../component/FooterBlockComponent";

export class WishlistPage {
    public page: Page;
    public header: HeaderNavigationBarComponent;
    public footer: FooterBlockComponent;

    public pagePath = '/dashboard/wishlist';

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderNavigationBarComponent(this.page);
        this.footer = new FooterBlockComponent(this.page);
    }

    async removeItemFromWishlist() {
        await this.page.getByRole('main').getByRole('button').click();
    }
}