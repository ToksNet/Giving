import React from 'react';
import { useDispatch } from 'react-redux';
import { IoMdHeartEmpty, IoMdStar } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { addToCart } from '../slices/cartSlice';
import Star from './Star'; // Assuming you have a Star component
import { todayProducts } from "../constants/constants";

const ProductCard = ({
  id,
  image,
  prodName,
  price,
  discountPrice,
  reviewsNo,
  starsNo,
  discountRate,
  newProd
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, prodName, price }));
  };

  return (
    <div className="flex flex-col group bg-white shadow-md w-full max-w-[220px] h-[350px]">
      <div className="relative flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
        <img
          className="w-full h-[15rem] object-contain"
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
          <IoMdHeartEmpty className="bg-white w-6 h-6 p-1 rounded-full" />
          <IoEyeOutline className="bg-white w-6 h-6 p-1 rounded-full" />
        </div>
        <div
          onClick={handleAddToCart}
          className="bg-black text-white absolute bottom-0 w-full text-center p-2 rounded-b-md opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300"
        >
          Add to Cart
        </div>
      </div>
      <div className="space-y-1 mt-2 text-center md:text-left">
        <h2 className="font-semibold">{prodName}</h2>
        <div className="space-x-2 text-sm font-semibold text-gray-400">
          <span className="text-primary">${price}</span>
          {discountPrice && (
            <span className="line-through text-gray-500">${discountPrice}</span>
          )}
        </div>
        <div className="flex justify-center md:justify-start gap-2 items-center">
          <Star starsNo={starsNo} /> ({reviewsNo})
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
