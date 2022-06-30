import React from "react";

import TrendingProducts from "@/page/HomePage/TrendingProducts";
import CustomerFeedback from "@/page/HomePage/CustomerFeedback";
import Banner from "@/page/HomePage/Banner";
import Services from "@/page/HomePage/Services";

export default function LayoutHomePage() {
    return (
        <div>
            <div className="container mx-auto">
                {/* Banner  */}
                <Banner />

                {/* Sản phẩm nổi bật  */}
                <TrendingProducts />

                {/* Khách hàng của BIKERGEAR nghĩ gì  */}
                <CustomerFeedback />

                {/* Lý do nên chọn BIKERGEAR  */}
                <Services />
            </div>
        </div>
    );
}
