import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SaleBanner from "../components/SaleBanner"
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Home from '../pages/Home/Home'

const MainLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />
        <NavBar />
        <Hero />
        <Categories />
         <Home></Home>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
