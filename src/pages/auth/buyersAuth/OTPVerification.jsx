import React, { useState } from 'react';
import AuthButton from '../../../components/AuthButton';
import AuthText from '../../../components/AuthText';
import OTPInputs from '../../../components/OTPInputs'; 

const OTPVerification = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleOTPComplete = (otp) => {
    console.log("OTP Entered:", otp);
    setIsComplete(true); 
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-[409px]'>
        <AuthText title="Let’s verify it’s you " description="Enter the OTP sent to your email " />
        <div className='mt-12'>
          <OTPInputs onComplete={handleOTPComplete} />
          <AuthButton className="mt-10" disabled={!isComplete}>Submit OTP</AuthButton>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
