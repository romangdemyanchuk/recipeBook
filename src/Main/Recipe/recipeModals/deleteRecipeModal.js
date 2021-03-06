import React from "react";
import {Button, Modal} from "antd";
import {useDispatch} from "react-redux";
import {deleteRecipe} from "../../../session/mainReducer";
import {infoOfAction} from "../../../utils/notification";

export const DeleteRecipeModal = ({ modalIsOPen, setModalIsOpen, id }) => {
    const dispatch = useDispatch()

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const recipeDelete = () => {
        closeModal()
        deleteRecipe(id)(dispatch);
        infoOfAction('You successfully delete the recipe');
    };

    return (
        <Modal
            style={{top: '120px'}}
            title="Are you sure?"
            visible={modalIsOPen}
            onOk={closeModal}
            onCancel={closeModal}
        >
            <div className="deleteModalBtns">
                <Button type="primary" className="deleteCancelBtn" onClick={closeModal}>
                    Cancel
                </Button>
                <Button type="danger" onClick={recipeDelete}>
                    Ok
                </Button>
            </div>
        </Modal>
    )
};

export default DeleteRecipeModal;
