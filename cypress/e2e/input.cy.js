/// <reference types="cypress" />

const { log } = require("console");
const { verify } = require("crypto");


describe(`input flow`, () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit(`/registration_form`);
  });

  it(`test registration form`, () => {
    cy.get(`input[name='firstname']`).type(`Mike`);
    cy.get(`input[name='lastname']`).type('Smith');
    cy.get(`input[name='username']`).type('Smith99');

    const email = `max${Math.floor(5000 + Math.random() * 900)}@gmail.com`;
    cy.get(`input[name='email']`).type(email);

    cy.get(`input[name='password']`).type('566444665');

    cy.get(`input[name='phone']`).type('267-558-4124');

    cy.get("input[value='male']").check();

    cy.get(`.radio`)
      .find(`[type=radio]`)
      .then((x) => {
        cy.wrap(x).eq(2).should(`not.be.checked`);

        cy.wrap(x).first().check().should(`be.checked`);

        cy.get(`[data-bv-icon-for=gender]`).should(`be.visible`);
      });

    cy.get(`input[name='birthday']`).type('11/05/1991');

    //    cy.get(`input[name='department']`).click();
  });

  it(`test registration form language checkboxes`, () => {
    cy.get(`input[type=checkbox]`).then((box) => {
      for (let i = 0; i < box.length; i++) {

        if(i==2) {

            cy.wrap(box).eq(i).should('have.value', 'javascript');
        }

        cy.wrap(box)
          .eq(i)
          .check()
          .should(`be.checked`)
          .wait(500)
          .uncheck()
          .should(`not.be.checked`)
          .wait(500);
      }
    });
  });


  it.only(`dropdown test`, () => {



cy.fixture('departments').then(dep => {

    cy.get(`select[name=department] > option`).each((option, i) => {

        if(i > 3) {
            return false;
        }


console.log(`${i}: ${option.text()}`);
   
console.log("from fixtures " +dep[i]);


expect(option.text()).to.be.equal(dep[i]);



    })
})

  })})