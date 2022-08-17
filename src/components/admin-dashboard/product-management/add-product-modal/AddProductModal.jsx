import React, { useState } from "react";
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
} from "antd";

import ImgCrop from "antd-img-crop";

import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeInvisibleOutlined,
    FolderOpenOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

export default function AddProductModal(props) {
    const categories = props.categories;

    const columns = [
        {
            title: "Màu sắc",
            dataIndex: "color",
            key: "color",
            ellipsis: true,
            render: (color) => (
                <div
                    className="h-4 w-4"
                    style={{ backgroundColor: color }}
                ></div>
            ),
        },
        {
            title: "Chi nhánh",
            dataIndex: "store_id",
            key: "store_id",
            ellipsis: true,
        },
        {
            title: "Đơn giá",
            dataIndex: "price",
            key: "price",
            ellipsis: true,
        },
        {
            title: "Số lượng tồn",
            dataIndex: "quantity",
            key: "quantity",
            ellipsis: true,
        },
    ];

    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState({
        title: "",
        description: "",
        statusPost: true,
        nameBrand: "",
        totalWish: 0,
        category: "",
        image: [],
        type: [],
    });

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {};

    const handleCancel = () => {};

    return (
        <>
            <Button icon={<PlusCircleOutlined />} onClick={showModal}>
                Thêm sản phẩm
            </Button>

            <Modal
                title="Thêm sản phẩm"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {/* title description statusPost nameBrand totalWish category image type : color quantity price */}
                <Form>
                    <Row>
                        <Col>
                            <Form.Item label="Tên sản phẩm">
                                <Input value={product.title} />
                            </Form.Item>
                            <Form.Item label="Mô tả">
                                <Input.TextArea
                                    value={product.description}
                                    rows={5}
                                ></Input.TextArea>
                            </Form.Item>
                        </Col>

                        <Col>
                            <Form.Item label="Trạng thái">
                                {product.statusPost === "0" ? (
                                    <>
                                        <span> Đang hiện </span>
                                        <Button
                                            type="link"
                                            icon={<EyeInvisibleOutlined />}
                                            shape="round"
                                        >
                                            Ẩn sản phẩm
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <span> Đang ẩn </span>
                                        <Button
                                            type="link"
                                            icon={<EyeOutlined />}
                                            shape="round"
                                        >
                                            Hiện sản phẩm
                                        </Button>
                                    </>
                                )}
                            </Form.Item>
                            <Form.Item label="Tên hãng">
                                <Input value={product.nameBrand} />
                            </Form.Item>
                            <Form.Item label="Số lượt thích">
                                <span> {product.totalWish} </span>
                            </Form.Item>
                            <Form.Item label="Danh mục">
                                <Select value={product.category === ""}>
                                    {categories.map((category) => (
                                        <Select.Option key={category.id}>
                                            {category.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Ảnh">
                        {/* <ImgCrop rotate>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                            >
                                {fileList.length < 5 && "+ Upload"}
                            </Upload>
                        </ImgCrop> */}
                    </Form.Item>
                    <Form.Item label="Loại">
                        <Table
                            dataSource={product.type}
                            columns={columns}
                            pagination={false}
                        ></Table>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
