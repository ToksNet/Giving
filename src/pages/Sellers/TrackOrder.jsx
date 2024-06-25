import React, { useState } from "react";
import SellersPageNav from "../../components/SellersPageNav";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai"; // Assuming you're using react-icons for the down arrow
import ButtonGroup from "../../components/ButtonGroup";

function TrackOrder() {
  const [showDateRange, setShowDateRange] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const toggleDateRange = () => {
    setShowDateRange((prev) => !prev);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const getDateRangeText = () => {
    if (startDate && endDate) {
      return `${startDate} to ${endDate}`;
    }
    return "Select Date";
  };

  return (
    <>
      <SellersPageNav />
      <div className="p-4 md:mt-20  mt-40 md:mx-10">
        <div className="flex flex-col ">
          <div className="flex items-center justify-between md:justify-between">
            <h1 className="md:text-2xl md:py-1 py-5 text-lg  font-bold  md:mb-0">
              Track Orders
            </h1>
            <button
              onClick={toggleDateRange}
              className="flex items-center border border-black font-medium text-gray-500 px-1 py-2 rounded-md"
            >
              {getDateRangeText()}
              <AiOutlineDown className="ml-2" />
            </button>
          </div>
          <div className="flex justify-center mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex items-center bg-[#F5F5F5] md:mt-[-38px] rounded-md w-[300px] md:w-80 h-10 gap-2">
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
        {showDateRange && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <label className="block text-sm font-medium text-gray-700">
              Date:
            </label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}
      </div>
      <ButtonGroup />
    </>
  );
}

export default TrackOrder;
