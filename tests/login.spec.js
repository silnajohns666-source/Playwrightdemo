import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Login', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should open the inventory when valid credentials are submitted', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('should show an error when a locked user submits valid credentials', async ({ page }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Sorry, this user has been locked out',
    );
  });
});
