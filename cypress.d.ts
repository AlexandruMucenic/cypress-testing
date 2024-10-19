declare namespace Cypress {
  interface Chainable {
    bypassLogin(
      email: string,
      password: string,
      login_url: string,
      redirect: string
    ): void;
  }
}
