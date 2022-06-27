import { auth } from "@/utils/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegularRoute from "./regular";
import Login from "@/Pages/Login";
import Register_1 from "@/Pages/Register/Register_1";

export default function WebRoute() {
    // const user = auth();
    // const userData = user.user_data ? user.user_data : undefined;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register_1 />} />
                {/* <Route exact path="/" element={<RegularRoute />} /> */}
            </Routes>
        </BrowserRouter>
    )
}