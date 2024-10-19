class LoginPage {
  visit(login_url: string) {
    cy.visit(login_url);
    cy.wait(3000);
  }

  enterEmail(email: string) {
    cy.get("#username").type(email);
  }

  enterPassword(password: string) {
    cy.get("#password").type(password);
  }

  clickLogin() {
    cy.get('[name="login"]').click();
  }

  assertErrorMessage(expectedMessage: string) {
    cy.get(".woocommerce-error").should("be.visible");
    cy.get(".woocommerce-error").should("contain.text", expectedMessage);
  }

  assertValidLogin(redirect: string) {
    cy.url().should("eq", redirect);
  }
}

export default LoginPage;
