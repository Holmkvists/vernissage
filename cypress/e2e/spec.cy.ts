describe("vernissage-tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should go to an arts' page", () => {
    cy.get("h1 > a").should("have.text", "Exhibition").click();
    cy.get(".item").first().click();
  });

  it("should purchase a product", () => {
    cy.get(".nav-container nav ul li a[href*='shop']").click();
    cy.get(".item").first().click();
    cy.get("#size-select").select("S");
    cy.get("#product-info-wrapper button")
      .should("have.text", "Add to shopping bag")
      .click();
    cy.get("#product-info-wrapper a[href*='shop/checkout']").click();
    cy.get("input[name='fullName']").type("Fredrik Berg");
    cy.get("input[name='email']").type("fredrik@berg.se");
    cy.get("input[name='address']").type("Fredriksbergsvägen 5");
    cy.get("input[name='city']").type("Vaxholm");
    cy.get("input[name='postalCode']").type("185 35");
    cy.get("input[name='cardName']").type("Fredrik Berg");
    cy.get("input[name='cardNumber']").type("1849 4529 4850 3134");
    cy.get("input[name='expMonth']").type("07");
    cy.get("input[name='expYear']").type("26");
    cy.get("input[name='cvv']").type("847");
    cy.get("input[type='submit']").click();
  });
});
