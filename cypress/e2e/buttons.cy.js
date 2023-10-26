/// <reference types="cypress" />

describe(`button page test`, () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.visit('/multiple_buttons');
  });

  it('multiple btn test', () => {
    // select with text

    // cy.contains(`Button 2`).should(`be.visible`).click();
    // cy.get(`#result`).should('have.text', `Clicked on button two!`);

    // cy.get('.btn.btn-primary').then($btns => {

    //     Cypress.Promise.each($btns, ($btn, index) => {
    //         return new Cypress.Promise(resolve => {
    //           cy.wrap($btn).click();
    //           cy.wait(2000); // Wait for 2 seconds before the next click
    //           resolve();
    //         });

    //     });
    // });

    // cy.get('.btn.btn-primary').then($btns => {

    // let length = $btns.length;

    //     for (let i = 0; i < length; i++) {

    //         cy.wrap($btns).eq(i).click();

    //         cy.wait(2000)

    //     }

    // });

    cy.get(`button`).each((item) => {
      // verify each btn has attribute 'on click'
      // expect(item).to.have.attr(`onclick`);

      // click on btn 4

      if (item.text() === 'Button 4') {
        cy.log(item.text());
        cy.wrap(item).click();

        cy.contains(`Clicked on button four!`).should('be.visible');
      }
    });
  });
});
