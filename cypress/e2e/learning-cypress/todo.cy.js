
let haspet = false // bollean

// .only -> se ejecuta uno
// .skip -> obvia ejecuciion del test

describe("Mi primer tesst", () => {
    it.skip("Primer Tet", () => {
        expect(true).to.equal(false)
      });
    it.skip("Segundo Test", () => {
      cy.visit("https://example.cypress.io");
      cy.get(".banner h1");
      // cy.get("myId")
      // <input type="text">
      // cy.get("[type]")

      //cy.contains("Commands")
      cy.contains("type").click();

      // vaidacion de URL
      cy.url().should("include","/commands/actions");
      cy.get("#email1").type("javier@gmail.com");

      // validar contenido en campo
      cy.get("#email1").should("have.value","javier@gmail.com");

    });

    it("Demo TODO 1", () => {
      cy.visit("https://example.cypress.io/todo");
      cy.get("h1").should("have.text","todos");
      cy.get(".todo-list li").should("have.length","2");
      // cy.get(".todo-list li").first().should("have.text","Pay electric bill");
      cy.get(".todo-list li:first-child").should("have.text","Pay electric bill");
      cy.get(".todo-list li").last().should("have.text","Walk the dog");
      cy.get(".todo-count").should("have.text","2 items left");
     
      // Forma 1
      // cy.get(".filters .selected").should("have.text","All");
      // Forma 2
      cy.get(".filters a").filter(".selected").should("have.text","All");
      cy.get(".new-todo").should("have.attr","placeholder").and("include","What needs to be done?");
    
      cy.contains("Pay electric bill")
        .siblings(".toggle")
        .should("not.to.be.checked");
    
    });
})