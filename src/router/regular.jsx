import { getAllCategories } from "@/API/category";
import LayoutHomePage from "@/components/Layouts/LayoutHomePage";
import LayoutMain from "@/components/Layouts/LayoutMain";
import Category from "@/page/Category";
import ProductDetails from "@/page/ProductDetails";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function RegularRoute({ userData }) {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   async function fetchCategories() {
  //     try {
  //       const res = await getAllCategories()
  //       setCategories(res);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchCategories();
  // }, []);

  return (
    <LayoutMain user={userData}>
      <Routes>
        <Route exact path="" element={<LayoutHomePage />} />
        {/* {
          categories.map((item, index) => (
            <Route exact path={"/category/" + item._id} key={index} element={
              <Category idCategory={item._id} nameCategory={item.name} />
            } />
          ))
        } */}
        <Route exact path="/category/:idCate" element={<Category />} />
        <Route exact path="/product-detail/:idProduct" element={<ProductDetails />} />
      </Routes>
    </LayoutMain>
  );
}
