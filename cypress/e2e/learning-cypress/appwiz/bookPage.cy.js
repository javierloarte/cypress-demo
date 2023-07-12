describe("The book page", () => {
    describe("When I enter the page", () => {

        beforeEach( function()  {
            cy.visit("https://output.appwiz.dev/app/login");
            cy.fixture("appwiz/appwizData.json").as("pageData").then((data) => {
                cy.login(data.login.user, data.login.password);
              });
        })

    
    })

})