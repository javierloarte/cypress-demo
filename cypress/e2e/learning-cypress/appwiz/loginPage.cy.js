describe("Practica 01", () => {

    beforeEach(() => {
        cy.visit("https://output.appwiz.dev/app/login");
        cy.fixture("appwizData.json").as("pageData")

    })


    it.skip("Testing 01", () => {
        cy.visit("https://output.appwiz.dev/app/login");
        
        // 1. Titulo ‘Welcome back’ esté visible
        cy.contains("Welcome back").should("include.text","Welcome back");

        // 2. Ambos inputs esten visibles
        cy.get("#mat-input-0").should('be.visible');
        cy.get("#mat-mdc-form-field-label-2").should('be.visible');
        
        // 3. Tipear el email y password
        cy.get("#mat-input-0").type('javier@gmail.com');
        cy.get("#mat-mdc-form-field-label-2").type('Passw0rd');

        // 4. El checkbox esté chekeado
        cy.get("#mat-mdc-checkbox-1-input").should("to.be.checked");

        // 5. El href del link ‘Forgot Password?’ sea ‘/app/forgot-password’
        cy.contains('Forgot Password?')
            .should('have.attr', 'href')
            .and('include', '/app/forgot-password')
        // 6. El boton esté habilitado (https://docs.cypress.io/guides/references/assertions#Chai)
        cy.get("button[type='submit']").should("be.enabled"),
        //cy.get("button[type='submit']").should("be.enabled");



        // 7. El href del link ‘Sign up’ sea ‘/app/register’
        cy.contains('Sign up')
            .should('have.attr', 'href')
            .and('include', '/app/register')

      });

    // Caso 1: Cuando todo está bien e ingreso a la app
    it("Should login correctly", function()  {
      //  cy.visit("https://output.appwiz.dev/app/login");

        cy.get("input[formcontrolname='email']").type(this.pageData.login.user);
        cy.get("input[formcontrolname='password']").type(this.pageData.login.password);
        cy.get("button[type='submit']").click(10, 10);

    })

    
    // Caso 2: Cuando hago click en sigIn sin completar datos
    it("Input empty", () => {
      //  cy.visit("https://output.appwiz.dev/app/login");
        cy.get("button[type='submit']").click();

        cy.get("input[formcontrolname='email']").should("have.class", "ng-invalid");
        cy.get("input[formcontrolname='password']").should("have.class", "ng-invalid");
        

    })
    // Caso 3: Cuando el email es incorrecto
    it("Should show email incorrect", function()  {
     //   cy.visit("https://output.appwiz.dev/app/login");

        /*

        cy.get("input[formcontrolname='email']").type("@appwiz.dev");
      //  cy.get("input[formcontrolname='email']").should("have.class", "ng-invalid");
        cy.get("input[formcontrolname='email']").should("have.class", "ng-valid");
        
        cy.get("input[formcontrolname='email']").clear().type("aa@");
        cy.get("input[formcontrolname='email']").should("have.class", "ng-valid");
        
        cy.get("input[formcontrolname='email']").clear().type("aa@@test");
        cy.get("input[formcontrolname='email']").should("have.class", "ng-valid");
           
        cy.get("button[type='submit']").click();

        */

        cy.log(this.pageData.login.invalidMails);
        //let invalidMails = ["aa@@test", "@@asd0", "@appwiz.dev", "aaa@"];
        cy.wrap(this.pageData.login.invalidMails).each((value) => {
            cy.get("input[formcontrolname='email']").type(value);
            cy.get("input[formcontrolname='email']").should("have.class", "ng-valid");
            cy.get("input[formcontrolname='email']").clear();


        });
    
    })




})