import React, { useState, useEffect } from 'react';

const CountDown = ({ initialTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(initialTime) - +new Date();
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

  return (
    <div className='font-bold flex gap-2'>
      <div>
        <h2 className='font-bold text-[0.6rem]'>Days</h2>
        <h1 className='text-[1.3rem]'>{timeLeft.days || '0'}</h1>
      </div>
      <h1 className='text-primary text-xl self-end'>:</h1>
      <div>
        <h2 className='font-bold text-[0.6rem]'>Hours</h2>
        <h1 className='text-[1.3rem]'>{timeLeft.hours || '0'}</h1>
      </div>
      <h1 className='text-primary text-xl self-end'>:</h1>
      <div>
        <h2 className='font-bold text-[0.6rem]'>Minutes</h2>
        <h1 className='text-[1.3rem]'>{timeLeft.minutes || '0'}</h1>
      </div>
      <h1 className='text-primary text-xl self-end'>:</h1>
      <div>
        <h2 className='font-bold text-[0.6rem]'>Seconds</h2>
        <h1 className='text-[1.3rem]'>{timeLeft.seconds || '0'}</h1>
      </div>
    </div>
  );
};

export default CountDown;
