import { Button, Space, Table } from "antd";
import React, { useState, useEffect } from "react";
import { getAllCategories } from "@/API/category";
import { getAllProducts } from "@/API/product";
import ProductDetailModal from "./product-detail-modal/ProductDetailModal";

export default function ProductManagement() {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setLoading(true);

        async function fetchCategories() {
            try {
                const resCategories = await getAllCategories();
                setCategories(resCategories);
            } catch (err) {
                console.log(err);
            }
        }

        async function fetchProducts() {
            try {
                const resProducts = await getAllProducts();
                setProductList(resProducts.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchCategories();
        fetchProducts();
        setLoading(false);
    }, [categories, productList]);

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
            title: "Tên sản phẩm",
            dataIndex: "title",
            key: "title",
            ellipsis: true,
        },

        {
            title: "Tên hãng",
            dataIndex: "nameBrand",
            key: "nameBrand",
            ellipsis: true,
        },
        {
            title: "Số lượt thích",
            dataIndex: "totalWish",
            key: "totalWish",
            ellipsis: true,
        },
        {
            title: "Danh mục",
            dataIndex: "category",
            key: "category",
            ellipsis: true,
            render: (_, record) => (
                // Map category id to category name
                <div>
                    {
                        categories.find(
                            (category) => category.id === record.categoryId
                        ).name
                    }
                </div>
            ),
        },
        {
            title: "Thao tác",
            key: "action",
            render: (_, record) => (
                <ProductDetailModal product={record}></ProductDetailModal>
            ),
        },
    ];

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Space
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        <Button onClick={clearFilters}>Xóa bộ lọc</Button>
                        <Button onClick={clearAll}>
                            Xóa sắp xếp và bộ lọc
                        </Button>
                    </Space>

                    <Table
                        columns={columns}
                        dataSource={productList}
                        onChange={handleChange}
                    />
                </>
            )}
        </>
    );
}
