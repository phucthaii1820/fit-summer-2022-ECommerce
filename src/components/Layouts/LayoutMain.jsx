import React from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutMain = ({ children, user }) => {
  return (
    <>
      <Header user={user} />
      <div className="py-6" style={{backgroundColor: "#F1F1F1"}}>
        <div className="container mx-auto">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutMain;
