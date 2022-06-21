import React from "react";
import { Row, Col, Input, Image, Typography } from "antd";

import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

import Logo from "../img/Logo/dark-logo.svg";

const { Search } = Input;
const { Title, Paragraph, Text, Link } = Typography;

export default function Header() {
    return (
        <div>
            <Row justify="space-around" align="middle">
                <Col span={4}>
                    <Image src={Logo} alt="logo" />
                </Col>
                <Col span={2}>
                    <Text strong>MUA SẮM</Text>
                </Col>
                <Col span={2}>
                    <Text strong>BỘ SƯU TẬP</Text>
                </Col>
                <Col span={2}>
                    <Text strong>GIẢM GIÁ</Text>
                </Col>
                <Col span={8}>
                    <Search
                        placeholder="Tìm kiếm sản shẩm"
                        onSearch={(value) => console.log(value)}
                    />
                </Col>
                <Col span={2}>
                    <ShoppingCartOutlined style={{ fontSize: "2em" }} />
                </Col>
                <Col span={2}>
                    <UserOutlined style={{ fontSize: "2em" }} />
                </Col>
            </Row>
        </div>
    );
}
