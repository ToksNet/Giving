import React from "react";
import Footer from "../components/Footer";
import SellersNavbar from "../components/SellersNavbar";
import SaleBanner from "../components/SaleBanner";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
import TrackOrder from "../pages/Sellers/TrackOrder";

const SellersTrackOrderLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />
        <SellersNavbar />
        <TrackOrder />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default SellersTrackOrderLayout;
