export const getSingleTodoItemSelectors = (context: Cypress.Chainable<Element>, todoTitle: string) => {
    const item = () => context.contains('li', todoTitle);
    const should: Cypress.Chainer<Element> = (...params:any[]) => (item().should as any)(...params);

    return {
        should,

        get deleteButton() {
            return  item().getByClassName('delete-item')
        },
        
        get checkbox() {
            return  item().findByRole('checkbox');
        }
    }
}