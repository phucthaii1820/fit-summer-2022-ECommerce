import LayoutProfile from "@/components/Layouts/LayoutProfile";
import ChangeInformation from "@/page/UserProfile/ChangeInformation";
import ChangePassword from "@/page/UserProfile/ChangePassword";
import MyOrder from "@/page/UserProfile/MyOrder";
import WishList from "@/page/UserProfile/WishList";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Routes>
        <Route
          path="change-info"
          element={
            <LayoutProfile title="Thông tin tài khoản">
              <ChangeInformation />
            </LayoutProfile>
          }
        />
        <Route
          path="change-password"
          element={
            <LayoutProfile title="Thay đổi mật khẩu">
              <ChangePassword />
            </LayoutProfile>
          }
        />
        <Route
          path="wish-list"
          element={
            <LayoutProfile title="Danh sách yêu thích">
              <WishList />
            </LayoutProfile>
          }
        />
        <Route
          path="my-order"
          element={
            <LayoutProfile title="Đơn hàng của tôi">
              <MyOrder />
            </LayoutProfile>
          }
        />
      </Routes>
    </>
  );
};

export default Profile;
