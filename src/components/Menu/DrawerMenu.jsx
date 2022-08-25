import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "./DrawerMenu.css"

import userStore from "@/stores/user";

const DrawerMenu = ({ categories, profileUser }) => {
  const { token, logout } = userStore((state) => state);

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
          style={{ height: "20px", width: "30px", fontSize: "20px" }}
        />
      </div>
      <Drawer
        title="MENU"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        headerStyle={{ fontStyle: "bold"}}
      >
        {token ? (
          <div>
            <Link to="/profile">
              <div>
                <p className="font-bold text-xl text-center">
                  {profileUser?.fullname}
                </p>
              </div>
            </Link>
            <hr></hr>
            <Link to="/profile">
              <div className="p-2 pl-1 font-bold text-black">
                Thông tin cá nhân
              </div>
            </Link>
            <hr></hr>
            <Link to="/profile/change-password">
              <div className="p-2 pl-1 font-bold text-black">
                Thay đổi mật khẩu
              </div>
            </Link>
            <hr></hr>
            <Link to="/profile/my-order">
              <div className="p-2 pl-1 font-bold text-black">
                Đơn hàng của tôi
              </div>
            </Link>
            <hr></hr>
            <Link to="/profile/wish-list">
              <div className="p-2 pl-1 font-bold text-black">
                Danh sách yêu thích
              </div>
            </Link>
          </div>
        ) : (
          <></>
        )}
        <hr></hr>
        <div className="p-2 pl-1 font-bold">
          <a onClick={showChildrenDrawer} className="text-black">
            Danh mục
          </a>
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
          // style={{ color: "#F5B301", fontStyle: "bold" }}
        >
          {categories.map((item, index) => (
            <div key={index}>
              <div className="p-6 font-bold">
                <Link to={"/category/" + item?._id} className="text-black">
                  {item?.name}
                </Link>
              </div>
              <hr></hr>
            </div>
          ))}
        </Drawer>
        <hr></hr>
        {profileUser?.role === 1000 ? (<Link to="/admin">
            <div className="p-2 pl-1 font-bold text-black" >Admin</div>
          </Link>) : (<></>)}
        {token ? (
          <>
            <hr></hr>
            <Link to="/login">
              <div className="p-2 pl-1 font-bold">
                <a onClick={logout} className="text-black">Đăng xuất</a>
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
};

export default DrawerMenu;
