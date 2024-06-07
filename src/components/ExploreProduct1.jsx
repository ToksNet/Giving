import React from "react";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
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
    <div className="w-270px group h-350px md:w-full md:max-w-[270px] md:h-[350px] relative">
      <div className="flex flex-col justify-between bg-gray-200 h-250px w-270px md:h-[250px] md:w-[270px]">
        <div>
          <div className="relative h-180px w-190px md:h-[180px] md:w-[190px] mx-auto">
            <img
              src={imageSrc}
              className="w-full h-full object-cover"
              alt={title}
            />
          </div>
          <div className=" bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add to Cart
          </div>
        </div>
        <div>
          <div className="mt-4 px-2 flex-grow flex flex-col justify-end bg-white h-70px w-full md:h-[70px]">
            <p className="text-sm md:text-base lg:text-lg font-medium">
              {title}
            </p>
            <div className="block">
              <p className="text-sm font-medium text-orange-700 pr-2 inline">
                {price}
              </p>
              <p className="text-sm font-medium text-gray-500 inline line-through">
                {originalPrice}
              </p>
            </div>
            <div className="flex gap-2 mt-1 items-center justify-between">
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
      </div>
    </div>
  );
};

const ExploreProduct1 = () => {
  const products = [
    {
      imageSrc: "../images/Explore-1.jpg",
      title: "Breed Dry Dog Food",
      price: "$100",
      originalPrice: "$120",
      rating: 3,
      reviews: 35,
    },
    {
      imageSrc: "../images/Explore-2.png",
      title: "CANON EOS DSLR Camera",
      price: "$360",
      originalPrice: "$400",
      rating: 4,
      reviews: 95,
    },
    {
      imageSrc: "../images/Explore-3.png",
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      originalPrice: "$800",
      rating: 5,
      reviews: 325,
    },
    {
      imageSrc: "../images/Explore-1.jpg",
      title: "Curology Product Set",
      price: "$500",
      originalPrice: "$600",
      rating: 4,
      reviews: 145,
    },
    {
      imageSrc: "../images/Explore-1.jpg",
      title: "Curology Product Set",
      price: "$500",
      originalPrice: "$600",
      rating: 4,
      reviews: 145,
    },
  ];

  return (
    <div className="mx-3 md:mx-32 px-4 mt-16">
      <div className="mb-9">
        <div className="flex items-center gap-3">
          <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
          <p className="text-sm font-semibold text-red-500">This Month</p>
        </div>
        <div className="flex mt-5 items-end justify-between">
          <p className="text-2xl font-medium">Best Selling Products</p>
          <div className="flex text-sm gap-2 items-center">
            <button className="bg-red-500 text-white rounded-sm w-[100px] h-[40px]">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ExploreProduct1;
