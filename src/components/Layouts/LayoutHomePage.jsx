import React from "react";

import TrendingProducts from "@/page/HomePage/TrendingProducts";
import CustomerFeedback from "@/page/HomePage/CustomerFeedback";
import Banner from "@/page/HomePage/Banner";
import Services from "@/page/HomePage/Services";

export default function LayoutHomePage() {
  return (
    <div className="">
      <Banner />
      <TrendingProducts />
      <CustomerFeedback />
      <Services />
    </div>
  );
}
