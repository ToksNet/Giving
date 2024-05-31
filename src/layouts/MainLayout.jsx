
import React from "react";
import Footer from "../components/Footer";
import  Home from "../pages/Home/Home";
import  NavBar from "../components/NavBar";


const MainLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <NavBar/>
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
