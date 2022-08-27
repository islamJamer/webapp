export const addTodo = {
    alias: 'addTodo',

    value() {
        return `@${addTodo.alias}`;
    },

    wait() {
        return cy.wait(addTodo.value());
    },
}

export const deleteTodo = {
    alias: 'deleteTodo',

    value() {
        return `@${deleteTodo.alias}`;
    },

    wait() {
        return cy.wait(deleteTodo.value());
    },
}

export const getTodos = {
    alias: 'getTodos',

    value() {
        return `@${getTodos.alias}`;
    },

    wait() {
        return cy.wait(getTodos.value());
    },
}

export const info = {
    alias: 'info',

    value() {
        return `@${info.alias}`;
    },

    wait() {
        return cy.wait(info.value());
    },
}