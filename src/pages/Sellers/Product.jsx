import React, { useState } from "react";
import SellersPageNav from "../../components/SellersPageNav";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai"; // Assuming you're using react-icons for the down arrow

function Product() {
  return (
    <>
      <SellersPageNav />
      <div className="p-4 md:mt-40  mt-40 md:mx-10">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between md:justify-between">
            <h1 className="md:text-2xl md:py-1 py-5 text-lg  font-bold  md:mb-0">
              Product
            </h1>
            <button className="flex  items-center border border-black font-medium text-gray-500 px-3 py-2 rounded-md">
              Export CSV
            </button>
          </div>
          <div className="flex justify-center mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex items-center bg-[#F5F5F5] md:mt-[-38px] rounded-md w-[300px] md:w-80 h-10 gap-2">
              <FaSearch className="text-gray-500 ml-2" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none flex-1 border-none text-sm md:text-base"
              />
              <button className="bg-[#DB4444] text-white px-2 py-1 h-full rounded-r-md text-sm md:text-base">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
