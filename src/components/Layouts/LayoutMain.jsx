import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutMain = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ heightMin: "100vh" }}>{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default LayoutMain;
