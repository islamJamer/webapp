import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { getTodoName } from "../../aliases/domAliases";
import { addTodo, deleteTodo } from "../../aliases/networkAliases";
import { newtodoName, todoName } from "../../common/consts";
import { getTodosAppSelectors } from "../../selectors/todosAppSelectors";
import { interceptAddTodoRequest, interceptDeleteTodoRequest, visitPage } from "../../utils/interceptRequestUtils";

const page = getTodosAppSelectors();

Given('I visit the "To Do" home page', () => {
    visitPage('/');
    // cy.visit('/');
});

Then('Page logo exists', () => {
    page.header.logo.should('have.text', 'QAcart To-Do App');
});

Then('"Available todos" container title exists', () => {
    page.availableTodos.header.title.should('have.text', 'Available todos')
});

Then('"Available todos" container input exists', () => {
    page.availableTodos.header.input.should('exist')
});

Then('"Available todos" container footer contains {string}', tabTitle => {
    page.availableTodos.footer.should('contain.text', tabTitle);
});

When('I type the todo name in the input', () => {
    cy.wrap(todoName).as(getTodoName.alias)
    interceptAddTodoRequest();
    page.availableTodos.header.input.type(`${todoName}{enter}`);
    addTodo.wait();
});

Then('A new todo is added to the "Available todos" container list', () => {
    getTodoName.value().then(todoName => {
        page.availableTodos.todosList.should('contain.text', todoName);
    })
});

When('I click on the "Delete" utton of one todo item', () => {
    interceptDeleteTodoRequest();
    page.availableTodos.getSingleTodoItemByTitle(newtodoName).deleteButton.click();
    deleteTodo.wait();
});

Then('The todo is deleted from the "Available todos" container list', () => {
    page.availableTodos.todosList.should('not.contain.text', newtodoName);
});