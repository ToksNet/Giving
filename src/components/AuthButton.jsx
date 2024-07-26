import React from 'react';
import Button from '@mui/material/Button';

const AuthButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" className='px-[30px] py-4 rounded bg-[white]  border border-[#FB1314] text-base font-medium text-[#000000]'  {...props}>
      {children}
    </Button>
  );
};

export default AuthButton;
