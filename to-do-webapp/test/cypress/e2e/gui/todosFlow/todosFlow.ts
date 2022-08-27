import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { getTodosAppSelectors } from "../../selectors/todosAppSelectors";

const page = getTodosAppSelectors();

Given('I visit the "To Do" home page', () => {
    cy.visit('/')
});

Then('Page logo exists', () => {
    page.header.logo.should('have.text', 'QAcart To-Do App');
});

Then('"Available todos" container title exists', () => {
    page.availableTodos.header.title.should('have.text', 'Available todos')
});

Then('"Available todos" container input exists', () => {
    page.availableTodos.header.input.should('exist')
});

Then('"Available todos" container footer contains {string}', tabTitle => {
    page.availableTodos.footer.should('contain.text', tabTitle);
});