import React, {useState} from "react";
import {Button, Form, Input, Modal, Space, Table, Tag} from "antd";
import recipe1 from "../../../img/rec1.jpg";
import {newRecipe} from "../../../session/mainReducer";
const { Column, ColumnGroup } = Table;

export const AddItemModal = ({ modalIsOPen, setModalIsOpen}) => {
    const [form] = Form.useForm();
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (value) => {
        console.log(value)
    };

    return (
        <>

            <Modal
                title="Add new ingredient"
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
                >
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Title"
                            name="title"
                        >
                            <Input
                                placeholder="ingredients title"
                            />
                        </Form.Item>
                    </div>
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Amount"
                            name="description"
                        >
                            <Input
                                placeholder="ingredients amount"
                            />
                        </Form.Item>
                    </div>
                    <div className="addModalBtns">
                        <Form.Item >
                            <Button type="primary" className="addCancelBtn">
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

export default AddItemModal;
