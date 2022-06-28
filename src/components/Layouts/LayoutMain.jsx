import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutMain = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-gray-default pt-6">
        <div style={{ heightMin: "100vh" }} className="container mx-auto">
          <div>{children}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LayoutMain;
