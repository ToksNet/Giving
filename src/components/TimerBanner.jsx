import React from "react";

function TimerBanner() {
  return (
    <div className=" mx-7 h-[628px] mt-5 mb-5 flex justify-center items-center">
      <div className="w-[1025px] bg-black flex justify-end content-center">
        <div className="relative flex items-end justify-center">
          <div className=" flex">
            <div className=" flex">
              <p className="font-[16px]">JBL Sales</p>
            </div>
            <div>
              <p className="font-[48px]">Enhance Your Music Experience</p>
            </div>
            <div></div>
            <div>
              <button className="bg-red-500 text-center text-white rounded-sm w-[100px] h-[40px]">
                Buy Now!
              </button>
            </div>
            <div>
              <img src="/images/salesTag.png" alt="Blurred Background" />
            </div>
          </div>
          <div className="relative w-[600px] h-[full] flex justify-right items-center">
            <div className="w-[800px]  h-full">
              <img src="/images/BlurBg.png" alt="Blurred Background" />
            </div>
            <div className="ml-10">
              <img
                src="/images/jbl-speaker.png"
                alt="JBL Speaker"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerBanner;
