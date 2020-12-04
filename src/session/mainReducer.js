import { ADD_INGREDIENT, ADD_RECIPE, DELETE_INGREDIENT, DELETE_RECIPE, EDIT_INGREDIENT, EDIT_RECIPE }
from "./sessionConstants";
import { addIngredientItem, addRecipe, deleteIngredientItem, deleteRecipeItem, editIngredientItem, editRecipeItem }
from './sessionActions'
import bgImg from "../img/phoneImg.png"

const initialState = {
    recipes: [
        {
            id: 1,
            title: 'Awesome Recipe',
            imgUrl: bgImg,
            shortDescription: 'Short recipe descr',
            description: 'description of recipe ',
            ingredients: [
                {
                    id: 1,
                    title: 'ingredients1',
                    amount: 1
                },
                {
                    id: 2,
                    title: 'ingredients2',
                    amount: 2
                }
            ]
        },
    ]
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state, recipes: [...state.recipes, action.payload]
            }

        case ADD_INGREDIENT:
            let recipeId = state.recipes.findIndex((el) => el.id === action.payload.id)
            let stateCopy = {...state};
            stateCopy.recipes = [...state.recipes];
            stateCopy.recipes[recipeId].ingredients.push({
                id: Date.now(),
                title: action.payload.title,
                amount: action.payload.amount
            });
            return stateCopy;

        case DELETE_INGREDIENT:
            let idxOfRecipe = state.recipes.findIndex((el) => el.id === action.payload.idOfRecipe)
            let idxOfIngredients = state.recipes[idxOfRecipe].ingredients.findIndex((el) => el.id === action.payload.idOfIngredient)
            let copy = {...state};
            copy.recipes = [...state.recipes];
            copy.recipes[idxOfRecipe].ingredients.splice(idxOfIngredients, 1);
            return copy

        case EDIT_INGREDIENT:
            let idOfRecipe = state.recipes.findIndex((el) => el.id === action.payload.idOfRecipe)
            let idOfIngredients = state.recipes[idOfRecipe].ingredients.findIndex((el) => el.id === action.payload.idOfIngredient)
            let copyOfState = {...state};
            copyOfState.recipes = [...state.recipes];
            copyOfState.recipes[idOfRecipe].ingredients[idOfIngredients].title = action.payload.title;
            copyOfState.recipes[idOfRecipe].ingredients[idOfIngredients].amount = action.payload.amount;
            return copyOfState

        case EDIT_RECIPE:
            let idOfEditedRecipe = state.recipes.findIndex((el) => el.id === action.payload.id)
            let CopyState = {...state};
            CopyState.recipes = [...state.recipes];
            CopyState.recipes[idOfEditedRecipe].title = action.payload.title;
            CopyState.recipes[idOfEditedRecipe].description = action.payload.description;
            CopyState.recipes[idOfEditedRecipe].shortDescription = action.payload.shortDescription;
            CopyState.recipes[idOfEditedRecipe].imgUrl = action.payload.imgUrl;
            return CopyState

        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
};
export default MainReducer;

export const newRecipe = (newItem) => (dispatch) => {
    dispatch(addRecipe(newItem))
};

export const deleteIngredient = (idOfRecipe, idOfIngredient) => (dispatch) => {
    dispatch(deleteIngredientItem({idOfRecipe, idOfIngredient}))
};

export const addIngredient = ({title, amount}, id) => (dispatch) => {
    dispatch(addIngredientItem({title, amount, id}))
};

export const editIngredient = ({title, amount}, idOfRecipe, idOfIngredient) => (dispatch) => {
    dispatch(editIngredientItem({title, amount, idOfRecipe, idOfIngredient}))
};

export const editRecipe = ({description,shortDescription, title, imgUrl}, id) => (dispatch) => {
    dispatch(editRecipeItem({description, shortDescription, title , imgUrl, id}))
};

export const deleteRecipe = (id) => (dispatch) => {
    dispatch(deleteRecipeItem(id))
};

