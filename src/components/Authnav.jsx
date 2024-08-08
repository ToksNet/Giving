import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import message from '../assets/images/message-question.png'
import shopping from '../assets/images/shopping-cart.png'
import profile from '../assets/images/profile-circle.png'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { useSelector } from "react-redux";
const AuthNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const cartItems = useSelector(state => state.cart.items);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const links = [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Electronics' },
    { href: '#', text: 'Home & Lifestyle' },
    { href: '#', text: 'Medicine' },
    { href: '#', text: 'Sport & Outdoor' },
    { href: '#', text: 'Baby\'s & Toy' },
    { href: '#', text: 'Groceries & Pets' },
    { href: '#', text: 'Health & Beauty' }
  ];

  return (
    <>
      <div className=" mt-12 hidden md:flex justify-between max-w-full items-center w-full md:px-12 lg:px-[82px] gap-2 py-[35px] border bg-white border-b-[#D4B4B4] z-10">
        <div>
          <h1 className="font-bold lg:text-xl xl:text-2xl text-[#000000] w-full">GV3N MARKET PLACE</h1>
        </div>
        <div className="flex items-center">
         <ul className="flex gap-12">
         <li className="text-base font-normal text-[#000000]">Home</li>
         <li className="text-base font-normal text-[#000000]">Contact</li>
         <li className="text-base font-normal text-[#000000]">Contact</li>
         <li className="text-base font-normal text-[#000000]">Signup</li>
      
         </ul>
        </div>
        <div className="flex items-center max-w-[243px] flex-1">
          <input className="w-full max-w-full h-8 bg-[#F5F5F5] py-[7px] px-3 text-[#000000] text-[12px] font-normal rounded-lg flex-shrink" placeholder="What are you looking for?" />
         
        </div>
       
      </div>

      <div className="flex md:hidden mt-[65px] py-[21px] px-[26px] justify-between items-center border w-full border-b-[#D4B4B4]">
        <div>
          <h1 className="font-bold text-[10px] text-[#000000] w-full">GV3N MARKET PLACE</h1>
        </div>
        <div className="flex items-center gap-2">
        <div className="flex items-center  flex-1">
          <input className="w-full max-w-full h-8 bg-[#F5F5F5] py-[7px] px-3 text-[#000000] text-[12px] font-normal rounded-lg flex-shrink" placeholder="What are you looking for?" />
         
        </div>
       
         
          <div onClick={toggleNav}>
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className={`fixed top-0 right-0 h-full w-[80%] bg-white shadow-lg transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out  z-[50] h-[100vh] overflow-scroll `}>
          <div>
            <div className="flex items-center justify-between mt-8 bg-[#EA4335] p-6">
              <div>
                <h1 className="font-bold text-base text-[#FFFFFF] w-full">GV3N MARKET PLACE</h1>
              </div>
              <div className="">
                <CloseIcon onClick={toggleNav} className="text-[#FFFFFF]" />
              </div>
            </div>
            <div className="flex flex-col px-[64px] pt-[64px] gap-4">
            <ul className="flex flex-col  gap-4">
         <li className="text-base font-normal text-[#000000]">Home</li>
         <li className="text-base font-normal text-[#000000]">Contact</li>
         <li className="text-base font-normal text-[#000000]">Contact</li>
         <li className="text-base font-normal text-[#000000]">Signup</li>
      
         </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-[360px]">
            <div>
              <button className="px-8 py-3 bg-[#EA4335] text-[#FFFFFF] font-bold text-[9.87px]">Submit a ticket</button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <LocalPostOfficeIcon className="text-black" />
              <p className="font-medium text-sm text-[#1C1B1F] "> customer.support@gv3n.cc</p>
            </div>
            <div>
              <p className="font-normal text-[11.05px] text-[#000000] mt-10 pb-[33px]">© Copyright gv3n  2024. All right reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthNav;