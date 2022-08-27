import { addTodo } from "../aliases/networkAliases";

export const interceptAddTodoRequest = () => {
    return cy.intercept('POST', '/todos').as(addTodo.alias);
}