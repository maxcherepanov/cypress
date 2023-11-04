class Auth {
  login(userName, password) {
    cy.get(`[name='username']`).type(userName);
    cy.get(`[name='password']`).type(password);
    cy.get(`#wooden_spoon`).click();
  }

  logout() {
    cy.contains(`Logout`).click();
  }
}

const auth = new Auth();

// module.exports = {
//   auth
// };

class Locators {
  get userName() {
    return cy.get(`[name='username']`, { timeout: 10000 });
  }

  get password() {
    return cy.get(`[name='password']`);
  }

  get submit() {
    return cy.get(`#wooden_spoon`);
  }
}

const locators = new Locators();

module.exports = {
  auth,
  locators,
};
