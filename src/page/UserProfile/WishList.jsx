import { addShoppingCart, getWishList, removeWishProduct } from "@/API/user";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, message, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "src/image/Logo.svg";

import userStore from "@/stores/user";
import { getProductInfo } from "@/API/product";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 64,
    }}
    spin
  />
);

const WishList = () => {
  const [changeWishList, setChangeWishList] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setCart, setLoveList } = userStore((state) => state);

  const productStatus = (item) => {
    for (let i = 0; i < item?.type.length; i++) {
      if (item?.type[i]?.quantity > 0) {
        return "Còn hàng";
      }
    }
    return "Hết hàng";
  };

  function productWish() {
    this.key = "";
    this.name = "";
    this.status = "";
    this.image = "";
  }

  const productsWish = (wishList) => {
    const data = [];

    for (let i = 0; i < wishList.length; i++) {
      if(wishList[i].statusPost === 1){
        var product = new productWish();
        product.key = wishList[i]?._id;
        product.name = wishList[i]?.title;
        product.status = productStatus(wishList[i]);
        product.image = wishList[i]?.image[0];
        data.push(product);
      }
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
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchWishList();
  }, [changeWishList]);

  const removeProduct = async (key) => {
    try {
      const res = await removeWishProduct({ product_id: key });
      setLoveList(res?.wish);
    } catch (err) {
      message.error("Hệ thống đang xử lý!");
    }
  };

  const onClickRemove = (event, key) => {
    removeProduct(key);
    setChangeWishList(true);
  };

  const index = (item) => {
    for (let i = 0; i < item?.type.length; i++) {
      if (item?.type[i]?.quantity > -1) {
        return i;
      }
    }
    return -1;
  };

  const addCart = async (key) => {
    try {
      const resProduct = await getProductInfo(key);
      const res = await addShoppingCart({
        product_id: resProduct?.data?._id,
        type_id: resProduct?.data?.type[index(resProduct?.data)]?._id,
        quantity: 1,
      });
      setCart(res?.cart);
      message.success("Thêm vào giỏ hàng thành công!");
    } catch (err) {
      message.error("Hệ thống đang xử lý! Vui lòng trở lại sau!");
    }
  };

  const onClickAddCart = (event, key) => {
    addCart(key);
  };
  
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img
            src={image}
            alt="productImg"
            className="w-16 h-16 bg-cover"
          ></img>
        ) : (
          <p>No image</p>
        ),
    },
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text, { key }) => (
        <Link to={"/product-detail/" + key}>{text}</Link>
      ),
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
              onClick={(event) => onClickAddCart(event, key)}
            >
              Thêm giỏ hàng
            </Button>
          </div>
          <button onClick={(event) => onClickRemove(event, key)}>
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
      {isLoading ? (
        <div className="flex justify-center items-center flex-col">
          <img className="h-14 w-auto mb-4" src={Logo} alt="Workflow" />
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </div>
  );
};

export default WishList;
