import uiEndPoint from "../../enums/ui-endpoints.enum";
import TemplateTypes from "../../types/index";

export default class BaseUIActions<T> {
  page: T;
  constructor(page: T) {
    this.page = page;
  }

  waitForUrl(route: TemplateTypes.UIEndpoints) {
    cy.url().should("include", route);
    return this;
  }
  navigateToLogInPage() {
    cy.visit(uiEndPoint.LOGIN as string);
    this.waitForUrl(uiEndPoint.LOGIN as TemplateTypes.UIEndpoints);
    return this;
  }
  // set up beforeEach hook to run before each test cases
  static beforeEachLoginHook() {
    cy.visit(uiEndPoint.LOGIN as string); 
  }
}
