import React from "react";
import { Row, Col, Input, Image, Badge } from "antd";

import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Logo from "src/image/dark-logo.svg";

const { Search } = Input;

export default function Header() {
  return (
    <div>
      <Row justify="space-around" align="middle" className="header">
        <Col span={4}>
          <Image src={Logo} alt="logo" />
        </Col>
        <Col span={2}>
          <a>MUA SẮM</a>
        </Col>
        <Col span={2}>
          <a>BỘ SƯU TẬP</a>
        </Col>
        <Col span={2}>
          <a>GIẢM GIÁ</a>
        </Col>
        <Col span={8}>
          <Search
            placeholder="Tìm kiếm sản shẩm"
            onSearch={(value) => console.log(value)}
          />
        </Col>
        <Col span={2}>
          <Badge size="default" count={0}>
            <ShoppingCartOutlined style={{ fontSize: "2em" }} />
          </Badge>
        </Col>
        <Col span={2}>
          <UserOutlined style={{ fontSize: "2em" }} />
        </Col>
      </Row>
    </div>
  );
}
