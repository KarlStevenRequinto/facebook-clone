import React from "react";
import NavBar from "../../main-component/navbar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="layout">{children}</main>
    </>
  );
};

export default Layout;
