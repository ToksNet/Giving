import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import "../index.css";

const CustomNextArrow = () => null;
const CustomPrevArrow = () => null;

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <>
      <div className="mt-32 md:px-24">
        <div className="flex w-full justify-center ">
          <div className="border-r-[1px] hidden md:flex flex-col border-[#D4B4B4] pr-3 pt-14 h-fit">
            <a href="#" className="flex gap-11 items-center mb-[10px]">
              <span>Women's Fashion</span>
              <FaAngleRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex gap-11 items-center mb-[10px]">
              <span>Women's Fashion</span>
              <FaAngleRight className="w-4 h-4" />
            </a>
            <a href="#" className="mb-[9px]">
              Electronics
            </a>
            <a href="#" className="mb-[9px]">
              Home & Lifestyle
            </a>
            <a href="#" className="mb-[9px]">
              Medicine
            </a>
            <a href="#" className="mb-[9px]">
              Sport & Outdoor
            </a>
            <a href="#" className="mb-[9px]">
              Baby's & Toy
            </a>
            <a href="#" className="mb-[9px]">
              Groceries & Pets
            </a>
            <a href="#" className="mb-[9px]">
              Health & Beauty
            </a>
          </div>

          <div className="flex flex-col-reverse md:flex-row w-full md:w-4/5  md:pl-12 md:mt-[39px] h-[344px] ax-h-full">
            <div className="bg-black w- flex flex-col justify-center items-center md:items-start w-full max-w-full h-52 md:w-3/6 md:h-[300px] px-4 md:pl-12 md:mt-0 ">
              <div className="flex gap-5 justify-center md:justify-normal md:ml-0 items-center ">
                <img
                  src="../images/HeroApple.png"
                  className="w-12 md:w-10"
                  alt="Apple Icon"
                />
                <p className="text-white text-xl font-medium md:font-normal md:text-sm">
                  iPhone 15 Series

                </p>
              </div>

              <div className="mb-5">
                <p className="text-white font-bold md:font-semibold text-2xl md:text-3xl xl:text-5xl mt-5 md:tracking-wider text-center md:text-left">
                  Up to 10% off Voucher
                </p>
              </div>

              <a href="#" className="flex items-center gap-5 pb-2">
                <p className="text-white border-b-2 pb-1 hover:text-gray-300">
                  Shop Now
                </p>
                <FaArrowRight className="text-white text-xl  hover:text-gray-300" />
              </a>
            </div>
            <div className="w-screen mt-2 md:mt-0 md:w-3/6">
              <Slider {...settings}>
                <div>
                  <img
                    src="../images/HeroImg-1.png"
                    className="w-screen h-64 md:h-[300px]"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/HeroImg-2.png"
                    className="w-screen h-64 md:h-[300px]"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/HeroImg-3.png"
                    className="w-screen h-64 md:h-[300px]"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/HeroImg-4.png"
                    className="w-screen h-64 md:h-[300px]"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="../images/HeroImg-5.png"
                    className="w-screen h-64 md:h-[300px]"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
