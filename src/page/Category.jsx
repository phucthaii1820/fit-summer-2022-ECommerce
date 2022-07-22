import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import React from 'react'

import { getListProducts } from "@/API/product";
import ProductCard from "@/components/product-card/ProductCard";

import { Pagination, Row, Col, Breadcrumb } from "antd";
import { getCategoryInfo } from "@/API/category";

const Category = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [lowerBound, setLowerBound] = useState(0);
    const [upperBound, setUpperBound] = useState(1);
    const [totalItems, setTotalItems] = useState(10);
    const [curPage, setCurPage] = useState("1");

    const { idCate } = useParams();
    const pageSize = 20;

    useEffect(() => {
        async function fetchCategory(){
            try {
                const res = await getCategoryInfo(idCate);
                setCategory(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchCategory();
    }, []);

    useEffect(() => {
        async function fetchDataCategory(){
            try {
                const res = await getListProducts(idCate, curPage);
                setData(res?.data[0]?.producs);
                setTotalItems(res?.data[2]?.totalPages * pageSize);
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
                    <Breadcrumb.Item>{category.name}</Breadcrumb.Item>
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
                    <Pagination defaultCurrent={1} total={totalItems} onChange={handleChange} pageSize={pageSize}/>
                </div>
            </div>
        </div>
    );
}

export default Category