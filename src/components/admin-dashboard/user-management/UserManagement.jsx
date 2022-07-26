import { Button, Space, Table } from "antd";
import React, { useState } from "react";

export default function UserManagement(props) {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    // useEffect(() => {

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
    const data = [
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 1",
            email: "email@gmai.com",
            CreatedAt: "2020-01-01",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-01",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-02",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-03",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-04",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-05",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-06",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-07",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-08",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-09",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-10",
            role: "admin",
        },
        {
            phone: "0989898989",
            fullname: "Nguyễn Văn A 2",
            email: "email@gmai.com",
            CreatedAt: "2020-01-01",
            role: "admin",
        },
    ];

    const columns = [
        {
            title: "Điện thoại",
            dataIndex: "phone",
            key: "phone",
            ellipsis: true,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
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
            dataIndex: "CreatedAt",
            key: "CreatedAt",
            ellipsis: true,
            sorter: (a, b) => a.CreatedAt - b.CreatedAt,
            sortOrder:
                sortedInfo.columnKey === "CreatedAt" ? sortedInfo.order : null,
        },
        {
            title: "Vai trò",
            dataIndex: "role",
            key: "role",
            filters: [
                {
                    text: "admin",
                    value: 1,
                },
                {
                    text: "customer",
                    value: 0,
                },
            ],
            filteredValue: filteredInfo.role || null,
            onFilter: (value, record) => record.value === value,
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

            <Table
                columns={columns}
                dataSource={data}
                onChange={handleChange}
            />
        </>
    );
}
