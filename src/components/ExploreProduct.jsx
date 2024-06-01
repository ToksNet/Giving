import React from 'react'
import { TbRectangleVerticalFilled, } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ExploreProduct = () => {
  return (
    <>
        <div className='mx-32 mt-4'>
            <div>
                <div>
                    <div className='flex items-center gap-3'>
                        <div className='h-3 bg-red-500 p-4 px-2 rounded-sm'></div>
                        <p className='text-sm text-red-500'>Our Products</p>
                    </div>

                    <div className='flex items-center mt-5 justify-between'>
                        <p className='text-2xl font-medium'>Explore Our Products</p>
                        <div className='flex text-sm gap-2 items-center'>
                        <FaArrowLeft className='p-2 w-8 h-8 bg-gray-200 rounded-full'/>
                        <FaArrowRight className='p-2 w-8 h-8 bg-gray-200 rounded-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExploreProduct