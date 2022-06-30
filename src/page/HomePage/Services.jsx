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
            icon: "SmileOutlined",
            title: "Miễn phí giao hàng",
            description:
                "Miễn phí giao hàng toàn quốc cho đơn hàng trên 1 triệu đồng",
        },
        {
            id: 2,
            icon: "PhoneOutlined",
            title: "Hỗ trợ 24/7",
            description:
                "Hỗ trợ 24/7 cho khách hàng trong những trường hợp không được hỗ trợ",
        },
        {
            id: 3,
            icon: "RetweetOutlined",
            title: "Đổi hàng 30 ngày",
            description:
                "Đổi hàng 30 ngày trong những trường hợp không được đổi hàng",
        },
        {
            id: 4,
            icon: "SafetyCertificateOutlined",
            title: "Bảo hành 90 ngày",
            description: "Bảo hành 90 ngày cho đồng hồ nam",
        },

        {
            id: 5,
            icon: "FieldTimeOutlined",
            title: "Giao hàng nhanh",
            description: "Giao hàng nhanh cho đơn hàng trên 1 triệu đồng",
        },

        {
            id: 6,
            icon: "FieldTimeOutlined",
            title: "Chăm sóc khách hàng",
            description: "Chăm sóc khách hàng 24/7",
        },

        {
            id: 7,
            icon: "FieldTimeOutlined",
            title: "Nhiều ưu đãi",
            description: "Nhiều ưu đãi cho khách hàng",
        },

        {
            id: 8,
            icon: "FieldTimeOutlined",
            title: "Giao hàng nhanh",
            description: "Giao hàng nhanh cho đơn hàng trên 1 triệu đồng",
        },
    ];

    return (
        <div>
            <SectionTitle title="Lí do nên chọn BikerGear" />

            <Row gutter={[16, 16]}>
                <Col span={6}>
                    {/* Miễn phí giao hàng */}
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={SmileOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[0].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[0].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={6}>
                    {/* Hỗ trợ 24/7 */}
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={PhoneOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[1].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[1].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={6}>
                    {/* Đổi hàng 30 ngày */}
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={RetweetOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[2].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[2].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={6}>
                    {/* Bảo hành 90 ngày */}

                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={SafetyCertificateOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[3].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[3].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={6}>
                    {/* Giao hàng nhanh */}
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={FieldTimeOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[4].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[4].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={6}>
                    {/* Giao hàng nhanh */}
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={FieldTimeOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[5].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[5].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={6}>
                    {/* Giao hàng nhanh */}
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={FieldTimeOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[6].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[6].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col span={6}>
                    {/* Giao hàng nhanh */}
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg">
                            <div className="pt-6">
                                <Icon
                                    component={FieldTimeOutlined}
                                    style={{ fontSize: "50px" }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray text-lg font-medium mb-2">
                                    {items[7].title}
                                </h5>
                                <p className="text-gray-extra_dark text-base mb-4">
                                    {items[7].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
