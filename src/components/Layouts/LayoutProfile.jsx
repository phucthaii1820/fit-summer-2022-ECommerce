import {
  HeartOutlined,
  LockOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import ButtonProfile from "../button/ButtonProfile";

import userStore from "@/stores/user";

const LayoutProfile = ({ children, title }) => {
  const { user, logout } = userStore((state) => state);
  // const [user, setUser] = useState({});

  // const getUser = async (event) => {
  //   try {
  //     const res = await getProfileUser();
  //     setUser(res?.user_data)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      <div style={{ color: "#797979" }}>Tài khoản / {title}</div>
      <div className="grid grid-cols-3 gap-4 pt-12">
        <div className="col-span-1 mr-2">
          <div className="flex items-center -mt-4 space-x-4">
            <div className="">
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
            </div>
            <div className="w-9/12">
              <div className="font-semibold text-xl text-yellow-light truncate w-full">
                {user?.fullname !== "" ? user.fullname : <>No Name</>}
              </div>
              <div style={{ color: "#797979" }}>Member</div>
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
              link="/profile/change-info"
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
              link="/profile/change-password"
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
              link="/profile/my-order"
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
              link="/profile/wish-list"
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
