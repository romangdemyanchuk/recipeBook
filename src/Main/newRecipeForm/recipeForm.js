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

    const onReset = () => {
        form.resetFields();
    };

    const handleSubmit = ({title, description}) => {
        onReset();
        const newItem = {
            id: new Date().toString(),
            title,
            img: recipe1,
            shortDescription:description,
            description: description,
            ingredients: [
                {
                    id: new Date().toString(),
                    title: 'Title',
                    amount: 5
                },
                {
                    id: Date.now().toString(),
                    title: 'Title',
                    amount: 5
                }
            ]
        }
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
                        >
                            <Input
                                placeholder="recipe description"
                            />
                        </Form.Item>
                    </div>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
};

export default RecipeForm;
