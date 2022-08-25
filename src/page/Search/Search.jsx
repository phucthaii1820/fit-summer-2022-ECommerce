import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import React from "react";

import ProductCard from "@/components/product-card/ProductCard";

import { Row, Col, Breadcrumb, Spin } from "antd";

import Logo from "src/image/Logo.svg";
import { LoadingOutlined } from "@ant-design/icons";
import { searchProducts } from "@/API/product";

import "./Search.css";

const Search = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 64,
      }}
      spin
    />
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await searchProducts(keyword, "1");
        setData(res?.data[0]?.producs);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchDataCategory() {
  //     try {
  //       setIsLoading(true);
  //       const res = await getListProducts(1);
  //       setData(res?.data[0]?.producs);
  //       setTotalItems(res?.data[2]?.totalPages * pageSize);
  //       setLowerBound(0);
  //       setUpperBound(pageSize);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchDataCategory();
  // }, [curPage]);

  // const handleChange = (value) => {
  //   if (value <= 1) {
  //     setLowerBound(0);
  //     setUpperBound(pageSize);
  //   } else {
  //     setLowerBound((value - 1) * pageSize);
  //     setUpperBound(value * pageSize);
  //   }
  // };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-screen items-center flex-col">
          <img className="h-14 w-auto mb-8" src={Logo} alt="Workflow" />
          <Spin indicator={antIcon} />;
        </div>
      ) : (
        <div className="relative">
          <div className="container mx-auto xl:px-40">
            <Breadcrumb style={{ fontSize: "1rem", marginLeft: "10px" }}>
              <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
              <Breadcrumb.Item>Tìm kiếm</Breadcrumb.Item>
              <Breadcrumb.Item>{keyword}</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              {data.map((item, index) =>
                item?.statusPost === 1 ? (
                  <Col key={index} xl={6} lg={6} md={12} xs={18} sm={18}>
                    <div className="py-2">
                      <ProductCard item={item} idCate={item.category} />
                    </div>
                  </Col>
                ) : null
              )}
            </Row>
            {/* <div className="p-3 grid justify-items-end">
              <Pagination
                defaultCurrent={1}
                total={totalItems}
                onChange={handleChange}
                pageSize={pageSize}
              />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
