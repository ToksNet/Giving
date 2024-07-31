import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Star from '../../components/Star';
import { FaHeart } from "react-icons/fa";
import { prod4 } from "../../assets/images";
import Tabs from "../../components/ProductDescripComponents/TabComponent";
import ProductCard from "../../components/ProductCard";
import CountDown from "../../components/CountDown";
import prod from '../../assets/images/prodDetails/prod5.png'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { categoryImages, todayProducts, Prod1, products, newArrival, exploreProducts } from '../../constants/constants';
const ProductDetails = () => {

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [count, setCount] = useState(5);

  const getProductById = (id) => {
    const allProducts = [
      ...categoryImages.map(product => ({ ...product, type: 'category' })),
      ...todayProducts.map(product => ({ ...product, type: 'today' })),
      ...Prod1.map(product => ({ ...product, type: 'prod1' })),
      ...products.map(product => ({ ...product, type: 'products' })),
      ...newArrival.map(product => ({ ...product, type: 'newArrival' })),
      ...exploreProducts.map(product => ({ ...product, type: 'explore' })),
    ];

    return allProducts.find(product => product.id === parseInt(id));
  };


  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const { id } = useParams();  
  const product = getProductById(Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="md:mt-[15%]  md:px-[110px]">
      <div className='text-[#808080] px-4 md:px-0  mt-[35px] text-[14px] font-[Poppins] '>
        <span className='text-[14px] text-[#808080] font-[400]'>Account </span> / <span className='text-[14px] text-[#808080] font-[400]'>Gamming </span> / <span className='text-[#000000] font-[400] text'>{product.prodName}</span>
      </div>

      <div className="lg:flex justify-between gap-10">
        <div className="flex flex-col md:flex-row gap-2 md:gap-[30px]">
          <div className="grid grid-cols-2 md:flex flex-col  gap-2 md:gap-[30px]">
            <div className='w-full max-w-full md:w-[170px] h-[138px] bg-[#F5F5F5] rounded flex justify-center items-center'>
              <div className="w-[60px]">
                <img src={product.image} alt={product.prodName} className="w-full" />
              </div>
            </div>
            <div className='w-full max-w-full md:w-[170px] h-[138px] bg-[#F5F5F5] rounded flex justify-center items-center'>
              <div className="w-[60px]">
                <img src={product.image} alt={product.prodName} className="w-full" />
              </div>
            </div>
            <div className='w-full max-w-full md:w-[170px] h-[138px] bg-[#F5F5F5] rounded flex justify-center items-center'>
              <div className="w-[60px]">
                <img src={product.image} alt={product.prodName} className="w-full" />
              </div>
            </div>
            <div className='w-full max-w-full md:w-[170px] h-[138px] bg-[#F5F5F5] rounded flex justify-center items-center'>
              <div className="w-[60px]">
                <img src={product.image} alt={product.prodName} className="w-full" />
              </div>
            </div>
          </div>

          <div className="flex   justify-center items-center flex-1">
            <div className="p-8 bg-[#F5F5F5] rounded w-full md:w-[35vw] flex justify-center items-center h-full">
              <div className="flex-shrink w-full max-w-full flex justify-center itec">
                <img src={product.image} alt="main" className="md:w-full " />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 px-4 md:px-0 w-full lg:w-[399px] ">
          <p className='text-[16px] font-[400] mb-[5px] font-[inter]'>Seller: Adams Joe</p>
          <h2 className="font-[inter] mb-[16px] text-[24px] font-[600]">{product.prodName} </h2>
          <div className="flex gap-2 mb-[16px] items-center">
            <Star starsNo={product.starsNo} />
            <span className="text-sm text-gray-500">
              ({product.reviewsNo} Reviews )
            </span>{" "}
            <span className="text-gray-400">|</span>{" "}
            <span className="text-sm" style={{ color: product.instock ? "orange" : "red" }}>
              {product.instock ? "In stock" : "Out of stock"}
            </span>
          </div>
          <h2 className="font-[400] text-[24px] font-[inter] mb-[24px] ">$ {product.discountPrice}</h2>
          <div className="font-[400] font-[poppins] text-[14px]  mb-[24px]"> {product.shortDescription}</div>

          <hr className="border-gray-400" />

          <div className="flex items-center mt-[24px] gap-[24px] ">
            {product.availColors && product.availColors.length > 0 && (
              <p className="text-[20px] font-[400] font-[inter]">Colors:</p>
            )}

            <div className="flex gap-1 items-center p-0 m-0">
              {product.availColors && product.availColors.length > 0 ? (
                <div className="flex gap-1 items-center p-0 m-0">
                  {product.availColors.map((color) => (
                    <label key={color.id} className="flex">
                      <input
                        type="radio"
                        name="color"
                        value={color.name}
                        className="appearance-none"
                        onChange={() => handleColorChange(color.code)}
                      />
                      <span
                        className={`block w-[20px] h-[20px] rounded-full border-2 p-0.5 ${selectedColor === color.code
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
              ) : null}
            </div>
          </div>

          <div className="flex items-center mt-[24px] mb-[30px] gap-[24px]">
            {product.availSizes && product.availSizes.length > 0 && (
              <p className="font-[400] font-[inter] text-[16px]">Sizes:</p>
            )}
            {product.availSizes && product.availSizes.length > 0 ? (
              <div className="flex gap-2">
                {product.availSizes.map((size) => (
                  <span
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`w-fit text-center text-xs font-bold border-[1px] border-gray-300 px-1 py-1 rounded-sm ${selectedSize === size.id
                      ? "bg-primary text-white border-none"
                      : ""
                      }`}
                    style={{ cursor: "pointer" }}>
                    {size.name}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex gap-[10px]">
            <div className="flex">
              <button
                className="border border-r-0 px-[20px]  rounded-l-lg"
                onClick={decrement}
                disabled={count === 0}
              >
                -
              </button>

              <p className="border px-[34px] flex items-center">{count}</p>
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
              className={`px-[22px] py-[8px] border rounded-lg ${favourite === true ? "bg-primary text-white border-none" : ""
                }`}
              onClick={() => setFavourite(!favourite)}>
              <FavoriteBorderOutlinedIcon />
            </button>
          </div>

          <div className='mt-[40px]'>
            <div className="border border-gray-300 px-[10px] py-[12px] rounded-t-lg">
              <div className="flex gap-2 items-center">
                {/* <svg
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
                </svg> */}

                <div className="space-y-1 text-sm font-medium">
                  <p className='text-[16px] font-[500] font-[poppins]'>Free Delivery</p>
                  <p className='text-[10px] font-[500] font-[poppins]'>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-12">
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

        <ul className="mt-[28px] pl-[65px] list-disc flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
          <li>Buttons</li>
          <li className="">PS button</li>
          <li>Share button</li>
          <li>Options button</li>
          <li>D Pad (up, down, right, left)</li>
          <li>Action buttons (triangle, circle, cross, square)</li>
          <li>Trigger buttons (R1, R2, L1, L2)</li>
          <li>Touch Pad button</li>
        </ul>

        <ul className="list-disc mt-[28px] pl-[16px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
          <li>Touch Pad</li>
          <li>2 point capacitive touch with click mechanism</li>
          <li>Motion Sensor</li>
          <li>
            Six axis motion sensing systems (three axis gyroscope, three
            axis accelerometer)
          </li>
          <li>Ports</li>
          <li>1 x Micro USB</li>
        </ul>

        <ul className="list-disc pl-[65px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
          <li>1 x Extension port</li>
          <li>Wireless Connectivity</li>
          <li>1 x Stereo headset jack</li>
          <li>Bluetooth 2.1+EDR</li>
          {/* </ul> *
        </ul>

        <ul className="list-disc mt-[28px] pl-[16px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
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
        </ul>
        <ul className="list-disc pl-[16px] flex flex-col gap-[] text-[16px] text-[#807D7E] font-[400] font-[DM sans] leading-[33.5px]">
          <li>Package Included:</li>
          <li>1 x Game Handle ps4 controller</li>
        </ul>
      </div> */}
      {/* <div className="md:flex gap-[64px]">
        <div className="p-2 bg-gray-200 w-[50%] flex justify-center items-center rounded-md">
          <img src={product.image} alt="" className="w-[252.84px]" />
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
      </div> */}
    </div>
  )
}

export default ProductDetails