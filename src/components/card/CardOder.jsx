import React from "react";
import { Link } from "react-router-dom";
import CardProductOder from "./CardProductOder";
import moment from "moment";

const CardOder = ({ orderInfo }) => {
  const paymentMethod = (payment) => {
    switch (payment) {
      case 0:
        return "Thanh toán khi nhận hàng (COD)";
      case 1:
        return "Thanh toán qua MoMo";
      case 2:
        return "Thanh toán qua Paypal";
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 space-y-2 my-4">
      <div className="border-b border-gray-300 pb-2 flex justify-between px-2">
        <div className="flex">
          Đặt ngày:&nbsp;{<div>{moment(orderInfo?.createdAt).format("DD/MM/YYYY HH:mm:ss", true)}</div>}&nbsp;|&nbsp;<div>{paymentMethod(orderInfo?.payment)}</div>
        </div>
        <div className="text-yellow-light font-bold">
          <Link to={"/" + orderInfo?._id}>Xem chi tiết</Link>
        </div>
      </div>
      <div to="" className="grid grid-cols-2 gap-4">
        {orderInfo?.products.map((product, index) => (
          <div key={index}>
            <CardProductOder productInfo={{ product }}/>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300 text-right pt-2">
        Tổng tiền:{" "}
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(orderInfo?.total)}
      </div>
    </div>
  );
};

export default CardOder;
