import React, {useState} from "react";
import "./recipeDetail.css"
import recipe1 from "../../img/rec1.jpg";
import {Button, Modal, Space, Table, Tag} from "antd";
import EditModal from "./IngredientsModals/EditModal";
import DeleteModal from "./IngredientsModals/DeleteModal";
import AddItemModal from "./IngredientsModals/AddItemModal";
const { Column, ColumnGroup } = Table;

const RecipeDetail = ({ modalIsOPen, setModalIsOpen, recipe }) => {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [addItemModalIsOpen, setAddItemModalIsOpen] = useState(false);
    const [arr, setArr] = useState({});
    const [idOfItem, setIdOfItem] = useState(null);
    const closeModal = () => {
        setModalIsOpen(false);
    };
    console.log(recipe)
    const editModal = (id) => {
        recipe.ingredients.map((item) => {
            if(item.id === id) {
                setArr(item)
            }
        })
        setEditModalIsOpen(true);
        // setModalIsOpen(false);
    };
    const deleteModal = (id) => {
        recipe.ingredients.map((item) => {
            if(item.id === id) {
                setIdOfItem(item.id)
            }
        })
        setDeleteModalIsOpen(true);
        // setModalIsOpen(false);
    };
    const addModal = () => {
        setAddItemModalIsOpen(true);
        // setModalIsOpen(false);
    };

    console.log(arr)

    return (
        <>
            <EditModal id={idOfItem} modalIsOPen={editModalIsOpen} setModalIsOpen={setEditModalIsOpen} ingredients={arr}/>
            <DeleteModal idOfRecipe={recipe.id} idOfIngredient={idOfItem} modalIsOPen={deleteModalIsOpen} setModalIsOpen={setDeleteModalIsOpen} />
            <AddItemModal modalIsOPen={addItemModalIsOpen} setModalIsOpen={setAddItemModalIsOpen}/>
            <Modal
                title={recipe.title}
                visible={modalIsOPen}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <div>
                    <div className="recipeWrapper">
                        <img src={recipe.img} className="recipeImg"/>
                        <p className="recipeDetailsDescrption">
                            {recipe.description}
                        </p>
                    </div>
                    <div className="recipeIngredientsInfo">
                        <h2>Ingredients:</h2>
                        <Button className="newItemBtn" onClick={addModal}>New ingredient</Button>
                        <Table dataSource={recipe.ingredients}>
                            <Column title="Ingredient" dataIndex="title" key="title" />
                            <Column title="Amount" dataIndex="amount" key="amount" />
                            <Column
                                title="Edit"
                                key="action"
                                render={(text, record) => (
                                    <Space size="middle">
                                        <a onClick={() => editModal(record.id)}>Edit</a>
                                    </Space>
                                )}
                            />
                            <Column
                                title="Delete"
                                key="action"
                                render={(text, record) => (
                                    <Space size="middle">
                                        <a onClick={() => deleteModal(record.id)}>Delete</a>
                                    </Space>
                                )}
                            />
                        </Table>

                    </div>
                </div>
            </Modal>
        </>

    )
};

export default RecipeDetail;
