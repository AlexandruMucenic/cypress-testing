import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {},
  },
});
