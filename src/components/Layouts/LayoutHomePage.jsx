import React from "react";

import TrendingProducts from "@/page/HomePage/TrendingProducts";
import CustomerFeedback from "@/page/HomePage/CustomerFeedback";
import Banner from "@/page/HomePage/Banner";
import Services from "@/page/HomePage/Services";

export default function LayoutHomePage() {
    return (
        <div>
            <div className="container">
                <div>
                    <Banner />
                </div>
                <div>
                    <TrendingProducts />
                </div>
                <div>
                    <CustomerFeedback />
                </div>
                <div>
                    <Services />
                </div>
            </div>
        </div>
    );
}
