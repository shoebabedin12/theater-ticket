import React from "react";
import HomeHero from "../components/Home/HomeHero";
import HomePromo from "../components/Home/HomePromo";
import HomeEvent from "../components/Home/HomeEvent";
import HomePastEvent from "../components/Home/HomePastEvent";
import HomeSignup from "../components/Home/HomeSignup";

const Home = () => {
  return (
    <>
      <div style={{ height: "30px" }} className="header_fix oflow-hd"></div>
      {/* Home Hero */}
      <HomeHero />
      <div
        style={{ height: "100px" }}
        className="divider_height oflow-hd"
      ></div>
      {/*  Home Promo */}
      <HomePromo />

      <div
        style={{ height: "100px" }}
        className="divider_height oflow-hd"
      ></div>

      {/* Home Event */}

      <HomeEvent />

      <div
        style={{ height: "100px" }}
        className="divider_height oflow-hd"
      ></div>

      {/* Home Past Event */}

      <HomePastEvent />

      <div
        style={{ height: "100px" }}
        className="divider_height oflow-hd"
      ></div>

      {/* Home Sign up */}

      <HomeSignup />

      <div
        style={{ height: "100px" }}
        className="divider_height oflow-hd"
      ></div>
    </>
  );
};

export default Home;
