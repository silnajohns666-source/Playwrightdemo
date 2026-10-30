import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Cart', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();
  });

  test('should show added products when the cart is opened', async () => {
    await expect(cartPage.heading).toHaveText('Your Cart');
    await expect(cartPage.cartItems).toHaveCount(1);
    await expect(cartPage.cartItems).toContainText('Sauce Labs Backpack');
  });
});
