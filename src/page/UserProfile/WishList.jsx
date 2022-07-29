import { getProductInfo } from "@/API/product";
import { getWishList, removeWishProduct } from "@/API/user";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WishList = () => {
  const [changeWishList, setChangeWishList] = useState(true);
  const [data, setData] = useState([]);

  const productStatus = (item) => {
    for (let i = 0; i < item?.type.length; i++) {
      if (item?.type[i]?.quantity > -1) {
        return "Còn hàng";
      }
    }
    return "Hết hàng";
  };

  function productWish() {
    this.key = "";
    this.name = "";
    this.status = "";
  }

  const productsWish = (wishList) => {
    const data = [];

    for (let i = 0; i < wishList.length; i++) {
      var product = new productWish();
      product.key = wishList[i]?._id;
      product.name = wishList[i]?.title;
      product.status = productStatus(wishList[i]);
      data.push(product);
    }
    return data;
  };

  useEffect(() => {
    async function fetchWishList() {
      try {
        const res = await getWishList();
        setData(productsWish(res?.wish));
        setChangeWishList(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchWishList();
  }, [changeWishList]);

  const removeProduct = async (key) => {
    try {
      const res = await removeWishProduct({ product_id: key });
    } catch (err) {
      message.error("Hệ thống đang xử lý!");
    }
  };

  const onClickRemove = (e) => {
    console.log(e.target.vaue);
    // removeProduct(e);
    // setChangeWishList(true);
  };

  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text) => <div className="text-yellow-light">{text}</div>,
    },
    {
      title: "",
      key: "key",
      dataIndex: "key",
      render: (_, { key }) => (
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-col space-y-2 w-full">
            <Button
              style={{
                borderRadius: "25px",
              }}
            >
              <Link to={"/product-detail/" + key}>Xem chi tiết</Link>
            </Button>
            <Button
              style={{
                borderRadius: "25px",
              }}
              type="primary"
            >
              Thêm giỏ hàng
            </Button>
          </div>
          <button onClick={onClickRemove} value={key}>
            <DeleteOutlined
              style={{
                color: "red",
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default WishList;
