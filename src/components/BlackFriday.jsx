import React from "react";

function BlackFriday() {
  return (
    <div className="items-center w-full mb-5 mt-5  ">
      <div className="  justify-center flex-col md:flex-row  flex   ">
        <div className="md:w-[500px] flex  justify-center md:mx-4">
          <img
            src="/images/image 1.png"
            alt="Black Sales"
            className="w-full h-auto "
          />
        </div>
        <div className="md:w-[500px]  flex justify-center md:mx-4">
          <img
            src="/images/image 3.png"
            alt="Black sales"
            className="w-full h-auto  "
          />
        </div>
        <div className="md:hidden">
          <a
            href="#"
            className="relative bg-red-500 p-2 text-white rounded text-lg bottom-9 left-32 font-medium"
          >
            Shop Now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlackFriday;
