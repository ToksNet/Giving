import React, { useState } from "react";
import SellersPageNav from '../../components/SellersPageNav'
import { FaSearch } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'
import { RiContactsBookUploadFill } from 'react-icons/ri'
import { TbStack2Filled } from 'react-icons/tb'
import { PiWarningCircle, PiWarningCircleFill, PiWarningCircleLight } from 'react-icons/pi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Transactions = () => {

let [num, setNum] = useState(1)
  let [cur, setCur] = useState(1)

  const page = [
    {page: num},
    {page: num + 1},
    {page: num + 2},
    {page: num + 3},
  ]

  function Next() {
    setNum(++num)
  }

  function Back() {
    num > 1 && setNum(--num)
  }

    const transactions = [
        {
            value: "0",
            title: "Pending Settlement",
        }
    ]
  return (
    <>
        <SellersPageNav />

        <div className='md:mx-10'>
            <div className="p-4 md:mt-20  mt-32">
                <div className="flex flex-col ">
                    <div className="flex flex-col md:flex-row md:items-center justify-between md:justify-between">
                        <h1 className="md:text-2xl md:py-1 py-5 text-lg  font-bold mb-5  md:mb-0">
                        Transactions
                        </h1>
                        <button className="border border-black font-medium md:w-[242px] text-gray-500 px-3 py-2 rounded-md">
                        Export CSV
                        </button>
                    </div>
                    <div className="flex justify-center mt-4 md:border-b-[1px] border-[#fbecec] md:pb-10 md:mt-0 w-full md:w-auto">
                        <div className="hidden md:flex items-center bg-[#F5F5F5] md:mt-[-38px] rounded-md w-[300px] md:w-80 h-10 gap-2">
                        <FaSearch className="text-gray-500 ml-2" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-transparent outline-none flex-1 border-none text-sm md:text-base"
                        />
                        <button className="bg-[#DB4444] text-white px-2 py-1 h-full rounded-r-md text-sm md:text-base">
                            Search
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-4 pt-0'>
                <div className="flex flex-col md:flex-row gap-6 md:gap-9 w-full md:w-[70%]">
                    {transactions.map((transaction, index) => (
                        <div key={index} className="bg-[#f1fcff] px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-semibold">{transaction.value}</p>
                                {/* <div className="bg-[#fbecec] rounded-full p-2">
                                    <HiCurrencyDollar className="w-6 h-6 text-[#DB4444]"/>
                                </div> */}
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-500">{transaction.title}</p>
                            </div>
                        </div>
                    ))}

                    <div className="bg-[#fbfbfb] border-[1px] border-gray-300 px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">5</p>
                            {/* <div className="bg-[#fbecec] rounded-full p-2">
                                <RiContactsBookUploadFill className="w-6 h-6 text-[#DB4444]"/>
                            </div> */}
                        </div>
                        <div className="mt-4">
                            <p className="text-xs text-gray-500">Product Sold</p>
                        </div>
                    </div>

                    <div className="bg-[#fbfbfb] border-[1px] border-gray-300 px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">1  </p>
                            {/* <div className="bg-[#fbecec] rounded-full p-2">
                                <TbStack2Filled className="w-6 h-6 text-[#DB4444]"/>
                            </div> */}
                        </div>
                        <div className="mt-4">
                            <p className="text-xs text-gray-500">Out Of Stock</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center text-xs text-gray-500 gap-1 mt-5'>
                    <div>
                        <PiWarningCircle className='text-red-500 w-6 h-6' />
                    </div>

                    <div>
                        <p>All pending settlements are paid to your account within 24 hours.</p>
                    </div>
                </div>
            </div>

            <div className='p-4 mx-4 px-6 mt-3 bg-[#fbf7f7] h-[550px] border-[1px] md:border-0'>
                <div className='flex justify-between '>
                    <a href="#" className='font-bold text-sm'>Transaction Details</a>
                    <a href="#" className='font-bold text-sm'>Description</a>
                    <a href="#" className='font-bold text-sm'>Type</a>
                    <a href="#" className='font-bold text-sm hidden md:block'>Amount</a>
                    <a href="#" className='font-bold text-sm hidden md:block'>Time Stamp</a>
                    <a href="#" className='font-bold text-sm hidden md:block'>Status</a>
                </div>

                <div className=' flex flex-col items-center gap-7 mt-40'>
                    <div>
                        <PiWarningCircleFill  className='w-36 h-36 text-gray-800'/>
                    </div>
                    <p className='font-bold text-sm'>Oops, Error</p>
                </div>
            </div>

            <div className="flex bg-white p-4 pt-0 mt-16 md:mt-6 gap-3 rounded-lg font-[Poppins]">
            <button onClick={Back} className="h-8 border-[1px] border-gray-200 rounded px-[6px] bg-gray-200 w-8 hover:bg-[#DB4444] hover:text-white">
              <MdOutlineKeyboardArrowLeft  className="items-center"/>
            </button>
            {
              page.map((pg, i) => (
                <button key={i} onClick={() => setCur(pg.page)} className={`h-8 border-[1px] border-gray-200 rounded w-8 ${cur === pg.page && 'bg-[#DB4444] text-white'}`}>{pg.page}</button>
              ))
            }
            <button onClick={Next} className="h-8 border-[1px] border-gray-200 rounded px-[6px] bg-gray-200 w-8 hover:bg-[#DB4444] hover:text-white">
              <MdOutlineKeyboardArrowRight  className="items-center"/>
            </button>
          </div>
        </div>
    </>
  )
}

export default Transactions