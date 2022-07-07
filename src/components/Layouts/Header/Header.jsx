import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Menu, Input, Row, Col } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Logo from "src/image/dark-logo.svg";

const { Search } = Input;

export default function Header() {
    const location = useLocation();

    const [nameCategory, setNameCategory] = useState([]);
    const [profileUser, setProfileUser] = useState([]);
    const [search, setSearch] = useState([]);

    const category_items = [
        // remember to pass the key prop which is required
        {
            label: "DANH MỤC",
            key: "category",
            children: [
                { label: "Niềng", key: "category-item-1" },
                { label: "Phuộc", key: "category-item-2" },
                { label: "Thắng dĩa", key: "category-item-3" },
                { label: "Ống pô", key: "category-item-4" },
                { label: "Tay thắng xe", key: "category-item-5" },
                { label: "Ốc xe sơn Titan", key: "category-item-6" },
                { label: "Bộ lọc nhớt", key: "category-item-7" },
                { label: "Gương chiếu hậu", key: "category-item-8" },
                { label: "Đèn pha", key: "category-item-9" },
                { label: "Đèn độ bánh xe", key: "category-item-10" },
                { label: "Nhông sên", key: "category-item-11" },
            ],
        },
    ];

    const action_items = [
        // remember to pass the key prop which is required
        {
            label: "",
            key: "",
            icon: <UserOutlined style={{ fontSize: "2em" }} />,
            children: [
                { label: "Thông tin tài khoản", key: "user-action-item-1" },
                { label: "Thay đổi mật khẩu", key: "user-action-item-2" },
                { label: "Đơn hàng của tôi", key: "user-action-item-3" },
                { label: "Quản lý thông báo", key: "user-action-item-4" },
                { label: "Danh sách yêu thích", key: "user-action-item-5" },
                { label: "Đăng xuất", key: "user-action-item-6" },
            ],
        },
    ];

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
                            items={category_items}
                            style={{ fontSize: "1em", fontWeight: "bold" }}
                        />
                    </Col>
                    <Col span={8}>
                        <Search
                            placeholder="Tìm kiếm sản phẩm"
                            onSearch={(value) => console.log(value)}
                            style={{ height: "100%" }}
                        />
                    </Col>
                    <Col span={1.5}>
                        <ShoppingCartOutlined style={{ fontSize: "2em" }} />
                    </Col>
                    <Col span={1.5}>
                        <Menu
                            mode="horizontal"
                            items={action_items}
                            style={{ fontSize: "1em", fontWeight: "bold" }}
                        />
                    </Col>
                </Row>
            </header>
        </div>
    );
}
