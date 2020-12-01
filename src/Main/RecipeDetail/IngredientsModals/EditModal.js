import React, {useState} from "react";
import {Button, Form, Input, Modal, Space, Table, Tag} from "antd";
import recipe1 from "../../../img/rec1.jpg";
import {addIngredient, editIngredient, newRecipe} from "../../../session/mainReducer";
import DeleteModal from "./DeleteModal";
import {useDispatch} from "react-redux";
const { Column, ColumnGroup } = Table;

export const EditModal = ({idOfRecipe, idOfIngredient, modalIsOPen, setModalIsOpen, ingredients}) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (values) => {
        ingredients = {};
        editIngredient(values, idOfRecipe, idOfIngredient)(dispatch)
        closeModal()
    };

    return (
        <>
            <Modal
                title="Edit ingredient"
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
                        title: ingredients.title,
                        amount: ingredients.amount
                    }}
                >
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: 'Please input title of ingredient!' }]}
                        >
                            <Input
                                placeholder="recipe title"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Amount(number)"
                            name="amount"
                            rules={[{ required: true, message: 'Please input amount(number) of ingredient!' }]}
                        >
                            <Input
                                type="number"
                                placeholder="recipe amount"
                            />
                        </Form.Item>

                    </div>
                    <div className="editModalBtns">
                        <Form.Item >
                            <Button type="primary" className="editCancelBtn">
                                Cancel
                            </Button>
                        </Form.Item>
                        <Form.Item >
                            <Button type="danger" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>

            </Modal>
        </>

    )
};

export default EditModal;
