import logform from "../actions/ui/login.action";
import * as login from "../actions/ui/login.action";
import BaseUIActions from "../actions/base/base.ui.actions";

describe("login page", () => {
  beforeEach(() => {
    BaseUIActions.beforeEachLoginHook();
  });

  // it.only("Login with valid credentials",{ tags: "@smoke" }, () => {
  //   logform.login(
  //     Cypress.env("USERNAME"),
  //     Cypress.env("PASSWORD"),
  //     Cypress.env("SUCCESS_MESSAGE")
  //   );
  //   logform.logout(Cypress.env("LOGOUT_SUCCESS_MESSAGE"));
  // });

  // it("Login with random username",{ tags: "@smoke" }, () => {
  //   logform.login(
  //     login.generateRandomUsername(),
  //     Cypress.env("PASSWORD"),
  //     Cypress.env("INVALID_USERNAME_MESSAGE")
  //   );
  // });

  // it("Login with invalid password", { tags: "@smoke" }, () => {
  //   logform.login(
  //     Cypress.env("USERNAME"),
  //     login.generateRandomPassword(),
  //     Cypress.env("INVALID_PASSWORD_MESSAGE")
  //   );
  // });
    it.only("Login with valid credentials", { tags: "@smoke" }, () => {
    const login = new LoginPage();
    login.login(
      testData.testdata1.name,
      testData.testdata1.password,
    );
  });
});
