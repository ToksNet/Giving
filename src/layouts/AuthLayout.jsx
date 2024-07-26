import React from "react";
import SaleBanner from "../components/SaleBanner";
import Authnav from "../components/Authnav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <SaleBanner />
      <Authnav />
      <div className="flex mt-[190px]">
      <div className="w-1/2">
      <img
            src="/images/SideImage.png"
            alt="Signup"
            className="w-full"
          />
      </div>
      <div className="w-1/2">
      <Outlet />
      </div>
      </div>
    </>
  );
};

export default AuthLayout;
