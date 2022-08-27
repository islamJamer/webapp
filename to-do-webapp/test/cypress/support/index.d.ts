declare namespace Cypress {
    interface Chainable {
        getByClassName(className: string): Chainable<Element>,
    }
}