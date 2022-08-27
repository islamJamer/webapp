import { After, Before } from "cypress-cucumber-preprocessor/steps";
import { createdTodoId } from "../aliases/networkAliases";
import { addNewTodo, deleteTodo } from "../utils/requestUtils";
import { newtodoName } from "./consts";

Before({ tags: 'add-one-todo-usint-api' }, () => {
    addNewTodo(newtodoName);
})

After({ tags: '@delete-created-todo' }, () => {
    createdTodoId.value().then( id => {
        deleteTodo(id);
    });
});

Before({ tags: '@create-new-todo' }, () => {
    addNewTodo(newtodoName).then( response => {
        cy.wrap(response.body.id).as(createdTodoId.alias);
    });
});