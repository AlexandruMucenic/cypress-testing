class AddToCartPage {
  visit(productUrl: string) {
    cy.visit(productUrl);
    cy.wait(3000);
  }

  verifyShortDescription(visibleText: string) {
    cy.get(".woocommerce-product-details__short-description")
      .should("be.visible")
      .and("contain.text", visibleText);
  }

  selectOption() {
    cy.get(".tm-epo-field-label").first().click();
  }

  clickAddToCart() {
    cy.contains("button", "Adaugă în coș").click();
  }

  assertFastCartVisible() {
    cy.get(".wc-fast-cart").should("be.visible");
  }
}

export default AddToCartPage;
