import LayoutHomePage from "@/components/Layouts/LayoutHomePage";
import LayoutMain from "@/components/Layouts/LayoutMain";
import Category from "@/page/Category";
import Checkout from "@/page/Checkout";
import CompleteOrder from "@/page/CompleteOrder";
import NotFound from "@/page/NotFound";
import OrderDetails from "@/page/OrderDetails";
import ProductDetails from "@/page/ProductDetails";
import Search from "@/page/Search/Search";

import { Route, Routes } from "react-router-dom";

export default function RegularRoute() {
  return (
    <LayoutMain>
      <Routes>
        <Route exact path="" element={<LayoutHomePage />} />
        <Route exact path="/category/:idCate" element={<Category />} />
        <Route exact path="/search" element={<Search/>} />
        <Route
          exact
          path="/product-detail/:idProduct"
          element={<ProductDetails />}
        />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/complete-order" element={<CompleteOrder />} />
        <Route
          exact
          path="/order-detail/:idOrder"
          element={<OrderDetails />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </LayoutMain>
  );
}
