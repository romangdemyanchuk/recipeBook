import React from "react";
import "./recipeForm.css"
import {Button, Form, Input, Modal} from 'antd';
import {newRecipe} from "../../session/mainReducer";
import {useDispatch} from "react-redux";
import bgImg from "../../img/phoneImg.png";
import {loadImg} from "../../utils/commonFunctions";
import {infoOfAction} from "../../utils/notification";

const RecipeForm = ({ modalIsOpen, setModalIsOpen }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = ({title, description, shortDescription, imgUrl}) => {
        const newItem = {
            id: Date.now(), title,
            shortDescription, description,
            ingredients: []
        }

        let imgLoad = loadImg(imgUrl)
        imgLoad.then(() => {
            newItem['imgUrl'] = imgUrl
            infoOfAction('You successfully create new recipe');
        }).catch(() => {
            infoOfAction('You  create new recipe, but there was an error loading the picture');
            newItem['imgUrl'] = bgImg
        }).finally(() => {
            form.resetFields();
            setModalIsOpen(false);
            newRecipe(newItem)(dispatch)
        })
    };

    return (
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
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title of recipe!' }]}
                >
                    <Input
                        placeholder="recipe title"
                    />
                </Form.Item>
                <Form.Item
                    label="Short description"
                    name="shortDescription"
                    rules={[{ required: true, message: 'Please input short description of recipe!' }]}
                >
                    <Input
                        placeholder="recipe short description"
                    />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input description of recipe!' }]}
                >
                    <Input
                        placeholder="recipe description"
                    />
                </Form.Item>
                <Form.Item
                    label="Image of recipe"
                    name="imgUrl"
                >
                    <Input
                        placeholder="recipe image url"
                    />
                </Form.Item>
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
    )
};

export default RecipeForm;
