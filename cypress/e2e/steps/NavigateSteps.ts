import NavigatePage from "../pages/NavigatePage";
import { hame_page_url, redirect_products } from "../constants";

class NavigateSteps {
  private navigatePage: NavigatePage;

  constructor() {
    this.navigatePage = new NavigatePage();
  }

  performNavigation() {
    this.navigatePage.visit(hame_page_url);
    this.navigatePage.clickMenuItem();
  }

  validateRedirect() {
    this.navigatePage.assertRedirectToProductsPage(redirect_products);
  }
}

export default NavigateSteps;
