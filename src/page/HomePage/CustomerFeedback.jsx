import React from "react";

import { Row, Col } from "antd";

import SectionTitle from "./SectionTitle";
import CommentCard from "@/components/comment-card/CommentCard";

export default function CustomerFeedback() {
    const items = [
        {
            name: "Nguyễn Văn A",
            avatar: "https://via.placeholder.com/150",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            name: "Nguyễn Văn A",
            avatar: "https://via.placeholder.com/150",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            name: "Nguyễn Văn A",
            avatar: "https://via.placeholder.com/150",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    return (
        <div>
            <SectionTitle title="Khách hàng của BIKERGEAR nghĩ gì" />

            <Row gutter={[16, 16]} style={{ width: "100%" }}>
                {/* map items with CommentCard  */}
                {items.map((item) => (
                    <Col span={12}>
                        <CommentCard key={item.id} item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
