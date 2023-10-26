/// <reference types="cypress" />

describe(`Context:my fisrt cypress test ever`, () => {
  beforeEach(() => {
    // runs before each test cass
    cy.clearAllCookies();
    cy.visit(`/login`);
  });

  it.skip(`work with locators`, () => {
    // cy.get(`input[name='username']`).type("CydeoStudent");

    // cy.get(`input[name='password']`).type("CydeoStudent");

    // cy.get(`#wooden_spoon`).click();

    cy.get(`div`).each((item, index, list) => {
      expect(list).to.have.length.above(11);
    });

    cy.get(`.btn.btn-primary`).click();

    cy.get(`#flash`).should('be.visible').should(`contain`, 'username is invalid');
  });

  it(`second test ever, finding elements by DOM travelling`, () => {
    cy.get(`input[name='username']`)
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it(`check assertions`, () => {
    cy.get('#wooden_spoon').should('have.text', 'Login').and('contain.class', 'btn-primary');

    cy.get(`#wooden_spoon`).then((btn) => {
      btn.add('class', 'max');

      expect(btn).to.have.text('Login');
      expect(btn).to.contain.class('btn-primary');
    });
  });
});
