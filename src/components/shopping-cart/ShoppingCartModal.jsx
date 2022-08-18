import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Modal } from "antd";
import React, { useState, useEffect } from "react";

import ShoppingCartList from "./ShoppingCartList";
import userStore from "@/stores/user";

export default function ShoppingCartModal() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
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
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 200);
  };

  const handleCancel = () => {
    setVisible(false);
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
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <ShoppingCartList></ShoppingCartList>
        </div>
      </Modal>
    </>
  );
}
