import { auth } from "@/utils/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegularRoute from "./regular";
import Login from "@/page/Login";
import Register from "@/page/Register/Register";
import Profile from "./profile";
import LayoutMain from "@/components/Layouts/LayoutMain";

export default function WebRoute() {
  const user = auth();
  const userData = user?.user_data ? user.user_data : undefined;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<RegularRoute userData={userData} />} />
        <Route
          exact
          path="profile/*"
          element={userData ? <LayoutMain user={userData}><Profile /></LayoutMain> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
