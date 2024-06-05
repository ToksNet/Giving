import React from "react";
import ProductCard from "../../components/ProductCard";
import CountDown from "../../components/CountDown";
import { todayProducts } from "../../constants/constants";

const TodayProduct = () => {
  const initialTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  return (
    <div className="container mx-auto my-10 px-4 categories  my-6 md:my-10">
      <div className=" px-4 flex flex-col items-center md:items-start md:flex-row md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-primary w-4 h-7 rounded"></div>
          <h1 className="text-md md:text-2xl  font-semibold flex items-center gap-3">
            Flash Sales
            <CountDown initialTime={initialTime} />
          </h1>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button className="bg-gray-200 rounded-full p-2">
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
          <button className="bg-gray-200 rounded-full p-2">
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
      <div className="container mx-auto px-4 mt-10 flex items-center overflow-x-auto space-x-4 product-scroll">
        {todayProducts.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-[220px] h-[350px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayProduct;
