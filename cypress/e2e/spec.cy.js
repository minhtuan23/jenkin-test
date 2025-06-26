import "cypress-iframe";
import * as login from "../actions/ui/login.action";

describe("First test", () => {
  let testData;

  before(() => {
    cy.fixture("example").then((data) => {
      testData = data;
    });
  });
  it("passes", { tags: "@practice" }, () => {
    // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    // https://rahulshettyacademy.com/AutomationPractice/
    // cy.get(".search-keyword").type("br");
    // cy.get(".product:visible").should("have.length", 2);
    // cy.get(".products").find(".product").should("have.length", 2);
    // cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    // cy.get(".products")
    //   .find(".product")
    //   .each(($el, index, $list) => {
    //     const textVeg = $el.find("h4.product-name").text();
    //     if (textVeg.includes("Brocolli")) {
    //       cy.wrap($el).find("button").click();
    //     }
    //   });
    // cy.get(".brand").then(function (logoElement) {
    //   const logoText = logoElement.text();
    //   expect(logoText).to.include("GREENKART");
    //   cy.log(logoText);
    // });
    // cy.wait(20000);
    //
    //input[@value=""]
    // const text = "option2";
    //  cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.get(`input[value="${text}"]`).check().should("be.checked");
    // cy.get("#dropdown-class-example").select("option2");
    // cy.get("#autocomplete").type("Viet");
    // cy.contains("div", "Vietnam").click();
    // cy.get("#alertbtn").click();
    // // cy.get("#confirmbtn").click();
    // // cy.on("window:alert", (str) => {
    // //   expect(str).to.equal(
    // //     "Hello , share this practice page and share your knowledge"
    // //   );
    // // });
    // // cy.get("tr td:nth-child(2)")
    // //   .each(($el, index, $list) => {
    // //     const text = $el.text();
    // //   })
    // //   .then((list) => {
    // //     const allText = list.toArray().map((el) => el.innerText);
    // //     cy.log(allText);
    // //   });
    // cy.get("#mousehover").invoke("show");
    // cy.get(".mouse-hover-content").contains("Top").click({ force: true });
    // cy.wait(2000);
    // cy.contains("Top").click();
    // cy.frameLoaded("#courses-iframe");
    // cy.iframe().find("a[href*='mentorship']").eq(0).click();
    // cy.wait(2000);
    // cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
    // cy.wait(20000);
    // Calendar
  });
  it("Calendar", { tags: "@practice_calendar" }, () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.get("#search-field").type(testData.testdata1.name);
    cy.get("#search-field").clear();
    cy.get("#search-field").type(testData.testdata2.name);


    // cy.get(".react-date-picker__inputGroup").click();
    // cy.get(".react-date-picker__inputGroup").click();

    // cy.get(".react-calendar__navigation__label__labelText").click();
    // cy.get(
    //   "button.react-calendar__tile.react-calendar__year-view__months__month abbr"
    // )
    //   .contains(login.generateRandomMonth())
    //   .click();
    // cy.get("button.react-calendar__tile.react-calendar__month-view__days__day abbr")
    //   .contains(login.generateRandomDay())
    //   .click();

    cy.wait(2000);
  });
});
