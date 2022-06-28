import Footer from "@/components/Layouts/Footer/Footer";
import Header from "@/components/Layouts/Header/Header";
import LayoutMain from "@/components/Layouts/LayoutMain";
import LayoutProfile from "@/components/Layouts/LayoutProfile";
import ChangeInformation from "@/page/UserProfile/ChangeInformation";
import ChangePassword from "@/page/UserProfile/ChangePassword";
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
      </Routes>
    </>
  );
};

export default Profile;
