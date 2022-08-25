import React from "react";

import SectionTitle from "./SectionTitle";
import { Row, Col } from "antd";

import Icon, {
  SmileOutlined,
  PhoneOutlined,
  RetweetOutlined,
  SafetyCertificateOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

export default function Services() {
  const items = [
    {
      id: 1,
      icon: SmileOutlined,
      title: "Miễn phí giao hàng",
      description:
        "Miễn phí giao hàng toàn quốc cho đơn hàng trên 1 triệu đồng",
    },
    {
      id: 2,
      icon: PhoneOutlined,
      title: "Hỗ trợ 24/7",
      description:
        "Hỗ trợ 24/7 cho khách hàng trong những trường hợp không được hỗ trợ",
    },
    {
      id: 3,
      icon: RetweetOutlined,
      title: "Đổi hàng 30 ngày",
      description:
        "Đổi hàng 30 ngày trong những trường hợp không được đổi hàng",
    },
    {
      id: 4,
      icon: SafetyCertificateOutlined,
      title: "Bảo hành 90 ngày",
      description: "Bảo hành 90 ngày cho đồng hồ nam",
    },
  ];

  return (
    <div>
      <div className="flex m-4 p-5 justify-center items-center">
        <div className="mr-2">
          <hr className="bg-yellow-light h-1 w-14"></hr>
        </div>
        <div>
          <h1 className="uppercase mb-0 text-center text-3xl font-bold">
            Lí do nên chọn BikerGear
          </h1>
        </div>
        <div className="ml-2">
          <hr className="bg-yellow-light h-1 w-14"></hr>
        </div>
      </div>
      <Row gutter={[16, 24]}>
        {items.map((item, index) => (
          <Col span={12} xl={6} lg={6} md={12} xs={12} sm={12} key={index}>
            <div className="flex justify-start">
              <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                <div className="text-center pt-6">
                  <Icon component={item.icon} style={{ fontSize: "50px" }} />
                </div>
                <div className="p-6 flex flex-col">
                  <h5 className="text-gray text-lg font-medium mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-extra_dark text-base mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
