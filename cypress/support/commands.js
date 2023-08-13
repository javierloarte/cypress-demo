// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (user, password) => { 
   // console.log("Comando custom", this.pageData.login.user, this.pageData.login.password)
   cy.session([user, password], () => {
        /*
        cy.visit("https://output.appwiz.dev/app/login");
        cy.get("input[formcontrolname='email']").type(user);
        cy.get("input[formcontrolname='password']").type(password);
        cy.get("button[type='submit']").click();
        cy.url().should("contain","/dashboard");
        */

        cy.visit("https://output.appwiz.dev/app/login");
        cy.get("input[formcontrolname='email']").type(user);
        cy.get("input[formcontrolname='password']").type(password);
        cy.get("button[type='submit']").click();
        cy.url().should("contain", "/dashboard");
    })
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })