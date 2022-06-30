import React from "react";

import { Carousel } from "antd";

import TrendingProducts from "@/page/HomePage/TrendingProducts";
import CustomerFeedback from "@/page/HomePage/CustomerFeedback";
import Banner from "@/page/HomePage/Banner";

export default function LayoutHomePage() {
    const contentStyle = {
        height: "576px",
        color: "#fff",
        lineHeight: "576px",
        textAlign: "center",
        background: "#364d79",
    };

    return (
        <div className="bg-gray-default py-6">
            <div className=" container mx-auto">
                {/* Banner  */}
                <Banner />

                {/* Sản phẩm nổi bật  */}
                <TrendingProducts />

                {/* Khách hàng của BIKERGEAR nghĩ gì  */}
                <CustomerFeedback />

                {/* Lý do nên chọn BIKERGEAR  */}
            </div>
        </div>
    );
}
