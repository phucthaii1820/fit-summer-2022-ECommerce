import React, { useState, useEffect } from "react";

import {
    OrderedListOutlined,
    UserOutlined,
    TeamOutlined,
    ShoppingOutlined,
    BarChartOutlined,
} from "@ant-design/icons";

import AccountManagement from "@/components/admin-dashboard/account-management/AccountManagement";
import CategoryManagement from "@/components/admin-dashboard/category-management/CategoryManagement";
import ProductManagement from "@/components/admin-dashboard/product-management/ProductManagement";
import OrderManagement from "@/components/admin-dashboard/order-management/OrderManagement";

import "./LayoutAdmin.css";
import { Breadcrumb, Layout, Menu, Avatar, Divider } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, content) {
    return {
        key,
        icon,
        label,
        children,
        content,
    };
}

const items = [
    getItem("Thông tin cá nhân", 1, <UserOutlined />, null, null),
    getItem("Quản lý", 2, <BarChartOutlined />, [
        getItem(
            "Tài khoản",
            "2-1",
            <TeamOutlined />,
            null,
            <AccountManagement />
        ),
        getItem(
            "Thể loại",
            "2-2",
            <TeamOutlined />,
            null,
            <CategoryManagement />
        ),
        getItem(
            "Sản phẩm",
            "2-3",
            <ShoppingOutlined />,
            null,
            <ProductManagement />
        ),
        getItem(
            "Đơn hàng",
            "2-4",
            <OrderedListOutlined />,
            null,
            <OrderManagement />
        ),
    ]),
    null,
];

export default function LayoutAdmin() {
    const [collapsed, setCollapsed] = useState(false);

    const [selectedKeys, setSelectedKeys] = useState("1");

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                {/* Admin Profile  */}
                {/* <div className="">
                    <div className="">
                        <Avatar
                            size={50}
                            icon={
                                <UserOutlined
                                    style={{
                                        verticalAlign: "middle",
                                    }}
                                />
                            }
                        />
                    </div>
                    <div className="">
                        <div className="text-white">Nguyễn Hoài thương</div>
                        <div className="text-gray-default">Admin</div>
                    </div>
                </div> */}

                <Divider />

                {/* Admin Action  */}
                <Menu
                    theme="dark"
                    SelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                    onClick={(e) => {
                        console.log(e);
                        setSelectedKeys(e.key);
                        console.log(selectedKeys);
                    }}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: "0 16px",
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: "16px 0",
                        }}
                    >
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {selectedKeys === "1"
                                ? "Thông tin cá nhân"
                                : selectedKeys === "2"
                                ? "Quản lý "
                                : selectedKeys === "2-1"
                                ? "Quản lý Tài khoản"
                                : selectedKeys === "2-2"
                                ? "Quản lý Thể loại"
                                : selectedKeys === "2-3"
                                ? "Quản lý Sản phẩm"
                                : selectedKeys === "2-4"
                                ? "Quản lý Đơn hàng"
                                : ""}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {selectedKeys === "1" ? (
                            "Thông tin cá nhân"
                        ) : selectedKeys === "2" ? (
                            "Quản lý "
                        ) : selectedKeys === "2-1" ? (
                            <AccountManagement />
                        ) : selectedKeys === "2-2" ? (
                            <CategoryManagement />
                        ) : selectedKeys === "2-3" ? (
                            <ProductManagement />
                        ) : selectedKeys === "2-4" ? (
                            <OrderManagement />
                        ) : (
                            ""
                        )}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    BIKERGEAR ©2022
                </Footer>
            </Layout>
        </Layout>
    );
}

// a = "2-1";
// b = "2";
// b = a.split("-")[0];
