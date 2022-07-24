import { auth } from "@/utils/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegularRoute from "./regular";
import Login from "@/page/Login";
import Register from "@/page/Register/Register";
import Profile from "./profile";
import LayoutMain from "@/components/Layouts/LayoutMain";
import LayoutAdmin from "@/components/Layouts/Admin/LayoutAdmin";

export default function WebRoute() {
    const user = auth();
    const userData = user?.user_data ? user.user_data : undefined;

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="login"
                    element={!userData ? <Login /> : <Navigate to="/" />}
                />
                <Route
                    path="register"
                    element={!userData ? <Register /> : <Navigate to="/" />}
                />
                <Route
                    path="/*"
                    element={<RegularRoute userData={userData} />}
                />
                <Route
                    exact
                    path="profile/*"
                    element={
                        userData ? (
                            <LayoutMain>
                                <Profile />
                            </LayoutMain>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                {/* Route to Admin  */}
                <Route
                    exact
                    path="admin/*"
                    element={<LayoutAdmin></LayoutAdmin>}
                />
            </Routes>
        </BrowserRouter>
    );
}
