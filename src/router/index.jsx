import { auth } from "@/utils/auth";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import RegularRoute from "./regular";
import Login from "@/page/Login";
import Register from "@/page/Register/Register";
import ChangeInformation from "@/page/UserProfile/ChangeInformation";

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
