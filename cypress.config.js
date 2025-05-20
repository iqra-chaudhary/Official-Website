/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/



const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Ensure there are no unnecessary dependencies
      config.failCypressAfterAllSpecs = true;
      
      return config;
    },
  },
  pageLoadTimeout: 180000,
  defaultCommandTimeout: 10000,
});

