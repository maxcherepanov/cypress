///<reference types="cypress" />

describe(`Context:my fisrt cypress test ever`,() => {
    before(()=> {
    //runs once before all test cases in this describe block
})

beforeEach(()=> {
    //runs before each test cass
    cy.clearAllCookies(); 
})

after(()=> {
    //runs once after all test cases
})

afterEach(()=> {

    //runs after each test case (method)
})
it.only(`opening a web application`, ()=> {
    cy.visit(`/registration_form`);
    // cy.get('.nav-link').click();

})


it.skip(`Test 2`, ()=> {

    expect(false).to.equal(false);
})


it(`Test 3`, ()=> {

    expect(false).not.to.equal(true);
})
})