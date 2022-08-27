export const addTodo = {
    alias: 'addTodo',

    wait() {
        return cy.wait(`@${addTodo.alias}`)
    },
}