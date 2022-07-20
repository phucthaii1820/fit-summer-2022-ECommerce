import { Pagination, Row, Col, Breadcrumb } from "antd";
import { useState, useEffect } from "react";
import ProductCard from "@/components/product-card/ProductCard";
import React from 'react'
import { getListProducts } from "@/API/product";

const Category = ({ idCategory, nameCategory }) => {
    const [data, setData] = useState([]);
    const [lowerBound, setLowerBound] = useState(0);
    const [upperBound, setUpperBound] = useState(1);
    const [totalItems, setTotalItems] = useState(10);
    const [curPage, setCurPage] = useState("1");
    const pageSize = 20;

    useEffect(() => {
        async function fetchDataCategory(){
            try {
                const res = await getListProducts(idCategory, curPage);
                setData(res?.data[0]?.producs);
                setLowerBound(0);
                setUpperBound(pageSize);
            } catch (err) {
                console.log(err);
            }
        }
        fetchDataCategory();
    }, []);

    const handleChange = (value) => {
        if (value <= 1) {
            setLowerBound(0);
            setUpperBound(pageSize);
        } else {
            setLowerBound((value - 1) * pageSize);
            setUpperBound(value * pageSize);
        }
    };

    return (
        <div className="relative">
            <div className="container mx-auto xl:px-40">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Category</Breadcrumb.Item>
                    <Breadcrumb.Item>{nameCategory}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    {data.slice(lowerBound, upperBound).map((item, index) => (
                        <Col xl={6} lg={6} md={8} xs={12} sm={12} key={index}>
                            <div className="p-2">
                                <ProductCard item={item} />
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="p-3 grid justify-items-end">
                    <Pagination defaultCurrent={1} total={10} onChange={handleChange} pageSize={pageSize}/>
                </div>
            </div>
        </div>
    );
}

export default Category