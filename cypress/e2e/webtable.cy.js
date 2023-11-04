/// <reference types="cypress" />

// if base url is different

describe('webTables', { baseUrl: 'https://demoqa.com' }, () => {
  beforeEach(``, () => {
    cy.clearAllCookies();
    cy.visit(`/webtables`);
  });

  it.skip(`web test 1`, () => {
    cy.get(`.rt-tbody`)
      .contains('.rt-tr-group', `Alden`)
      .then((row) => {
        cy.wrap(row).find('[title="Edit"]').click();

        cy.get(`#firstName`).clear().type(`Maxim`);

        cy.get(`#submit`).click();

        cy.wrap(row).should(`contain`, `Maxim`);

        cy.wrap(row).find(`.rt-td`).eq(1).should(`contain`, `Cantrell`);
      });
  });

  it('array test', () => {
    const ageArr = [29, 35, 45, 77];

    cy.wrap(ageArr).each((age) => {
      cy.get(`#searchBox`)
        .clear()
        .type(age)
        .then(() => {
          cy.get(`.rt-td`).contains(age);
        });
    });
  });

  it.only(`Add uses from json`, () => {
    cy.fixture('user').then((user) => {
      for (let i = 0; i < user.length; i++) {
        const columnNames = Object.keys(user[i]);
        const data = Object.values(user[i]);

        cy.get(`#addNewRecordButton`).click().wait(3000);

        for (let j = 0; j < columnNames.length; j++) {
          const columnName = columnNames[j];
          const locator = `#${columnName}`;

          cy.get(`${locator}`).clear().type(data[j]).wait(500);
        }

        cy.get('#submit').click();
      }
    });
  });
});
