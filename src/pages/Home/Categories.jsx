import React, { useRef } from "react";
import Slider from "react-slick";
import CategoryCard from "../../components/CategoryCard";
import { categoryImages } from "../../constants/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-28 mx-4 md:mt-32 md:mx-32">
      <div className="categories mx-auto my-10 w-full px-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary w-4 h-7 rounded"></div>
          <h2 className="font-semibold md:text-[16px] text-primary">
            Categories
          </h2>
        </div>
        <div className="flex justify-between items-center my-3">
          <h1 className="text-md md:text-[24px] font-semibold">
            Browse By Category
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
        <div className="mt-10">
          <Slider {...settings} ref={sliderRef}>
            {categoryImages.map((category) => (
              <div key={category.id} className="px-[5px] w-full">
                <CategoryCard image={category.image} name={category.name} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
