import React, {useState} from "react";
import {Button} from 'antd';
import "antd/dist/antd.css";
import "./main.css"
import {useSelector} from "react-redux";
import RecipeForm from "./newRecipeForm";
import Recipe from "./Recipe";

const Main = () => {
    const recipes = useSelector((state) => state.main.recipes);
    const [newItemModalIsOpen, setNewItemModalIsOpen] = useState(false);
    console.log('recipes', recipes)

    const openModal = () => {
        setNewItemModalIsOpen(true)
    }

    return (
        <div className="container">
            <RecipeForm modalIsOpen={newItemModalIsOpen} setModalIsOpen={setNewItemModalIsOpen}/>
            <div className="recipeItemsWrapper">
                {recipes.map((item) => {
                    return <Recipe key={item.id} recipe={item}/>
                })}
            </div>
            <Button
                type="primary"
                onClick={openModal}
                className="addRecipeBtn"
            >
                Add recipe
            </Button>
        </div>
    )
};

export default Main;
