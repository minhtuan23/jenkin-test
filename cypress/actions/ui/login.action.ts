import loginPage from "../../pages/login.page";
import BaseUIActions from "../base/base.ui.actions";
import BASE_URL from "../../enums/ui-endpoints.enum";

class LoginActions extends BaseUIActions<loginPage> {
  clickLoginButton() {
    this.page.loginButton.click();
    return this;
  }

  enterUsername(username: string) {
    this.page.usernameInput.type(username);
    return this;
  }

  enterPassword(password: string) {
    this.page.passwordInput.type(password);
    return this;
  }

  verifyLoginSuccess(successMessage: string) {
    this.page.loginSuccessMessage(successMessage).should("be.visible");
    return this;
  }

  //LOGOUT
  clickLogoutButton() {
    this.page.logoutButton.click();
    return this;
  }
  verifyLogoutSuccess(successMessage: string) {
    this.page.logoutSuccessMessage(successMessage).should("be.visible");
    return this;
  }

  // Feature: Login and Logout Actions
  logout(successMessage: string) {
    this.clickLogoutButton();
    this.verifyLogoutSuccess(successMessage);
    return this;
  }

  login(username: string, password: string, successMessage: string) {
    // this.navigateToLogInPage();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
    this.verifyLoginSuccess(successMessage);
    return this;
  }
}
export function generateRandomUsername(prefix: string = 'user'): string {
    const randomNum = Math.floor(Math.random() * 1000000);
    return `${prefix}${randomNum}`;
}

export function generateRandomPassword(length: number = 8): string {
    const charset = "abcdefghijklmnopq!@#$%^&*(rstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
// help me set up beforeEach hook to run before each test case in the login.cy.ts file
export function beforeEachLoginHook() {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL") + "/login");
    });
}

// select random moth from the current date
export function generateRandomMonth(): string {
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    const randomIndex = Math.floor(Math.random() * months.length);
    return months[randomIndex];
}
  
export function generateRandomDay(): string 
{
    const day = Math.floor(Math.random() * 28) + 1; 
    return day.toString().padStart(2, '0'); 

}

export default new LoginActions(new loginPage());
