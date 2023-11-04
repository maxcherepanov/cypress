import { auth } from '../../support/pages/auth';

import { navigateTo } from '../../support/pages/navigation';

const loginLocators = require(`../../support/pages/auth`);

/// <reference types="cypress" />

describe(`Context:my fisrt cypress test ever`, () => {
  beforeEach(() => {
    // runs before each test cass
    cy.clearAllCookies();
  });

  it(`pom test1`, () => {
    navigateTo.loginPage();
    auth.login(Cypress.env('loginName'), Cypress.env(`loginPassword`));

    cy.textExists(`Welcome to the Secure Area. When you are done click logout below`);
    cy.wait(2000);

    auth.logout();

    cy.textExists(`You logged out of the secure area!`);
  });

  it.only(`pom test2`, () => {
    navigateTo.loginPage();
    // auth.login(Cypress.env('loginName'), Cypress.env(`loginPassword`));

    loginLocators.locators.userName.type('maxim');
    loginLocators.locators.password.type('password');

    loginLocators.locators.submit.click();

    cy.textExists(`Your username is invalid!`);
  });
});
