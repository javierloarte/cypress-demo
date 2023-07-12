describe("User page", () =>{

    beforeEach( function()  {
        cy.visit("https://output.appwiz.dev/app/login");
        cy.fixture("appwizData.json").as("pageData")

    })

    it("should render correctly", function() {
        cy.login(this.pageData.login.user, this.pageData.login.password);

        /*
        cy.get("input[formcontrolname='email']").type(this.pageData.login.user);
        cy.get("input[formcontrolname='password']").type(this.pageData.login.password);
        cy.get("button[type='submit']").click();
        */
        cy.get("mat-nav-list").contains("Manage User").click()
        cy.get("mat-nav-list").contains("Manage User")
        .parents("mat-expansion-panel-header")
        .siblings("#cdk-accordion-child-0").contains("Users").click()

        cy.get(".custom-bread-crumb").contains("Manage Users").should("be.visible");
    })

    it("and i type search ", function() {
        cy.login(this.pageData.login.user, this.pageData.login.password);
      //  cy.get("input[formcontrolname='email']").type(this.pageData.login.user);
     //   cy.get("input[formcontrolname='password']").type(this.pageData.login.password);
      //  cy.get("button[type='submit']").click();

        cy.get("mat-nav-list").contains("Manage User").click()
        cy.get("mat-nav-list").contains("Manage User")
        .parents("mat-expansion-panel-header")
        .siblings("#cdk-accordion-child-0")
        .contains("Users")
        .click();

        cy.get("#mat-input-2").type("Hola");

      })
    

})