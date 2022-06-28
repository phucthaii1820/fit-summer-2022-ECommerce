import {
  BellOutlined,
  HeartOutlined,
  LockOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/AntdIcon";
import { Avatar } from "antd";
import React from "react";
import ButtonProfile from "../button/ButtonProfile";

const LayoutProfile = ({ children, title }) => {
  return (
    <>
      <div style={{ color: "#797979" }}>Tài khoản / Thông tin tài khoản</div>
      <div className="grid grid-cols-3 gap-4 pt-12">
        <div className="col-span-1 mr-2">
          <div className="flex items-center -mt-4">
            <Avatar
              size={78}
              icon={
                <UserOutlined
                  style={{
                    verticalAlign: "middle",
                  }}
                />
              }
            />
            <div className="ml-4">
              <div className="font-semibold text-xl text-yellow-light">
                Nguyễn Hoài thương
              </div>
              <div style={{ color: "#797979" }}>Menber</div>
            </div>
          </div>
          <div className="mt-6 flex flex-col space-y-4">
            <ButtonProfile
              title="Thông tin tài khoản"
              icon={
                <UserOutlined
                  style={{
                    verticalAlign: "middle",
                  }}
                />
              }
            />
            <ButtonProfile
              title="Thay đổi mật khẩu"
              icon={
                <LockOutlined
                  style={{
                    verticalAlign: "middle",
                  }}
                />
              }
            />
            <ButtonProfile
              title="Đơn hàng của tôi"
              icon={
                <MenuFoldOutlined
                  style={{
                    verticalAlign: "middle",
                  }}
                />
              }
            />
            <ButtonProfile
              title="Quản lý thông báo"
              icon={
                <BellOutlined
                  style={{
                    verticalAlign: "middle",
                  }}
                />
              }
            />
            <ButtonProfile
              title="Danh sách yêu thích"
              icon={
                <HeartOutlined
                  style={{
                    verticalAlign: "middle",
                  }}
                />
              }
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="px-16 border-l border-dashed">
            <div className="font-semibold mb-12 text-xl text-yellow-light border-black">
              {title}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutProfile;
