///<reference types="cypress" />

describe(`Context:my fisrt cypress test ever`,() => {

beforeEach(()=> {
    //runs before each test cass
    cy.clearAllCookies(); 
    cy.visit(`/login`);
})



it(`work with locators`, ()=> {

// cy.get(`input[name='username']`).type("CydeoStudent");

// cy.get(`input[name='password']`).type("CydeoStudent");



// cy.get(`#wooden_spoon`).click();


cy.get(`div`).each((item, index, list )=> {

    expect(list).to.have.length.above(11);
});


cy.get(`.btn.btn-primary`).click();

cy.get(`#flash`).should('be.visible').should(`contain`, 'username is invalid');



})

})