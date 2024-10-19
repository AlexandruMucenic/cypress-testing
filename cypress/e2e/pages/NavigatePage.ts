class NavigatePage {
  visit(navigate_url: string) {
    cy.visit(navigate_url);
    cy.wait(3000);
  }

  clickMenuItem() {
    cy.get("#menu-item-14847").click();
  }

  assertRedirectToProductsPage(redirect_products: string) {
    cy.url().should("eq", redirect_products);
  }
}

export default NavigatePage;
