import React, { useState, useEffect } from "react";
import { getAllCategories } from "@/API/category";
import { Space, Button, Table, Modal, Input, message } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { deleteCategory, addCategory, updateCategory } from "@/API/category";

export default function CategoryManagement() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);

    const [isDelete, setIsDelete] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            try {
                const resCategories = await getAllCategories();
                setCategories(resCategories);
                setLoading(false);
            } catch (err) {
                console.log(err);
                message.error(toString(err.message));
            }
        }
        fetchData();
    }, [isAdd, isDelete, isUpdate]);

    const handleDeleteCategory = async (categoryId) => {
        setLoading(true);
        const res = await deleteCategory(categoryId);

        // if the length of the res is equal to the length of the categories minus 1
        if (res.length === categories.length - 1) {
            // if (res !== undefined) {
            setLoading(false);
            setConfirmVisible(false);
            setIsDelete(!isDelete);
        }
    };

    const onClickDeleteCategory = (category) => {
        setConfirmVisible(true);
        Modal.confirm({
            visible: confirmVisible,
            title: "Bạn có chắc chắn muốn xóa danh mục này?",
            okText: "Có",
            cancelText: "Không",
            onOk: () => {
                handleDeleteCategory(category._id);
            },
            onCancel: () => {
                setConfirmVisible(false);
            },
        });
    };

    const handleAddCategory = async (categoryName) => {
        setLoading(true);
        const res = await addCategory(categoryName);

        // if the length of the res is equal to the length of the categories plus 1
        if (res.length === categories.length + 1) {
            // if (res !== undefined) {
            setLoading(false);
            setInfoVisible(false);
            setIsAdd(!isAdd);
        }
    };

    const handleUpdateCategory = async (categoryId, categoryName) => {
        setLoading(true);
        const res = await updateCategory(categoryId, categoryName);

        if (res !== undefined) {
            setLoading(false);
            setInfoVisible(false);
            setIsUpdate(!isUpdate);
        }
    };

    const onClickShowModalCategoryName = (categoryId, modalType) => {
        let categoryName = "";
        Modal.confirm({
            visible: infoVisible,
            title: "Thêm danh mục",
            content: (
                <Input
                    placeholder={
                        modalType === "add"
                            ? "Nhập tên danh mục"
                            : "Nhập tên danh mục mới"
                    }
                    maxLength={20}
                    onChange={(e) => {
                        categoryName = e.target.value;
                    }}
                />
            ),
            okText: modalType === "add" ? "Thêm" : "Sửa",
            cancelText: "Hủy",
            onOk: () => {
                modalType === "add"
                    ? handleAddCategory(categoryName)
                    : handleUpdateCategory(categoryId, categoryName);
            },
            onCancel: () => {
                setInfoVisible(false);
            },
        });
    };

    const columns = [
        {
            title: "Tên danh mục",
            dataIndex: "name",
            key: "name",
            ellipsis: true,
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action",
            ellipsis: true,
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        onClick={() => {
                            onClickShowModalCategoryName(record._id, "update");
                        }}
                    >
                        Sửa
                    </Button>
                    <Button
                        type="danger"
                        onClick={() => {
                            onClickDeleteCategory(record);
                        }}
                    >
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Space direction="vertical">
                        <Table columns={columns} dataSource={categories} />
                        <Button
                            icon={<PlusCircleOutlined />}
                            onClick={() => {
                                onClickShowModalCategoryName(null, "add");
                            }}
                        >
                            Thêm danh mục
                        </Button>
                    </Space>
                </>
            )}
        </>
    );
}
