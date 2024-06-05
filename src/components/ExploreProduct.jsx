import React from "react";

import { TbRectangleVerticalFilled } from "react-icons/tb";
import { TbPointFilled } from "react-icons/tb";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { MdStarHalf } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";

const ExploreProduct = () => {
  return (
    <>
      <div className="mx-3 md:mx-20 mb-20 px-3 md:mr-5 mt-4">
        <div>
          <div className="mb-9">
            <div className="flex items-center gap-3">
              <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
              <p className="text-sm font-medium text-red-500">Our Products</p>
            </div>

            <div className="flex items-center mt-5 justify-between">
              <p className="text-2xl font-medium">Explore Our Products</p>
              <div className="hidden md:flex text-sm mr-16 gap-2 items-center">
                <FaArrowLeft className="p-2 w-8 h-8 bg-gray-200 rounded-full" />
                <FaArrowRight className="p-2 w-8 h-8 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            <div className="">
              <div className="flex items-start w-full md:w-52 py-2 pb-6 justify-between px-2 bg-gray-200">
                <img
                  src="../images/Explore-1.jpg"
                  className="pl-7 mt-5 w-28"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <a href="#">
                    <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  </a>
                  <a href="#">
                    <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">Breed Dry Dog Food</p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$100</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-gray-300 w-5 h-5" />
                      <IoMdStar className="text-gray-300 w-5 h-5" />
                    </div>
                    <p className="text-sm">(35)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div>
                <div className="flex items-start w-full md:w-52 py-2 pb-6 justify-between md:px-2 bg-gray-200">
                  <img
                    src="../images/Explore-2.png"
                    className="pl-7 mt-4 w-28"
                    alt="Explore Image 1"
                  />
                  <div className="flex flex-col gap-2 items-center">
                    <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                    <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                  </div>
                </div>
                <button className="bg-black text-white w-[169px] md:w-52 py-2">
                  Add To Cart
                </button>
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">CANON EOS DSLR Camera</p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$360</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-gray-300 w-5 h-5" />
                    </div>
                    <p className="text-sm">(95)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-start w-full md:w-52 py-2 pb-6 justify-between px-2 bg-gray-200">
                <img
                  src="../images/Explore-3.png"
                  className="mt-4 w-32"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">ASUS FHD Gaming Laptop</p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$700</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                    </div>
                    <p className="text-sm">(325)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-start w-full md:w-52 py-2 pb-6 justify-between px-2 bg-gray-200">
                <img
                  src="../images/Explore-1.jpg"
                  className="pl-7 mt-4 w-28"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">Curology Product Set</p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$500</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-gray-300 w-5 h-5" />
                    </div>
                    <p className="text-sm">(145)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-start w-full h-[180px] md:w-52 py-2 pb-6 justify-between px-2 bg-gray-200">
                <p className="text-white bg-green-400 text-xs ml-1 px-1">NEW</p>
                <div className="">
                  <img
                    src="../images/Explore-5.png"
                    className="mt-10 mb-8 w-28"
                    alt="Explore Image 1"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">Kid's Electric Car</p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$980</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                    </div>
                    <p className="text-sm">(65)</p>
                  </div>
                  <div className="flex mt-1 gap-2">
                    <img
                      src="../images/Ellipse 10.png"
                      className="w-3 h-3"
                      alt="Ellipse"
                    />
                    <img
                      src="../images/Ellipse 8.png"
                      className="w-3 h-3"
                      alt="Elipse"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-start w-full md:w-52 py-2 pb-6 justify-between px-2 bg-gray-200">
                <img
                  src="../images/Explore-6.png"
                  className="pl- mt-5 mb-4 w-32"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">Jr.Zoom Soccer Cleats</p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$1160</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                    </div>
                    <p className="text-sm">(35)</p>
                  </div>
                  <div className="flex gap-2 mt-1">
                    {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */}
                    {/* <TbPointFilled  className="text-red-500 w-8 h-8"/> */}
                    <img
                      src="../images/Ellipse 10.png"
                      className="w-3 text-yellow-300 h-3"
                      alt="Elipse"
                    />
                    <img
                      src="../images/Ellipse 8.png"
                      className="w-3 h-3"
                      alt="Elipse"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-start w-full md:w-52 h-[180px] py-2 pb-6 justify-between px-2 bg-gray-200">
                <p className="text-white bg-green-400 text-xs ml-1 px-1">NEW</p>
                <div className="">
                  <img
                    src="../images/Explore-7.png"
                    className="mt-8 mb-5 w-28"
                    alt="Explore Image 1"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">
                    GP11 Shooter USP Gamepad
                  </p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$660</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <MdStarHalf className="text-orange-400 w-5 h-5" />
                    </div>
                    <p className="text-sm">(55)</p>
                  </div>

                  <div className="flex gap-2 mt-1">
                    {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */}
                    {/* <TbPointFilled  className="text-red-500 w-8 h-8"/> */}
                    <img
                      src="../images/Ellipse 10.png"
                      className="w-3 text-yellow-300 h-3"
                      alt="Elipse"
                    />
                    <img
                      src="../images/Ellipse 8.png"
                      className="w-3 h-3"
                      alt="Elipse"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-start w-full md:w-52 py-2 pb-6 justify-between px-2 bg-gray-200">
                <img
                  src="../images/Explore-8.png"
                  className=" mt-5 h-32 w-32"
                  alt="Explore Image 1"
                />
                <div className="flex flex-col gap-2 items-center">
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <p className="text-sm font-medium">Quilted satin Jacket</p>
                  <div className="flex gap-2 mt-1">
                    <p className="text-sm font-medium text-orange-700">$660</p>

                    <div className="flex">
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <IoMdStar className="text-orange-400 w-5 h-5" />
                      <MdStarHalf className="text-orange-400 w-5 h-5" />
                    </div>
                    <p className="text-sm">(55)</p>
                  </div>

                  <div className="flex gap-2 mt-1">
                    {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */}
                    {/* <TbPointFilled  className="text-red-500 w-8 h-8"/> */}
                    <img
                      src="../images/Ellipse 10.png"
                      className="w-3 text-yellow-300 h-3"
                      alt="Elipse"
                    />
                    <img
                      src="../images/Ellipse 8.png"
                      className="w-3 h-3"
                      alt="Elipse"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="text-lg font-medium bg-red-500 text-white rounded p-5 "
            >
              View All Prodects
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreProduct;
