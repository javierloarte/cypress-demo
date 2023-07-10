describe("User page", () =>{

    beforeEach( function()  {
        cy.visit("https://output.appwiz.dev/app/login");
        cy.fixture("appwizData.json").as("pageData")

    })

    it("should render correctly", function() {
        cy.get("input[formcontrolname='email']").type(this.pageData.login.user);
        cy.get("input[formcontrolname='password']").type(this.pageData.login.password);
        cy.get("button[type='submit']").click();

        cy.get("mat-nav-list").contains("Manage User").click()
        cy.get("mat-nav-list").contains("Manage User")
        .parents("mat-expansion-panel-header")
        .siblings("#cdk-accordion-child-0").contains("Users").click()

        cy.get(".custom-bread-crumb").contains("Manage Users").should("be.visible");
    })
})