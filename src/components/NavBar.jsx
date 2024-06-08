import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaAngleDown,
  FaBars,
  FaAngleRight,
} from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="fixed top-[47px] w-full h-[93px] border-b-[1px] border-[#D4B4B4] flex items-center px-4 bg-white z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex pl-4 items-center" style={{ width: "175px" }}>
          <img src="./images/GV3N Blck PNG.png" alt="Logo" />
        </div>

        {/* Search Form */}
        <div
          className="hidden md:flex items-center bg-[#F5F5F5] rounded-md"
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

        {/* Mobile Icons and Dropdown Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <FaSearch className="text-gray-500 w-6 h-6" />
          <PiUserCircleFill className="w-6 h-6" />
          <FaShoppingCart className="w-6 h-6" />
          <button onClick={toggleDropdown} className="focus:outline-none">
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        {/* Profile, Help, Cart Sections */}
        <div className="hidden md:flex items-center space-x-4 pr-9">
          {/* Profile */}
          <div className="flex items-center space-x-2">
            <PiUserCircleFill className="w-8 h-8" />
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
            <FaShoppingCart className="w-8 h-8" />
            <span className="opacity-50">Cart</span>
            <FaAngleDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute top-[93px] right-0 mt-2 w-full bg-white text-black rounded-md shadow-lg z-50">
          <div className="border-r-[1px] flex flex-col border-[#D4B4B4] p-4">
            <Link to="/home" className="flex gap-11 items-center mb-[10px]">
              <span>Women's Fashion</span>
              <FaAngleRight className="w-4 h-4" />
            </Link>
            <Link to="/home" className="flex gap-11 items-center mb-[10px]">
              <span>Men's Fashion</span>
              <FaAngleRight className="w-4 h-4" />
            </Link>
            <Link to="/home" className="mb-[9px]">
              Electronics
            </Link>
            <Link to="/home" className="mb-[9px]">
              Home & Lifestyle
            </Link>
            <Link to="/home" className="mb-[9px]">
              Medicine
            </Link>
            <Link to="/home" className="mb-[9px]">
              Sport & Outdoor
            </Link>
            <Link to="/home" className="mb-[9px]">
              Baby's & Toy
            </Link>
            <Link to="/home" className="mb-[9px]">
              Groceries & Pets
            </Link>
            <Link to="/home" className="mb-[9px]">
              Health & Beauty
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
