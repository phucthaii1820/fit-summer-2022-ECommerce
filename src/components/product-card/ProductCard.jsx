import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  addShoppingCart,
  addWishProduct,
  getProfileUser,
  removeWishProduct,
} from "@/API/user";

import { Card, message } from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  HeartFilled,
} from "@ant-design/icons";

export default function ProductCard({ item, fetchProductsCard }) {
  const [isWish, setIsWish] = useState(false);
  const [userData, setUserData] = useState({});

  const index = (item) => {
    for (let i = 0; i < item?.type.length; i++) {
      if (item?.type[i]?.quantity > -1) {
        return i;
      }
    }
    return -1;
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const resProfile = await getProfileUser();
        setUserData(resProfile?.user_data);
        if (
          resProfile?.user_data?.wish.some(
            (wish) => wish.product_id === item?._id
          )
        ) {
          setIsWish(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, []);

  const wishProduct = async () => {
    try {
      if (Object.entries(userData).length !== 0) {
        if (isWish) {
          const res = await removeWishProduct({ product_id: item?._id });
          setIsWish(false);
        } else {
          const res = await addWishProduct({ product_id: item?._id });
          setIsWish(true);
        }
        fetchProductsCard();
      }
      else{
        message.error("Vui lòng đăng nhập để thực hiện chức năng!");
      }
    } catch (err) {
      message.error("Hệ thống đang xử lý! Vui lòng trở lại sau!");
    }
  };

  const onClickWish = () => {
    wishProduct();
  };

  const addCart = async () => {
    try {
      if (Object.entries(userData).length !== 0) {
        const res = await addShoppingCart({product_id: item?._id, type_id: item?.type[index(item)]?._id, quantity: 1})
      }
      else{
        message.error("Vui lòng đăng nhập để thực hiện chức năng!");
      }
    } catch (err) {
      message.error("Hệ thống đang xử lý! Vui lòng trở lại sau!");
    }
  };

  const onClickAddCart = () => {
    addCart();
  };
  return (
    <div className="">
      {item ? (
        <Card
          hoverable
          size="default"
          style={{
            width: 288,
            borderRadius: "10px",
          }}
          cover={
            <div className="">
              <div className="relative w-full h-56">
                {/* Discount */}
                {/* <div className="absolute top-2 right-3 ml-4 inline-flex items-center leading-sm uppercase px-2 py-1 bg-yellow-light rounded-lg">
                                        <div className="text-sm text-white">
                                            -{item.discount_percent}
                                        </div>
                                    </div> */}
                {/* Product Img */}
                <div className="text-center p-4">
                  <Link to={"/product-detail/" + item?._id}>
                    <img
                      className="object-cover w-full h-56 object-cover"
                      alt="example"
                      src={item?.image[0]}
                    />
                  </Link>
                </div>

                {/* Heart count  */}
                {!isWish ? (
                  <div className="absolute bottom-0 right-6 inline-flex items-center leading-sm uppercase px-2 py-1 rounded-lg bg-white bg-opacity-50 border-none border-gray-extra_dark">
                    <HeartOutlined
                      style={{
                        verticalAlign: "middle",
                        color: "#797979",
                      }}
                      onClick={onClickWish}
                    ></HeartOutlined>
                    <div className="text-sm text-gray-extra_dark pl-1">
                      {item?.totalWish}
                    </div>
                  </div>
                ) : (
                  <div className="absolute bottom-0 right-6 inline-flex items-center leading-sm uppercase px-2 py-1 rounded-lg bg-white bg-opacity-50 border-none border-gray-extra_dark">
                    <HeartFilled
                      style={{
                        verticalAlign: "middle",
                        color: "#F5B301",
                      }}
                      onClick={onClickWish}
                    ></HeartFilled>
                    <div className="text-sm text-gray-extra_dark pl-1">
                      {item?.totalWish}
                    </div>
                  </div>
                )}
              </div>
            </div>
          }
        >
          <div>
            <Link to={"/product-detail/" + item?._id}>
              <p className="text-left uppercase mt-2 mb-4 text-base font-bold truncate">
                {item?.title}
              </p>
            </Link>
            <div className="relative flex">
              <Link to={"/product-detail/" + item?._id}>
                <div>
                  {/* <p className="line-through text-gray-dark">
                                {" "}
                                {item.original_price} VNĐ{" "}
                            </p> */}

                  {index(item) !== -1 ? (
                    <p className="font-bold mb-1 text-red-500">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item?.type[index(item)]?.price)}
                    </p>
                  ) : (
                    <p className="font-bold mb-1 text-red-500">Hết hàng</p>
                  )}
                </div>
              </Link>
              {/* Add to card button  */}
              <button
                className="absolute bottom-0 right-0 inline-flex items-center leading-sm px-2 py-1 border border-solid rounded-lg border-gray-extra_dark hover:border-yellow-light"
                onClick={onClickAddCart}
              >
                <ShoppingCartOutlined
                  style={{
                    verticalAlign: "middle",
                    color: "#797979",
                  }}
                ></ShoppingCartOutlined>
                <div className="text-sm text-gray-extra_dark pl-1">Thêm</div>
              </button>
            </div>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
