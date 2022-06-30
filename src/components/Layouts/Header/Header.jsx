import React from "react";

import { Menu, Input, Row, Col } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Logo from "src/image/dark-logo.svg";

export default function Header() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 942a3245f6d712fe3ccb3ede790000d92602f326
}
