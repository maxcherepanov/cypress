const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://practice.cydeo.com/',

    // baseUrl: 'https://www.google.com/',
    env: {
      apiUrl: 'https://demoqa.com',
login: '/login',
apiBooks: '/BookStore/v1/Books', 
loginName: 'tomsmith',
loginPassword: 'SuperSecretPassword',
    },
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



