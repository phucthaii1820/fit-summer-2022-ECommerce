import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Modal } from "antd";
import React, { useState } from "react";

import ShoppingCartList from "./ShoppingCartList";
import userStore from "@/stores/user";

export default function ShoppingCartModal() {
  const [visible, setVisible] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const { user } = userStore((state) => state);

  React.useEffect(() => {
    let total = 0;
    user.cart.forEach((item) => {
      total += item.quantity;
    });
    setTotalCart(total);
  }, [user.cart]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    window.location.href = "/checkout";
  };

  return (
    <>
      <Badge count={totalCart}>
        <ShoppingCartOutlined
          style={{ fontSize: "2em" }}
          onClick={showModal}
        ></ShoppingCartOutlined>
      </Badge>

      <Modal
        title="Giỏ hàng của bạn"
        visible={visible}
        width={"fit-content"}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        okText="Thanh toán"
        cancelText="Đóng"
      >
        <div>
          <ShoppingCartList></ShoppingCartList>
        </div>
      </Modal>
    </>
  );
}
