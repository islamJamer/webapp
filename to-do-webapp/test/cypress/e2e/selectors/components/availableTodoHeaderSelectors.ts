export const getAvailableTodoHeaderSelectors = (context: Cypress.Chainable<Element>) => {
    
    const getAvailableTodoHeaderContext = () => context.find('form');

    return {
        get title() {
            return getAvailableTodoHeaderContext().getByClassName('todo-header');
        },

        get input(){
            return getAvailableTodoHeaderContext().getByClassName('todo-input');
        }
    }
}