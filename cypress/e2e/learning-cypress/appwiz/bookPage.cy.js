describe("The book page", () => {
    describe("When I enter the page", () => {

        beforeEach( function()  {
            cy.visit("https://output.appwiz.dev/app/login");
            cy.fixture("appwizData.json").as("pageData")
            cy.login(this.pageData.login.user, this.pageData.login.password);
        })

    
    })

})