import { Then } from "cypress-cucumber-preprocessor/steps";
import { createdTodoId } from "../../aliases/networkAliases";
import { newtodoName, updateTodoInfo } from "../../common/consts";
import { addNewTodo, deleteTodo, updateTodo } from "../../utils/requestUtils";

Then('A new todo is created', () => {
    addNewTodo(newtodoName).then(response => {
        cy.wrap(response.body.id).as(createdTodoId.alias)
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(newtodoName);
    })
});

Then('todo is deleted', () => {
    createdTodoId.value().then( id => {
        deleteTodo(id).then(response => {
            expect(response.status).to.equal(200);
        })
    })
});

Then('todo is updated', () => {
    createdTodoId.value().then( id => {
        updateTodo(id, updateTodoInfo).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal(updateTodoInfo.name);
            expect(response.body.isComplete).to.equal(updateTodoInfo.isComplete);
        })
    })
});