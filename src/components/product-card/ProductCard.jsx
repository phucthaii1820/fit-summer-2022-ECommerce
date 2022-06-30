import React from "react";

import { Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export default function ProductCard(props) {
    const item = props.item;
    return (
        <div>
            <Card
                hoverable
                size="small"
                style={{
                    width: 288,
                }}
                cover={
                    <div>
                        <div className="relative w-72 h-72">
                            <div>
                                {/* Discount button here */}
                                <div className="absolute top-2 right-3 ml-4 inline-flex items-center leading-sm uppercase px-2 py-1 bg-yellow-light rounded-lg">
                                    <div className="text-sm text-white">
                                        -{item.discount_percent}
                                    </div>
                                </div>
                                {/* Product Img */}
                                <img
                                    className="object-cover w-72 h-72"
                                    alt="example"
                                    src={item.image}
                                />

                                <div className="absolute bottom-2 right-3 ml-4 inline-flex items-center leading-sm uppercase px-2 py-1 rounded-lg bg-white bg-opacity-50 border-none border-gray-extra_dark">
                                    <HeartOutlined
                                        style={{
                                            verticalAlign: "middle",
                                            color: "#797979",
                                        }}
                                    ></HeartOutlined>
                                    <div className="text-sm text-gray-extra_dark pl-1">
                                        {item.heart_count}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            >
                <p className="uppercase text-base font-bold pt-2">
                    {item.name}
                </p>
                <div>
                    <p className="line-through text-gray-dark">
                        {" "}
                        {item.original_price} VNĐ{" "}
                    </p>
                    <div className="relative">
                        <p className="font-bold">{item.discount_price} VNĐ</p>
                        <div className="absolute bottom-0 right-0 inline-flex items-center leading-sm px-2 py-1 rounded-lg bg-white border border-gray-extra_dark">
                            <ShoppingCartOutlined
                                style={{
                                    verticalAlign: "middle",
                                    color: "#797979",
                                }}
                            ></ShoppingCartOutlined>
                            <div className="text-sm text-gray-extra_dark pl-1">
                                Thêm
                            </div>
                        </div>
                    </div>
                </div>
                {/* Heart count  */}
            </Card>
        </div>
    );
}
