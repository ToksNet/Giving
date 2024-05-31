
import React from "react";
import Footer from "../components/Footer";
import  Home from "../pages/Home/Home";

const MainLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
