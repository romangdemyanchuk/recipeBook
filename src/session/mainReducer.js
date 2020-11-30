import { ADD_RECIPE, DELETE_INGREDIENT } from "./sessionConstants";
import {addRecipe, deleteIngredientItem} from './sessionActions'
import recipe1 from "../img/rec1.jpg";


const initialState = {
    recipes: [
        {
            id: 1,
            title: 'Awesome Recipe',
            img: recipe1,
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
    ],
    recipe: {}
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state, recipes: [...state.recipes, action.payload]
            };
        case DELETE_INGREDIENT:
            console.log(state.recipes)
            let idxOfRecipe = state.recipes.findIndex((el) => el.id === action.payload.idOfRecipe)
            // let idxOfIngredients = state.recipes.ingredients.map((el) => {
            //     el.findIndex((val) => val.id === action.payload.idOfIngredient)
            // })

            state.recipes.map((item) => {

                if (item.id === action.payload.idOfRecipe) {

                    item.ingredients.map((el) => {

                        console.log(idxOfRecipe, idxOfIngredients)
                        if (el.id === action.payload.idOfIngredient) {
                            return {
                                ...state,
                                ...state.recipes.ingredients.slice(0, idx),
                                ...state.recipes.ingredients.slice(idx+1)
                            }

                        }

                    })

                }
            })

            const idx = state.recipes.ingredients.map((item) => {
                item.findIndex((el) => el.id === action.payload);
            })



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

