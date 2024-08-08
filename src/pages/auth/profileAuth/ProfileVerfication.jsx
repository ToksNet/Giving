import React from 'react';
import face from '../../../assets/images/face.png'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ProfileVerification = () => {
 

  return (
    <div>
        <p className='text-2xl font-semibold mt-[31px] text-[#11183C]'>Selfie verification</p>
        <p className='font-normal text-[12px] text-[#11183C] mt-5'>We will complete the photo in your document with your selfie to confirm your identity</p>
        <img src={face} alt='face verification'  className='mt-6 md:mt-[38px] md:ml-24'/>
        <div className='p-[14px] radius-[10px] bg-[#E6E6E6] flex items-center mt-6 md:mt-[50px]'>
                            <LockOutlinedIcon fontSize='4px'/>
                            <p className='text-sm font-normal text-[#000000]'>The data you share will be encrypted, stored securely, and only used to verify your identity</p>
                        </div>
    </div>
  );
};

export default ProfileVerification