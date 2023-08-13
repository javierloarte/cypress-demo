const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 8000,
    port: 8081,
    reporter : "junit",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // fixturesFolder: "/data-prueba"
    viewportWidth: 400,
    viewportHeight: 600
  },
});
