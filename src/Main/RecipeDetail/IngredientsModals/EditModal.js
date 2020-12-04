import React, {useEffect} from "react";
import {Button, Form, Input, Modal} from "antd";
import {editIngredient} from "../../../session/mainReducer";
import {useDispatch} from "react-redux";
import {infoOfAction} from "../../../utils/notification";

export const EditModal = ({idOfRecipe, idOfIngredient, modalIsOPen, setModalIsOpen, item}) => {
    const {title, amount} = item
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    let formInitialValues = {
        title: title,
        amount: amount,
    }

    useEffect(() => {
        form.setFieldsValue(formInitialValues)
    }, []);

    form.setFieldsValue(formInitialValues)

    const closeModal = () => {
        form.setFieldsValue({title: '', amount: null})
        setModalIsOpen(false);
    };

    const handleSubmit = (values) => {
        editIngredient(values, idOfRecipe, idOfIngredient)(dispatch)
        infoOfAction('You successfully edit the ingredient');
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
                name="editIngredient"
                onFinish={(values) => {
                    handleSubmit(values);
                }}
                initialValues={formInitialValues}
            >
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
