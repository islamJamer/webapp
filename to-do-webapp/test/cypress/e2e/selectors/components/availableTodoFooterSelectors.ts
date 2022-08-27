export const getAvailableTodoFooterSelectors = (context: Cypress.Chainable<Element>) => {
    const getAvailableTodoFooterContext = () => context.getByClassName('footer');
    const should: Cypress.Chainer<Element> = (...params:any[]) => (getAvailableTodoFooterContext().should as any)(...params);
    return {
        should,
        
        findByText: (text: string) => {
            return getAvailableTodoFooterContext().findByText(text);
        }
    }
}