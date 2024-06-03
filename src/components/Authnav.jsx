import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaAngleDown } from "react-icons/fa";

function Authnav() {
  return (
    <div className="fixed top-[49px] w-full h-[93px] border-b-[1px] border-[#D4B4B4] flex items-center px-4 bg-white z-50">
      <div className="flex items-center justify-between w-full">
        <div className="flex pl-4 items-center" style={{ width: "175px" }}>
          <img src="/images/GV3N Blck PNG.png" />
        </div>

        <div className="flex space-x-10  text-black">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-300" : "text-black mr-20    "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-gray-300" : "text-black"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-gray-300" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/auth/signup"
            className={({ isActive }) =>
              isActive ? "text-black-300" : "text-black ml-10"
            }
          >
            Sign Up
          </NavLink>
        </div>

        {/* Search Form */}
        <div
          className="flex items-center bg-[#F5F5F5] rounded-md mr-20"
          style={{
            width: "301px",
            height: "32px",
            borderRadius: "4px",
            padding: "7px 0px 7px 20px",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none flex-1 border-none"
            style={{ border: "none", background: "transparent", color: "#000" }}
          />
          <FaSearch className="text-gray-500 mr-5" />
        </div>
      </div>
    </div>
  );
}

export default Authnav;
