import React, {useState} from "react";
import "./recipe.css"
import recipe1 from "../../img/rec1.jpg";
import {Card} from "antd";
import RecipeDetail from "../RecipeDetail";

const Recipe = ({recipe}) => {
    const [detailOfRecipeIsOpen, setDetailOfRecipeIsOpen] = useState(false);

    const onCardClick = () => {
        setDetailOfRecipeIsOpen(true)
    }
    return (
        <>
            <RecipeDetail
                modalIsOPen={detailOfRecipeIsOpen}
                setModalIsOpen={setDetailOfRecipeIsOpen}
                recipe={recipe}
            />
            <Card>
                <div className="recipeItemsBlock" onClick={onCardClick}>
                    <h2 className="recipeItemsTitle">{recipe.title}</h2>
                    <div className="recipeItemsInfo">
                        <img src={recipe.img} className="recipeImg"/>
                        <p className="recipeItemsDescrption">
                            {recipe.shortDescription}
                        </p>
                    </div>
                </div>

            </Card></>
    )
};

export default Recipe;
