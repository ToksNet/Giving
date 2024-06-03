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
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2">
        <div className="text-[12px] font-bold text-black bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
          {timeLeft[interval]}
        </div>
        <div className="text-sm text-white">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex justify-center  space-x-4 text-white">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

function TimerBanner() {
  return (
    <div className="mx-7 h-[628px] mt-5  flex justify-center items-center">
      <div className="w-[1025px] bg-black flex justify-end content-center">
        <div className="relative flex items-end justify-center">
          <div className="relative content-center justify-start top-[-60px] left-9 text-white flex flex-col space-y-2">
            <p className="text-[16px]">JBL Sales</p>
            <p className="text-[38px] gap-y-0 font-bold">
              <span>Enhance Your</span>{" "}
              <span className="mt-0 gap-y-0">Music Experience</span>
            </p>
            <div className="justify-left mt-6 mb-6 flex">
              <CountdownTimer targetDate="2024-06-30T23:59:59" />
            </div>
            <div className="justify-left flex">
              <button className="bg-red-500 text-center text-white rounded-sm w-[100px] h-[40px]">
                Buy Now!
              </button>
            </div>
          </div>
          <div className="absolute top-[205px] left-[270px] w-[200px]">
            <img src="/images/salesTag.png" alt="Sales Tag" />
          </div>
          <div className="relative w-[650px] h-[full] flex justify-right items-center">
            <div className="w-[900px] h-full">
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
