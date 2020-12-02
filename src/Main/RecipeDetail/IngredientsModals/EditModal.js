import React from "react";
import {Button, Form, Input, Modal} from "antd";
import {editIngredient} from "../../../session/mainReducer";
import {useDispatch} from "react-redux";

export const EditModal = ({idOfRecipe, idOfIngredient, modalIsOPen, setModalIsOpen, item}) => {

    const {title, amount} = item
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    let formInitialValues = {
        title: title,
        amount: amount,
    }

    form.setFieldsValue(formInitialValues)

    const closeModal = () => {
        form.setFieldsValue({title: '', amount: null})
        setModalIsOpen(false);
    };

    const handleSubmit = (values) => {
        editIngredient(values, idOfRecipe, idOfIngredient)(dispatch)
        closeModal()
    };

    return (
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
                initialValues={formInitialValues}
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
                        <Button type="primary" className="editCancelBtn"
                            onClick={closeModal}>
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
export default EditModal;
