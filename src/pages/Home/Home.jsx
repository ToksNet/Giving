import React from 'react'
import Header from './Header'
import Categories from './Categories'
import TodayProduct from './TodayProduct'

const Home = () => {
  return (
    <div  className=" container mx-auto px-3 md:px-10">
    <Categories />
    <TodayProduct />
      
    </div>
  )
}

export default Home
