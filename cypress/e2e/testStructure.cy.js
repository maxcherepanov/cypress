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
it(`opening a web application`, ()=> {
    cy.visit(`/registration_form`);

})
})