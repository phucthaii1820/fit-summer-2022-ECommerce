import React, { useEffect, useState } from "react";
import {
    Button,
    Modal,
    Form,
    Input,
    Select,
    Table,
    Space,
    Image,
    Row,
    Col,
    Upload,
    Switch,
    InputNumber,
    Popconfirm,
    Typography,
} from "antd";

import ImgCrop from "antd-img-crop";

import {
    EditOutlined,
    DeleteOutlined,
    FolderOpenOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

import { addProduct } from "@/API/product";

export default function AddProductModal(props) {
    const categories = props.categories;

    const initProduct = {
        title: "",
        description: "",
        statusPost: true,
        nameBrand: "",
        totalWish: 0,
        category: "",
        image: [],
        type: [], // color quantity price
    };

    const [product, setProduct] = useState(initProduct);

    const [loading, setLoading] = useState(false);
    const [okLoading, setOkLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const [productTypeForm] = Form.useForm();

    const [previewImage, setPreviewImage] = useState({
        show: false,
        image: null,
        title: "",
    });

    const [fileList, setFileList] = useState([]);

    // For Edit Type Product --------------------------------------------------------------------------------------------
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Vui lòng nhập ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = async () => {
        setOkLoading(true);

        // create Form data
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("statusPost", product.statusPost);
        formData.append("nameBrand", product.nameBrand);
        formData.append("totalWish", product.totalWish);
        formData.append("category", product.category);
        formData.append("type", product.type);

        // For each image in the fileList, add to the formData
        if (fileList.fileList.length > 0) {
            fileList.fileList.forEach((file, index) => {
                formData.append("image", file.originFileObj);
            });
        }

        for (const value of formData.values()) {
            console.log(value);
        }

        // Call API to Add Product
        const res = await addProduct(formData);
        if (res.success) {
            setOkLoading(false);
            setVisible(false);
        } else {
            Modal.error({
                visible: true,
                title: "Có lỗi xảy ra",
                content: res.message,
            });

            setOkLoading(false);
            setVisible(false);
        }
    };

    // --------------------------------------------------------------------------------------------

    const handleCancel = () => {
        setProduct(initProduct || {});

        setVisible(false);
    };

    const columns = [
        {
            title: "Màu sắc",
            dataIndex: "color",
            key: "color",
            ellipsis: true,
            render: (color, index) => (
                <input
                    type="color"
                    id="head"
                    name="head"
                    defaultValue={color}
                    onBlur={(e) => handleFormChange([e, index], 10)}
                />
            ),
        },

        // {
        //     title: "Chi nhánh",
        //     dataIndex: "store_id",
        //     key: "store_id",
        //     ellipsis: true,
        // },

        {
            title: "Đơn giá",
            dataIndex: "price",
            key: "price",
            ellipsis: true,
            render: (price, index) => (
                <Input
                    defaultValue={price}
                    onBlur={(e) => handleFormChange([e, index], 6)}
                />
            ),
        },

        {
            title: "Số lượng tồn",
            dataIndex: "quantity",
            key: "quantity",
            ellipsis: true,
            render: (quantity, index) => (
                <Input
                    defaultValue={quantity}
                    onBlur={(e) => handleFormChange([e, index], 7)}
                />
            ),
        },

        {
            title: "Xóa",
            key: "delete",
            dataIndex: "delete",
            render: (_, record) => (
                <Button
                    icon={<DeleteOutlined />}
                    onClick={() => handleFormChange(record, 8)}
                />
            ),
        },
    ];

    const onImagePreview = async (file) => {
        file &&
            setPreviewImage({
                show: true,
                image: file.url || file.thummbUrl,
                title: file.name,
            });
    };

    const handleImageChange = (newFileList) => {
        setFileList(newFileList);

        console.log("newFileList", fileList);
    };

    const handleFormChange = (e, key) => {
        switch (key) {
            case 1:
                setProduct({ ...product, title: e.target.value });
                break;
            case 2:
                setProduct({ ...product, description: e.target.value });
                break;
            case 3:
                setProduct({ ...product, statusPost: !product.statusPost });
                break;
            case 4:
                setProduct({ ...product, nameBrand: e.target.value });
                break;
            case 5:
                setProduct({ ...product, category: e });
                break;
            case 6:
                var type = product.type;
                type.find((item) => item._id === e[1]._id).price =
                    parseInt(e[0].target.value) || 0;
                setProduct({ ...product, type: type });
                break;
            case 7:
                var type = product.type;
                type.find((item) => item._id === e[1]._id).quantity =
                    parseInt(e[0].target.value) || 0;
                setProduct({ ...product, type: type });
                break;
            case 8:
                var type = product.type;
                type = type.filter((item) => item._id !== e);
                setProduct({ ...product, type: type });
                break;
            case 9:
                setProduct({
                    ...product,
                    type: [
                        ...product.type,
                        {
                            _id: product.type.length + 1,
                            color: "#ffffff",
                            price: 0,
                            quantity: 0,
                            store_id: "",
                        },
                    ],
                });
                break;

            case 10:
                var type = product.type;
                type.find((item) => item._id === e[1]._id).color =
                    e[0].target.value;
                setProduct({ ...product, type: type });
                break;

            default:
                break;
        }

        console.log("product", product);
    };

    return (
        <>
            <Button onClick={showModal} icon={<PlusCircleOutlined />}>
                Thêm sản phẩm
            </Button>

            <Modal
                visible={visible}
                title="Thông tin chi tiết"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <>
                        <Button
                            key="submit"
                            icon={<CheckCircleOutlined />}
                            onClick={handleOk}
                            loading={okLoading}
                            type="primary"
                        >
                            Cập nhật
                        </Button>

                        <Button
                            key="back"
                            icon={<CloseCircleOutlined />}
                            onClick={handleCancel}
                        >
                            Hủy thay đổi
                        </Button>
                    </>,
                ]}
            >
                <Form>
                    <Form.Item required label="Tên sản phẩm">
                        <Input
                            value={product.title}
                            onChange={(e) => handleFormChange(e, 1)}
                        />
                    </Form.Item>

                    <Form.Item required label="Mô tả">
                        <Input.TextArea
                            value={product.description}
                            rows={5}
                            onChange={(e) => handleFormChange(e, 2)}
                        ></Input.TextArea>
                    </Form.Item>

                    <Form.Item label="Trạng thái">
                        <Switch
                            checked={product.statusPost}
                            checkedChildren="Hiện sản phẩm"
                            unCheckedChildren="Ẩn sản phẩm"
                            onChange={(e) => handleFormChange(e, 3)}
                        />
                    </Form.Item>

                    <Form.Item required label="Tên hãng">
                        <Input
                            value={product.nameBrand}
                            onChange={(e) => handleFormChange(e, 4)}
                        />
                    </Form.Item>

                    <Form.Item required label="Danh mục">
                        <Select
                            value={{
                                value: product.category,
                                label: product.category
                                    ? categories.find(
                                          (category) =>
                                              category._id === product.category
                                      ).name
                                    : "",
                            }}
                            onChange={(e) => handleFormChange(e, 5)}
                        >
                            {categories.map((category) => (
                                <Select.Option value={category._id}>
                                    {category.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item required label="Ảnh">
                        <ImgCrop aspect={1} quality={1}>
                            <Upload
                                listType="picture-card"
                                // fileList={fileList}
                                onChange={handleImageChange}
                                onPreview={onImagePreview}
                                accept=".jpg, .jpeg, .png"
                                beforeUpload={() => false}
                            >
                                Upload
                            </Upload>
                        </ImgCrop>
                    </Form.Item>

                    <Form label="Loại" form={productTypeForm} component={false}>
                        <Table
                            dataSource={product.type}
                            columns={columns}
                            pagination={false}
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                        />

                        <div>
                            <Button
                                icon={<PlusCircleOutlined />}
                                onClick={() => handleFormChange(9, 9)}
                                style={{ align: "right" }}
                            >
                                Thêm loại sản phẩm
                            </Button>
                        </div>
                    </Form>
                </Form>
            </Modal>

            <Modal
                visible={previewImage.show}
                title={previewImage.title}
                footer={null}
                onCancel={() =>
                    setPreviewImage({ ...previewImage, show: false, title: "" })
                }
            >
                <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage.image}
                />
            </Modal>
        </>
    );
}
