import React from "react";
import {Button, Form, Input, Modal} from "antd";
import {useDispatch} from "react-redux";
import {editRecipe} from "../../../session/mainReducer";
import {loadImg} from "../../../utils/commonFunctions";
import bgImg from "../../../img/phoneImg.png";
import {infoOfAction} from "../../../utils/notification";

export const EditRecipeModal = ({ modalIsOPen, setModalIsOpen, recipe }) => {
    const {id, title, imgUrl, shortDescription, description} = recipe
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const handleSubmit = (values) => {
        let imgLoad = loadImg(values.imgUrl)
        imgLoad.then(() => {
            values['imgUrl'] = values.imgUrl
            infoOfAction('You successfully edit the recipe');
        }).catch(() => {
            values['imgUrl'] = bgImg
            infoOfAction('You  edit recipe, but there was an error loading the picture.');
        }).finally(() => {
            editRecipe(values, recipe.id)(dispatch)
            closeModal()
        })
    };

    return (
        <Modal
            title="Edit recipe"
            visible={modalIsOPen}
            onOk={closeModal}
            onCancel={closeModal}
        >
            <Form
                form={form}
                name="editRecipe"
                onFinish={(values) => {
                    handleSubmit(values);
                }}
                initialValues={{id, title, imgUrl, shortDescription,description}}
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
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input description of recipe!' }]}
                >
                    <Input
                        placeholder="recipe description"
                    />
                </Form.Item>
                <Form.Item
                    label="Short description"
                    name="shortDescription"
                    rules={[{ required: true, message: 'Please input description of recipe!' }]}
                >
                    <Input
                        placeholder="recipe shortDescription"
                    />
                </Form.Item>
                <Form.Item
                    label="Image url"
                    name="imgUrl"
                >
                    <Input
                        placeholder="recipe image url"
                    />
                </Form.Item>
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


    )
};

export default EditRecipeModal;
