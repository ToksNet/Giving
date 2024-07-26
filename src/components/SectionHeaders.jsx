import React from 'react';

const SectionHeaders = ({ title, subtitle, buttonText }) => {
  return (
    <div>
      <div>
        <div className="mb-9">
          <div className="flex items-center gap-3">
            <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
            <p className="text-sm font-semibold text-red-500">{subtitle}</p>
          </div>
          <div className="flex mt-5 items-end justify-between">
            <p className="text-2xl font-medium">{title}</p>
            {buttonText && (
              <div className="flex text-sm gap-2 items-center">
                <button className="bg-red-500 text-white rounded-sm w-[100px] h-[40px]">
                  {buttonText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeaders;
