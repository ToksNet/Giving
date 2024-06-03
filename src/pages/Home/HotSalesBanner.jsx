import React from 'react'
import BannercountDown from '../../components/BannercountDown'

const HotSalesBanner = () => {
  return (
    <div className='text-white bg-black p-10'>
        <h2>JBL Sales</h2>
        <div className='flex'>
         <div>
            <h1 className='font-semibold text-[3rem]'>Enhance Your Music Experience</h1>
            <BannercountDown />
            <button>Buy Now</button>
         </div>
         <div>
         
         </div>
        </div>
      
    </div>
  )
}

export default HotSalesBanner