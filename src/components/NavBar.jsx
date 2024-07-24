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
import { MdClose, MdMail } from "react-icons/md";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const [nav, setNav] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="fixed md:top-[47px] w-full md:h-[93px] border-b-[1px] border-[#D4B4B4] flex items-center pr-4 md:px-4 bg-white z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex md:pl-4 pl-0 items-center">
          <img
            src="./images/GV3N Blck PNG.png"
            className=" w-[120px] md:w-[175px]"
            alt="Logo"
          />
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

          {nav ? (
            <div
              className={`bg-white h-screen w-[90%] pt-7 fixed top-0 right-0 transition-all translate-x-0`}
            >
              <div className="w-full bg-[#EA4335] flex justify-between py-[14px] px-[24px] items-center">
                <div>
                  <p className="text-white">GV3N MARKET PLACE</p>
                </div>
                <div onClick={handleNav}>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10466 5.55305C3.56551 6.0922 3.6013 7.00168 4.10682 7.5072L13.599 16.9994L15.5527 15.0458L6.06043 5.55359C5.55499 5.04815 4.64389 5.01382 4.10466 5.55305Z"
                      fill="white"
                    />
                    <path
                      d="M27.6259 29.0743C28.1651 28.5351 28.1777 27.6709 27.6722 27.1654L18.5346 18.0277L16.581 19.9813L25.7186 29.119C26.224 29.6244 27.0868 29.6134 27.6259 29.0743Z"
                      fill="white"
                    />
                    <path
                      d="M27.9225 7.69667L6.3107 29.3084C5.80518 29.814 4.83127 29.9153 4.29212 29.3761C3.75297 28.837 3.85165 27.8603 4.35709 27.3548C4.86253 26.8494 25.9689 5.74306 25.9689 5.74306C26.4744 5.23755 27.5109 5.07736 28.0501 5.61651C28.5892 6.15566 28.428 7.19116 27.9225 7.69667Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col h-[85%] justify-between items-center">
                <div className="flex h-screen flex-col pr-3 pt-14">
                  <a href="#" className="flex gap-11 items-center mb-[10px]">
                    <span>Women's Fashion</span>
                    <FaAngleRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex gap-11 items-center mb-[10px]">
                    <span>Women's Fashion</span>{" "}
                    <FaAngleRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="mb-[9px]">
                    Electronics
                  </a>
                  <a href="#" className="mb-[9px]">
                    Home & Lifestyle
                  </a>
                  <a href="#" className="mb-[9px]">
                    Medicine
                  </a>
                  <a href="#" className="mb-[9px]">
                    Sport & Outdoor
                  </a>
                  <a href="#" className="mb-[9px]">
                    Baby's & Toy
                  </a>
                  <a href="#" className="mb-[9px]">
                    Groceries & Pets
                  </a>
                  <a href="#" className="mb-[9px]">
                    Health & Beauty
                  </a>
                </div>
                
                <div className="mt-28">
                  <div className="flex flex-col items-center">
                    <button className="bg-[#EA4335] text-white py-3 text-xs px-7 font-medium">
                      Submit a ticket
                    </button>

                    <a href="#" className="flex mt-7 items-end gap-3">
                      <MdMarkunread className="w-full h-8" />
                      <p className="font-medium">customer.support@gv3n.cc</p>
                    </a>
                  </div>

                  <div className="mt-14">
                    <p className="text-xs text-center">
                      &copy; Copyrightgv3n 2024 All right right resolved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`bg-white h-screen w-[90%] fixed top-0 right-0 transition-all translate-x-full`}
            ></div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 pt-[160px] w-[90%] h-fit bg-white text-black rounded-md shadow-lg z-50">

          <div className="mb-10">
            <div className="bg-[#e94335] flex items-center justify-between pr-4">
              <div>
                <img src="./images/GV3N-LogoWhite.png" className="w-20" alt="" />
              </div>
              <div className="" onClick={toggleDropdown}>
               <MdClose className="text-3xl text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="md:border-r-[1px] pl-16 pr-20 flex flex-col border-[#D4B4B4] p-4">
              <Link to="/home" className="flex justify-between items-center mb-[10px]">
                <span>Women's Fashion</span>
                <FaAngleRight className="w-4 h-4" />
              </Link>
              <Link to="/home" className="flex justify-between items-center mb-[10px]">
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

            <div className="text-center mt-[30px]">
              <button className="bg-[#e94335] text-white py-2 px-4">Submit a ticket</button>

              <div className="flex gap-[4.42px] justify-center mt-5 items-center">
                <MdMail className="w-[26.52px] h-[26.52]"/>
                <a href="#" className="text-black text-[14px] font-semibold">customer.support@gv3n.cc</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
