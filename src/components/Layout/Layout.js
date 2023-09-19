import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileMenuBar from "../MobileMenuBar/MobileMenuBar";

const Layout = () => {
  return (
    <>
      <Header />
      <MobileMenuBar/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
