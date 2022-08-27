import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the "To Do" home page', () => {
    cy.visit('/')
});

Then('Page logo exist', () => {
    cy.log('asdasd')
});