import { Button, Space, Table, Image, message } from "antd";
import React, { useState, useEffect } from "react";
import { getAllCategories } from "@/API/category";
import { addProduct, getAllProducts, updateProduct } from "@/API/product";
import ProductDetailModal from "./product-detail-modal/ProductDetailModal";
import AddProductModal from "./add-product-modal/AddProductModal";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "src/components/admin-dashboard/AntTable.css"

export default function ProductManagement() {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);

  const [updateProduct, setUpdateProduct] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const resCategories = await getAllCategories();
        const resProducts = await getAllProducts();
        setCategories(resCategories);
        setProductList(resProducts.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        message.error(toString(err.message));
      }
    }

    fetchData();
  }, [addProduct, updateProduct, deleteProduct]);

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
      render: (_, { _id, title }) => (
        <Link to={`/product-detail/${_id}`}>{title}</Link>
      ),
    },

    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      ellipsis: true,
      render: (image) => (
        <Image
          width={100}
          height={100}
          src={image[0]}
          fallback="data:image/png;base64,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"
        />
      ),
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
          {categories.find((category) => category._id === record.category).name}
        </div>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <ProductDetailModal
          product={record}
          categories={categories}
          updateProduct={() => {
            setUpdateProduct(!updateProduct);
          }}
          deleteProduct={() => {
            setDeleteProduct(!deleteProduct);
          }}
        ></ProductDetailModal>
      ),
    },
  ];

  const expandedRowRender = (product) => {
    // console.log(product);
    const columns = [
      {
        title: "Màu sắc",
        dataIndex: "color",
        key: "color",
        ellipsis: true,
        render: (color) => (
          <div className="h-4 w-4" style={{ backgroundColor: color }}></div>
        ),
      },
      {
        title: "Chi nhánh",
        dataIndex: "store_id",
        key: "store_id",
        ellipsis: true,
      },
      {
        title: "Đơn giá",
        dataIndex: "price",
        key: "price",
        ellipsis: true,
      },
      {
        title: "Số lượng tồn",
        dataIndex: "quantity",
        key: "quantity",
        ellipsis: true,
      },
    ];

    const product_details = product.type;

    return (
      <Table
        columns={columns}
        dataSource={product_details}
        pagination={false}
      />
    );
  };

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
            <Button onClick={clearAll}>Xóa sắp xếp và bộ lọc</Button>
            <AddProductModal
              categories={categories}
              addProduct={() => {
                setAddProduct(!addProduct);
              }}
            />
          </Space>

          <Table
            columns={columns}
            dataSource={productList}
            onChange={handleChange}
            rowKey={(record) => record._id}
            expandable={{
              // expandedRowRender: (record) =>
              // expandedRowRender(record),
              expandedRowRender,
              rowExpandable: (record) => record.type.length > 0,
              // defaultExpandedRowKeys: ["0"],
            }}
          />
        </>
      )}
    </>
  );
}
