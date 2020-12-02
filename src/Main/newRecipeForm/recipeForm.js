import React from "react";
import "./recipeForm.css"
import {Button, Form, Input, Modal} from 'antd';
import {newRecipe} from "../../session/mainReducer";
import {useDispatch} from "react-redux";
import recipeImg from '../../img/rec1.jpg'
import recipe1 from "../../img/rec1.jpg";

const RecipeForm = ({ modalIsOpen, setModalIsOpen }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = ({title, description, shortDescription}) => {
        form.resetFields();
        const newItem = {
            id: Date.now(),
            title,
            img: recipe1,
            shortDescription:shortDescription,
            description: description,
            ingredients: []
        }
        console.log(newItem)
        setModalIsOpen(false);
        newRecipe(newItem)(dispatch)
    };

    return (
        <div className="recipeForm">
            <Modal
                title="Create new recipe"
                visible={modalIsOpen}
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
                            rules={[{ required: true, message: 'Please input title of recipe!' }]}
                        >
                            <Input
                                placeholder="recipe title"
                            />
                        </Form.Item>
                    </div>
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Short description"
                            name="shortDescription"
                            rules={[{ required: true, message: 'Please input short description of recipe!' }]}
                        >
                            <Input
                                placeholder="recipe short description"
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
                    <Form.Item className="recipeFormBtns">
                        <Button type="primary" className="addCancelBtn" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button type="danger" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
};

export default RecipeForm;
