import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCartShopping,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FaSearch, FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed top-[49px] w-full h-[93px] border-b-[1px] border-[#D4B4B4] flex items-center px-4 bg-white z-50">
      <div className="flex items-center justify-between w-full">
        {/* GV3N MARKET PLACE */}
        <div className="flex pl-4 items-center" style={{ width: "275px" }}>
          <h1 className="font-bold pl-6 text-xxl" style={{ fontSize: "22px" }}>
            GV3N MARKET PLACE
          </h1>
        </div>

        {/* Search Form */}
        <div
          className="flex items-center bg-[#F5F5F5] rounded-md"
          style={{
            width: "391px",
            height: "32px",
            borderRadius: "4px",
            padding: "7px 0px 7px 20px",
            gap: "10px",
          }}
        >
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none flex-1 border-none"
            style={{ border: "none", background: "transparent", color: "#000" }}
          />
          <button className="bg-[#DB4444] text-white px-4 py-1 rounded-r-md">
            Search
          </button>
        </div>

        {/* Profile, Help, Cart Sections */}
        <div className="flex items-center space-x-4 pr-9">
          {/* Profile */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCircleUser} className="w-8 h-8" />
            <span className="opacity-50">Account name</span>
          </div>
          <FaAngleDown className="w-4 h-4" />

          {/* Help */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faQuestionCircle} className="w-8 h-8" />
            <span className="opacity-50">Help</span>
            <FaAngleDown className="w-4 h-4" />
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCartShopping} className="w-8 h-8" />
            <span className="opacity-50">Cart</span>
            <FaAngleDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
