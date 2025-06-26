// /// <reference types="cypress-xpath" />
// /// <reference types="cypress" />

// import 'cypress-xpath';

// export default class loginPage{
//     get usernameInput() {
//         return cy.xpath('//input[@id="username"]');
//     }
//     get passwordInput() {
//         return cy.xpath('//input[@id="password"]');
//     }
//     get loginButton() {
//         return cy.xpath('//button[@type="submit"]');
//     }
//     get logoutButton() {
//         return cy.xpath('//i[contains(text(),"Logout")]');
//     }
//     loginSuccessMessage(successMessage: string) {
//         return cy.xpath(`//b[contains(text(),'${successMessage}')]`);
//     }
//     logoutSuccessMessage(successMessage: string) {
//         return cy.xpath(`//b[contains(text(),'${successMessage}')]`);
//     }
//     // Generate a day from the current date
//     get currentDate() {
//         const date = new Date();
//         return date.getDate().toString().padStart(2, '0');
//     }
//     // Generate a month from the current date
//     get currentMonth() {
//         const date = new Date();
//         return (date.getMonth() + 1).toString().padStart(2, '0');
//     }
//     // Generate a year from the current date
//     get currentYear() {
//         const date = new Date();
//         return date.getFullYear().toString();
//     }
//     // Generate a full date in the format dd/mm/yyyy
//     get currentFullDate() {
//         return `${this.currentDate}/${this.currentMonth}/${this.currentYear}`;
//     }

// }

// // retrieve previosu code of this page

class homePage {
  goTo(Url) {
    cy.visit(Url);
  }
  logIn(email) {
    cy.get('input[placeholder="Email"]').type(email);
    cy.get(".submitAuth").click();
  }
  searchVideo(title) {
    cy.get('input[name="search_query"]').type(title);
  }
  pressEnter() {
    cy.focused().type("{enter}");
  }
  clickVideoTitle(videoTitle) {
    cy.get(`a[title="${videoTitle}"]`).first().click();
  }
  likeVideo(){
    cy.get('.yt-spec-touch-feedback-shape__fill').first().should('exist').click({force: true});
  }
}
export default homePage;
