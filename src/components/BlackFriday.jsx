import React from "react";

function BlackFriday() {
  return (
    <div className="items-center md:px-4 md:mx-32 mb-5 mt-5  ">
      <div className="  justify-center flex-col md:flex-row  flex gap-2   ">
        <div className="md:w-[800px] flex  justify-center">
          <img
            src="/images/image 1.png"
            alt="Black Sales"
            className="w-full h-auto "
          />
        </div>
        <div className="md:w-[800px]  flex justify-center md:pl-2">
          <img
            src="/images/image 3.png"
            alt="Black sales"
            className="w-full h-auto  "
          />
        </div>
        {/* <div className="md:hidden">
          <a
            href="#"
            className="relative bg-red-500 p-2 text-white rounded text-lg bottom-[66px] md:bottom-9 left-32 font-medium"
          >
            Shop Now!
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default BlackFriday;
