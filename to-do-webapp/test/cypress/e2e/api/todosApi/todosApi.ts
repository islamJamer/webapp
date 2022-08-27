import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { newtodoName } from "../../common/consts";
import { addNewTodo } from "../../utils/requestUtils";

Then('A new todo is created', () => {
    addNewTodo(newtodoName).then(response => {
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(newtodoName);
    })
});
