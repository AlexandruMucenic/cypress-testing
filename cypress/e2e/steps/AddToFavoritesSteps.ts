import AddToFavoritesPage from "../pages/AddToFavoritesPage";

class AddToFavoritesSteps {
  private addToFavoritesPage: AddToFavoritesPage;

  constructor() {
    this.addToFavoritesPage = new AddToFavoritesPage();
  }

  performAddToFavorites(productUrl: string) {
    this.addToFavoritesPage.visit(productUrl);
    this.addToFavoritesPage.clickAddToFavorites();
  }

  validateFavoritesFunctionality(expectedText: string) {
    this.addToFavoritesPage.assertButtonText(expectedText);
    this.addToFavoritesPage.assertNotificationVisible();
  }
}

export default AddToFavoritesSteps;
