import { useState, useEffect } from "react";
import { useParams } from "react-router";
import React from "react";

import { getListProducts } from "@/API/product";
import ProductCard from "@/components/product-card/ProductCard";

import { Pagination, Row, Col, Breadcrumb, Spin } from "antd";
import { getCategoryInfo } from "@/API/category";

import NoResult from "src/image/NoResults.svg";
import Logo from "src/image/Logo.svg";
import { LoadingOutlined } from "@ant-design/icons";

const Category = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(1);
  const [totalItems, setTotalItems] = useState(10);
  const [curPage, setCurPage] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const { idCate } = useParams();
  const pageSize = 20;

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 64,
      }}
      spin
    />
  );

  useEffect(() => {
    async function fetchCategory() {
      try {
        const res = await getCategoryInfo(idCate);
        setCategory(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCategory();
  }, [idCate]);

  useEffect(() => {
    async function fetchDataCategory() {
      try {
        setIsLoading(true);
        const res = await getListProducts(idCate, curPage);
        console.log(res);
        setData(res?.data[0]?.producs);
        setTotalItems(res?.data[2]?.totalPages * pageSize);
        setLowerBound(0);
        setUpperBound(pageSize);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDataCategory();
  }, [idCate, curPage]);

  const handleChange = (value) => {
    if (value <= 1) {
      setLowerBound(0);
      setUpperBound(pageSize);
      setCurPage(1);
    } else {
      setLowerBound((value - 1) * pageSize);
      setUpperBound(value * pageSize);
      setCurPage(value);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-screen items-center flex-col">
          <img className="h-14 w-auto mb-8" src={Logo} alt="Workflow" />
          <Spin indicator={antIcon} />
        </div>
      ) : data.length > 0 ? (
        <div className="relative">
          <div className="container mx-auto xl:px-40">
            <Breadcrumb style={{ fontSize: "1rem", marginLeft: "10px" }}>
              <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item>Danh mục</Breadcrumb.Item>
              <Breadcrumb.Item>{category.name}</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              {data.slice(lowerBound, upperBound).map((item, index) =>
                item?.statusPost === 1 ? (
                  <Col xl={6} lg={6} md={12} xs={18} sm={18} key={index}>
                    <div className="py-2">
                      <ProductCard item={item} idCate={idCate} />
                    </div>
                  </Col>
                ) : null
              )}
            </Row>
            <div className="p-3 grid justify-items-end">
              <Pagination
                defaultCurrent={1}
                total={totalItems}
                onChange={handleChange}
                pageSize={pageSize}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="container mx-auto xl:px-40">
            <Breadcrumb style={{ fontSize: "1rem", marginLeft: "10px" }}>
              <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item>Danh mục</Breadcrumb.Item>
              <Breadcrumb.Item>{category.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="flex justify-center">
              <img src={NoResult} className="w-56 h-56"></img>
              <div className="text-3xl place-self-center">
                Hiện tại chưa có sản phẩm nào!
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
