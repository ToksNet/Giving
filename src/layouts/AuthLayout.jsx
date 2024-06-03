import React from "react";
import SaleBanner from "../components/SaleBanner";
import Authnav from "../components/Authnav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <SaleBanner />
      <Authnav />

      <Outlet />
    </>
  );
};

export default AuthLayout;
