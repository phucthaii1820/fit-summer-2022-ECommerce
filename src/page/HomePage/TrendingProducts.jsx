import React from "react";

import { Row, Col } from "antd";

import ProductCard from "@/components/product-card/ProductCard";
import SectionTitle from "./SectionTitle";

export default function TrendingProducts() {
    const items = [
        {
            id: 1,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",
            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 2,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 3,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 4,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 5,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 6,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 7,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
    ];

    return (
        <div>
            <SectionTitle title="Sản phẩm nổi bật" />

            <Row gutter={[16, 16]} style={{ width: "100%" }}>
                {/* map items with ProductCard  */}
                {items.map((item) => (
                    <Col span={6}>
                        <ProductCard key={item.id} item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
