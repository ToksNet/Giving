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
      <div className='mt-28 mx-0 md:mt-32 md:mx-24 md:mr-16'>
        <div className='flex w-full'> 

            <div className='flex flex-col-reverse md:flex-row w-4/5 md:pt-14 md:pl-12'>
              <div className='bg-black w-screen  h-52 md:w-3/6 md:h-[300px] pl-12 mt-5 md:mt-0 md:pt-12'>
                  <div className='flex gap-5 mr-12 justify-center md:justify-normal md:ml-0 items-center mb-5'>
                    <img src="../images/HeroApple.png" className='w-12 md:w-10' alt="Apple Icon" />
                    <p className='text-white text-xl font-medium md:font-normal md:text-sm'>iPhone 15 Series</p>
                  </div>

                  <div className='mb-5'>
                    <p className='text-white font-bold md:font-semibold text-3xl md:text-5xl md:tracking-wider'>Up to 10% off Voucher</p>
                  </div>

                  <a href='#' className='flex ml-24 md:ml-0 items-center gap-5'>
                    <p className='text-white border-b-2 pb-1 hover:text-gray-300'>Shop Now</p>
                    <FaArrowRight className='text-white text-xl  hover:text-gray-300' />
                  </a>
                  
              </div>
              <div className="w-screen mt-2 md:mt-0 md:w-3/6">
                  <Slider {...settings}>
                        <div>
                          <img src="../images/HeroImg-1.png" className='w-screen h-64 md:h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-2.png" className='w-screen h-64 md:h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-3.png" className='w-screen h-64 md:h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-4.png" className='w-screen h-64 md:h-[300px]' alt="" />
                       </div>
                       <div>
                          <img src="../images/HeroImg-5.png" className='w-screen h-64 md:h-[300px]' alt="" />
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