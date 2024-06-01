import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <div className='mt-20 md:mt-32 md:mx-24 md:mr-16'>
        <div className='flex'> 
            <div className='border-r-[1px] hidden md:flex flex-col border-[#D4B4B4] pr-3 pt-16'>
                <p className='flex gap-11 items-center mb-2'><span>Women's Fashion</span><FaAngleRight className="w-4 h-4" /></p>
                <p className='flex gap-11 items-center mb-2'><span>Women's Fashion</span> <FaAngleRight className="w-4 h-4" /></p>
                <p className='mb-2'>Electronics</p>
                <p className='mb-2'>Home & Lifestyle</p>
                <p className='mb-2'>Medicine</p>
                <p className='mb-2'>Sport & Outdoor</p>
                <p className='mb-2'>Baby's & Toy</p>
                <p className='mb-2'>Groceries & Pets</p>
                <p className='mb-2'>Health & Beauty</p>
            </div>
            <div className='md:pl-12 pt-10'>
                <img className='w-full h-vh md:h-80' src="../images/Hero.jpg" alt="Hero Image" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero