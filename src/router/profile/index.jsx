import Footer from "@/components/Layouts/Footer/Footer";
import Header from "@/components/Layouts/Header/Header";
import LayoutMain from "@/components/Layouts/LayoutMain";
import LayoutProfile from "@/components/Layouts/LayoutProfile";
import ChangeInformation from "@/page/UserProfile/ChangeInformation";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Profile = () => {
  return (
    <LayoutProfile>
      <Routes>
        <Route exact path="changeinfo" element={<ChangeInformation />} />
      </Routes>
    </LayoutProfile>
  );
};

export default Profile;
