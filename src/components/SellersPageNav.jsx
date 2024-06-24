import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai"; // Assuming you're using react-icons for the 3 dot icon

const SellersPageNav = () => {
  const navItems = [
    { name: "Dashboard", path: "/sellers/dashboard" },
    { name: "Track Orders", path: "/sellers/track" },
    { name: "Products", path: "/sellers/product" },
    { name: "Transaction", path: "/transaction" },
    { name: "Store Analytics", path: "/store-analytics" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="w-full ">
      <div className="hidden mx-40 lg:flex mt-40 items-center justify-between bg-[#FBECEC] w-[894px] h-[56px] rounded-md shadow-md p-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "bg-[#DB4444] text-white px-4 py-2 rounded-md"
                : "text-black px-4 py-2"
            }
          >
            {item.name}
          </NavLink>
        ))}
        <div className="relative w-12 h-12">
          <img
            src="../images/Rectangle 16.png"
            alt="Background"
            className="w-full h-full"
          />
          <img
            src="../images/more.png"
            alt="Dots Background"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5"
          />
          <AiOutlineMore className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black" />
        </div>
      </div>
    </div>
  );
};

export default SellersPageNav;
