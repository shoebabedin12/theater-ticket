import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileMenuBar from "../MobileMenuBar/MobileMenuBar";
import AuthModal from "../AuthModal/AuthModal";

const Layout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    document.body.classList.add('body-mobile');
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    document.body.classList.remove('body-mobile');
    setIsLoginOpen(false);
  };
  return (
    <>
      <Header openLoginModal={openLoginModal}/>
      <MobileMenuBar/>
      <Outlet />
      <Footer/>
      {/* auth */}
      <AuthModal isLoginOpen={isLoginOpen }/>
    </>
  );
};

export default Layout;
