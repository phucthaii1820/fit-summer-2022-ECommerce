import { getProfileUser } from "@/API/user";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState, useEffect } from "react";

import ShoppingCartList from "./ShoppingCartList";

export default function ShoppingCartModal() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const showModal = () => {
    setVisible(true);
    setRefresh(!refresh);
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
      <ShoppingCartOutlined
        style={{ fontSize: "2em" }}
        onClick={showModal}
      ></ShoppingCartOutlined>
      <Modal
        title="Giỏ hàng của bạn"
        visible={visible}
        width={"fit-content"}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <ShoppingCartList visible={refresh}></ShoppingCartList>
        </div>
      </Modal>
    </>
  );
}
