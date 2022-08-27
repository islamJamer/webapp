import { getAvailableTodosSelectors } from "./availableTodosSelectors";
import { getHeaderSelectors } from "./common/headerSelectors";

export const getTodosAppSelectors = () => {
    const pageContext = () => cy.getByClassName('App');
    return {
        get header() {
            return getHeaderSelectors(pageContext());
        },

        get availableTodos(){
            return getAvailableTodosSelectors(pageContext());
        }
    }
}