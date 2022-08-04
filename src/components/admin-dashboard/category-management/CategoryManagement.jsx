import React, { useState, useEffect } from "react";
import { getAllCategories } from "@/API/category";
import { Space, Button, Table } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function CategoryManagement() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            try {
                const resCategories = await getAllCategories();
                setCategories(resCategories);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

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
                <Space>
                    <Table columns={columns} dataSource={categories} />
                    <Button icon={PlusCircleOutlined}>Thêm danh mục</Button>
                </Space>
            )}
        </>
    );
}
