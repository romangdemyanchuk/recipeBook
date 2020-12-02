import React, { useState} from "react";
import "./recipe.css"
import {Button, Card} from "antd";
import RecipeDetail from "../RecipeDetail";
import DeleteRecipeModal from "./recipeModals/deleteRecipeModal";
import EditRecipeModal from "./recipeModals/editRecipeModal";

const Recipe = ({recipe}) => {
    const [detailOfRecipeIsOpen, setDetailOfRecipeIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

    console.log(recipe)
    const onCardClick = () => {
        setDetailOfRecipeIsOpen(true)
    }
    const onEdit = () => {
        setEditModalIsOpen(true)
    }
    const onDelete = () => {
        setDeleteModalIsOpen(true)
    }
    return (
        <>
        <EditRecipeModal modalIsOPen={editModalIsOpen} setModalIsOpen={setEditModalIsOpen} recipe={recipe}/>
        <DeleteRecipeModal modalIsOPen={deleteModalIsOpen} setModalIsOpen={setDeleteModalIsOpen} id={recipe.id}/>
            <RecipeDetail
                modalIsOPen={detailOfRecipeIsOpen}
                setModalIsOpen={setDetailOfRecipeIsOpen}
                recipe={recipe}
            />
            <Card>
                <div className="recipeItemsBlock" onClick={onCardClick}>
                    <h2 className="recipeItemsTitle">{recipe.title}</h2>
                    <img src={recipe.img} className="recipeImg"/>
                    <p className="recipeItemsDescription">
                        {recipe.shortDescription}
                    </p>

                </div>
                <div className="recipeBtns">
                    <Button type="primary" onClick={onEdit}>Edit</Button>
                    <Button type="danger" onClick={onDelete}>Delete</Button>
                </div>
            </Card>
        </>
    )
};

export default Recipe;
