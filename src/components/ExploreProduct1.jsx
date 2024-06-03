import React from "react";

import { TbRectangleVerticalFilled } from "react-icons/tb";
import { TbPointFilled } from "react-icons/tb";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { MdStarHalf } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";

const ExploreProduct1 = () => {
  return (
    <>
      <div className="mx-32 mt-4">
        <div>
          <div className="mb-9">
            <div className="flex items-center gap-3">
              <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
              <p className="text-sm text-red-500">This Month</p>
            </div>

            <div className="flex  mt-5 items-end justify-between">
              <p className="text-2xl items-end font-medium">
                Best Selling Products
              </p>
              <div className="flex text-sm mr-12 gap-2 items-center">
                <button className="bg-red-500 text-center text-white rounded-sm w-[100px] h-[40px]">
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4">
            {/* 1st row */}
            <div className="mb-6 group relative">
              <div className="flex items-start w-52 py-2 pb-6 pr-1 pl-7 gap-3 bg-gray-200">
                <img
                  src="../images/Explore-10.png"
                  className="mt-4 w-32"
                  alt="Explore Image 1"
                />

                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="bg-black text-white absolute w-full text-center p-2 bottom-20 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
                Add to Cart
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">The north coat</p>
                  <div className="flex-col gap-2 mt-1">
                    <div className="flex gap-2">
                      <p className="text-sm text-orange-600 ">$260</p>
                      <p className="text-sm text-gray-600 line-through">$360</p>
                    </div>
                    <div className="flex">
                      <div className="flex">
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                      </div>
                      <p className="text-sm">(65)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 group relative">
              <div className="flex items-start w-52 py-2 pb-6 pr-1  pl-7 gap-3 bg-gray-200">
                <img
                  src="../images/Explore11.png"
                  className=" mt-4 w-[97px]"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="bg-black text-white absolute w-full text-center p-2 bottom-20 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
                Add to Cart
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">RGB liquid CPU Cooler</p>
                  <div className="flex-col gap-2 mt-1">
                    <div className="flex gap-2">
                      <p className="text-sm text-orange-600 ">$160</p>
                      <p className="text-sm text-gray-600 line-through">$170</p>
                    </div>

                    <div className="flex">
                      <div className="flex">
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                      </div>
                      <p className="text-sm">(65)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 group relative">
              <div className="flex items-start w-52 py-2 pb-6 pr-1  pl-7 gap-3 bg-gray-200">
                <img
                  src="../images/Explore-9.png"
                  className=" mt-4 w-32"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="bg-black text-white absolute w-full text-center p-2 bottom-20 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
                Add to Cart
              </div>
              <div className="mt-4 group relative">
                <div>
                  <p className="text-sm font-medium">RGB liquid CPU Cooler</p>
                  <div className="flex-col gap-2 mt-1">
                    <div className="flex gap-2">
                      <p className="text-sm text-orange-600 ">$160</p>
                      <p className="text-sm text-gray-600 line-through">$170</p>
                    </div>

                    <div className="flex">
                      <div className="flex">
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <MdStarHalf className="text-orange-400 w-5 h-5" />
                      </div>
                      <p className="text-sm">(65)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 group relative">
              <div className="flex items-start w-52 py-2 pb-6 pr-1  pl-7 gap-3 bg-gray-200">
                <img
                  src="../images/Explore11.png"
                  className=" mt-4 w-[97px]"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="bg-black text-white absolute w-full text-center p-2 bottom-20 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
                Add to Cart
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">RGB liquid CPU Cooler</p>
                  <div className="flex-col gap-2 mt-1">
                    <div className="flex gap-2">
                      <p className="text-sm text-orange-600 ">$160</p>
                      <p className="text-sm text-gray-600 line-through">$170</p>
                    </div>

                    <div className="flex">
                      <div className="flex">
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                        <IoMdStar className="text-orange-400 w-5 h-5" />
                      </div>
                      <p className="text-sm">(65)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreProduct1;
