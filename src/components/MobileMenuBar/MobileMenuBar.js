import React from "react";
import { Link } from "react-router-dom";

const MobileMenuBar = () => {
  return (
    <>
      <div className="oflow-at black-bg"></div>
      <div id="mobile-menu-bar-left" className="oflow-at mobile-menu-bar">
        <div className="oflow-hd mobile-bar-logo">
          <Link to="">
            {/* <img src="" /> */}
          </Link>
        </div>
        <nav className="oflow-hd mobile-bar-admin-ul scroll"></nav>
      </div>
      <button
        className="mobile-bar-menu-remove remove-all"
        id="mobile-product-menu-remove-left"
      >
        <span className="lnr lnr-cross"></span>
      </button>
    </>
  );
};

export default MobileMenuBar;
