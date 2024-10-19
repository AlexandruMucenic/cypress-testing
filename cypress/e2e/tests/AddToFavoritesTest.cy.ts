import { product_url, button_text } from "../constants";
import AddToFavoritesSteps from "../steps/AddToFavoritesSteps";

describe("Add to Favorites Tests", () => {
  const addToFavoritesSteps = new AddToFavoritesSteps();

  it("should add product to favorites and display the notification", () => {
    addToFavoritesSteps.performAddToFavorites(product_url);
    addToFavoritesSteps.validateFavoritesFunctionality(button_text);
  });
});
