// import React from "react";
// import { Link } from "react-router-dom";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
// import { MdStarHalf } from "react-icons/md";
// import { IoCartOutline } from "react-icons/io5";

// import { RiDeleteBinLine } from "react-icons/ri";

// // import { CgEditBlackPoint } from "react-icons/cg";
// import { IoEyeOutline } from "react-icons/io5";

// const ProductCard = ({
//   imageSrc,
//   title,
//   price,
//   originalPrice,
//   rating,
//   reviews,
// }) => {
//   return (
//     <div className="mb-5">
//       <div className="relative group">
//     <div className="bg-[#F5F5F5] flex justify-center items-center h-[250px] px-4">
//         <div className="">
//           <div className="">
//             <img
//               src={imageSrc}
//               className=""
//               alt={title}
//             />
//           </div>
//           <div className="absolute top-0 right-0 pr-3 pt-3 flex flex-col gap-2">
//             <a href="#">
//               <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
//             </a>
//             <a href="#">
//               <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
//             </a>
//           </div>
//         </div>
//         <Link to="/product-details"> 
//         <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           Add to Cart 
//         </div>
//         </Link>
//       </div>
//     </div>
//       <div className="mt-4">
//         <p className="text-sm font-medium">{title}</p>
//         <div className="flex gap-2 mt-1">
//           <p className="text-sm font-medium text-orange-700 pr-2 inline">
//             {price}
//           </p>
//           <p className="text-sm font-medium text-gray-500 inline line-through">
//             {originalPrice}
//           </p>
//         </div>
//         <div className="flex gap-2 mt-1 items-center">
//           <div className="flex">
//             {Array.from({ length: 5 }, (_, index) => (
//               <IoMdStar
//                 key={index}
//                 className={`w-5 h-5 ${
//                   index < rating ? "text-orange-400" : "text-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//           <p className="text-sm">({reviews})</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NewArrival = () => {
//   const products = [
//     {
//       imageSrc: "../images/Explore-2.png",
//       title: "CANON EOS DSLR Camera",
//       price: "$100",
//       // originalPrice: "$120",
//       rating: 4,
//       reviews: 95,
//     },
//     {
//       imageSrc: "../images/NewArrival-1.png",
//       title: "RPG Liquid CPU Cooler",
//       price: "$160",
//       // originalPrice: "$400",
//       rating: 2,
//       reviews: 65,
//     },
//     {
//       imageSrc: "../images/TheNorthCoat.png",
//       title: "The North Coat",
//       price: "$260",
//       originalPrice: "$360",
//       rating: 5,
//       reviews: 65,
//     },
//     {
//       imageSrc: "../images/Explore-1.jpg",
//       title: "Breed Dry Dog Food",
//       price: "$500",
//       // originalPrice: "$600",
//       rating: 4,
//       reviews: 35,
//     },
//     {
//       imageSrc: "../images/Explore-8.png",
//       title: "Quilted satin Jacket",
//       price: "$660",
//       // originalPrice: "",
//       rating: 3,
//       reviews: 55,
//     },
//     {
//       imageSrc: "../images/Explore-7.png",
//       title: "     GP11 Shooter USP Gamepad",
//       price: "$660",
//       // originalPrice: "",
//       rating: 6,
//       reviews: 55,
//     },
//     {
//       imageSrc: "../images/Explore-5.png",
//       title: "Kid's Electric Car",
//       price: "$980",
//       // originalPrice: "",
//       rating: 3,
//       reviews: 29,
//     },
//     {
//       imageSrc: "../images/Explore-8.png",
//       title: "Quilted satin Jacket",
//       price: "$660",
//       // originalPrice: "",
//       rating: 3,
//       reviews: 55,
//     },
//     {
//       imageSrc: "../images/Explore-3.png",
//       title: "ASUS FHD Gaming Laptop",
//       price: "$700",
//       // originalPrice: "",
//       rating: 10,
//       reviews: 325,
//     },
//     {
//       imageSrc: "../images/Explore-6.png",
//       title: "Jr.Zoom Soccer Cleats",
//       price: "$1160",
//       // originalPrice: "",
//       rating: 11,
//       reviews: 35,
//     },
//     {
//       imageSrc: "../images/GucciDuffleBag.png",
//       title: "Gucci Duffle Bag",
//       price: "$960",
//       // originalPrice: "",
//       rating: 4,
//       reviews: 39,
//     },
//     {
//       imageSrc: "../images/Explore-7.png",
//       title: "GP11 Shooter USP Gamepad",
//       price: "$660",
//       // originalPrice: "",
//       rating: 3,
//       reviews: 55,
//     },
//     {
//       imageSrc: "../images/SmallBookShelf.png",
//       title: "Small BookSelf",
//       price: " $230",
//       // originalPrice: "",
//       rating: 1,
//       reviews: 65,
//     },
//     {
//       imageSrc: "../images/Explore-3.png",
//       title: "ASUS FHD Gaming Laptop",
//       price: "$700",
//       // originalPrice: "",
//       rating: 3,
//       reviews: 325,
//     },
//     {
//       imageSrc: "../images/IPS LCS GamingMonitor.png",
//       title: "IPS LCD Gaming Monitor",
//       price: "$960",
//       // originalPrice: "",
//       rating: 4,
//       reviews: 65,
//     },
//     {
//       imageSrc: "../images/Explore-5.png",
//       title: "Kid's Electric Car",
//       price: "$980",
//       // originalPrice: "",
//       rating: 5,
//       reviews: 65,
//     },
//     {
//       imageSrc: "../images/TheNorthCoat.png",
//       title: "The North Coat",
//       price: "$260",
//       originalPrice: "$360",
//       rating: 2,
//       reviews: 65,
//     },
//     {
//       imageSrc: "../images/GucciDuffleBag.p",
//       title: "Gucci Duffle Bag",
//       price: "$960",
//       originalPrice: "$1160",
//       rating: 4,
//       reviews: 45,
//     },
//     {
//       imageSrc: "../images/NewArrival-1.png",
//       title: "RPG Liquid CPU Cooler",
//       price: "$160",
//       originalPrice: "$170",
//       rating: 5,
//       reviews: 22,
//     },
//     {
//       imageSrc: "../images/SmallBookShelf.png",
//       title: "Small BookSelf",
//       price: " $230",
//       originalPrice: " $330",
//       rating: 2,
//       reviews: 86,
//     },
//     {
//       imageSrc: "../images/Explore-6.png",
//       title: "Jr.Zoom Soccer Cleats",
//       price: "$1160",
//       // originalPrice: "",
//       rating: 5,
//       reviews: 43,
//     },
//     {
//       imageSrc: "../images/GucciDuffleBag.png",
//       title: "Gucci Duffle Bag",
//       price: " $960",
//       // originalPrice: "",
//       rating: 3,
//       reviews: 99,
//     },
//     {
//       imageSrc: "../images/Explore-7.png",
//       title: "GP11 Shooter USP Gamepad",
//       price: " $660",
//       // originalPrice: "",
//       rating: 1,
//       reviews: 55,
//     },
//     {
//       imageSrc: "../images/SmallBookShelf.png",
//       title: "Small BookSelf",
//       price: " $230",
//       originalPrice: " $330",
//       rating: 2,
//       reviews: 86,
//     },
//   ];

//   return (
//     <>
//       <div className="w-full">
//         <div className=" px-4 align-center justify-center mb-10 md:mx-32 mt-10">
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
//             {products.map((product, index) => (
//               <ProductCard key={index} {...product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewArrival;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

const ProductCard = ({
  imageSrc,
  title,
  price,
  originalPrice,
  rating,
  reviews,
}) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate("/product-details", { state: { imageSrc, title, price, rating, reviews } });
  };

  return (
    <div className="mb-5">
      <div className="relative group">
        <div className="bg-[#F5F5F5] flex justify-center items-center h-[250px] px-4">
          <div className="">
            <div className="">
              <img src={imageSrc} className="" alt={title} />
            </div>
            <div className="absolute top-0 right-0 pr-3 pt-3 flex flex-col gap-2">
              <a href="#">
                <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
              </a>
              <a onClick={handleViewProduct} className="cursor-pointer">
                <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
              </a>
            </div>
          </div>
          <Link to="/product-details">
            <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Add to Cart
            </div>
          </Link>
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
                className={`w-5 h-5 ${index < rating ? "text-orange-400" : "text-gray-300"}`}
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

