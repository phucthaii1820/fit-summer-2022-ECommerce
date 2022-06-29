import React from "react";

import { Menu, Input, Row, Col } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Logo from "src/image/dark-logo.svg";

export default function Header() {
    const items = [
        // remember to pass the key prop which is required
        {
            label: "MUA SẮM",
            key: "muasam",
            children: [
                { label: "item-1", key: "muasam-item-1" },
                { label: "item-2", key: "muasam-item-2" },
                { label: "item-3", key: "muasam-item-3" },
                { label: "item-4", key: "muasam-item-4" },
            ],
        },
    ];

    const { Search } = Input;

    return (
        <div className="container mx-auto">
            <header className="bg-white">
                <Row
                    gutter={{
                        // Responsive
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                    justify="space-around"
                    align="middle" // Align Middle
                    style={{ height: "5em" }}
                >
                    <Col span={6}>
                        <img src={Logo} alt="logo" />
                    </Col>
                    <Col span={3}>
                        <Menu
                            mode="horizontal"
                            items={items}
                            style={{ fontSize: "1em", fontWeight: "bold" }}
                        />
                    </Col>
                    <Col span={11}>
                        <Search
                            placeholder="Tìm kiếm sản phẩm"
                            onSearch={(value) => console.log(value)}
                            style={{ height: "100%" }}
                        />
                    </Col>
                    <Col span={1}>
                        <ShoppingCartOutlined style={{ fontSize: "2em" }} />
                    </Col>
                    <Col span={1}>
                        <UserOutlined style={{ fontSize: "2em" }} />
                    </Col>
                </Row>
            </header>
        </div>
    );
}
