import React from "react";

import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Row, Col, Typography } from "antd";

import "./UserProfile.css";
import ChangeInformation from "./ChangeInformation";

const { Text } = Typography;

export default function UserProfile() {
    return (
        <div>
            {/* Avatar & Button List  */}
            {/* Avatar & Name*/}
            <Row>
                <Col flex={1}>
                    <Row justify="space-around" align="middle" className="p-5">
                        <Col flex={1}>
                            <Avatar
                                shape="square"
                                size={{
                                    xs: 24,
                                    sm: 32,
                                    md: 40,
                                    lg: 64,
                                    xl: 80,
                                    xxl: 100,
                                }}
                                icon={<UserOutlined />}
                            />
                        </Col>
                        <Col flex={3}>
                            <Text strong>Chỗ này là tên nè</Text>
                        </Col>
                    </Row>
                    <div className="grid grid-rows-6 grid-flow-col gap-4">
                        {/* List of button */}
                        {/* Thông tin tài khoản */}
                        <div>
                            <button className="w-full bg-yellow-light hover:bg-yellow-dark text-white font-bold py-2 px-4 rounded inline-flex items-center w-60">
                                <svg
                                    className="fill-current w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    />
                                </svg>
                                <span>Thông tin tài khoản</span>
                            </button>
                        </div>

                        {/* Thay đổi mật khẩu */}
                        <div>
                            <button className="w-full bg-yellow-light hover:bg-yellow-dark text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg
                                    className="fill-current w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                    <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                                </svg>
                                <span>Thay đổi mật khẩu</span>
                            </button>
                        </div>

                        {/* Đơn hàng của tôi */}
                        <div>
                            <button className="w-full bg-yellow-light hover:bg-yellow-dark text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg
                                    className="fill-current w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                <span>Đơn hàng của tôi</span>
                            </button>
                        </div>

                        {/* Quản lý thông báo */}
                        <div>
                            <button className="w-full bg-yellow-light hover:bg-yellow-dark text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg
                                    className="fill-current w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                </svg>
                                <span>Quản lý thông báo</span>
                            </button>
                        </div>

                        {/* Quản lý điểm thưởng */}
                        <div>
                            <button className="w-full bg-yellow-light hover:bg-yellow-dark text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg
                                    className="fill-current w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                </svg>
                                <span>Quản lý điểm thưởng</span>
                            </button>
                        </div>

                        {/* Danh sách yêu thích */}
                        <div>
                            <button className="w-full bg-yellow-light hover:bg-yellow-dark text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg
                                    className="fill-current w-4 h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                <span>Danh sách yêu thích</span>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col flex={5}>
                    <ChangeInformation></ChangeInformation>
                </Col>
            </Row>
        </div>
    );
}
