import LayoutHomePage from "@/components/Layouts/LayoutHomePage";
import LayoutMain from "@/components/Layouts/LayoutMain";
import Category from "@/page/Category";
import ProductDetails from "@/page/ProductDetails";
import Search from "@/page/Search";

import { Route, Routes } from "react-router-dom";

export default function RegularRoute({ userData }) {
  return (
    <LayoutMain user={userData}>
      <Routes>
        <Route exact path="" element={<LayoutHomePage />} />
        <Route exact path="/category/:idCate" element={<Category />} />
        <Route exact path="/search" element={<Search />} />
        <Route
          exact
          path="/product-detail/:idCate/:idProduct"
          element={<ProductDetails />}
        />
      </Routes>
    </LayoutMain>
  );
}
