import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import "../index.css"

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
      <div className='mt-20 md:mt-32 md:mx-24 md:mr-16'>
        <div className='flex w-full'> 
            <div className='border-r-[1px] hidden md:flex flex-col border-[#D4B4B4] pr-3 pt-14'>
                <a href='#' className='flex gap-11 items-center mb-[10px]'><span>Women's Fashion</span><FaAngleRight className="w-4 h-4" /></a>
                <a href='#' className='flex gap-11 items-center mb-[10px]'><span>Women's Fashion</span> <FaAngleRight className="w-4 h-4" /></a>
                <a href='#' className='mb-[9px]'>Electronics</a>
                <a href='#' className='mb-[9px]'>Home & Lifestyle</a>
                <a href='#' className='mb-[9px]'>Medicine</a>
                <a href='#' className='mb-[9px]'>Sport & Outdoor</a>
                <a href='#' className='mb-[9px]'>Baby's & Toy</a>
                <a href='#' className='mb-[9px]'>Groceries & Pets</a>
                <a href='#' className='mb-[9px]'>Health & Beauty</a>
            </div>

            <div className='flex w-4/5 pt-14 pl-12'>
              <div className='bg-black w-3/6 h-[300px] pl-12 pt-12'>
                  <div className='flex gap-5 items-center mb-5'>
                    <img src="../images/HeroApple.png" className='w-10' alt="Apple Icon" />
                    <p className='text-white'>iPhone 15 Series</p>
                  </div>

                  <div className='mb-5'>
                    <p className='text-white font-semibold text-5xl tracking-wider'>Up to 10%  <br /> off Voucher</p>
                  </div>

                  <a href='#' className='flex items-center gap-5'>
                    <p className='text-white border-b-2 pb-1 hover:text-gray-300'>Shop Now</p>
                    <FaArrowRight className='text-white text-xl  hover:text-gray-300' />
                  </a>
                  
              </div>
              <div className="w-3/6">
                  <Slider {...settings}>
                        <div>
                          <img src="../images/HeroImg-1.png" className='w-screen h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-2.png" className='w-screen h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-3.png" className='w-screen h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-4.png" className='w-screen h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-5.png" className='w-screen h-[300px]' alt="" />
                       </div>
                  </Slider>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero