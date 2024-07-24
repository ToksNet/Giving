import React, { useState } from "react";
import { Prod1 } from "../../constants/constants";
import Star from "../Star";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FullProductCard = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [favourite, setFavourite] = useState(false);
  
  const [count, setCount] = useState(5); // Initial state set to 5
  const location = useLocation();
  const { imageSrc, title,price, rating, reviews } = location.state;

  const {
    id,
    image,
    otherImages,
    prodName,
    discountPrice,
    reviewsNo,
    starsNo,
    discountRate,
    availColors,
    availSizes,
    shortDescription,
    instock,
  } = Prod1[0];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="md:max-h-screen  md:flex gap-6 justify-center ">
      <div className="flex flex-col-reverse md:flex-row gap-2 ">
        <div className="flex gap-2 md:block basis-[25%] space-y-4">
            <img src={imageSrc} alt={title} className="w-full " />
            <img src={imageSrc} alt={title} className="w-full " />
            <img src={imageSrc} alt={title} className="w-full " />
            <img src={imageSrc} alt={title} className="w-full " />
        </div>
        <div className=" bg-slate-200 w-[400px] flex items-center rounded-md p-9">
          <img src={imageSrc} alt={title} className="w-full" />
        </div>
      </div>
      <div className="mt-6 md:mt-0 space-y-4 basis-[25%]">
      <h1 className="text-2xl font-bold mt-4">{title}</h1>
        <div className="flex gap-2 items-center">
          <Star starsNo={starsNo} />
          <span className="text-sm text-gray-500">
            ({reviewsNo} Reviews )
          </span>{" "}
          <span className="text-gray-400">|</span>{" "}
          <span className="text-sm" style={{ color: instock ? "orange" : "red" }}>
            {instock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <h2 className="font-semibold ">${discountPrice}</h2> 
         <div className="text-bold font-medium text-sm">{shortDescription}</div>

        <hr className="border-gray-400" />

        <div className="flex items-center gap-2 ">
          <p className="inline font-semibold">Colors:</p>
          <div className="flex gap-1 items-center p-0 m-0">
            {availColors.map((color) => (
              <label key={color.id} className="flex">
                <input
                  type="radio"
                  name="color"
                  value={color.name}
                  className="appearance-none"
                  onChange={() => handleColorChange(color.code)}
                />
                <span
                  className={`block w-[20px] h-[20px] rounded-full border-2 p-0.5 ${
                    selectedColor === color.code
                      ? "border-black"
                      : "border-transparent"
                  }`}>
                  <span
                    className="block w-full h-full rounded-full"
                    style={{ backgroundColor: color.code }}></span>
                </span>
              </label>
            ))}
          </div> 
        </div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">Sizes:</p>
           {availSizes.map((size) => (
            <span
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`w-6 text-center text-xs font-bold border-[1px] border-gray-300 px-1 py-1 rounded-sm ${
                selectedSize === size.id
                  ? "bg-primary text-white border-none"
                  : ""
              }`}
              style={{ cursor: "pointer" }}>
              {size.name}
            </span>
          ))} 
        </div>
        <div className="flex gap-2">
          <div className="flex">
            <button
              className="border p-1 px-2 rounded-l-sm"
              onClick={decrement}
              disabled={count === 0} // Optionally disable button when count is 0
            >
              -
            </button>
            <p className="border p-1 px-4">{count}</p>
            <button
              className="border p-1 px-2 rounded-r-sm"
              onClick={increment}>
              +
            </button>
          </div>
          <button className="bg-primary p-1 px-8 text-sm text-white font-semibold border-md rounded-sm">
            Buy Now
          </button>
          <button
            className={`p-2 border rounded-sm ${
              favourite === true ? "bg-primary text-white border-none" : ""
            }`}
            onClick={() => setFavourite(!favourite)}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                stroke={`${favourite === true ? "white" : "black"}`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button> 
        </div>
        <div>
          <div className="border border-gray-300 p-4 rounded-t-sm">
            <div className="flex gap-2 items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_763_13337)">
                  <path
                    d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 11.8184H11.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.81836 15.4546H8.48503"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 19.0908H11.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_763_13337">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="space-y-1 text-sm font-medium">
                <p>Free Delivery</p>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 p-4 rounded-b-sm">
            <div className="flex gap-2 items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_763_13342)">
                  <path
                    d="M33.3327 18.3332C32.9251 15.4002 31.5645 12.6826 29.4604 10.599C27.3564 8.51539 24.6256 7.18137 21.6888 6.80242C18.752 6.42348 15.7721 7.02064 13.208 8.50191C10.644 9.98319 8.6381 12.2664 7.49935 14.9998M6.66602 8.33317V14.9998H13.3327"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66602 21.6665C7.07361 24.5995 8.43423 27.3171 10.5383 29.4007C12.6423 31.4843 15.3731 32.8183 18.3099 33.1973C21.2467 33.5762 24.2266 32.979 26.7907 31.4978C29.3547 30.0165 31.3606 27.7333 32.4994 24.9998M33.3327 31.6665V24.9998H26.666"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_763_13342">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="space-y-1 text-sm font-medium">
                <p>Free Delivery</p>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProductCard;
