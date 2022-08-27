import { RequestOptions } from "./types";
import { addTodo, deleteTodo, getTodos, info } from "../aliases/networkAliases";

const interceptRequest = ({method, url, response = {}}: RequestOptions, alias: string) => {
    return cy.intercept(method, url, response).as(alias);
}

export const interceptInfoRequest = () => {
    return interceptRequest(
        {
            method: 'GET',
            url: 'http://localhost:3000/sockjs-node/info?t=*',
            response: {}
        },
        info.alias
    );
}

export const interceptTodosRequest = () => {
    return interceptRequest(
        {
            method: 'GET',
            url: '**/todos',
            response: {}
        },
        getTodos.alias
    );
}

export const interceptAddTodoRequest = () => {
    return interceptRequest(
        {
            method: 'POST',
            url: '**/todos',
            response: {}
        },
        addTodo.alias
    );
}

export const interceptDeleteTodoRequest = () => {
    return interceptRequest(
        {
            method: 'DELETE',
            url: '**/todos/*',
            response: {}
        },
        deleteTodo.alias
    );
}

export const visitPage = (todoUrl: string) => {
    // interceptTodosRequest();
    // interceptInfoRequest();
    cy.visit(todoUrl);
    cy.wait(500);
    // cy.wait([getTodos.value(), info.value()]);
}