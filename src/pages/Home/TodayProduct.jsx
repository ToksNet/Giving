import React from 'react'
import ProductCard from '../../components/ProductCard'
import CountDown from '../../components/CountDown'
import { todayProducts } from '../../constants/constants';

const TodayProduct = () => {
  const initialTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  return (
    <div className='categories my-10'>
    <div className='flex items-center gap-3' >
      <div className='bg-primary w-4 h-7 rounded '>
      </div>
      <h2 className='font-semibold  md:text-[16px] text-primary'>Today’s</h2>
    </div>
    <div className='md:flex justify-between my-3'>
     <h1 className='text-md md:text-[24px] font-semibold md:flex items-center gap-5'><span>Flash Sales</span>
     <CountDown initialTime={initialTime} />
     </h1>
   
     <div className='flex gap-2 md:gap-3'>
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
    <div className='mt-10 flex items-center overflow-x-auto space-x-4 product-scroll '>
        {todayProducts.map((product) => (
          <div key={product.id} className='flex-shrink-0 w-[220px] h-[350px]'>
            <ProductCard product={product} />
          </div>
        ))}
      </div>


    
</div>
  )
}

export default TodayProduct