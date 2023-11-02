import React, { Children } from "react";
import NavBar from "../../main-component/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
