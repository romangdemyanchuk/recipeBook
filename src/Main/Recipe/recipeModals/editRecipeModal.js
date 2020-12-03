import React, {useState} from "react";
import {Button, Form, Input, Modal, Space, Table, Tag} from "antd";
import {useDispatch} from "react-redux";
import {deleteIngredient, deleteRecipe, editRecipe, newRecipe} from "../../../session/mainReducer";
import recipe1 from "../../../img/phoneImg.png";
const { Column, ColumnGroup } = Table;

export const EditRecipeModal = ({ modalIsOPen, setModalIsOpen, recipe }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const handleSubmit = (values) => {

        editRecipe(values, recipe.id)(dispatch)
        closeModal()
    };

    return (
        <>
            <Modal
                title="Edit recipe"
                visible={modalIsOPen}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <Form
                    form={form}
                    name="newRecipe"
                    onFinish={(values) => {
                        handleSubmit(values);
                    }}
                    initialValues={{
                        id: recipe.id,
                        title: recipe.title,
                        imgUrl: recipe.imgUrl,
                        shortDescription:recipe.shortDescription,
                        description: recipe.description
                    }}
                >
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: 'Please input title of recipe!' }]}
                        >
                            <Input
                                placeholder="recipe title"
                            />
                        </Form.Item>
                    </div>
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Please input description of recipe!' }]}
                        >
                            <Input
                                placeholder="recipe description"
                            />
                        </Form.Item>
                    </div>
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Short description"
                            name="shortDescription"
                            rules={[{ required: true, message: 'Please input description of recipe!' }]}
                        >
                            <Input
                                placeholder="recipe shortDescription"
                            />
                        </Form.Item>
                    </div>
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Image url"
                            name="imgUrl"
                        >
                            <Input
                                placeholder="recipe image url"
                            />
                        </Form.Item>
                    </div>
                    <Form.Item className="editFormBtns">
                        <Button type="primary" className="editCancelBtn" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="danger" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    )
};

export default EditRecipeModal;
