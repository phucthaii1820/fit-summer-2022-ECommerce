import React from "react";
import { Link } from "react-router-dom";

const CardProductOder = ({ productInfo }) => {
  return (
    <div className="flex p-2 space-x-2 flex items-center text-black">
      <div className="h-16 w-16">
        <img src={productInfo?.product?.idProduct?.image[0]}></img>
      </div>
      <div>
        <div className="font-semibold text-base">
          <Link to={"/product-detail/" + productInfo?.product?.idProduct?._id}>
            {productInfo?.product?.idProduct?.title}
          </Link>
        </div>
        <div>
          <div className="flex my-1">
            Màu:&nbsp;
            <div
              className="h-4 w-4"
              style={{
                backgroundColor: productInfo?.product?.idProduct?.type?.find(
                  (type) => type._id == productInfo?.product?.typeId
                )?.color,
              }}
            ></div>
          </div>
          <div className="text-gray-600">
            {productInfo?.product?.quantity} x{" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(productInfo?.product?.priceAtBuy)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductOder;
