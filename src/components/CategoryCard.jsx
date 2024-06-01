import React from 'react'

const CategoryCard = ({ image, name }) => {
  return (
    <div className='w-[170px] h-[145px] relative rounded shadow-s shadow-slate-500'>
        <img src={image} alt="" srcset=""  className='w-full h-full object-cover rounded'/>
        <div className='bg-black opacity-50 w-full h-full flex justify-center items-center absolute top-0 rounded'>
           <h3 className='text-white absolute bottom-3'>{name}</h3>
        </div>
    </div>
  )
}

export default CategoryCard