import React from 'react'
import FullProductCard from '../../components/ProductDescripComponents/FullProductCard'

const ProductDetails = () => {
  return (
    <div className=" container mt-20 md:mt-[15%]  mx-auto px-3 md:px-10">
      <div className='mb-7'>
        <span>Account</span>/ <span>Gamming</span>/ <span>Havic HV G-92 Gamepad</span>
      </div>
      <FullProductCard />
    </div>
  )
}

export default ProductDetails