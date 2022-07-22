import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";

import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { logout } from "../../utils/auth";

const DrawerMenu = ({ categories, user, profileUser }) => {
    // const location = useLocation();
    // const HOST = process.env.REACT_APP_BASE_HOST;

    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    return (
        <>
            <div className="hover:text-yellow-light p-2 rounded-xl block md:hidden ">
                <MenuOutlined
                    aria-hidden="true"
                    onClick={showDrawer} 
                    style={{ height: "24px",
                    width: "24px"
                }}/>
            </div>
            <Drawer
                title="MENU"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {user ? (
                    <div>
                        <Link to="/profile">
                            {/* <ReactImageFallback
                  className="min-w-full block flex-shrink-0 rounded-full ring ring-gray-500"
                  src={HOST + "/" + profileUser.avatar}
                  alt="logo"
                  fallbackImage="/avata-default.jpg"
                  style={{ height: 200 }}
                /> */}
                            <div>
                                <p className="font-bold text-xl text-center">
                                    {profileUser?.fullname}
                                </p>
                            </div>
                        </Link>
                        <hr></hr>
                        <Link to="/profile" >
                            <div className="p-2 pl-1 font-bold text-black">Thông tin cá nhân</div>
                        </Link>
                        <hr></hr>
                        <Link to="/profile/change-password">
                            <div className="p-2 pl-1 font-bold text-black" >Thay đổi mật khẩu</div>
                        </Link>
                        <Link to="/profile/my-order">
                            <div className="p-2 pl-1 font-bold text-black" >Đơn hàng của tôi</div>
                        </Link>
                        <Link to="/profile/wish-list">
                            <div className="p-2 pl-1 font-bold text-black" >Danh sách yêu thích</div>
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
                <hr></hr>
                <div className="p-2 pl-1 font-bold">
                    <a onClick={showChildrenDrawer} className="text-black">Category</a>
                </div>
                <Drawer
                    title="Category"
                    width={240}
                    closable={false}
                    placement="left"
                    onClose={onChildrenDrawerClose}
                    visible={childrenDrawer}
                    bodyStyle={{
                        padding: 0,
                    }}
                    style={{ color: "black" }}
                >
                    {categories.map((item, index) => (
                        <div key={index}>
                            <div className="p-6 font-medium">
                                <Link to={"/category/" + item?._id} className="text-black">{item?.name}</Link>
                            </div>
                            <hr></hr>
                        </div>
                    ))}
                </Drawer>
                <hr></hr>
                {/* {user && profileUser?.role != 0 ? (<Link to="/tutor">
            <div className="p-2 pl-1 font-bold" >Tutor Manager</div>
          </Link>) : (<></>)} */}
                {user ? (
                    <>
                        <hr></hr>
                        <Link to="/login">
                            <div className="p-2 pl-1 font-bold text-black">
                                <a onClick={logout}>Đăng xuất</a>
                            </div>
                        </Link>
                    </>
                ) : (
                    <>
                        <hr></hr>
                        <Link to="/login">
                            <div className="p-2 pl-1 font-bold text-black">Đăng nhập</div>
                        </Link>
                        <hr></hr>
                        <Link to="/register">
                            <div className="p-2 pl-1 font-bold text-black">Đăng ký</div>
                        </Link>
                    </>
                )}
            </Drawer>
        </>
    );
}

export default DrawerMenu