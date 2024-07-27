import React, { useState } from 'react';

// import FullProductCard from '../../components/ProductDescripComponents/FullProductCard';
// import ProductDescription from './ProductDescription';
// import RelatedItems from './RelatedItems';
// import React, { useState } from "react";

import { Prod1 } from "../../constants/constants";
import Star from '../../components/Star';
import { FaHeart } from "react-icons/fa";
import { prod4 } from "../../assets/images";
import Tabs from "../../components/ProductDescripComponents/TabComponent";
import ProductCard from "../../components/ProductCard";
import CountDown from "../../components/CountDown";
import { todayProducts } from "../../constants/constants";

const ProductDetails = () => {

  // Full Product Page

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [count, setCount] = useState(5);

  const {
    id,
    image,
    otherImages,
    prodName,
    price,
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

  // Product Description Page

  const tabs = [
    {
      label: "Overview",
      content: (
        <div className="">
          <li className="text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
            The DualShock 4 Wireless Controller features familiar controls, and
            incorporates several innovative features to usher in a new era of
            interactive experiences. Its definitive analog sticks and trigger
            buttons have been improved for greater feel and sensitivity. A multi
            touch, clickable touch pad expands gameplay possibilities, while the
            incorporated light bar in conjunction with the PlayStation Camera
            allows for easy player identification and screen adjustment when
            playing with friends in the same room. The addition of the Share
            button makes utilizing the social capabilities of the PlayStation 4
            as easy as the push of a button. The DualShock 4 Wireless Controller
            is more than a controller; it's your physical connection to a new
            era of gaming. Pair your controller you will need to pair your
            controller when you use it for the first time and when you use it
            with another PS4 system. Turn on the PS4 system and connect the
            controller with the USB cable to complete device pairing charging
            your controller With the PS4 system turned on or in rest mode,
            connect your controller using the USB cable.
          </li>

          {/* <ul className="list-disc pl-"> */}
            <ul className="mt-[28px] pl-[65px] list-disc flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
              <li>Buttons</li>
              {/* <ul className="list-disc pl-5"> */}
                <li className="">PS button</li>
                <li>Share button</li>
                <li>Options button</li>
                <li>D Pad (up, down, right, left)</li>
                <li>Action buttons (triangle, circle, cross, square)</li>
                <li>Trigger buttons (R1, R2, L1, L2)</li>
                <li>Touch Pad button</li>
              {/* </ul> */}
            </ul>

            <ul className="list-disc mt-[28px] pl-[16px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
              <li>Touch Pad</li>
              {/* <ul className="list-disc pl-5"> */}
              <li>2 point capacitive touch with click mechanism</li>
              <li>Motion Sensor</li>
              <li>
                Six axis motion sensing systems (three axis gyroscope, three
                axis accelerometer)
              </li>
              <li>Ports</li>
              <li>1 x Micro USB</li>
              {/* </ul> */}
            </ul>

            <ul className="list-disc pl-[65px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
              {/* <ul className="list-disc pl-5"> */}
              <li>1 x Extension port</li>
              <li>Wireless Connectivity</li>
              <li>1 x Stereo headset jack</li>
              <li>Bluetooth 2.1+EDR</li>
              {/* </ul> */}
            </ul>

            <ul className="list-disc mt-[28px] pl-[16px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
              {/* <ul className="list-disc pl-5"> */}
              <li>Your satisfaction is very important to us.</li>
              <li>If you are satisfied with our products and services, please leave positive feedback and 5 stars.</li>
              <li>All items in our store will be tested before packaging.</li>
              <li>About the size of the goods: Sizes are measured according to the
              product's details page measurement method. Please carefully compare
              the size before purchasing. Since measurement methods and tools
              vary, some errors are normal. If you have questions, please consulted
              customer service.Regarding after-sales: We value each evaluation you provide. If you
              are not satisfied with our products or services, please contact our
              customer service first. We will give you a satisfactory solution
              within a reasonable time. Select from a wide range of unique products on Jumia and enjoy
              convenient and secure online shopping, nationwide delivery,
              guaranteed products, and competitive pricing.</li>
              {/* </ul> */}
            </ul>

            {/* <li>
              <ul className="list-disc pl-5">
              </ul>
            </li> */}
          {/* </ul> */}

          {/* <p>
            
          </p> */}

          {/* <p>
            
          </p> */}
          {/* <p>
            
          </p> */}

          <ul className="list-disc pl-[16px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
            {/* <li> */}
              <li>Package Included:</li>
              {/* <ul className="list-disc pl-5"> */}
              <li>1 x Game Handle ps4 controller</li>
              {/* <li>1 x Charging Cable</li>
              <li>1 x English user manual</li> */}
              {/* </ul> */}
            {/* </li> */}
          </ul>

          {/* <ul className="list-disc pl-5">
            <li>
              <strong>Package Included:</strong>
              <ul className="list-disc pl-5">
                <li>1 x Game Handle ps4 controller</li>
                <li>1 x Charging Cable</li>
                <li>1 x English user manual</li>
              </ul>
            </li>
          </ul> */}
        </div>
      ),
    },
    {
      label: "Specification",
      content: <p className="text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">Specifications content goes here...</p>,
    },
    {
      label: "Verified Customer Feedback",
      content: <p className="text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">Verified Customer Feedback content goes here...</p>,
    },
  ];

  return (
    <div className="mt-[30%] md:mt-[15%]  md:px-[110px]">

      <div className='text-[#808080] px-4 md:px-0  mt-[35px] text-[14px] font-[Poppins] '>
        <span className='text-[14px] text-[#808080] font-[400]'>Account </span> / <span className='text-[14px] text-[#808080] font-[400]'>Gamming </span> / <span className='text-[#000000] font-[400] text'> Havic HV G-92 Gamepad</span>
      </div>

      {/* <Full Product Cart Section/> */}
      <div className=" md:mt-[80px] mt-[31px]   md:flex gap-[71px] ">
        <div className="flex h-screen flex-col-reverse md:w-full md:flex-row gap-[30px] ">
          <div className="md:block md:w-[45%] px-4 md:px-0 flex gap-[12px] md:space-y-4">
            {otherImages.map((image, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] py-[12px] px-[24px] flex justify-center  md:w-full rounded-md">
                <img src={image} alt="" className="md:w-[121px] " />
              </div>
            ))}
          </div>
          <div className=" bg-[#F5F5F5] px-[27px] pt-[145px] w-full pb-[131px] h-[95.2%] rounded-md ">
            <img src={image} alt="" srcset="" className=" md:w-[446px]" />
          </div>
        </div>

      <div className="mt-6 md:mt-0 px-4 md:px-0 h-[95.2%] md:w-[60%]">
        <p className='text-[16px] font-[400] mb-[5px] font-[inter]'>Seller: Adams Joe</p>
        <h2 className="font-[inter] mb-[16px] text-[24px] font-[600]">{prodName} </h2>
        <div className="flex gap-2 mb-[16px] items-center">
          <Star starsNo={starsNo} />
          <span className="text-sm text-gray-500">
            ({reviewsNo} Reviews )
          </span>{" "}
          <span className="text-gray-400">|</span>{" "}
          <span className="text-sm" style={{ color: instock ? "orange" : "red" }}>
            {instock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <h2 className="font-[400] text-[24px] font-[inter] mb-[24px] ">${discountPrice}</h2>
        <div className="font-[400] font-[poppins] text-[14px]  mb-[24px]">{shortDescription}</div>

        <hr className="border-gray-400" />

        {/* Color Change */}
        <div className="flex items-center mt-[24px] gap-[24px] ">
          <p className="text[20px] font-[400] font-[inter]">Colors:</p>
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

        {/* Product Sizes */}
        <div className="flex items-center mt-[24px] mb-[30px] gap-[24px]">
          <p className="font-[400] font-[inter] text-[16px]">Sizes:</p>
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

        <div className="flex gap-[10px]">
          <div className="flex">
            <button
              className="border border-r-0 px-[20px]  rounded-l-lg"
              onClick={decrement}
              disabled={count === 0} // Optionally disable button when count is 0
            >
              -
            </button>

            <p className="border px-[34px]">{count}</p>
            <button
              className="border border-l-0 px-[20px]  rounded-r-lg"
              onClick={increment}>
              +
            </button>
          </div>

          <button className="bg-primary text-[16px] px-2 text-white font-[500] font-[poppins]  rounded-lg">
            Buy Now
          </button>

          <button
            className={`px-[22px] py-[8px] border rounded-lg ${
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

        {/* Delivery Section */}
        <div className='mt-[40px]'>
          <div className="border border-gray-300 px-[10px] py-[12px] rounded-t-lg">
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
                <p className='text-[16px] font-[500] font-[poppins]'>Free Delivery</p>
                <p className='text-[10px] font-[500] font-[poppins]'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
          </div>
          <div className="border border-t-0 border-gray-300 p-4 rounded-b-lg">
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
                <p className='text-[16px] font-[500] font-[poppins]'>Return Delivery</p>
                <p className='text-[10px] font-[500] font-[poppins]'>Free 30 days delivery returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      {/* <Product Description Section/> */}
      <div className="mt-[70px] px-4 md:px-0">
      <div className="flex mb-[16px] items-center gap-3">
        <div className="bg-primary w-3 h-7 rounded "></div>
        <div className="md:flex justify-between ">
          <h1 className="text-md md:text-[28px] md:flex items-center gap-5 text-primary  font-[700] font-[DM sans] leading-[33.5px]">
            <span>Product Description</span>
          </h1>
        </div>
      </div>
      
      <div className="mt-3 ">
        <Tabs tabs={tabs} />

        <div className="md:flex gap-[64px]">
          <div className="p-2 bg-gray-200 md:w-[50%] flex justify-center items-center rounded-md">
            <img src={prod4} alt="" className="w-[252.84px]" />
          </div>

          <div className="w-[100%]">
            <h2 className="mt-10 md:mt-0 text-primary text-[28px] font-[700] font-[DM Sans] mb-[20px]">
              Key Features
            </h2>
            <p className=" text-[16px] font-[400] font-[DM Sans] leading-[33.5px] text-[#807D7E]">
              Lorem ipsum dolor sit amet consectetur. Est ornare hendrerit donec
              enim pulvinar auctor. Egestas eget bibendum pulvinar enim odio.
              Habitant accumsan vulputate senectus urna amet at tempus ultrices
              eget. Risus dolor praesent nisl sapien vestibulum. Leo vel. Lorem
              ipsum dolor sit amet consectetur. Est ornare hendrerit donec enim
              pulvinar auctor. Egestas eget bibendum pulvinar enim odio.
              Habitant accumsan vulputate senectus urna amet at tempus ultrices
              eget. Risus dolor praesent nisl sapien vestibulum. Leo vel.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* <Related Items Section/> */}
      <div className="categories mt-[100px] px-4 md:px-0 flex  overflow-scroll product-scroll">
        <div className="gap-3">
          <div className="md:flex justify-between my-3">
      
            <div className=" md:flex items-center gap-5">
              <div className="bg-primary w-3 h-7 rounded "></div>

              <h1 className="text-md md:text-[28px] md:flex items-center gap-5 text-primary  font-[700] font-[DM sans] leading-[33.5px]">
                <span>Related Item</span>
              </h1>            
            </div>
          </div>

          <div className=" mt-[60px] flex items-center overflow-x-auto space-x-4  ">
            {todayProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[220px] h-[350px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails