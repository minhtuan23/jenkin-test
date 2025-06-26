const { defineConfig } = require("cypress");
const grep = require("cypress-grep/src/plugin"); 

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      grep(config); 
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    browser: "chrome",
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
});
