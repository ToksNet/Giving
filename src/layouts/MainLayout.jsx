import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SaleBanner from "../components/SaleBanner";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
import ExploreProduct from "../components/ExploreProduct";
import NewArrival from "../components/NewArrival";

const MainLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />
        <NavBar />
        <Hero />
        
        <NewArrival />
        <ExploreProduct />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
