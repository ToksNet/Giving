import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SaleBanner from "../components/SaleBanner";

const MainLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />
        <NavBar />

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
