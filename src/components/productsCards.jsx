import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import Skeleton from '@mui/material/Skeleton';

const ProductsCards = ({
  id,
  imageSrc,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  prodStatus,
  availColors,
  onFavorite,
  width = '',
  margin = '40px',
  loading = false, 
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === id);

  const handleAddToCart = () => {
    if (isInCart) {
      dispatch(removeFromCart({ id }));
    } else {
      dispatch(addToCart({ id, imageSrc, title, price, originalPrice, discount, rating, reviews, prodStatus, availColors }));
    }
  };

  const navigate = useNavigate();

  const handleViewDetails = () => {
    console.log(`Navigating to product with id: ${id}`);
    navigate(`/product-details/${id}`);
  };

  return (
    <div style={{ marginLeft: margin }}>
      <div className="relative group" style={{ width: width }}>
        <div className="bg-[#F5F5F5] flex justify-center items-center h-[250px]">
          {loading ? (
            <Skeleton animation="wave"  variant="rectangular" width="100%" height="100%" />
          ) : (
            <div className="md:w-[150px] h-[150px]">
              <img className="w-full h-full" src={imageSrc} alt={title} />
              <div className="absolute pt-3 pl-3 top-0 left-0 flex items-center gap-2">
                {discount && (
                  <div className="">
                    <p className="px-3 py-1 font-normal text-[12px] text-[#FAFAFA] rounded bg-[#DB4444]">
                      -{`${discount}%`}
                    </p>
                  </div>
                )}
                {prodStatus && (
                  <div className="">
                    <p className="px-3 py-1 font-normal text-[12px] text-[#FAFAFA] rounded bg-[#00FF66]">
                      {`${prodStatus}`}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute top-0 right-0 pr-3 pt-3 flex flex-col gap-2">
                <a href="#" onClick={onFavorite}>
                  <IoMdHeartEmpty className="p-1 w-7 h-7 bg-white rounded-full" />
                </a>
                <a onClick={handleViewDetails} className="cursor-pointer">
                  <IoEyeOutline className="p-1 w-7 h-7 bg-white rounded-full" />
                </a>
              </div>
            </div>
          )}
          {!loading && (
            <div
              onClick={handleAddToCart}
              className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        {loading ? (
          <>
            <Skeleton width="60%" />
            <Skeleton width="40%" />
            <Skeleton width="80%" />
            <Skeleton width="50%" />
          </>
        ) : (
          <>
            <p className="text-sm font-medium">{title}</p>
            <div className="flex gap-2 mt-1">
              <p className="text-sm font-medium text-orange-700 pr-2 inline">{price}</p>
              {originalPrice && (
                <p className="text-sm font-medium text-gray-500 inline line-through">{originalPrice}</p>
              )}
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
              {reviews && <p className="text-sm">{reviews}</p>}
            </div>
            {availColors && (
              <div className="flex items-center gap-2 mt-2">
                {availColors.map(color => (
                  <div
                    key={color.id}
                    className="rounded-full border border-[black] cursor-pointer w-5 h-5"
                    style={{ backgroundColor: color.code }}
                  ></div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsCards;
