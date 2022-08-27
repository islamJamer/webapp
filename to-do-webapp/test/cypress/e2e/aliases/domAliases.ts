import { todoName } from "../common/consts"

export const getTodoName = {
    alias: todoName,

    value() {
        return cy.get(`@${getTodoName.alias}`)
    }
}
