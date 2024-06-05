import React from "react";
import { todayProducts } from "../constants/constants";
import Star from "./Star";

const ProductCard = ({ product }) => {
  const {
    image,
    prodName,
    price,
    discountPrice,
    reviewsNo,
    starsNo,
    discountRate,
    newProd,
  } = product;

  return (
    <div className="flex flex-col group bg-white shadow-md">
      <div className="container mx-auto relative flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          src={image}
          alt={prodName}
        />
        <div className="absolute top-3 left-3 space-x-1">
          {discountRate && (
            <span className="text-white text-xs py-1 px-3 bg-primary rounded-md">
              -{discountRate}%
            </span>
          )}
          {newProd && (
            <span className="text-white text-xs py-1 px-2 bg-green-500 rounded-md">
              New
            </span>
          )}
        </div>

        <div className="absolute right-3 top-5 space-y-2">
          <svg
            className="bg-white w-6 h-6 p-1 rounded-full"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="bg-white w-6 h-6 p-1 rounded-full"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2565 6.962C20.7305 7.582 20.7305 8.419 20.2565 9.038C18.7635 10.987 15.1815 15 10.9995 15C6.81752 15 3.23552 10.987 1.74252 9.038C1.51191 8.74113 1.38672 8.37592 1.38672 8C1.38672 7.62408 1.51191 7.25887 1.74252 6.962C3.23552 5.013 6.81752 1 10.9995 1C15.1815 1 18.7635 5.013 20.2565 6.962V6.962Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="bg-black text-white absolute bottom-0 w-full text-center p-2 rounded-b-md opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300">
          Add to Cart
        </div>
      </div>
      <div className="space-y-1 mt-2 text-center md:text-left">
        <h2 className="font-semibold">{prodName}</h2>
        <div className="space-x-2 text-sm font-semibold text-gray-400">
          <span className="text-primary">${discountPrice}</span>
          <span className="line-through">${price}</span>
        </div>
        <div className="flex justify-center md:justify-start gap-2 items-center">
          <Star starsNo={starsNo} /> ({reviewsNo})
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
