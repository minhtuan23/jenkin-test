// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-grep')();

Cypress.Commands.add('stepInfo', (message: string) => {
  let arr = Cypress.env('stepInfo') || [];
  if (arr.length >= 1) {
    arr = [];
  }
  arr.push(message);
  Cypress.log({
    displayName: 'StepInfo',
    message: `${message}`,
    consoleProps: () => {
      return {
        Step: `${message}`
      };
    }
  });
  Cypress.env('stepInfo', arr);
});

declare namespace Cypress {
  interface TestConfigOverrides {
    tags?: string; // 👈 thêm dòng này
  }
}