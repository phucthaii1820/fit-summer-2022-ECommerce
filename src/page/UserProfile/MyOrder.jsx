import { Tabs } from "antd";
import React from "react";

const MyOrder = () => {
  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
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
          Content of Tab Pane 1
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
          key="2"
        >
          Content of Tab Pane 2
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
          key="3"
        >
          Content of Tab Pane 3
        </TabPane>
        <TabPane
          tab={
            <div
              style={{
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Đang giao
            </div>
          }
          key="4"
        >
          Content of Tab Pane 3
        </TabPane>
        <TabPane
          tab={
            <div
              style={{
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Đã giao
            </div>
          }
          key="5"
        >
          Content of Tab Pane 3
        </TabPane>
        <TabPane
          tab={
            <div
              style={{
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Đã hủy
            </div>
          }
          key="6"
        >
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default MyOrder;
