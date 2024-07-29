import React from "react";

function SellersBalance({ available = 0, pending = 0, review = 0 }) {
  const total = available + pending + review;

  return (
    <div className="p-4 mt-4 m-4 md:h-80 rounded-lg shadow-lg bg-white lg:w-1/3 lg:ml-auto">
      {/* <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Balance</h2>
        <span className="text-xl font-medium" style={{ color: "#595BD4" }}>
          Payments
        </span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Available to withdraw</span>
          <span>${available.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Pending for the next payment date</span>
          <span>${pending.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>In review</span>
          <span>${review.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-gray-300 py-2">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="text-center  mt-4">
        <button className="text-[#595BD4] text-xl  py-2 px-4 rounded-lg">
          Withdraw
        </button>
      </div> */}
    </div>
  );
}

export default SellersBalance;
