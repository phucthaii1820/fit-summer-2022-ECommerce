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
} from "@ant-design/icons";

export default function UserDetailModal(props) {
    const product = props.product;
    const categories = props.categories;

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [notEditable, setNotEditable] = useState(true);
    const [fileList, setFileList] = useState(product.image);

    const showModal = () => {
        console.log(product.type);
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
        setNotEditable(true);
    };

    const handleDeleteUser = () => {
        setLoading(true);
    };

    const handleEditProduct = () => {
        setNotEditable(false);
    };

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

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={showModal}
                shape="round"
                icon={<FolderOpenOutlined />}
            >
                Chi tiết
            </Button>
            <Modal
                visible={visible}
                title="Thông tin chi tiết"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <>
                        {notEditable === true ? (
                            <Button
                                key="edit"
                                icon={<EditOutlined />}
                                onClick={handleEditProduct}
                            >
                                Sửa thông tin sản phẩm
                            </Button>
                        ) : (
                            <>
                                <Button
                                    key="submit"
                                    icon={<CheckCircleOutlined />}
                                    onClick={handleEditProduct}
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
                            </>
                        )}
                    </>,
                    <Button
                        type="danger"
                        loading={loading}
                        icon={<DeleteOutlined />}
                        onClick={handleDeleteUser}
                    >
                        Xóa sản phẩm
                    </Button>,
                ]}
            >
                {/* title description statusPost nameBrand totalWish category image type : color quantity price */}
                <Form disabled={notEditable}>
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
                                <Select
                                    value={
                                        categories.find(
                                            (category) =>
                                                category.id ===
                                                product.categoryId
                                        ).name
                                    }
                                >
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
                        {notEditable === true ? (
                            <>
                                {product.image.map((image) => (
                                    <Image
                                        width={100}
                                        height={100}
                                        src={image[0]}
                                        fallback="data:image/png;base64,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"
                                    />
                                ))}
                            </>
                        ) : (
                            <ImgCrop rotate>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                >
                                    {fileList.length < 5 && "+ Upload"}
                                </Upload>
                            </ImgCrop>
                        )}
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
