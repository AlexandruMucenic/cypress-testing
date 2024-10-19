import LoginSteps from "../steps/LoginSteps";
import {
  invalid_email,
  login_redirect,
  login_url,
  loginErrorMsg,
  valid_email,
  valid_password,
  wrong_password,
} from "../constants";

describe("Login Tests", () => {
  const loginSteps = new LoginSteps();

  const testCases = [
    {
      description: "Negative login test with invalid email and wrong password",
      email: invalid_email,
      password: wrong_password,
      error: loginErrorMsg,
      expectedOutcome: "error",
    },
    {
      description: "Positive login test with valid email and password",
      email: valid_email,
      password: valid_password,
      redirectUrl: login_redirect,
      expectedOutcome: "success",
    },
  ];

  testCases.forEach((testCase) => {
    it(`${testCase.description}`, () => {
      loginSteps.performLogin(login_url, testCase.email, testCase.password);

      if (testCase.expectedOutcome === "error") {
        loginSteps.validateErrorMessage(testCase.error as string);
      } else if (testCase.expectedOutcome === "success") {
        loginSteps.validateLogin(testCase.redirectUrl!);
      }
    });
  });
});
