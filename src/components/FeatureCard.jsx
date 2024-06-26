import React from "react";

const FeatureCard = ({ imageSrc, message1, message2 }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[249px] h-[161px] gap-[24px]">
      <img src={imageSrc} alt="Feature" className="w-[80px] h-[80px]" />
      <div className="text-center">
        <p className="text-[19px] font-medium">{message1}</p>
        <p className="text-[12px]">{message2}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
