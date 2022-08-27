import { RequestOptions } from "./types";
import { addTodo } from "../aliases/networkAliases";

const interceptRequest = ({method, url, response = {}}: RequestOptions, alias: string) => {
    return cy.intercept(method, url, response).as(alias);
}

export const interceptAddTodoRequest = () => {
    return interceptRequest(
        {
            method: 'POST',
            url: '**/todos',
            response:{}
        },
        addTodo.alias
    );
}