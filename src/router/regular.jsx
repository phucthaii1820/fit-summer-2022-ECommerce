import LayoutMain from "@/components/Layouts/LayoutMain";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";

export default function RegularRoute({ userData }) {
  console.log(userData);
  return (
    <LayoutMain>
      <Routes>
        <Route exact path="profile/*" element={<Profile />} />
      </Routes>
    </LayoutMain>
  );
}
