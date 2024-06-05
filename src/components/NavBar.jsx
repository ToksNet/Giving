import React from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";


const NavBar = () => {
  return (
    <div className="fixed top-[45px] w-full h-12 pt-3 md:h-[93px] border-b-[1px] border-[#D4B4B4] flex items-center md:px-4 bg-white z-50">
      <div className="flex items-center justify-between w-full">
        {/* GV3N MARKET PLACE */}
        <div className="flex pl-4 items-center" style={{ width: "275px" }}>
          {/* <h1 className="font- pl-6 text-xs md:text-xl" style={{ fontSize: "22px" }}>
            GV3N MARKET PLACE
          </h1> */}
        </div>

        {/* Search Form */}
        <div
          className=" hidden md:flex items-center bg-[#F5F5F5] rounded-md"
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
        <div className="flex items-center gap-2 md:space-x-4 pr-9">
          {/* Profile */}

          <div className="">
            <FiSearch className="w-5 h-5 md:hidden" />
          </div>

          <div className="flex items-center space-x-2">
            <PiUserCircleFill className="w-5 h-5 md:w-8 md:h-8" />
            <span className="hidden md:flex opacity-50">Account name</span>
          </div>
          <FaAngleDown className="w-4 h-4 hidden md:flex" />

          {/* Help */}
          <div className="hidden md:flex items-center space-x-2">
            <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5 md:w-8 md:h-8" />
            <span className="opacity-50 hidden md:flex">Help</span>
            <FaAngleDown className="w-4 h-4 hidden md:flex" />
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-2">
            <FaCartShopping className="w-5 h-5 md:w-8 md:h-8" />
            <span className="opacity-50 hidden md:flex">Cart</span>
            <FaAngleDown className="w-4 h-4 hidden md:flex" />
          </div>

          <div className="">
            <RiMenu4Fill className="w-5 h-5 md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
