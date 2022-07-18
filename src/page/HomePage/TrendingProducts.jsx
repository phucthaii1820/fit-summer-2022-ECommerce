import React from "react";

import { Row, Col } from "antd";

import CarouselProducts from "@/components/product-card/Carousel";

export default function TrendingProducts() {
    return (
        <div>
            <div className="flex m-4 p-5 justify-center items-center">
                <div className="mr-2">
                    <hr className="bg-yellow-light h-1 w-14"></hr>
                </div>
                <div>
                    <h1 className="uppercase mb-0 text-center text-3xl font-bold">Sản phẩm nổi bật</h1>
                </div>
                <div className="ml-2">
                    <hr className="bg-yellow-light h-1 w-14"></hr>
                </div>
            </div>

            {/* <Row gutter={[16, 16]} style={{ width: "100%" }}>
                {items.map((item) => (
                    <Col span={6}>
                        <ProductCard key={item.id} item={item} />
                    </Col>
                ))}
            </Row> */}
            <CarouselProducts idCategory="62ab68801094bceaaaa5c981" nameCategory="Phuộc"></CarouselProducts>
        </div>
    );
}
