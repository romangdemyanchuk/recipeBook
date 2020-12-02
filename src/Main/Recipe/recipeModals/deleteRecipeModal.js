import React, {useState} from "react";
import {Button, Modal, Space, Table, Tag} from "antd";
import {useDispatch} from "react-redux";
import {deleteIngredient, deleteRecipe} from "../../../session/mainReducer";
const { Column, ColumnGroup } = Table;

export const DeleteRecipeModal = ({ modalIsOPen, setModalIsOpen, id }) => {
    const dispatch = useDispatch()
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const recipeDelete = () => {
        closeModal()
        deleteRecipe(id)(dispatch);
        closeModal()
    };

    return (
        <>
            <Modal
                style={{top: '120px'}}
                title="Are you sure?"
                visible={modalIsOPen}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <div className="deleteModalBtns">
                    <Button type="primary" className="deleteCancelBtn" onClick={closeModal}>Cancel</Button>
                    <Button type="danger" onClick={recipeDelete}>Ok</Button>
                </div>

            </Modal>
        </>

    )
};

export default DeleteRecipeModal;
