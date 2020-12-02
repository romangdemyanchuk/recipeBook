import React, {useState} from "react";
import "./recipeDetail.css"
import {Button, Modal, Space, Table, Tag} from "antd";
import EditModal from "./IngredientsModals/EditModal";
import DeleteModal from "./IngredientsModals/DeleteModal";
import AddItemModal from "./IngredientsModals/AddItemModal";
const { Column} = Table;

const RecipeDetail = ({ modalIsOPen, setModalIsOpen, recipe }) => {
    // const dispatch = useDispatch()
    // const{description, ingredients, shortDescription, title} = recipe;
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [addItemModalIsOpen, setAddItemModalIsOpen] = useState(false);
    const [editedItem, setEditedItem] = useState({});
    const [idOfItem, setIdOfItem] = useState(null);

    // console.log(123456)
    // useEffect(() => {
    //     recipeInfo(recipe.id)(dispatch)
    // });
    //
    // let recipe = useSelector((state) => state.main.oneRecipe);

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
        // setModalIsOpen(false);
    };
    const deleteModal = (id) => {
        // setIdOfItem(recipe.ingredients.filter(item => item.id === id))
        recipe.ingredients.forEach((item) => {
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
                    <img src={recipe.img} className="recipeImg"/>
                    <p className="recipeDetailsDescrption">
                        {recipe.description}
                    </p>
                </div>
                <div className="recipeIngredientsInfo">
                    <h2>Ingredients:</h2>
                    <div className="newIngredientBtn">
                        <Button className="newItemBtn" onClick={addModal}>New</Button>
                    </div>
                    <Table rowKey={'id'} dataSource={recipe.ingredients}>
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
            </Modal>
        </>
    )
};

export default RecipeDetail;
