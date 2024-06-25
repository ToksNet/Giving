import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:space-x-4 items-center md:items-center md:mx-10 justify-between">
        <div className="flex space-x-4">
          {[
            { text: "Orders", path: "/sellers/orders" },
            { text: "Delivered", path: "/sellers/delivered" },
            { text: "Pending", path: "/sellers/pending" },
            { text: "Cancelled", path: "/sellers/cancelled" },
          ].map(({ text, path }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `py-2 px-4 text-[10px] w-20  md:w-[160px] md:text-[15px] text-center border-2 rounded-md transition-colors ${
                  isActive || activeButton === index
                    ? "bg-[#DB4444] text-white"
                    : "bg-white text-black"
                }`
              }
              onClick={() => handleButtonClick(index)}
            >
              {text}
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center mt-4 md:mt-0 md:ml-4">
          <NavLink
            to="/create-order"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 text-sm md:text-base rounded-md ${
                isActive ? "bg-[#DB4444] text-white" : "bg-[#DB4444] text-white"
              }`
            }
          >
            <span className="text-lg md:text-xl">+</span> Create Order
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
