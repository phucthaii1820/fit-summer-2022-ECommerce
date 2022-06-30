import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import React from "react";

const WishList = () => {
  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (text) => <div className="text-yellow-light">{text}</div>,
    },
    {
      title: "",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-col space-y-2 w-full">
            <Button
              style={{
                borderRadius: "25px",
              }}
            >
              Xem chi tiết
            </Button>
            <Button
              style={{
                borderRadius: "25px",
              }}
              type="primary"
            >
              Thêm giỏ hàng
            </Button>
          </div>
          <button>
            <DeleteOutlined
              style={{
                color: "red",
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      status: "Còn hàng",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "John Brown",
      status: "Còn hàng",
      tags: ["nice", "developer"],
    },
    {
      key: "3",
      name: "John Brown",
      status: "Còn hàng",
      tags: ["nice", "developer"],
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default WishList;
