import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegularRoute from "./regular";
import Login from "@/page/Login";
import Register from "@/page/Register/Register";
import Profile from "./profile";
import LayoutMain from "@/components/Layouts/LayoutMain";
import ForgetPassword from "@/page/ForgetPassword";
import LayoutAdmin from "@/components/Layouts/Admin/LayoutAdmin";

import userStore from "@/stores/user";

export default function WebRoute() {
  // const user = auth();
  // const userData = user?.user_data ? user.user_data : undefined;
  const { user } = userStore((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route
          path="register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="forget-password"
          element={!user ? <ForgetPassword /> : <Navigate to="/" />}
        />
        <Route path="/*" element={<RegularRoute />} />
        <Route
          exact
          path="profile/*"
          element={
            user ? (
              <LayoutMain>
                <Profile />
              </LayoutMain>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route exact path="admin/*" element={<LayoutAdmin></LayoutAdmin>} />
      </Routes>
    </BrowserRouter>
  );
}
