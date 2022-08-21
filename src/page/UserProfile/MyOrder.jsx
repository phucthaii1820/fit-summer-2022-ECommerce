import CardOder from "@/components/card/CardOder";
import Logo from "src/image/Logo.svg";

import { Tabs, Pagination, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";

import { getOrders } from "@/API/order";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 64,
    }}
    spin
  />
);

const MyOrder = () => {
  const { TabPane } = Tabs;
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(3);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(1);
  const pageSize = 3;

  useEffect(() => {
    async function fetchOrders() {
      try {
        const resOrder = await getOrders();
        setOrders(resOrder);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchOrders();
  }, []);

  const onChange = (key) => {
    // console.log(key);
  };
  
  const handleChange = (value) => {
    if (value <= 1) {
      setLowerBound(0);
      setUpperBound(pageSize);
    } else {
      setLowerBound((value - 1) * pageSize);
      setUpperBound(value * pageSize);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center flex-col">
          <img className="h-14 w-auto mb-4" src={Logo} alt="Workflow" />
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="p-4 rounded-lg w-full">
          <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane
              tab={
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Tất cả
                </div>
              }
              key="1"
            >
              {orders.slice(lowerBound, upperBound).map((order, index) => (
                <CardOder orderInfo={order} key={index}></CardOder>
              ))}
            </TabPane>
            <TabPane
              tab={
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Thanh toán thất bại
                </div>
              }
              key="2"
            >
              {orders.map((order, index) =>
                order.statusOrder === -1 ? (
                  <CardOder orderInfo={order} key={index}></CardOder>
                ) : (
                  <></>
                )
              )}
            </TabPane>
            <TabPane
              tab={
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Đặt hàng thành công
                </div>
              }
              key="3"
            >
              {orders.map((order, index) =>
                order.statusOrder === 0 ? (
                  <CardOder orderInfo={order} key={index}></CardOder>
                ) : (
                  <></>
                )
              )}
            </TabPane>
            <TabPane
              tab={
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Chờ xác nhận
                </div>
              }
              key="4"
            >
              {orders.map((order, index) =>
                order.statusOrder === 1 ? (
                  <CardOder orderInfo={order} key={index}></CardOder>
                ) : (
                  <></>
                )
              )}
            </TabPane>
            <TabPane
              tab={
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Chờ lấy hàng
                </div>
              }
              key="5"
            >
              {orders.map((order, index) =>
                order.statusOrder === 2 ? (
                  <CardOder orderInfo={order} key={index}></CardOder>
                ) : (
                  <></>
                )
              )}
            </TabPane>
            <TabPane
              tab={
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Đang giao hàng
                </div>
              }
              key="6"
            >
              {orders.map((order, index) =>
                order.statusOrder === 3 ? (
                  <CardOder orderInfo={order} key={index}></CardOder>
                ) : (
                  <></>
                )
              )}
            </TabPane>
            <TabPane
              tab={
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Đã giao hàng
                </div>
              }
              key="7"
            >
              {orders.map((order, index) =>
                order.statusOrder === 4 ? (
                  <CardOder orderInfo={order} key={index}></CardOder>
                ) : (
                  <></>
                )
              )}
            </TabPane>
          </Tabs>
          <div className="p-3 grid justify-items-end">
            <Pagination
              defaultCurrent={1}
              total={orders?.length}
              onChange={handleChange}
              pageSize={pageSize}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrder;
