
import React, { useState } from 'react';
import ProfileSignup from '../pages/auth/profileAuth/ProfileSignup';
import ProfileUpload from '../pages/auth/profileAuth/ProfileUpload';
import ProfileVerification from '../pages/auth/profileAuth/ProfileVerfication';
import AuthNav from './Authnav';
const steps = ['Profile Signup', 'Account Details', 'Confirm Details'];

const HorizontalLinearStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <ProfileSignup />;
            case 1:
                return <ProfileUpload />;
            case 2:
                return <ProfileVerification />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <>
<AuthNav />
        <div className="w-full px-4 md:px-[135px] mt-6 md:mt-[53px]">
            <div className="flex w-full  ">
                {steps.map((label, index) => (
                    <div key={label} className="w-full">
                        <div className='flex items-start w-full justify-between'>
                            <div
                                className={`w-[9px] md:w-8 h-[9px] md:h-8 rounded-full ${activeStep >= index ? 'bg-[#DB4444] text-white' : 'bg-[#FBECEC] text-[#F4C5C5]'
                                    } flex items-center justify-center `}
                            >
                                {index < steps.length - 1 && (
                                    <div className={`  ${activeStep > index ? 'bg-[#DB4444]' : 'bg-[#FBECEC]'
                                        }`}></div>
                                )}
                            </div>
                            <div className='flex w-full flex-col items-center'>
                                <div className={`${activeStep >= index ? 'text-[#DB4444]' : 'text-[#F4C5C5]'}`}>
                                    <p className='text-[8px] md:text-sm font-medium'>{label}</p>
                                </div>

                                <div className={`w-full h-[0.5px] ${activeStep >= index ? 'bg-[#DB4444] text-white' : 'bg-[#FBECEC] text-[#F4C5C5]'
                                    } flex items-center justify-center `}></div>
                            </div>
                        </div>
                    </div>
                ))}
        <div >
            <div className="w-[9px] md:w-8 h-[9px] md:h-8 rounded-full bg-[#FBECEC] text-white flex items-center justify-center">
            </div>
        </div>
            </div>
            <div className="mb-4">{getStepContent(activeStep)}</div>
      <div className='flex w-full justify-between items-center  mt-10'>
     {steps.length - 1 === activeStep && (
     <div>

                    <button  className="bg-[#DB4444] text-[#FFFFFF] font-medium px-4 py-2 rounded w-[191px]" >
                    Open camera
                    </button>
     </div>

                )}

            <div className="md:flex gap-[30px]">
                <button
                    className="border border-[#FB1314] text-[#000000] font-medium px-4 py-2 rounded w-[191px]"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                >
                    Back
                </button>
           
                    <button className="bg-[#DB4444] text-[#FFFFFF] w-[191px] mt-2 md:mt-0 px-4 py-2  rounded" onClick={handleNext}>
                        Next
                    </button>
                
            </div>
      </div>
        </div>
</>
    );
};

export default HorizontalLinearStepper;
