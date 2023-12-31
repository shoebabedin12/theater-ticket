import React from "react";
import HomeEvent from "../components/Home/HomeEvent";
import HomeHero from "../components/Home/HomeHero";
import HomePastEvent from "../components/Home/HomePastEvent";
import HomePromo from "../components/Home/HomePromo";
import HomeSignup from "../components/Home/HomeSignup";
import DividerHeight from "../components/SectionDevider/DividerHeight";
import HeaderFix from "../components/SectionDevider/HeaderFix";

const Home = () => {
  
  return (
    <>
      {/* section devider */}
      <HeaderFix />
      {/* Home Hero */}
      <HomeHero />
      {/* section devider */}
      <DividerHeight />
      {/*  Home Promo */}
      <HomePromo />
      {/* section devider */}
      <DividerHeight />
      {/* Home Event */}
      <HomeEvent />
      {/* section devider */}
      <DividerHeight />
      {/* Home Past Event */}
      <HomePastEvent />
      {/* section devider */}
      <DividerHeight />
      {/* Home Sign up */}
      <HomeSignup />
      {/* section devider */}
      <DividerHeight />
      
    </>
  );
};

export default Home;
