import { ShoppingCartOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState, useEffect } from "react";

import ShoppingCartList from "./ShoppingCartList";

export default function ShoppingCartModal() {
    // const productList = [];
    const productList = require("./product-list.json").data;

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [shoppingCartData, setshoppingCartData] = useState();

    useEffect(() => {
        setshoppingCartData({ productList });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showModal = () => {
        // Show the modal
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
        // console.log("Quay lại");
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
                    {shoppingCartData && (
                        <ShoppingCartList
                            data={shoppingCartData.productList}
                        ></ShoppingCartList>
                    )}
                </div>
            </Modal>
        </>
    );
}
