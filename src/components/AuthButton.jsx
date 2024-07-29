import React from 'react';

const AuthButton = ({ children, disabled, ...props }) => {
  const buttonStyles = {
    backgroundColor: disabled ? '#E07575' : '#DB4444', 
    color: '#FFFFFF', 
    padding: '16px 40px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.7 : 1,
  };
  return (
    <button
      className='signup-button'
      style={buttonStyles}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
export default AuthButton;
