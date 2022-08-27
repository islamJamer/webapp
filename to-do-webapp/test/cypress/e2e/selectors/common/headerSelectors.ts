export const getHeaderSelectors = (context: Cypress.Chainable<Element>) => {
    const getComponentContext = () => context.getByClassName('App-header');
    return {
        get logo() {
            return getComponentContext().find('h2');
        }
    }
}