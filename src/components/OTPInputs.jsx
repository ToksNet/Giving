import React, { useState, useRef } from 'react';

const OTPInputs = ({ length = 5, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;

      setOtp(newOtp);

      if (value && index < length - 1) {
        inputsRef.current[index + 1].focus();
      }

      if (index === length - 1) {
        inputsRef.current[index].blur();
      }

      if (newOtp.every(digit => digit)) {
        if (onComplete) {
          onComplete(newOtp.join(''));
        }
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div style={styles.container}>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
          style={styles.input}
          maxLength="1"
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    width: '60px',
    height: '60px',
    textAlign: 'center',
    fontSize: '18px',
    border: '1px solid #EA4335',
    borderRadius: '5px',
    outline: 'none',
  },
};

export default OTPInputs;
