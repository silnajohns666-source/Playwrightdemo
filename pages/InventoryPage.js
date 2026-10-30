export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('[data-test="title"]');
    this.productItems = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addProductToCart(productName) {
    const product = this.productItems.filter({ hasText: productName });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async removeProductFromCart(productName) {
    const product = this.productItems.filter({ hasText: productName });
    await product.getByRole('button', { name: 'Remove' }).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
