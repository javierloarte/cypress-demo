

describe("The Category page", () => {
    describe("When I enter the page", () => {

        beforeEach(function () {

            cy.fixture("appwizData.json")
                .as("pageData")
                .then(function (data) {
                    cy.login(data.login.user, data.login.password);
                    cy.visit("https://output.appwiz.dev/app/admin/dashboard");
                });
        });
        it("then should show title correctly", () => {
            cy.get("mat-nav-list").contains("Categories").click();
            cy.get(".custom-bread-crumb")
                .contains("Manage Categories")
                .should("be.visible");
        })



        it.skip("then should show title correctly", () => {
            cy.get("mat-nav-list").contains("Categories").click();
            cy.get("table.data-table tr").eq(1).find("td").last().click();

            /*
            // Forma 1: comun 
            cy.get(".cdk-overlay-pane button").should("have.lengthOf", 3)
            cy.get(".cdk-overlay-pane button").eq(0).should("contain", "View Details")
            cy.get(".cdk-overlay-pane button").eq(1).should("contain", "Edit Record")
            cy.get(".cdk-overlay-pane button").eq(2).should("contain", "Delete Record")
            */

            /*
            // Forma 2 : manejo de alias
            cy.get(".cdk-overlay-pane button").as("buttonMenuList")
            cy.get("@buttonMenuList").should("have.lengthOf", 3)
            cy.get("@buttonMenuList").eq(0).should("contain", "View Details")
            cy.get("@buttonMenuList").eq(1).should("contain", "Edit Record")
            cy.get("@buttonMenuList").eq(2).should("contain", "Delete Record")
            */

            /*
            // Forma 3 : buscsar arreglo en multiples argumentos
            cy.get(".cdk-overlay-pane button").should("have.lengthOf", 3);
            // [<button>, <button>, <button>]
            cy.get(".cdk-overlay-pane button").spread((button1, button2, button3) => {
             //   console.log("1", button1)
                cy.wrap(button1).should("contain","View Details")
                cy.wrap(button2).should("contain","Edit Record")
                cy.wrap(button3).should("contain","Delete Record");
                cy.wrap(button1).click()
                });
            */

            const options = ["View Details", "Edit Record", "Delete Record"];
            cy.get(".cdk-overlay-pane button").should("have.lengthOf", 3).each((element, index) => {
                //  console.log("->", options[index]);
                cy.wrap(element).should("contain", options[index]);

            });


        })

        it("and i click creater button", () => {
            cy.contains("add").click()
            cy.contains("Add Categories").should("be.visible");
            cy.get("[formcontrolname=category_name]").type("Lorem")
            cy.get("[formcontrolname=category_type]").type("Bar")
            cy.get(".ql-container").then((elem) => {
                // elem[0].__quill.setText("HOLA MUNDO :D");
                cy.wrap(elem[0].__quill).invoke("setText", "HOLA MUNDO :D");
            });



        })


        it.skip("then should load reques correctly", () => {
            // PASO 1
            // FORMA 1 de intercepcion
            /*   cy.intercept({ method: "GET", url: "/api/categories*" }, (req) => {
                   expect(req.headers["accept"]).to.include("application/json")
                   expect(req.headers["accept-encoding"]).to.include("gzip");
                   expect(req.headers.host).to.include("output.appwiz.dev");
   
                   request.coninue((response) => {
                       console.log(response);
                       expect(response.statusCode).to.equal(200);
                       expect(response.statusMessage).to.equal("OK");
                       expect(response.body.message).to.equal("data fetched");
                       expect(response.body.status).to.equal("success");
                       expect(response.body.total_count).to.equal(501);
                       expect(response.body.data).to.have.lengthOf(30);
   
                   })
   
                   request.on("before:response", (res) => {});
                   request.on("response", (response) => {});
                   request.on("after:response", (res) => {});
   
                 });
               */

            // FORMA 2 de intercepcion
            cy.intercept({ method: "GET", url: "/api/categories*" }).as("myAlias");
            cy.get("mat-nav-list").contains("Categories").click();
            cy.wait("@myAlias").then((intersection) => {
                // request
                expect(intersection.request.headers["accept"]).to.include("application/json")
                expect(intersection.request.headers["accept-encoding"]).to.include("gzip");
                expect(intersection.request.headers.host).to.include("output.appwiz.dev");

                // response
                expect(intersection.response.statusCode).to.equal(200);
                expect(intersection.response.statusMessage).to.equal("OK");
                expect(intersection.response.body.message).to.equal("data fetched");
                expect(intersection.response.body.status).to.equal("success");
                expect(intersection.response.body.total_count).to.equal(501);
                expect(intersection.response.body.data).to.have.lengthOf(30);


            })

         

         
        

            // PASO 2
            // cy.get("mat-nav-list").contains("Categories").click();




        })



        it.only("error response", () => {
            cy.intercept(
                { method: "GET", url: "/api/categories*" },
                { forceNetworkError: true }
              ).as("err");
              cy.get("mat-nav-list").contains("Categories").click();
              cy.wait("@err").should("have.property", "error");
              //cy.get(".table-no-data").should("contains", "No records found");
              cy.get(".data-table-container").contains("No records found").should("be.visible");
        
        })

        it.skip("replace all data", () => {
            cy.intercept({ method: "GET", url: "/api/categories*" }, (request) => {
                request.continue((response) => {
                    console.log(response);
                    response.body.data = [{

                    }]

                })
            })
    
        })






    })

})