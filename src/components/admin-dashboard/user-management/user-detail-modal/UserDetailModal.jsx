import React, { useEffect, useState } from "react";
import { Button, Modal, Tag, Descriptions, message } from "antd";
import { FolderOpenOutlined, DeleteOutlined } from "@ant-design/icons";

import { deleteUser } from "@/API/user";

import moment from "moment";

export default function UserDetailModal(props) {
    const user = props.user;

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDeleteUser = async () => {
        setLoading(true);
        // Call Api to delete User
        const res = await deleteUser(user._id);
        if (res.message === "Delete user success!") {
            setLoading(false);
            setConfirmVisible(false);
            setVisible(false);
            console.log("delete user");
            props.deleteUser();
        }
    };

    const OnClickDeleteUser = () => {
        // Check if the current user is the user we want to delete then show an error message
        const currentUser = JSON.parse(localStorage.getItem("user"));

        if (user._id === currentUser.state.user._id) {
            message.error("Bạn không thể tự xóa bản thân!");
            return;
        }

        setConfirmVisible(true);
        Modal.confirm({
            visible: confirmVisible,
            title: "Bạn có chắc chắn muốn xóa người dùng này?",
            // icon: <DeleteOutlined />,
            okText: "Có",
            cancelText: "Không",
            onOk: () => {
                handleDeleteUser();
            },
            onCancel: () => {
                setConfirmVisible(false);
            },
            loading: loading,
        });
    };

    return (
        <>
            <Button
                type="primary"
                onClick={() => {
                    showModal();
                }}
                shape="round"
                icon={<FolderOpenOutlined />}
            >
                Chi tiết
            </Button>
            <Modal
                visible={visible}
                title="Thông tin chi tiết"
                onCancel={() => {
                    handleCancel();
                }}
                footer={[
                    <Button
                        type="danger"
                        loading={loading}
                        icon={<DeleteOutlined />}
                        onClick={() => {
                            OnClickDeleteUser();
                        }}
                    >
                        Xóa tài khoản
                    </Button>,
                ]}
            >
                <Descriptions title="Thông tin chi tiết" column={1}>
                    <Descriptions.Item label="Họ và tên">
                        {user.fullname}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">
                        {user.dob}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">
                        {user.phone}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                        {user.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="Giới tính">
                        {user.gender}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số nhà + Tên đường">
                        {user.address}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tỉnh/Thành phố">
                        {user.province}
                    </Descriptions.Item>
                    <Descriptions.Item label="Quận/Huyện">
                        {user.district}
                    </Descriptions.Item>
                    <Descriptions.Item label="Xã/Phường">
                        {user.ward}
                    </Descriptions.Item>
                    <Descriptions.Item label="Số CMND">
                        {user.cmnd}
                    </Descriptions.Item>
                    <Descriptions.Item label="Vai trò">
                        {user.role === 1000 ? (
                            <Tag color={"gold"} key={user.role}>
                                Admin
                            </Tag>
                        ) : (
                            <Tag color={"blue"} key={user.role}>
                                User
                            </Tag>
                        )}
                    </Descriptions.Item>
                    <Descriptions.Item label="Mô tả">
                        {user.bio}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày tạo">
                        {/* Format createAt into DD/MM/YYYY HH:MM:SS */}
                        {moment(user.createAt).format("DD/MM/YYYY HH:MM:SS")}
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </>
    );
}
