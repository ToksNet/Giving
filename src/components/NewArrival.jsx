import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { MdStarHalf } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

import { RiDeleteBinLine } from "react-icons/ri";

// import { CgEditBlackPoint } from "react-icons/cg";
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
          <Link to="/product-details"> Add to Cart </Link>
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

const NewArrival = () => {
  const products = [
    {
      imageSrc: "../images/Explore-2.png",
      title: "CANON EOS DSLR Camera",
      price: "$100",
      // originalPrice: "$120",
      rating: 4,
      reviews: 95,
    },
    {
      imageSrc: "../images/NewArrival-1.png",
      title: "RPG Liquid CPU Cooler",
      price: "$160",
      // originalPrice: "$400",
      rating: 2,
      reviews: 65,
    },
    {
      imageSrc: "../images/TheNorthCoat.png",
      title: "The North Coat",
      price: "$260",
      originalPrice: "$360",
      rating: 5,
      reviews: 65,
    },
    {
      imageSrc: "../images/Explore-1.jpg",
      title: "Breed Dry Dog Food",
      price: "$500",
      // originalPrice: "$600",
      rating: 4,
      reviews: 35,
    },
    {
      imageSrc: "../images/Explore-8.png",
      title: "Quilted satin Jacket",
      price: "$660",
      // originalPrice: "",
      rating: 3,
      reviews: 55,
    },
    {
      imageSrc: "../images/Explore-7.png",
      title: "     GP11 Shooter USP Gamepad",
      price: "$660",
      // originalPrice: "",
      rating: 6,
      reviews: 55,
    },
    {
      imageSrc: "../images/Explore-5.png",
      title: "Kid's Electric Car",
      price: "$980",
      // originalPrice: "",
      rating: 3,
      reviews: 29,
    },
    {
      imageSrc: "../images/Explore-8.png",
      title: "Quilted satin Jacket",
      price: "$660",
      // originalPrice: "",
      rating: 3,
      reviews: 55,
    },
    {
      imageSrc: "../images/Explore-3.png",
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      // originalPrice: "",
      rating: 10,
      reviews: 325,
    },
    {
      imageSrc: "../images/Explore-6.png",
      title: "Jr.Zoom Soccer Cleats",
      price: "$1160",
      // originalPrice: "",
      rating: 11,
      reviews: 35,
    },
    {
      imageSrc: "../images/GucciDuffleBag.png",
      title: "Gucci Duffle Bag",
      price: "$960",
      // originalPrice: "",
      rating: 4,
      reviews: 39,
    },
    {
      imageSrc: "../images/Explore-7.png",
      title: "GP11 Shooter USP Gamepad",
      price: "$660",
      // originalPrice: "",
      rating: 3,
      reviews: 55,
    },
    {
      imageSrc: "../images/SmallBookShelf.png",
      title: "Small BookSelf",
      price: " $230",
      // originalPrice: "",
      rating: 1,
      reviews: 65,
    },
    {
      imageSrc: "../images/Explore-3.png",
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      // originalPrice: "",
      rating: 3,
      reviews: 325,
    },
    {
      imageSrc: "../images/IPS LCS GamingMonitor.png",
      title: "IPS LCD Gaming Monitor",
      price: "$960",
      // originalPrice: "",
      rating: 4,
      reviews: 65,
    },
    {
      imageSrc: "../images/Explore-5.png",
      title: "Kid's Electric Car",
      price: "$980",
      // originalPrice: "",
      rating: 5,
      reviews: 65,
    },
    {
      imageSrc: "../images/TheNorthCoat.png",
      title: "The North Coat",
      price: "$260",
      originalPrice: "$360",
      rating: 2,
      reviews: 65,
    },
    {
      imageSrc: "../images/GucciDuffleBag.p",
      title: "Gucci Duffle Bag",
      price: "$960",
      originalPrice: "$1160",
      rating: 4,
      reviews: 45,
    },
    {
      imageSrc: "../images/NewArrival-1.png",
      title: "RPG Liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      rating: 5,
      reviews: 22,
    },
    {
      imageSrc: "../images/SmallBookShelf.png",
      title: "Small BookSelf",
      price: " $230",
      originalPrice: " $330",
      rating: 2,
      reviews: 86,
    },
    {
      imageSrc: "../images/Explore-6.png",
      title: "Jr.Zoom Soccer Cleats",
      price: "$1160",
      // originalPrice: "",
      rating: 5,
      reviews: 43,
    },
    {
      imageSrc: "../images/GucciDuffleBag.png",
      title: "Gucci Duffle Bag",
      price: " $960",
      // originalPrice: "",
      rating: 3,
      reviews: 99,
    },
    {
      imageSrc: "../images/Explore-7.png",
      title: "GP11 Shooter USP Gamepad",
      price: " $660",
      // originalPrice: "",
      rating: 1,
      reviews: 55,
    },
    {
      imageSrc: "../images/SmallBookShelf.png",
      title: "Small BookSelf",
      price: " $230",
      originalPrice: " $330",
      rating: 2,
      reviews: 86,
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className=" px-4 align-center justify-center mb-10 md:mx-32 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;

// <div className="mx-3 md:mx-20 mb-20 md:mr-6 mt-20">
// <div>
//   <div className="mb-9">
{
  /* <div className='flex items-center gap-3'>
                <div className='h-3 bg-red-500 p-4 px-2 rounded-sm'></div>
                <p className='text-sm font-medium text-red-500'>Featured</p>
            </div> */
}
{
  /* 
            <div className='flex items-center mt-3 justify-between'>
                <p className='text-2xl font-medium'>New Arrival</p>
                <div className='flex text-sm mr-16 gap-2 items-center'>
                    <a href="#"><FaArrowLeft className='p-2 w-8 h-8 bg-gray-200 rounded-full'/></a>
                    <a href="#"><FaArrowRight className='p-2 w-8 h-8 bg-gray-200 rounded-full'/></a>
                </div>
            </div> */
}
{
  /*       </div>
  <div>
    <div className="grid grid-cols-2 gap-3 md:gap-0 md:grid-cols-4">
      <div className="mb-14">
        <div>
          <div className="flex items-start  md:w-52 py-2 pb-6 md:pr-1  md:pl-7 gap-7 bg-gray-200">
            <img
              src="../images/Explore-2.png"
              className="pl-7 mt-4 w-28"
              alt="Explore Image 1"
            />
            <div className="flex flex-col gap-2 items-center">
              <a href="#">
                <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
              </a>
              {/* <a href="#"><IoEyeOutline  className='p-1 w-7 h-7 bg-white rounded-full'/></a> */
}
{
  /*      </div>
          </div>
          <button className="bg-black text-white w-[177px] md:w-[170px] md:md:w-52 py-2">
            Add To Cart
          </button>
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">CANON EOS DSLR Camera</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $360
              </p>

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
        <div className="flex items-start md:w-52 py-2 pl-7 pb-6 pr-1  md:pl-7 bg-gray-200">
          <img
            src="../images/NewArrival-1.png"
            className=" mt-14 w-28 md:w-36 h-24"
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
            <p className="text-sm font-medium">RPG Liquid CPU Cooler</p>
            <div className="mt-1">
              <div className="flex gap-3">
                <p className="text-sm font-medium text-orange-700">
                  $160
                </p>
                <p className="text-sm font-medium text-gray-600 line-through">
                  $170
                </p>
              </div>

              <div className="flex gap-2">
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

      <div className="">
        <div className="flex items-start md:md:w-52 py-2 pb-6 pr-1 pl-4  md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/TheNorthCoat.png"
            className=" mt-4 w-32"
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
            <p className="text-sm font-medium">The North Coat</p>
            <div className="mt-1">
              <div className="flex gap-3">
                <p className="text-sm font-medium text-orange-700">
                  $260
                </p>
                <p className="text-sm font-medium text-gray-600 line-through">
                  $360
                </p>
              </div>

              <div className="flex gap-2">
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

      <div className="">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1  md:pl-7 gap-7 bg-gray-200">
          <img
            src="../images/Explore-1.jpg"
            className="pl-7 mt-4 w-28"
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
              <p className="text-sm font-medium text-orange-700">
                $100
              </p>

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
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4  md:pl-7 gap-3 bg-gray-200">
          <img
            src="../images/Explore-8.png"
            className=" mt-5 h-32 w-28 md:w-32"
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
            <p className="text-sm font-medium">Quilted satin Jacket</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $660
              </p>

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
              {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */
}
{
  /* <TbPointFilled  className="text-red-500 w-8 h-8"/> */
}
{
  /*        <img
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
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1  md:gap-5 bg-gray-200">
          <p className="text-white bg-green-400 text-xs ml-1 px-1">
            NEW
          </p>
          <div className="flex gap-3">
            <img
              src="../images/Explore-7.png"
              className="mt-9 mb-8 w-24"
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
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">
              GP11 Shooter USP Gamepad
            </p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $660
              </p>

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
              {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */
}
{
  /* <TbPointFilled  className="text-red-500 w-8 h-8"/> */
}
{
  /*      <img
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
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1  md:gap-2 bg-gray-200">
          <p className="text-white bg-green-400 text-xs ml-1 px-1">
            NEW
          </p>
          <div className="flex md:gap-3">
            <img
              src="../images/Explore-5.png"
              className="mt-10 mb-7 w-28"
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
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">Kid's Electric Car</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $980
              </p>

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
                src="../images/Ellipse 8.png"
                className="w-3 h-3"
                alt="Ellipse"
              />
              <img
                src="../images/Ellipse 10.png"
                className="w-3 h-3"
                alt="Ellipse"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4  md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/Explore-8.png"
            className=" mt-5 h-32 w-32"
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
            <p className="text-sm font-medium">Quilted satin Jacket</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $660
              </p>

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
              {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */
}
{
  /* <TbPointFilled  className="text-red-500 w-8 h-8"/> */
}
{
  /*       <img
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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4  md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/Explore-3.png"
            className=" mt-4 w-32"
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
            <p className="text-sm font-medium">
              ASUS FHD Gaming Laptop
            </p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $700
              </p>

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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-3 md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/Explore-6.png"
            className="pl- mt-5 h-32 w-32"
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
            <p className="text-sm font-medium">Jr.Zoom Soccer Cleats</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $1160
              </p>

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
              {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */
}
{
  /* <TbPointFilled  className="text-red-500 w-8 h-8"/> */
}
{
  /*       <img
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

      <div className="mt-10">
        <div>
          <div className="flex items-start md:w-52 py-2 pb-6 md:pr-1  md:gap-2 bg-gray-200">
            <p className="text-white bg-red-700 text-xs ml-1 px-1">
              -35%
            </p>
            <div className="flex md:gap-3">
              <img
                src="../images/GucciDuffleBag.png"
                className="mt-8 w-[113px] md:w-28"
                alt="Explore Image 1"
              />
              <div className="flex flex-col gap-2 items-center">
                <a href="#">
                  <RiDeleteBinLine className="p-1 w-7 h-7 bg-white rounded-full" />
                </a>
                {/* <a href="#"><IoEyeOutline  className='p-1 w-7 h-7 bg-white rounded-full'/></a> */
}
{
  /*       </div>
            </div>
          </div>
          <button className="bg-black text-white flex items-center pl-10 text-xs text-center gap-1 w-44 md:w-52 py-2">
            <span>
              <IoCartOutline className="text-xl" />
            </span>
            Add To Cart
          </button>
        </div>

        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">Gucci Duffle Bag</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $960
              </p>

              {/* <div className='flex'>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            </div> */
}
//   <p className="text-sm font-medium line-through">$1160</p>
// </div>
{
  /* <div className='flex mt-1 gap-2'>
                            <img src="../images/Ellipse 8.png" className='w-3 h-3' alt="Ellipse" />
                            <img src="../images/Ellipse 10.png" className='w-3 h-3' alt="Ellipse" />
                           </div> */
}
{
  /*       </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 md:gap-5 bg-gray-200">
          <p className="text-white bg-green-400 text-xs ml-1 px-1">
            NEW
          </p>
          <div className="flex gap-2 md:gap-3">
            <img
              src="../images/Explore-7.png"
              className="mt-9 mb-8 w-24"
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
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">
              GP11 Shooter USP Gamepad
            </p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $660
              </p>

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
              {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */
}
{
  /* <TbPointFilled  className="text-red-500 w-8 h-8"/> */
}
{
  /*        <img
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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4 md:pl-10 gap-3 bg-gray-200">
          <img
            src="../images/SmallBookShelf.png"
            className=" mt-5 w-28 h-32"
            alt="Explore Image 1"
          />
          <div className="flex flex-col gap-2 items-center">
            <a href="#">
              <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
            </a>
            {/* <a href="#"><IoEyeOutline  className='p-1 w-7 h-7 bg-white rounded-full'/></a> */
}
{
  /*   </div>
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">Small BookSelf</p>
            <div className="mt-1">
              <div className="flex gap-3">
                <p className="text-sm font-medium text-orange-700">
                  $230
                </p>
                {/* <p className='text-sm text-gray-600 line-through'>$360</p> */
}
{
  /*                         </div>

              <div className="flex gap-2">
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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-2  md:pl-7 gap-2 md:gap-3 bg-gray-200">
          <img
            src="../images/Explore-3.png"
            className=" mt-4 w-32"
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
            <p className="text-sm font-medium">
              ASUS FHD Gaming Laptop
            </p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $700
              </p>

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

      <div className="mt-10">
        <div>
          <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4 md:pl-10 gap-2 bg-gray-200">
            {/* <p className='text-white bg-red-700 text-xs ml-1 px-1'>-35%</p> */
}
{
  /*       <div className="flex gap-3">
              <img
                src="../images/IPS LCS GamingMonitor.png"
                className="mt-8 w-28"
                alt="Explore Image 1"
              />
              <div className="flex flex-col gap-2 items-center">
                {/* <a href="#"><RiDeleteBinLine  className='p-1 w-7 h-7 bg-white rounded-full'/></a> */
}
{
  /*           <a href="#">
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </a>
              </div>
            </div>
          </div>
          <button className="bg-black text-white flex items-center pl-10 text-xs text-center gap-1 w-[177px] md:w-52 py-2">
            <span>
              <IoCartOutline className="text-xl" />
            </span>
            Add To Cart
          </button>
        </div>

        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">
              IPS LCD Gaming Monitor
            </p>
            <div className=" flex-col gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $960
              </p>

              <div className="flex items-center gap-2">
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
            {/* <div className='flex mt-1 gap-2'>
                            <img src="../images/Ellipse 8.png" className='w-3 h-3' alt="Ellipse" />
                            <img src="../images/Ellipse 10.png" className='w-3 h-3' alt="Ellipse" />
                           </div> */
}
{
  /*      </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1  md:gap-2 bg-gray-200">
          <p className="text-white bg-green-400 text-xs ml-1 px-1">
            NEW
          </p>
          <div className="flex md:gap-3">
            <img
              src="../images/Explore-5.png"
              className="mt-10 mb-8 w-[108px] md:w-28 "
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
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">Kid's Electric Car</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $980
              </p>

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
                src="../images/Ellipse 8.png"
                className="w-3 h-3"
                alt="Ellipse"
              />
              <img
                src="../images/Ellipse 10.png"
                className="w-3 h-3"
                alt="Ellipse"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4  md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/TheNorthCoat.png"
            className=" mt-4 w-32"
            alt="Explore Image 1"
          />
          <div className="flex flex-col gap-2 items-center">
            <a href="#">
              <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
            </a>
            {/* <a href="#"><IoEyeOutline  className='p-1 w-7 h-7 bg-white rounded-full'/></a> */
}
{
  /*      </div>
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">The North Coat</p>
            <div className="mt-1">
              <div className="flex gap-3">
                <p className="text-sm font-medium text-orange-700">
                  $260
                </p>
                <p className="text-sm font-medium text-gray-600 line-through">
                  $360
                </p>
              </div>

              <div className="flex gap-2">
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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4 md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/GucciDuffleBag.png"
            className=" mt-8 mb-6 w-32"
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
            <p className="text-sm font-medium">Gucci Duffle Bag</p>
            <div className="mt-1">
              <div className="flex gap-3">
                <p className="text-sm font-medium text-orange-700">
                  $960
                </p>
                <p className="text-sm font-medium text-gray-600 line-through">
                  $1160
                </p>
              </div>

              <div className="flex gap-2">
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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1  md:pl-7 bg-gray-200">
          <img
            src="../images/NewArrival-1.png"
            className=" mt-14 mb-5 w-[145px] md:w-36"
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
            <p className="text-sm font-medium">RPG Liquid CPU Cooler</p>
            <div className="mt-1">
              <div className="flex gap-3">
                <p className="text-sm font-medium text-orange-700">
                  $160
                </p>
                <p className="text-sm font-medium text-gray-600 line-through">
                  $170
                </p>
              </div>

              <div className="flex gap-2">
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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-4 md:pl-10 gap-3 bg-gray-200">
          <img
            src="../images/SmallBookShelf.png"
            className=" mt-5 w-28 h-32"
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
            <p className="text-sm font-medium">Small BookSelf</p>
            <div className="mt-1">
              <div className="flex gap-3">
                <p className="text-sm font-medium text-orange-700">
                  $230
                </p>
                {/* <p className='text-sm text-gray-600 line-through'>$360</p> */
}
{
  /*          </div>

              <div className="flex gap-2">
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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-3 md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/Explore-3.png"
            className=" mt-4 w-32"
            alt="Explore Image 1"
          />
          <div className="flex flex-col gap-2 items-center">
            <a href="#">
              <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
            </a>
            {/* <a href="#"><IoEyeOutline  className='p-1 w-7 h-7 bg-white rounded-full'/></a> */
}
{
  /*      </div>
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">
              ASUS FHD Gaming Laptop
            </p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $700
              </p>

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

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 pl-3 md:pl-7 md:gap-3 bg-gray-200">
          <img
            src="../images/Explore-6.png"
            className="pl- mt-5 h-32 w-32"
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
            <p className="text-sm font-medium">Jr.Zoom Soccer Cleats</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $1160
              </p>

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
              {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */
}
{
  /* <TbPointFilled  className="text-red-500 w-8 h-8"/> */
}
{
  /*        <img
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

      <div className="mt-10">
        <div>
          <div className="flex items-start md:w-52 py-2 pb-6 pr-1  md:gap-2 bg-gray-200">
            <p className="text-white bg-red-700 text-xs ml-1 px-1">
              -35%
            </p>
            <div className="flex md:gap-3">
              <img
                src="../images/GucciDuffleBag.png"
                className="mt-8 w-[109px] md:w-28"
                alt="Explore Image 1"
              />
              <div className="flex flex-col gap-2 items-center">
                <a href="#">
                  <RiDeleteBinLine className="p-1 w-7 h-7 bg-white rounded-full" />
                </a>
                {/* <a href="#"><IoEyeOutline  className='p-1 w-7 h-7 bg-white rounded-full'/></a> */
}
{
  /*        </div>
            </div>
          </div>
          <button className="bg-black text-white flex items-center pl-10 text-xs text-center gap-1 w-44 md:w-52 py-2">
            <span>
              <IoCartOutline className="text-xl" />
            </span>
            Add To Cart
          </button>
        </div>

        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">Gucci Duffle Bag</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $960
              </p>

              {/* <div className='flex'>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            <IoMdStar  className='text-orange-400 w-5 h-5'/>
                            </div> */
}
{
  /*     <p className="text-sm text-gray-400 font-medium line-through">
                $1160
              </p>
            </div>
            {/* <div className='flex mt-1 gap-2'>
                            <img src="../images/Ellipse 8.png" className='w-3 h-3' alt="Ellipse" />
                            <img src="../images/Ellipse 10.png" className='w-3 h-3' alt="Ellipse" />
                           </div> */
}
{
  /*     </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-start md:w-52 py-2 pb-6 pr-1 md:gap-5 bg-gray-200">
          <p className="text-white bg-green-400 text-xs ml-1 px-1">
            NEW
          </p>
          <div className="flex justify-between md:gap-3">
            <img
              src="../images/Explore-7.png"
              className="mt-9 mb-8 w-24"
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
        </div>
        <div className="mt-4">
          <div>
            <p className="text-sm font-medium">
              GP11 Shooter USP Gamepad
            </p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700">
                $660
              </p>

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
              {/* <TbPointFilled  className="text-yellow-500 w-8 h-8"/> */
}
{
  /* <TbPointFilled  className="text-red-500 w-8 h-8"/> */
}
{
  /*        <img
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

    <div className='mt-10 text-center'>
                <a href="#" className='text-lg font-medium bg-red-500 text-white rounded p-5 px-10'>View All</a>
            </div>
  </div>
</div>
</div> */
}
