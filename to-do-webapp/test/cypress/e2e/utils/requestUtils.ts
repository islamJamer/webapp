const apiUrl = 'http://localhost:8080'

export const addNewTodo = (todoName: string) => {
    return cy.request('POST', `${apiUrl}/todos`, {
        isComplete: false,
        name: todoName
    });
}