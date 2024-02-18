import { test } from "@playwright/test";
import { HeaderNavigationBarComponent } from "../app/component/HeaderNavigationBarComponent";
import { StartPage } from "../app/pages/StartPage";
import { RegisterPage } from "../app/pages/RegisterPage";

test('First test', async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.open();
    await startPage.header.navigateToSignupPage();
    const registerPage = new RegisterPage(page);
    const email = `test+${new Date().valueOf()}@email.com`;
    await registerPage.registerNewUser(email, 'Jhon', 'Smoth', 'qwe123');
});