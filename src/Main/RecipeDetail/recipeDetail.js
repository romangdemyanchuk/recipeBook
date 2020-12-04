import React, {useState} from "react";
import "./recipeDetail.css"
import {Button, Modal} from "antd";
import EditModal from "./IngredientsModals/EditModal";
import DeleteModal from "./IngredientsModals/DeleteModal";
import AddItemModal from "./IngredientsModals/AddItemModal";

const RecipeDetail = ({ modalIsOPen, setModalIsOpen, recipe }) => {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [addItemModalIsOpen, setAddItemModalIsOpen] = useState(false);
    const [editedItem, setEditedItem] = useState({});
    const [idOfItem, setIdOfItem] = useState(null);

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const editModal = (id) => {
        recipe.ingredients.forEach((item) => {
            if(item.id === id) {
                setIdOfItem(item.id)
                setEditedItem(item)
            }
        })
        setEditModalIsOpen(true);
    };

    const deleteModal = (id) => {
        recipe.ingredients.forEach((item) => {
            if(item.id === id) {
                setIdOfItem(item.id)
            }
        })
        setDeleteModalIsOpen(true);
    };

    const addModal = () => {
        setAddItemModalIsOpen(true);
    };

    return (
        <>
            <EditModal
                idOfRecipe={recipe.id} idOfIngredient={idOfItem}
                modalIsOPen={editModalIsOpen} setModalIsOpen={setEditModalIsOpen}
                item={editedItem}
            />
            <DeleteModal idOfRecipe={recipe.id} idOfIngredient={idOfItem}
                         modalIsOPen={deleteModalIsOpen} setModalIsOpen={setDeleteModalIsOpen}
            />
            <AddItemModal idOfRecipe={recipe.id} modalIsOPen={addItemModalIsOpen}
                          setModalIsOpen={setAddItemModalIsOpen}
            />
            <Modal
                title={recipe.title}
                visible={modalIsOPen}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <div className="recipeWrapper">
                    <img alt='recipe' src={recipe.imgUrl} className="recipeImg"/>
                    <p className="recipeDetailsDescription">
                        {recipe.description}
                    </p>
                </div>
                <div className="recipeIngredientsInfo">
                    <h2>Ingredients:</h2>
                    <div className="newIngredientBtn">
                        <Button className="newItemBtn" onClick={addModal}>New</Button>
                    </div>
                    {recipe.ingredients.length > 0 ? <table>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th colSpan={2} style={{textAlign: 'center'}}>Actions</th>
                                </tr>
                                {recipe.ingredients.map((ingredient) => {
                                    return (
                                        <tr key={ingredient.id}>
                                            <th>{ingredient.title}</th>
                                            <th>{ingredient.amount}</th>
                                            <th>
                                                <a onClick={() => editModal(ingredient.id)}>Edit</a>
                                            </th>
                                            <th>
                                                <a onClick={() => deleteModal(ingredient.id)}>Delete</a>
                                            </th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table> :
                        <p>No ingredients</p>
                    }
                </div>
            </Modal>
        </>
    )
};

export default RecipeDetail;
