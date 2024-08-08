import React from "react";
import SaleBanner from "../components/SaleBanner";
import Authnav from "../components/Authnav";
import { Outlet } from "react-router-dom";
import HorizontalLinearStepper from "../components/ProfileStepper";


const ProfileLayout = () => {
  return (
    <>
      <SaleBanner />
      <div className="">
      <Outlet />
      </div>
    </>
  );
};

export default ProfileLayout;
