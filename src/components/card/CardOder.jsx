import React from "react";
import { Link } from "react-router-dom";
import CardProductOder from "./CardProductOder";

const CardOder = () => {
  return (
    <div className="bg-white rounded-lg p-4 space-y-2 my-4">
      <div className="border-b border-gray-300 pb-2 flex justify-between px-2">
        <div className="">
          Đặt ngày: 02/01/2021 | Thanh toán khi nhận hàng (COD)
        </div>
        <div className="text-yellow-light font-bold">Xem chi tiết</div>
      </div>
      <div to="" className="grid grid-cols-2 gap-4">
        <div>
          <CardProductOder />
        </div>
        <div>
          <CardProductOder />
        </div>
        <div>
          <CardProductOder />
        </div>
        <div>
          <CardProductOder />
        </div>
      </div>
      <div className="border-t border-gray-300 text-right pt-2">
        Tổng tiền: 1.076.000đ
      </div>
    </div>
  );
};

export default CardOder;
