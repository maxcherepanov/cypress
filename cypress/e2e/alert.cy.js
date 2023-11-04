/// <reference types="cypress" />

describe(`alert study`, { baseUrl: `https://demoqa.com` }, () => {
  beforeEach(`happens before each test`, () => {
    cy.clearAllCookies();
    cy.visit(`/alerts`);
  });

  it(`alert test1`, () => {
    const stub = cy.stub();

    cy.on(`window:confirm`, stub); // when this confirm command happens -> store andd give the control to a stub functon

    cy.get(`#confirmButton`)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(`Do you confirm action?`);
      });

    cy.on(`window:confirm`, () => true);

    // cy.on(`window:confirm`, () => false);  //choose cancel
    cy.contains(`You selected Ok`).should(`be.visible`);
  });
});
