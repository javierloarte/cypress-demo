describe("The book page", () => {
    describe("When I enter the page", () => {

        beforeEach( function()  {
            cy.visit("https://output.appwiz.dev/app/login");
            cy.fixture("appwizData.json")
            .as("pageData")
            .then(function (data)  {
                cy.login(data.login.user, data.login.password);
              });
            cy.get("mat-nav-list").contains("Books").click();
        });
        it("then should show title correctly", () => {
            cy.get("mat-nav-list").contains("Books").click();
            cy.get(".custom-bread-crumb")
              .contains("Manage Books")
              .should("be.visible");
          })

        it.skip("And search a book, then should show data correctly", function () {
            cy.get("mat-nav-list").contains("Books").click();
            cy.get("#mat-input-2").type(this.pageData.bookSection.search.input);
        //    cy.get(".data-table tbody tr").should("have.lengthOf", 1);

            // let att = ["manzana", "pera"]
            // arr[0] = manzana
            // arr[1] = pera
            // arr.length = 2
            cy.get(".data-table tbody tr")
                .eq(0)
                .find("td")
                .eq(1)
                .should("contain", this.pageData.bookSection.search.expected);
        })

        it.skip("And search a non-existent book, then should show 'No records found'", function()  {
            // tipear dfajshdfjkashdfk
            cy.get("mat-nav-list").contains("Books").click();
            cy.get("#mat-input-2").type("lkfhjsdlajkfjh");
            cy.get(".table-no-data").should("contain","No record found");
        })
      
        it.only("And I click to Add icon, then should register new book correclty", () => {
            cy.get("mat-nav-list", { timeout: 8000 }).contains("Books").click();
            cy.get(".data-header button").eq(2).click();
      
            cy.get("mat-card-title").should("contain", "Add Books");
            cy.get("[formcontrolname=name]").type("Harry Potter");
            cy.get("[formcontrolname=publisher]").type("Planeta");
            cy.get("[formcontrolname=author]").type("LK Rouling");
            cy.get("[formcontrolname=year]").type("2010");
            cy.get("[formcontrolname=isbn]").type("12312");
            cy.get("#fileInput").selectFile("cypress/fixtures/demo.txt")
      
            cy.contains("Submit").click()
      
            cy.get("app-notification .dialog-header").should("contain", "Success");
            cy.get("app-notification mat-dialog-content").should(
              "contain",
              "Record added successfully"
            );
        });
      


      
      

    })

})