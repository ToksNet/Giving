import React, { useEffect, useState } from "react";

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center md:mx-2">
        <div className="text-[12px] font-bold text-black bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
          {timeLeft[interval]}
        </div>
        <div className="text-sm text-white">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex justify-center space-x-4 text-white">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

function TimerBanner() {
  return (
    <div className="container mx-auto my-1 border-t-[1px] pt-10 w-full">
      <div className="max-w-screen-xl mx-auto bg-black flex flex-col md:flex-row items-center justify-center md:justify-between relative">
        {/* JBL Sales Label */}
        <div className="absolute top-4 left-4 px-4 text-white">
          <p className="text-lg font-medium md:text-[16px]">JBL Sales</p>
        </div>

        {/* Left Section (Text, Timer, Button) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 space-y-4 text-white pl-4 md:pl-8 hidden md:block">
          <p className="text-4xl md:text-[38px] font-bold leading-tight">
            <span>Enhance Your</span>
            <span className="mt-0 block">Music Experience</span>
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <CountdownTimer targetDate="2024-06-30T23:59:59" />
          </div>
          <div className="flex justify-center md:justify-start mt-6">
            <button className="bg-red-500 text-white rounded-sm w-[100px] h-[40px] mt-0">
              Buy Now!
            </button>
          </div>
        </div>

        {/* Right Section (BlurBg and Speaker) */}
        <div className="relative w-full md:w-auto mt-6 md:mt-0 flex justify-center items-center pr-4 md:pr-8 hidden md:block">
          <img
            src="/images/BlurBg.png"
            alt="Blurred Background"
            className="w-full md:w-[600px] h-auto"
          />
          <img
            src="/images/jbl-speaker.png"
            alt="JBL Speaker"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-auto md:h-auto"
          />
        </div>

        {/* Sales Tag Image */}
        <div className="absolute bottom-4 right-4 md:bottom-auto md:top-[205px] md:left-[270px] md:w-[200px] flex justify-center md:justify-end w-full mt-6 md:mt-0 hidden md:block">
          <img
            src="/images/salesTag.png"
            className="w-32 md:w-full"
            alt="Sales Tag"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden bg-black pt-4">
        {/* JBL Sales Label */}
        <div className="absolute top-4 left-4 px-4 text-white">
          <p className="text-lg font-medium">JBL Sales</p>
        </div>

        {/* Right Section (BlurBg and Speaker) */}
        <div className="relative w-full flex justify-center items-center pb-4">
          <img
            src="/images/BlurBg.png"
            alt="Blurred Background"
            className="w-full h-auto"
          />
          <img
            src="/images/jbl-speaker.png"
            alt="JBL Speaker"
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3"
          />
        </div>

        {/* Timer, Button, and Sales Tag Image */}
        <div className="flex flex-col items-start text-white space-y-4 px-4 pb-4">
          <CountdownTimer targetDate="2024-06-30T23:59:59" />
          <div className="flex justify-start items-center space-x-4">
            <button className="bg-red-500 text-white rounded-sm w-[100px] h-[40px] mt-0">
              Buy Now!
            </button>
            <img src="/images/salesTag.png" className="w-32" alt="Sales Tag" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerBanner;
