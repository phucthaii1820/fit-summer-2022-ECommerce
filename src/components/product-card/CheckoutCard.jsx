import React from "react";
import { Link } from "react-router-dom";

const CheckoutCard = ({ title, quantity, price, color, img, id }) => {
  return (
    <div className="grid grid-cols-4 p-2 border rounded-lg mb-3">
      <div className="col-span-1 flex justify-center items-center">
        <img alt="product img" className="h-16 w-16 rounded-lg" src={img} />
      </div>
      <div className="col-span-3 flex items-center">
        <div className="grid grid-rows-2 w-full">
          <div className="col-span-2 font-black">
            <Link to={`/product-detail/${id}`} style={{ color: "#F5B301" }}>
              {title}
            </Link>
          </div>
          <div className="col-span-2 gap-2">
            <div className="grid grid-cols-4">
              <div className="">x{quantity}</div>
              <div className="flex items-center">
                <div className="mr-2">màu:</div>
                <div
                  className="h-4 w-4"
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
              </div>
              <div className="flex items-center col-span-2">
                <div className="mr-2">giá:</div>
                <div>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(price)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
