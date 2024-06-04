import React from 'react'
import CategoryCard from "../../components/CategoryCard"
import { categoryImages } from '../../constants/constants'

const Categories = () => {
  return (
    <div className='border-t-[1px] mx-3 mt-28 border-[#D4B4B4]'>
    <div className='categories md:mx-20 my-10'>
        <div className='flex items-center gap-3' >
          <div className='bg-primary w-4 h-7 rounded '>
          </div>
          <h2 className='font-semibold  md:text-[16px] text-primary'>categories</h2>
        </div>
        <div className='flex justify-between my-3'>
         <h1 className='tex-md md:text-[24px] font-semibold'>Browse By Category</h1>
         <div className='flex gap-3'>
            <button className='bg-gray-200 rounded-full p-2'>
            <svg width="15" height="13" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L1 8L8 15M1 8H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <button className='bg-gray-200 rounded-full p-2'>
            <svg width="15" height="13" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
         </div>
        </div>
         <div className='mt-10 grid grid-cols-2 md:flex justify-between gap-5 items-center md:items-start '>
         {categoryImages.map(category => (
          <CategoryCard key={category.id} image={category.image} name={category.name} />
        ))}
         </div>

    </div>
    </div>
  )
}

export default Categories