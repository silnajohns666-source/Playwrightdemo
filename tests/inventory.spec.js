import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage.js';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Inventory', () => {
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should display products when a standard user logs in', async () => {
    await expect(inventoryPage.heading).toHaveText('Products');
    await expect(inventoryPage.productItems).toHaveCount(6);
  });

  test('should update the cart when a product is added', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack');

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });
});
