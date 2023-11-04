/// <reference types="cypress" />

describe(`max check`, () => {
  beforeEach(() => {
    // runs before each test cass
    cy.clearAllCookies();
    cy.visit(``);
  });

  it(`test1 max`, () => {
    expect(5).to.be.equal(5);
  });
});
