import {ADD_RECIPE, DELETE_INGREDIENT} from "./sessionConstants";

export const addRecipe = (data) => ({ type: ADD_RECIPE , payload: data });
export const deleteIngredientItem = (data) => ({ type: DELETE_INGREDIENT , payload: data });
