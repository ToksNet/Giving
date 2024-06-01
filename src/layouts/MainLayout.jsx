import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />
        <NavBar />
        <Hero />
        <Categories />

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
