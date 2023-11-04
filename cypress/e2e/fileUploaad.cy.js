/// <reference types="cypress" />

describe(`file upload`, () => {
  beforeEach(`go  to upload page`, () => {
    cy.clearAllCookies();
    cy.visit(`/upload`);
  });

  it(`test1 uploading`, () => {
    cy.get(`#file-upload`).attachFile(`file99.png`);
    cy.get(`#file-submit`).click();

    // assert

    cy.get(`#uploaded-files`).then(() => {
      cy.contains(`file99`).should(`be.visible`);
    });
  });
});
