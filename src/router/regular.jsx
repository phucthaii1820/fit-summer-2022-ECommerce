import Login from "@/Pages/Login";
import Register_1 from "@/Pages/Register/Register_1";
import { Route, Routes } from "react-router-dom";

export default function RegularRoute({ userData }) {
    return(
        <Routes>
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register_1 />} />
        </Routes>
    )
}