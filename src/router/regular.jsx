import LayoutHomePage from "@/components/Layouts/LayoutHomePage";
import LayoutMain from "@/components/Layouts/LayoutMain";
import Category from "@/page/Category";
import NotFound from "@/page/NotFound";
import ProductDetails from "@/page/ProductDetails";
import Search from "@/page/Search";

import { Route, Routes } from "react-router-dom";

export default function RegularRoute() {
  return (
    <LayoutMain>
      <Routes>
        <Route exact path="" element={<LayoutHomePage />} />
        <Route exact path="/category/:idCate" element={<Category />} />
        <Route exact path="/search" element={<Search />} />
        <Route
          exact
          path="/product-detail/:idProduct"
          element={<ProductDetails />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </LayoutMain>
  );
}
