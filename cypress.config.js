const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://practice.cydeo.com/',
    // video: true,
    retries: 0 , 
    defaultCommandTimeout: 3000,
    viewportHeight: 800,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



