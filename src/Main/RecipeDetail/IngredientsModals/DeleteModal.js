import React, {useState} from "react";
import {Button, Modal, Space, Table, Tag} from "antd";
import {useDispatch} from "react-redux";
import {deleteIngredient} from "../../../session/mainReducer";
const { Column, ColumnGroup } = Table;

export const DeleteModal = ({ modalIsOPen, setModalIsOpen, idOfIngredient, idOfRecipe }) => {
    const dispatch = useDispatch()
    const closeModal = () => {
        setModalIsOpen(false);
    };
    console.log(idOfRecipe, idOfIngredient)
    const ingredientDelete = () => {
        // deleteIngredient(idOfRecipe, idOfIngredient)(dispatch);
    };

    return (
        <>
            <Modal
                title="Are you sure?"
                visible={modalIsOPen}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <div className="deleteModalBtns">
                    <Button type="primary" className="deleteCancelBtn" onClick={closeModal}>Cancel</Button>
                    <Button type="danger" onClick={ingredientDelete}>Ok</Button>
                </div>

            </Modal>
        </>

    )
};

export default DeleteModal;
