import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SaleBanner from "../components/SaleBanner";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />
        <NavBar />
        <Hero />
        <Categories />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
