import { Button, message, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import UserDetailModal from "./user-detail-modal/UserDetailModal";
import { getAllUsers } from "@/API/user";
import "src/components/admin-dashboard/AntTable.css";
import "./UserManagement.css";

export default function UserManagement() {
    const [loading, setLoading] = useState(true);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [users, setUsers] = useState([]);

    const [deleteUser, setDeleteUser] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const resUsers = await getAllUsers();
                setUsers(resUsers.users);
                setLoading(false);
            } catch (err) {
                console.log(err);
                message.error(toString(err.message));
            }
        }
        fetchData();
    }, [deleteUser]);

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
            sorter: (a, b) =>
                new Date(a.createAt).getTime() - new Date(b.createAt).getTime(),

            sortOrder:
                sortedInfo.columnKey === "createAt" ? sortedInfo.order : null,
        },

        {
            title: "Vai trò",
            dataIndex: "role",
            key: "role",
            filters: [
                {
                    text: "Admin",
                    value: 1000,
                },
                {
                    text: "Customer",
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
                <UserDetailModal
                    user={record}
                    deleteUser={() => {
                        setDeleteUser(!deleteUser);
                    }}
                ></UserDetailModal>
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
