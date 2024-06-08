import React from "react";

import { TbRectangleVerticalFilled } from "react-icons/tb";
import { TbPointFilled } from "react-icons/tb";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { MdStarHalf } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard = ({
  imageSrc,
  title,
  price,
  originalPrice,
  rating,
  reviews,
}) => {
  return (
    <div className="mb-5">
      <div className="group relative md:w-52">
        <div className="flex items-start md:w-52 py-2 pb-6 md:pr-1 md:pl-7 gap-7 bg-gray-200">
          <div className="px-2 w-full h-48 flex items-center justify-center bg-gray-200">
            <img
              src={imageSrc}
              className="object-contain w-full h-full"
              alt={title}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <a href="#">
              <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
            </a>
            <a href="#">
              <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add to Cart
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium">{title}</p>
        <div className="flex gap-2 mt-1">
          <p className="text-sm font-medium text-orange-700 pr-2 inline">
            {price}
          </p>
          <p className="text-sm font-medium text-gray-500 inline line-through">
            {originalPrice}
          </p>
        </div>
        <div className="flex gap-2 mt-1 items-center">
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <IoMdStar
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? "text-orange-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-sm">({reviews})</p>
        </div>
      </div>
    </div>
  );
};

const ExploreProduct = () => {
  const products = [
    {
      imageSrc: "../images/Explore-1.jpg",
      title: "Breed Dry Dog Food",
      price: "$100",
      // originalPrice: "$120",
      rating: 3,
      reviews: 35,
    },
    {
      imageSrc: "../images/Explore-2.png",
      title: "CANON EOS DSLR Camera",
      price: "$360",
      // originalPrice: "",
      rating: 3,
      reviews: 95,
    },
    {
      imageSrc: "../images/Explore-3.png",
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      // originalPrice: "",
      rating: 4,
      reviews: 325,
    },
    {
      imageSrc: "../images/Explore-1.jpg",
      title: "Curology Product Set",
      price: "$500",
      // originalPrice: "",
      rating: 3,
      reviews: 145,
    },
    {
      imageSrc: "../images/Explore-5.png",
      title: "Kid's Electric Car",
      price: "$980",
      // originalPrice: "",
      rating: 3,
      reviews: 65,
    },
    {
      imageSrc: "../images/Explore-6.png",
      title: "Jr.Zoom Soccer Cleats",
      price: "$1160",
      // originalPrice: "",
      rating: 5,
      reviews: 35,
    },
    {
      imageSrc: "../images/Explore-7.png",
      title: "GP11 Shooter USP Gamepad",
      price: "$660",
      // originalPrice: "",
      rating: 1,
      reviews: 55,
    },
    {
      imageSrc: "../images/Explore-8.png",
      title: "Quilted satin Jacket",
      price: "$660",
      // originalPrice: "",
      rating: 4,
      reviews: 55,
    },
  ];

  return (
    <div className="w-full ">
      <div className=" px-4 mb-10 md:mx-32 mt-20">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
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
    </div>
  );
};

export default ExploreProduct;
