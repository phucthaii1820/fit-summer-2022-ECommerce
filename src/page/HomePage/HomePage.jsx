import React from "react";

import { Carousel } from "antd";

import ProductCard from "@/components/product-card/ProductCard";

export default function HomePage() {
    const contentStyle = {
        height: "576px",
        color: "#fff",
        lineHeight: "576px",
        textAlign: "center",
        background: "#364d79",
    };

    return (
        <div>
            {/* Banner  */}
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>

            {/* Bạn đang tìm kiếm  */}
            {/* Sản phẩm nổi bật  */}
            <ProductCard />

            {/* Khách hàng của BIKERGEAR nghĩ gì  */}
            {/* Lý do nên chọn BIKERGEAR  */}
        </div>
    );
}
