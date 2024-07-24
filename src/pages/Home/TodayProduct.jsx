import React from "react";
import ProductCard from "../../components/ProductCard";
import CountDown from "../../components/CountDown";
import { todayProducts } from "../../constants/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TodayProduct = () => {
  const initialTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  return (
    <div className="categories px-4 my-1 md:mx-32 mt-[45px] md:mt-[59px]"> 
      <div className="flex items-center gap-3">
        <div className="bg-primary w-4 h-7 rounded"></div>
        <h2 className="font-semibold md:text-[16px] text-primary">Today’s</h2>
      </div>
      <div className="flex items-end justify-between my-3">
        <h1 className="text-md md:text-[24px] font-semibold md:flex items-center gap-5">
          <span>Flash Sales</span>
          <CountDown initialTime={initialTime} />
        </h1>
        <div className="flex gap-1">
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <svg
              width="15"
              height="13"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L1 8L8 15M1 8H17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={() => sliderRef.current.slickNext()}
          >
            <svg
              width="15"
              height="13"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8H18M18 8L11 1M18 8L11 15"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-10 flex items-center overflow-x-auto space-x-4 product-scroll justify-center">
        {todayProducts.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full max-w-[220px] h-[350px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <a
          href="#"
          className="bg-[#DB4444] px-12 py-4 text-white font-medium text-lg mx-auto rounded text-center
          block w-fit"
        >
          View All Products
        </a>
      </div>
    </div>
  );
};

export default TodayProduct;
