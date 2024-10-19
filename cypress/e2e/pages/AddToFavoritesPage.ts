class AddToFavoritesPage {
  visit(productUrl: string) {
    cy.visit(productUrl);
    cy.wait(3000);
  }

  clickAddToFavorites() {
    cy.get('[data-action="add"]').first().click();
  }

  assertButtonText(expectedText: string) {
    cy.get('[data-action="remove"]').should("contain.text", expectedText);
  }

  assertNotificationVisible() {
    cy.get(".et-notify.pos-fixed.right").should("be.visible");
  }
}

export default AddToFavoritesPage;
