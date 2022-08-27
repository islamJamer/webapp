import { getAvailableTodoFooterSelectors } from "./components/availableTodoFooterSelectors";
import { getAvailableTodoHeaderSelectors } from "./components/availableTodoHeaderSelectors";
import { getSingleTodoItemSelectors } from "./components/singleTodoItemSelectors";

export const getAvailableTodosSelectors = (context: Cypress.Chainable<Element>) => {
    const getComponentContext = () => context.getByClassName('Todo-App');
    return {
        get header(){
            return getAvailableTodoHeaderSelectors(getComponentContext());
        },

        get todosList(){
            return getComponentContext().find('li');
        },

        getSingleTodoItemByTitle: (todoTitle: string) => {
            return getSingleTodoItemSelectors(getComponentContext(), todoTitle);
        },

        get footer(){
            return getAvailableTodoFooterSelectors(getComponentContext());
        }
    }
}