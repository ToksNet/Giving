import React from "react";
import SaleBanner from "../components/SaleBanner";
import Authnav from "../components/Authnav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <SaleBanner />
      {/* <Authnav /> */}
      <div className="lg:flex md:flex md:flex-col-reverse lg:flex-row items-center mt-[190px]">
      <div className="w-full lg:w-1/2">
      <img
            src="/images/SideImage.png"
            alt="Signup"
            className="w-full"
          />
      </div>
      <div className="flex-1 w-full lg:w-1/2 px-4 md:px-0">
      <Outlet />
      </div>
      </div>
    </>
  );
};

export default AuthLayout;
