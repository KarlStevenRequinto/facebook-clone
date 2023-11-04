import React, { Children } from "react";
import NavBar from "../../main-component/navbar";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <NavBar />
      <main className="layout">{children}</main>
    </>
  );
};

export default Layout;
