import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthModal from "../AuthModal/AuthModal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MobileMenuBar from "../MobileMenuBar/MobileMenuBar";
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav";

const Layout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  // login modal open
  const openLoginModal = () => {
    document.body.classList.add("body-mobile");
    setIsLoginOpen(true);
  };

  // login modal close
  const closeLoginModal = () => {
    document.body.classList.remove("body-mobile");
    setIsLoginOpen(false);
  };

  // user sidebar open
  const openUserMenu = () => {
    document.body.classList.add("body-mobile");
    setUserMenuOpen(true);
  };
  // user sidebar close
  const closeUserMenu = () => {
    document.body.classList.remove("body-mobile");
    setUserMenuOpen(false);
  };
  // user logout
  const userLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  // switch signup modal
  const switchToSignup = () => {
    setShowLogin(false);
  };
  // switch login modal
  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Header openLoginModal={openLoginModal} openUserMenu={openUserMenu} />
      <MobileMenuBar />
      <Outlet />
      <Footer />
      {/* auth */}
      <AuthModal
        isLoginOpen={isLoginOpen}
        closeLoginModal={closeLoginModal}
        closeUserMenu={closeUserMenu}
        isUserMenuOpen={isUserMenuOpen}
        userLogout={userLogout}
        showLogin={showLogin}
        switchToLogin={switchToLogin}
        switchToSignup={switchToSignup}
      />
      <MobileBottomNav/>
    </>
  );
};

export default Layout;
