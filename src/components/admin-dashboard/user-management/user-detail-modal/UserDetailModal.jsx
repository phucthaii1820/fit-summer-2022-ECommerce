import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio, DatePicker } from "antd";
import { FolderOpenOutlined, DeleteOutlined } from "@ant-design/icons";

export default function UserDetailModal(props) {
    const user = props.user;

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        console.log(user);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDeleteUser = () => {
        setLoading(true);
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
                onCancel={handleCancel}
                footer={[
                    <Button
                        type="danger"
                        loading={loading}
                        icon={<DeleteOutlined />}
                        onClick={handleDeleteUser}
                    >
                        Xóa tài khoản
                    </Button>,
                ]}
            >
                {/* phone email fullname gender address province district ward cmnd role bio dob createAt */}
                <Form disabled={true}>
                    <Form.Item label={"Họ và tên"}>
                        <Input value={user.fullname} />
                    </Form.Item>
                    <Form.Item label={"Ngày sinh"}>
                        <DatePicker value={user.dob} />
                    </Form.Item>
                    <Form.Item label={"Số điện thoại"}>
                        <Input value={user.phone} />
                    </Form.Item>
                    <Form.Item label={"Email"}>
                        <Input value={user.email} />
                    </Form.Item>
                    <Form.Item label={"Giới tính"}>
                        <Radio.Group value={user.gender} />
                    </Form.Item>
                    <Form.Item label={"Số nhà + Tên đường"}>
                        <Input value={user.address} />
                    </Form.Item>
                    <Form.Item label={"Tỉnh/Thành phố"}>
                        <Input value={user.province} />
                    </Form.Item>
                    <Form.Item label={"Quận/Huyện"}>
                        <Input value={user.district} />
                    </Form.Item>
                    <Form.Item label={"Xã/Phường"}>
                        <Input value={user.ward} />
                    </Form.Item>
                    <Form.Item label={"Số CMND"}>
                        <Input value={user.cmnd} />
                    </Form.Item>
                    <Form.Item label={"Vai trò"}>
                        <Input value={user.role} />
                    </Form.Item>
                    <Form.Item label={"Mô tả"}>
                        <Input value={user.bio} />
                    </Form.Item>
                    <Form.Item label={"Ngày tạo"}>
                        <Input value={user.createAt} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
