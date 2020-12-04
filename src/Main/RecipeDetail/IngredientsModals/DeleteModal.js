import React from "react";
import {Button, Modal} from "antd";
import {useDispatch} from "react-redux";
import {deleteIngredient} from "../../../session/mainReducer";
import {infoOfAction} from "../../../utils/notification";

export const DeleteModal = ({ modalIsOPen, setModalIsOpen, idOfIngredient, idOfRecipe }) => {
    const dispatch = useDispatch()

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const ingredientDelete = () => {
        closeModal()
        deleteIngredient(idOfRecipe, idOfIngredient)(dispatch);
        infoOfAction('You successfully delete the ingredient');
    };

    return (
        <Modal
            title="Are you sure?"
            visible={modalIsOPen}
            onOk={closeModal}
            onCancel={closeModal}
        >
            <div className="deleteModalBtns">
                <Button type="primary" className="deleteCancelBtn" onClick={closeModal}>
                    Cancel
                </Button>
                <Button type="danger" onClick={ingredientDelete}>
                    Ok
                </Button>
            </div>
        </Modal>
    )
};

export default DeleteModal;
