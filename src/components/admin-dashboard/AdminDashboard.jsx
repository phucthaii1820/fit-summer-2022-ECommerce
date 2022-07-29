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

            {/* <UserManagement
                filteredInfo={filteredInfo}
                sortedInfo={sortedInfo}
            ></UserManagement> */}

            <Table></Table>
        </>
    );
}
