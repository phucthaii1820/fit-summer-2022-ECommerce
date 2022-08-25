import React, { useState } from "react";

import {
    OrderedListOutlined,
    UserOutlined,
    TeamOutlined,
    AppstoreAddOutlined,
    ShoppingOutlined,
    BarChartOutlined,
    CommentOutlined,
} from "@ant-design/icons";

import UserManagement from "@/components/admin-dashboard/user-management/UserManagement";
import CategoryManagement from "@/components/admin-dashboard/category-management/CategoryManagement";
import ProductManagement from "@/components/admin-dashboard/product-management/ProductManagement";
import OrderManagement from "@/components/admin-dashboard/order-management/OrderManagement";
import CommentManagement from "@/components/admin-dashboard/comment-management/CommentManagement";

import "./LayoutAdmin.css";
import { Breadcrumb, Layout, Menu, Divider } from "antd";

import { Link } from "react-router-dom";

import Logo from "src/image/Logo.svg";

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
        getItem("Tài khoản", "2-1", <TeamOutlined />, null, <UserManagement />),
        getItem(
            "Thể loại",
            "2-2",
            <AppstoreAddOutlined />,
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
        getItem(
            "Bình luận",
            "2-5",
            <CommentOutlined />,
            null,
            <CommentManagement />
        ),
    ]),
    null,
];

export default function LayoutAdmin() {
    const [collapsed, setCollapsed] = useState(false);

    const [selectedKeys, setSelectedKeys] = useState("2-5");

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
                <Divider />

                {/* Admin Action  */}
                <Menu
                    theme="dark"
                    SelectedKeys={selectedKeys}
                    mode="inline"
                    items={items}
                    onClick={(e) => {
                        setSelectedKeys(e.key);
                    }}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <Link to="/" style={{textAlign: "-webkit-center"}}>
                        <img
                            src={Logo}
                            alt="logoImage"
                            style={{ height: 50, paddingLeft: 16 }}
                        />
                    </Link>
                </Header>
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
                                : selectedKeys === "2-5"
                                ? "Phản hồi bình luận"
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
                            <UserManagement />
                        ) : selectedKeys === "2-2" ? (
                            <CategoryManagement />
                        ) : selectedKeys === "2-3" ? (
                            <ProductManagement />
                        ) : selectedKeys === "2-4" ? (
                            <OrderManagement />
                        ) : selectedKeys === "2-5" ? (
                            <CommentManagement />
                        ) : (
                            <></>
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
