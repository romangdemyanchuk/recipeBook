import React, {useState} from "react";
import {Button, Form, Input, Modal, Space, Table, Tag} from "antd";
import recipe1 from "../../../img/rec1.jpg";
import {newRecipe} from "../../../session/mainReducer";
const { Column, ColumnGroup } = Table;

export const EditModal = ({ modalIsOPen, setModalIsOpen, ingredients}) => {
    const [form] = Form.useForm();

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (values) => {
        console.log(values)
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
                        >
                            <Input
                                placeholder="recipe title"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Amount"
                            name="amount"
                        >
                            <Input
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
