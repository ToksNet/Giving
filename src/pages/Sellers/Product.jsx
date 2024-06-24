import React from "react";
import SellersPageNav from "../../components/SellersPageNav";
import { FaSearch } from "react-icons/fa";

function Product() {
  return (
    <>
      <SellersPageNav />
      <div className="p-4 md:mt-20 mt-40 md:mx-10">
        <div className="md:inline-flex">
          <h1 className="text-2xl ml-5 font-bold mb-4 md:mb-0 ">
            Track Orders
          </h1>
        </div>

        <div className="flex justify-center  md:justify-start">
          <div className="flex items-center bg-[#F5F5F5] rounded-md w-[300px] md:w-80  h-10 md:h-10  gap-2">
            <FaSearch className="text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none flex-1 border-none text-sm md:text-base"
            />
            <button className="bg-[#DB4444] text-white px-2 py-1  h-full justify-end rounded-r-md text-sm md:text-base">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
