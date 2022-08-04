import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import UserDetailModal from "./user-detail-modal/UserDetailModal";
import { getAllUsers } from "@/API/user";

export default function UserManagement() {
    const [loading, setLoading] = useState(true);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const resUsers = await getAllUsers();
                setUsers(resUsers.users);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
        // }, [users]);
    }, []);

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const columns = [
        {
            title: "Điện thoại",
            dataIndex: "phone",
            key: "phone",
            ellipsis: true,
        },

        {
            title: "Họ tên",
            dataIndex: "fullname",
            key: "fullname",
            ellipsis: true,
        },

        {
            title: "Ngày tạo",
            dataIndex: "createAt",
            key: "createAt",
            ellipsis: true,
            // sorter: (a, b) => new Date(a.createAt) - new Date(b.createAt),
            sorter: (a, b) =>
                new Date(a.createAt).getTime() - new Date(b.createAt).getTime(),
        },

        {
            title: "Vai trò",
            dataIndex: "role",
            key: "role",
            filters: [
                {
                    text: "admin",
                    value: 1000,
                },
                {
                    text: "customer",
                    value: 1,
                },
            ],
            filteredValue: filteredInfo.role || null,
            onFilter: (value, record) => record.role === value,
            render: (_, { role }) => {
                if (role === 1000) {
                    return (
                        <Tag color={"gold"} key={role}>
                            Admin
                        </Tag>
                    );
                } else {
                    return (
                        <Tag color={"blue"} key={role}>
                            Customer
                        </Tag>
                    );
                }
            },
        },
        {
            title: "Thao tác",
            key: "action",
            render: (_, record) => (
                <UserDetailModal user={record}></UserDetailModal>
            ),
        },
    ];

    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={clearFilters}>Xóa bộ lọc</Button>
                <Button onClick={clearAll}>Xóa sắp xếp và bộ lọc</Button>
            </Space>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={users}
                    onChange={handleChange}
                />
            )}
        </>
    );
}
