import { Button, Space, Table } from "antd";
import React, { useState, useEffect } from "react";
import { getAllCategories } from "@/API/category";
import { getListProducts } from "@/API/product";

export default function ProductManagement() {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [productList, setProductList] = useState([]);

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
    const data = [];

    const columns = [];

    useEffect(() => {
        async function fetchCategories() {
            try {
                const resCategories = await getAllCategories();
                setCategories(resCategories);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchCategories();

        async function fetchProductList() {
            try {
                const resProductList = await getListProducts();
                setProductList(resProductList);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProductList();
    }, [categories]);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Space size={[8, 16]} wrap>
                    {categories.map((categories) => (
                        <Button>{categories.name}</Button>
                    ))}
                    <Button>Add Category</Button>
                </Space>
            )}
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
