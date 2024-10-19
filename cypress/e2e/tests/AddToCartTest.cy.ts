import { product_url, shortDescriptionText } from "../constants";
import AddToCartSteps from "../steps/AddToCartSteps";

describe("Add to Cart Tests", () => {
  const addToCartSteps = new AddToCartSteps();

  it("should add product to cart and display the fast cart", () => {
    addToCartSteps.performAddToCart(product_url, shortDescriptionText);
    addToCartSteps.validateCartVisibility();
  });
});
