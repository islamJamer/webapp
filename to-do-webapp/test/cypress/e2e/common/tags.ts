import { Before } from "cypress-cucumber-preprocessor/steps";
import { addNewTodo } from "../utils/requestUtils";
import { newtodoName } from "./consts";

Before({ tags: '@add-one-todo-for-this-scenario' }, () => {
    addNewTodo(newtodoName);
})