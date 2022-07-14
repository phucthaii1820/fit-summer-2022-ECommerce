import LayoutHomePage from "@/components/Layouts/LayoutHomePage";
import LayoutMain from "@/components/Layouts/LayoutMain";
import Login from "@/page/Login";
import ProductDetails from "@/page/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";

export default function RegularRoute({ userData }) {
  return (
      <Routes>
        <Route
          exact
          path="profile/*"
          element={userData ? <LayoutMain user={userData}><Profile /></LayoutMain> : <Login />}
        />
        <Route exact path="" element={<LayoutMain user={userData}><LayoutHomePage /></LayoutMain>} />
        <Route exact path="/:id" element={<LayoutMain user={userData}><ProductDetails /></LayoutMain>} />
      </Routes>
  );
}
