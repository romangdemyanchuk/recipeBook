import React, {useState} from "react";
import "./recipeForm.css"
import {Button, Form, Input, Modal} from 'antd';
import {newRecipe} from "../../session/mainReducer";
import {useDispatch} from "react-redux";
import bgImg from "../../img/phoneImg.png";

const RecipeForm = ({ modalIsOpen, setModalIsOpen }) => {
    const [form] = Form.useForm();
    const [urlIsCorrect, setUrlIsCorrect] = useState(false)
    const [imgUrll, setimgUrl] = useState(null)
    const dispatch = useDispatch();
    const closeModal = () => {
        setModalIsOpen(false);
    };

    // const checkImage = (imageSrc, good, bad) => {
    //     var img = new Image();
    //     img.onload = good;
    //     img.onerror = bad;
    //     img.src = imageSrc;
    // }
    // const checkImage = new Promise((resolve, reject) => {
    //         // setTimeout(() => {
    //         //     resolve('foo');
    //         // }, 300);
    //     console.log('pr', imgUrl
    //         var img = new Image();
    //         img.onload = function () {
    //             console.log('resolve')
    //             resolve('resolve')
    //         };
    //     img.onerror = function () {
    //             console.log('reject')
    //             reject('reject')
    //         };
    //         img.src = imgUrl;
    //     })

    function loadImg(src) {
        return new Promise(function(resolve, reject) {
            // let script = document.createElement('script');
            var img = new Image();
            img.src = src;

            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

        });
    }



    const handleSubmit = ({title, description, shortDescription, imgUrl}) => {
        const newItem = {
            id: Date.now(),
            title,
            shortDescription:shortDescription,
            description: description,
            ingredients: []
        }

        let pr = loadImg(imgUrl)
        pr.then(() => {
            newItem['imgUrl'] = imgUrl
        }).catch(() => {
            newItem['imgUrl'] = bgImg
        }).finally(() => {
            form.resetFields();
            setModalIsOpen(false);
            newRecipe(newItem)(dispatch)

        })


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
                    <div className="recipeFormItem">
                        <Form.Item
                            label="Image of recipe"
                            name="imgUrl"
                        >
                            <Input
                                placeholder="recipe image url"
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
