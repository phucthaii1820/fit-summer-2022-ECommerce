import React, { useState } from "react";
import {
    Button,
    Modal,
    Form,
    Input,
    Radio,
    DatePicker,
    Select,
    Table,
} from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function UserDetailModal(props) {
    const product = props.product;

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [disableForm, setDisableForm] = useState(true);

    const showModal = () => {
        console.log(product);
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
    };

    const handleDeleteUser = () => {
        setLoading(true);
    };

    const columns = [
        {
            title: "Màu sắc",
            dataIndex: "color",
            key: "color",
            ellipsis: true,
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
            ellipsis: true,
        },
        {
            title: "Đơn giá",
            dataIndex: "price",
            key: "price",
            ellipsis: true,
        },
    ];

    return (
        <>
            <Button
                type="primary"
                onClick={showModal}
                shape="circle"
                icon={<EyeOutlined />}
            ></Button>
            <Modal
                visible={visible}
                title="Thông tin chi tiết"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button
                        key="back"
                        icon={<EditOutlined />}
                        onClick={handleCancel}
                    >
                        Sửa thông tin sản phẩm
                    </Button>,

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
                <Form disabled={disableForm}>
                    <Form.Item label="Tên sản phẩm">
                        <Input value={product.title} disabled />
                    </Form.Item>
                    <Form.Item label="Mô tả">
                        <Input.TextArea
                            value={product.description}
                        ></Input.TextArea>
                    </Form.Item>
                    <Form.Item label="Trạng thái"></Form.Item>
                    <Form.Item label="Tên hãng">
                        <Input value={product.nameBrand} />
                    </Form.Item>
                    <Form.Item label="Số lượt thích">
                        <Input value={product.totalWish} disabled />
                    </Form.Item>
                    <Form.Item label="Danh mục">
                        <Select></Select>
                    </Form.Item>
                    <Form.Item label="Ảnh">
                        <Input value={product.image} />
                    </Form.Item>
                    <Form.Item label="Loại">
                        <Table
                            dauaSource={product.type}
                            columns={columns}
                        ></Table>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
