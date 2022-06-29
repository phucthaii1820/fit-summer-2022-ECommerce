import LayoutMain from "@/components/Layouts/LayoutMain";
import HomePage from "@/page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";

export default function RegularRoute({ userData }) {
    return (
        <LayoutMain>
            <Routes>
                <Route exact path="profile/*" element={<Profile />} />
                <Route exact path="" element={<HomePage />} />
            </Routes>
        </LayoutMain>
    );
}
