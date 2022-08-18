import { Table, Image, InputNumber, Button, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { getProductInfo } from "@/API/product";
import {
  addShoppingCart,
  getProfileUser,
  removeShoppingCart,
} from "@/API/user";
import { Link } from "react-router-dom";

import userStore from "@/stores/user";

const { Option } = Select;

export default function ShoppingCartList({}) {
  const { user, setCart } = userStore((state) => state);
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    const fetchProductInfo = async () => {
      await Promise.all(
        user?.cart?.map(async (item) => {
          const res = await getProductInfo(item.product_id);
          setProductInfo((prev) => [
            ...prev,
            {
              ...res?.data,
              typeSelect: item.type_id,
              quantitySelect: item.quantity,
              cart_id: item._id,
            },
          ]);
        })
      );
    };
    setProductInfo([]);
    fetchProductInfo();
  }, [user]);

  const handleChangeColor = async (product_id, type_id, quantity, cart_id) => {
    try {
      await removeShoppingCart({ cart_id });
      const res = await addShoppingCart({ product_id, type_id, quantity });
      setCart(res.cart);
      message.success("Cập nhật thành công");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeQuantity = async (product_id, type_id, quantity) => {
    try {
      const res = await addShoppingCart({ product_id, type_id, quantity });
      setCart(res.cart);
      message.success("Cập nhật thành công");
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (cart_id) => {
    try {
      console.log(cart_id);
      const res = await removeShoppingCart({ cart_id });
      setCart(res.cart);
      message.success("Xóa thành công");
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: "Hình Ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img
            src={image[0]}
            alt="productImg"
            className="w-16 h-16 bg-cover"
          ></img>
        ) : (
          <p>No image</p>
        ),
    },
    {
      title: "Sản Phẩm",
      dataIndex: "title",
      key: "name",
      render: (name, { productKey }) => (
        <Link to={"/product-detail/" + productKey}>{name}</Link>
      ),
    },
    {
      title: "Màu Sắc",
      dataIndex: "typeSelect",
      key: "typeSelect",
      render: (typeSelect, { type, quantitySelect, _id, cart_id }) => (
        <Select
          width={50}
          defaultValue={typeSelect}
          onChange={(e) => handleChangeColor(_id, e, quantitySelect, cart_id)}
        >
          {type.map((val, index) => (
            <Option key={index} value={val._id}>
              <div
                className="h-4 w-4"
                style={{ backgroundColor: val.color, marginTop: "6px" }}
              ></div>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Số Lượng",
      dataIndex: "quantitySelect",
      key: "quantitySelect",
      render: (quantitySelect, { typeSelect, type, _id }) =>
        type?.find((item) => item._id === typeSelect) ? (
          <InputNumber
            min={1}
            max={type?.find((item) => item._id === typeSelect)?.quantity}
            value={quantitySelect}
            width={50}
            onChange={(e) => {
              handleChangeQuantity(_id, typeSelect, e - quantitySelect);
            }}
          />
        ) : null,
    },
    {
      title: "Giá tiền",
      dataIndex: "typeSelect",
      key: "typeSelect",
      render: (typeSelect, { type }) => (
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(type?.find((item) => item._id === typeSelect)?.price)}
        </span>
      ),
    },
    {
      title: "Thành tiền",
      dataIndex: "typeSelect",
      key: "typeSelect",
      render: (typeSelect, { type, quantitySelect }) => (
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(
            type?.find((item) => item._id === typeSelect)?.price *
              quantitySelect
          )}
        </span>
      ),
    },
    {
      title: "Xóa",
      dataIndex: "cart_id",
      render: (cart_id) => (
        <Button
          type="danger"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => handleRemove(cart_id)}
        />
      ),
    },
  ];

  return (
    <div className="w-auto">
      <Table
        columns={columns}
        dataSource={productInfo}
        pagination={false}
        scroll={{ y: 200 }}
      />
      {/* <div className="flex mt-7">
        <span className="mr-2 font-bold text-base">Tổng Tiền: </span>
        <span className="text-red-500 text-base">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(countTotalPrice())}
        </span>
      </div> */}
    </div>
  );
}
