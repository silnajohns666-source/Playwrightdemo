export class CartPage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
