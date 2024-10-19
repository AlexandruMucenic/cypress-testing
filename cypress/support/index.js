Cypress.on("uncaught:exception", (err, runnable) => {
  console.error("Unhandled exception:", err);
  return false;
});
