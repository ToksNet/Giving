import React from "react";
import SaleBanner from "../components/SaleBanner";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <SaleBanner />

        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
