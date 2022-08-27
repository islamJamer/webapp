import { TodoObj } from "./types";

const apiUrl = 'http://localhost:8080'

export const getTodo = (id: string) => {
    return cy.request('GET', `${apiUrl}/todos/${id}`);
}

export const addNewTodo = (todoName: string) => {
    return cy.request('POST', `${apiUrl}/todos`, {
        isComplete: false,
        name: todoName
    });
}

export const deleteTodo = (id: string) => {
    return cy.request('DELETE', `${apiUrl}/todos/${id}`);
}

export const updateTodo = (id: string, newData: TodoObj) => {
    return cy.request('PUT', `${apiUrl}/todos/${id}`, newData);
}