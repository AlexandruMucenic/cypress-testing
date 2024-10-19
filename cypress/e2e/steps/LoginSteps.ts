import LoginPage from "../pages/LoginPage";

class LoginSteps {
  private loginPage: LoginPage;

  constructor() {
    this.loginPage = new LoginPage();
  }

  performLogin(login_url: string, email: string, password: string) {
    this.loginPage.visit(login_url);
    this.loginPage.enterEmail(email);
    this.loginPage.enterPassword(password);
    this.loginPage.clickLogin();
  }

  validateErrorMessage(expectedMessage: string) {
    this.loginPage.assertErrorMessage(expectedMessage);
  }

  validateLogin(redirect: string) {
    this.loginPage.assertValidLogin(redirect);
  }
}

export default LoginSteps;
