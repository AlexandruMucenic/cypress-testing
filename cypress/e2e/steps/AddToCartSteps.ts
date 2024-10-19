import AddToCartPage from "../pages/AddToCartPage";

class AddToCartSteps {
  private addToCartPage: AddToCartPage;

  constructor() {
    this.addToCartPage = new AddToCartPage();
  }

  performAddToCart(productUrl: string, visibleText: string) {
    this.addToCartPage.visit(productUrl);
    this.addToCartPage.verifyShortDescription(visibleText);
    this.addToCartPage.selectOption();
    this.addToCartPage.clickAddToCart();
  }

  validateCartVisibility() {
    this.addToCartPage.assertFastCartVisible();
  }
}

export default AddToCartSteps;
