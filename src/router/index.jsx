import { auth } from "@/utils/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegularRoute from "./regular";
import Login from "@/page/Login";
import Register from "@/page/Register/Register";

export default function WebRoute() {
  const user = auth();
  const userData = user?.user_data ? user.user_data : undefined;
  console.log(userData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<RegularRoute userData={userData} />} />
      </Routes>
    </BrowserRouter>
  );
}
