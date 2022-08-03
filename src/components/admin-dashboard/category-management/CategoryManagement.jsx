import React, { useState, useEffect } from "react";
import { getAllCategories } from "@/API/category";
import { Space, Button, Table } from "antd";

export default function CategoryManagement() {
    // Get all categories
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const resCategories = await getAllCategories();
                setCategories(resCategories);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchCategories();
    }, [categories]);

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
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        onClick={() => {
                            console.log("edit", record);
                        }}
                    >
                        Sửa
                    </Button>
                    <Button
                        type="danger"
                        onClick={() => {
                            console.log("delete", record);
                        }}
                    >
                        Xóa{" "}
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
                <Space size={[8, 16]} wrap>
                    <Table
                        loading={loading}
                        columns={columns}
                        dataSource={categories}
                    />
                    <Button>Add Category</Button>
                </Space>
            )}
        </>
    );
}
