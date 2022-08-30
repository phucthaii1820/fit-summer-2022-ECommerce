import React from "react";

import Banner from "@/page/HomePage/Banner";
import TrendingProducts from "@/page/HomePage/TrendingProducts";
import CustomerFeedback from "@/page/HomePage/CustomerFeedback";
import Services from "@/page/HomePage/Services";
import userStore from "@/stores/user";

export default function LayoutHomePage() {
    const { loadProfile } = userStore((state) => state);
    React.useEffect(() => {
        loadProfile();
    }, []);
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
