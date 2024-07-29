import React, { useState } from "react";
import SellersPageNav from "../../components/SellersPageNav";
import { FaPen, FaPlug, FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai"; // Assuming you're using react-icons for the down arrow
import { HiCurrencyDollar } from "react-icons/hi";
import { RiContactsBookUploadFill, RiDeleteBin5Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { TbStack2Filled } from "react-icons/tb";
import "../../index.css"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Product() {

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

  const products = [
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
    {
      img: "/images/money-recive.png",
      name: "Chelsea Boot",
      collect: 0,
      variation: 0,
      inStock: 0,
      price: "$25.00",
      edit: <FaPen className="text-white w-2 h-2" />,
      delete: <RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" />,
    },
  ]
  return (
    <>
      <SellersPageNav />
      {/* <div className="p-4 md:mt-20  mt-32 md:mx-10">
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:justify-between">
            <h1 className="md:text-2xl md:py-1 py-5 text-lg  font-bold mb-5  md:mb-0">
              Product
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

          <div className="md:mt-4 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-28 ">
            <div className="flex flex-col md:flex-row gap-6 md:gap-9 w-full md:w-[70%]">
              <div className="bg-[#d6f5ff] px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">$100.00</p>
                  <div className="bg-[#fbecec] rounded-full p-2">
                    <HiCurrencyDollar className="w-6 h-6 text-[#DB4444]"/>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Total Inventory Value</p>
                </div>
              </div>

              <div className="bg-[#d5edf1] px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">5</p>
                  <div className="bg-[#fbecec] rounded-full p-2">
                    <RiContactsBookUploadFill className="w-6 h-6 text-[#DB4444]"/>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Product Sold</p>
                </div>
              </div>

              <div className="bg-[#fae3e3] px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">1  </p>
                  <div className="bg-[#fbecec] rounded-full p-2">
                    <TbStack2Filled className="w-6 h-6 text-[#DB4444]"/>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Out Of Stock</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[20%]">
              <button className="flex gap-3 justify-center items-center text-white text-sm text-center font-semibold w-full  py-[12px] rounded bg-[#DB4444]">
                <FaPlus className=""/>
                <p className="text-lg md:text-sm">Add New Product</p>
              </button>
            </div>
          </div>

          <div className="bg-[#f9f9f9] p-2 md:p-5 mt-12 md:h-[550px] md:mt-14">
            <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-12 md:gap-16 border-b-[1px] pb-4 justify-between">
              <p className="font-bold text-xs text-left">Product</p>
              <p className="font-bold text-xs text-left">Collect</p>
              <p className="font-bold text-xs">Variation</p>
              <p className="font-bold hidden md:block text-xs">In Stock</p>
              <p className="font-bold hidden md:block text-xs">Price</p>
              <p className="font-bold hidden md:block text-xs">Status</p>
            </div>

            <div className="h-[450px] overflow-y-auto no-scrollbar">
                {products.map((product, index) => (
                  <div key={index} className="grid grid-cols-3 md:grid-cols-6 items-center gap-12 md:gap-16 border-b-[1px] py-2">
                  <div className="font-bold  flex items-center gap-2">
                    <img src={product.img} alt="Boot" className="w-5 h-5 md:w-9 md:h-9"/>
                    <p className="text-xs">{product.name}</p>
                  </div>
                  <p className="text-xs">{product.collect}</p>
                  <p className="text-xs">{product.variation}</p>
                  <p className="text-xs hidden md:block">{product.inStock}</p>
                  <p className="text-xs hidden md:block">{product.price}</p>
                  <div className="hidden md:flex gap-2">
                    <div className="bg-[#595bd4] w-5 h-5 pt-[5px] pl-[5px] rounded">
                      {product.edit}
                    </div>
                    {/* <div className="bg-[#595bd4] w-7 h-7 p-2 rounded"> 
                      {product.delete}
                    {/* </div> 
                  </div>
                </div>
                ))}
            </div>
          </div>

          <div className="flex bg-white mt-16 md:mt-14 gap-3 rounded-lg font-[Poppins]">
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
      </div> */}
    </>
  );
}

export default Product;
