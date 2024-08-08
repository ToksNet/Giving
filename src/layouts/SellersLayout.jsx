import React from "react";
import Footer from "../components/Footer";
import SellersNavbar from "../components/SellersNavbar";
import SaleBanner from "../components/SaleBanner";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
import SellersPageNav from "../components/SellersPageNav";
import FullWidthTabs from "../components/SellersPageNav";
const SellersLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />
        <SellersNavbar />
        <SellersPageNav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default SellersLayout;
