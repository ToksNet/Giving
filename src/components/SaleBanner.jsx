import React, { useState } from "react";

const SaleBanner = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="fixed top-0 w-full h-12 bg-black text-white flex justify-between items-center px-4 z-50">
      <div className="flex-1 text-center">
        <span>
          Summer Sales For All Swim Suits And Free Express Delivery - Off 50%!{" "}
        </span>
        <span className="font-bold underline">ShopNow</span>
      </div>
      <div className="relative pr-9">
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          English
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                English
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Spanish
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                French
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                German
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaleBanner;
