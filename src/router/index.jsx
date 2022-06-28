import { auth } from "@/utils/auth";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import RegularRoute from "./regular";
import Login from "@/page/Login";
import Register_1 from "@/page/Register/Register_1";
import ChangeInformation from "@/page/UserProfile/ChangeInformation";

export default function WebRoute() {
    // const user = auth();
    // const userData = user.user_data ? user.user_data : undefined;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register_1 />} />
                <Route path="/*" element={<RegularRoute />} />
            </Routes>
        </BrowserRouter>
    )
}