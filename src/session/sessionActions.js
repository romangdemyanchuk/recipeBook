import {
    ADD_INGREDIENT,
    ADD_RECIPE,
    DELETE_INGREDIENT,
    DELETE_RECIPE,
    EDIT_INGREDIENT,
    EDIT_RECIPE
} from "./sessionConstants";

export const addRecipe = (data) => ({ type: ADD_RECIPE , payload: data });
export const deleteIngredientItem = (data) => ({ type: DELETE_INGREDIENT , payload: data });
export const addIngredientItem = (data) => ({ type: ADD_INGREDIENT , payload: data });
export const editIngredientItem = (data) => ({ type: EDIT_INGREDIENT , payload: data });
export const editRecipeItem = (data) => ({ type: EDIT_RECIPE , payload: data });
export const deleteRecipeItem = (data) => ({ type: DELETE_RECIPE , payload: data });
