import NavigateSteps from "../steps/NavigateSteps";

describe("Navigate Tests", () => {
  const navigateSteps = new NavigateSteps();

  it("should redirect to products", () => {
    navigateSteps.performNavigation();
    navigateSteps.validateRedirect();
  });
});
