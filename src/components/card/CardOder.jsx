import React from "react";
import { Link } from "react-router-dom";
import CardProductOder from "./CardProductOder";
import moment from "moment";

const CardOder = ({ orderInfo }) => {
  const paymentMethod = (payment) => {
    switch (payment) {
      case 0:
        return "Thanh toán khi nhận hàng (COD)";
      case 2:
        return "Thanh toán qua MoMo";
      case 1:
        return "Thanh toán qua Paypal";
    }
  };

  const orderStatus = (status) => {
    switch (status) {
      case -1:
        return "Thanh toán thất bại";
      case 0:
        return "Tạo đơn hàng thành công";
      case 1:
        return "Chờ xác nhận";
      case 2:
        return "Đã xác nhận";
      case 3:
        return "Đang giao hàng";
      case 4:
        return "Đã giao hàng";
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 space-y-2 my-4">
      <div className="border-b border-gray-300 pb-2 flex justify-between px-2">
        <div className="flex">
          Đặt ngày:&nbsp;
          {
            <div>
              {moment(orderInfo?.createdAt).format("DD/MM/YYYY HH:mm:ss")}
            </div>
          }
          &nbsp;|&nbsp;<div>{orderStatus(orderInfo?.statusOrder)}</div>
        </div>
        <div className="text-yellow-light font-bold">
          <Link to={"/order-detail/" + orderInfo?._id}>Xem chi tiết</Link>
        </div>
      </div>
      <div to="" className="grid grid-cols-2 gap-4">
        {orderInfo?.products.slice(0, 4).map((product, index) => (
          <div key={index}>
            <CardProductOder productInfo={{ product }} />
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-300 pt-2">
        <div className="flex-1">{paymentMethod(orderInfo?.payment)}</div>
        <div className="flex-1 text-right">
          Tổng tiền:{" "}
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(orderInfo?.total)}
        </div>
      </div>
    </div>
  );
};

export default CardOder;
