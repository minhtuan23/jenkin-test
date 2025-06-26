// describe("Launch Application", () => {
//   it("launch to test login functionality", () => {
//     cy.visit("https://www.saucedemo.com/v1/");
//     cy.get("#user-name").type("standard_user");
//     cy.get("#password").type("secret_sauce");
//     // get text on screen to compare with expected text
//     cy.get(".login_password h4").should("have.text", "Password for all users:");
//     cy.get("#login-button").click();
//     // pause for 2 seconds to see the result
//     cy.wait(20000000);
//   });
// });

// require("cypress-mailosaur");
// require("cypress-wait-until");
// require('cypress-xpath');

/// <reference types="cypress-mailosaur" />
import homePage from "../pages/login.page";

describe("create a new slack account", () => {
  let testData;

  before(() => {
    cy.fixture("example").then((data) => {
      testData = data;
    });
  });
  it("Create and submit the email address", { tags: "@practices" }, () => {
    const page = new homePage();
    page.goTo(testData.baseUrl);
    cy.wait(2000);

    page.searchVideo(testData.testdata1.title);
    page.pressEnter();
    page.clickVideoTitle(testData.testdata1.title);
    page.likeVideo()
    cy.wait(2000);
  });
});
