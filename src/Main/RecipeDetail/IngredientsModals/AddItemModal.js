import React from "react";
import {Button, Form, Input, Modal} from "antd";
import {addIngredient} from "../../../session/mainReducer";
import {useDispatch} from "react-redux";
import {infoOfAction} from "../../../utils/notification";

export const AddItemModal = ({idOfRecipe, modalIsOPen, setModalIsOpen}) => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (value) => {
        form.resetFields();
        addIngredient(value, idOfRecipe)(dispatch)
        infoOfAction('You successfully add new ingredient');
        closeModal()
    };

    return (
        <Modal
            title="Add new ingredient"
            visible={modalIsOPen}
            onOk={closeModal}
            onCancel={closeModal}
        >
            <Form
                form={form}
                name="newIngredient"
                onFinish={(values) => {
                    handleSubmit(values);
                }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title of ingredient!' }]}
                >
                    <Input
                        placeholder="ingredients title"
                    />
                </Form.Item>
                <Form.Item
                    label="Amount(number)"
                    name="amount"
                    rules={[{ required: true, message: 'Please input amount(number) of ingredient!' }]}
                >
                    <Input
                        type="number"
                        placeholder="ingredients amount"
                    />
                </Form.Item>
                <div className="addModalBtns">
                    <Form.Item >
                        <Button type="primary" className="addCancelBtn" onClick={closeModal}>
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
    )
};
export default AddItemModal;
