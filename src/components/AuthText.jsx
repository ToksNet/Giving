import React from 'react';

const AuthText = ({ title, description }) => {
  return (
    <div className=' text-left'>
      <h1 className='font-medium text-[36px] text-[#000000]'>{title}</h1>
      <p className='font-normal text-base text-[#000000] mt-6'>{description}</p>
    </div>
  );
};

export default AuthText;
