/// <reference types="cypress" />

describe(`API test with CYPRESS`, () => {
  it(`get request`, () => {
    cy.request({
      // this function takes json object as a parameter
      method: 'GET',
      url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
      failsOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);

      expect(response.body.books[2].title).contain('Designing Evolvable Web API');
      cy.log(response.body.books[2].title);

      expect(response.headers.connection).to.equal('keep-alive');

      cy.fixture('books').then((books) => {
        // const columnNames = Object.keys(user[i]);
        // const data = Object.values(user[i]);

        for (let i = 0; i < books.length; i++) {
          expect(response.body.books[i].title).to.equal(books[i].title);
        }
      });
    });
  });
});
