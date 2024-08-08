import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../../index.css"
import chart1 from '../../assets/images/chart1.png'
import chart2 from '../../assets/images/chart2.png'



function Analytics() {


  return (
    <>
      <div className="p-4 md:mt-20  mt-32 md:mx-10">
        <div className="lg:flex flex-col ">
          <div className="flex-col lg:flex-row gap-3 flex justify-between">
            <h1 className="md:text-2xl text-lg font-bold">
              Analytics
            </h1>
            <div className="md:flex items-center gap-[10px]">
                <p className="px-[15px] py-[11px] bg-[#1111110D] text-[#191919] rounded-[3px] font-semibold text-[12px]">Select date to filter:</p>
                <div className="mt-2 md:mt-0 px-[15px] py-[11px] text-[#FAFAFA] rounded-[3px] font-semibold text-[12px] bg-[#000000] flex items-center gap-[10px]">
                    <CalendarMonthIcon />
                1/01/2014 - 31/12/2024
                <ArrowDropDownIcon />
                </div>
            </div>
            
          </div>
          <div className="border-b overflow-scroll lg:overflow-auto border-[#FBECEC] w-full pb-[14px] mt-[60px]">
                <ul className="flex gap-[50px]">
                    <li className="text-[#DB4444] font-bold text-base">Orders</li>
                    <li className="text-[#00000080] font-normal text-base">Transactions</li>
                    <li className="text-[#00000080] font-normal text-base">Products </li>
                    <li className="text-[#00000080] font-normal text-base">Customers</li>
                    <li className="text-[#00000080] font-normal text-base">Campaigns</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-[50px] gap-5">
                <img src={chart1} alt="chart" />
                <img src={chart1} alt="chart" />
                <img src={chart1} alt="chart" />
                <img src={chart1} alt="chart" />
                <img src={chart2} alt="chart" />
                <img src={chart1} alt="chart" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
