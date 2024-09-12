import React, { useState } from "react";
import SellersPageNav from "../../components/SellersPageNav";
import { FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import BasicSelect from "../../components/DropdownInput";
import TrackOrders from "../../components/TrackOrders";

function TrackOrder() {
  //date select dropdown
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const options = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
  ];

  return (
    <>
      <div className="p-4 md:mt-20  mt-40 md:px-[88px]">
        <div className="">
          <div className="flex justify-between">
            <h1 className="md:text-2xl text-lg font-bold">
              Track Orders
            </h1>
            <div className="flex items-center">
              <input placeholder="Search Order or Order ID " className="bg-[#F5F5F5] w-[391px] max-w-full px-5 py-[11.5px] rounded  text-[12px] font-normal" />
              <button className="bg-[#DB4444] py-[11.5px] px-3 rounded-tr-[12px] rounded-br-[12px]  font-normal text-[#FFFFFF] text-[12px] border-none">Search</button>
            </div>
            <BasicSelect
              label="Past 3 Months"
              options={options}
              value={selectedValue}
              onChange={handleSelectChange}
            />
          </div>
        </div>
        <div>
          <TrackOrders />
        </div>
      </div>
    </>
  );
}

export default TrackOrder;
