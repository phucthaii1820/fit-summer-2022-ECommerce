import React from "react";

import { Card } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export default function ProductCard(props) {
    const item = props.item;
    return (
        <div>
            <Card
                hoverable
                size="default"
                style={{
                    width: 288,
                    borderRadius: "10px"
                }}
                cover={
                    <div className="">
                        <div className="relative w-full h-56">
                            {/* Discount */}
                            {/* <div className="absolute top-2 right-3 ml-4 inline-flex items-center leading-sm uppercase px-2 py-1 bg-yellow-light rounded-lg">
                                    <div className="text-sm text-white">
                                        -{item.discount_percent}
                                    </div>
                                </div> */}
                            {/* Product Img */}
                            <div className="text-center p-4">
                                <img
                                    className="object-cover max-w-full h-56"
                                    alt="example"
                                    src={item.image}
                                />
                            </div>

                            {/* Heart count  */}
                            <div className="absolute bottom-0 right-6 inline-flex items-center leading-sm uppercase px-2 py-1 rounded-lg bg-white bg-opacity-50 border-none border-gray-extra_dark">
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
                }
            >
                <p className="uppercase mt-2 mb-4 text-base font-bold">
                    {item.name}
                </p>
                <div className="relative flex">
                    <div>
                        {/* <p className="line-through text-gray-dark">
                            {" "}
                            {item.original_price} VNĐ{" "}
                        </p> */}
                        <p className="font-bold mb-1 text-red-500">
                            {item.discount_price}&nbsp;₫
                        </p>
                    </div>
                    {/* Add to card button  */}
                    <button className="absolute bottom-0 right-0 inline-flex items-center leading-sm px-2 py-1 rounded-lg bg-white border border-gray-extra_dark">
                        <ShoppingCartOutlined
                            style={{
                                verticalAlign: "middle",
                                color: "#797979",
                            }}
                        ></ShoppingCartOutlined>
                        <div className="text-sm text-gray-extra_dark pl-1">
                            Thêm
                        </div>
                    </button>
                </div>
            </Card>
        </div>
    );
}
