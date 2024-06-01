import React from "react";

const AdvertCard = ({ image1, image2, image3, image4 }) => {
  return (
    <div className="w-[1025px] mx-32 mt-4 bg-white p-8">
      <div className="flex items-center gap-3">
        <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
        <p className="text-sm text-red-500">Featured</p>
      </div>

      <div className="flex items-center mt-5 justify-between">
        <p className="text-2xl font-medium">Deals</p>
      </div>

      <div className="flex justify-between mt-5">
        <div className="relative w-[510px] bg-black rounded-md flex items-end justify-center mr-4">
          <img src={image1} alt="Advert 1" className="w-[511px] mb-4" />
          <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-[242px] space-y-2">
            <p className="text-2xl">PlayStation 5</p>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div className="w-[88px] border-b border-gray-500">
              <p className="text-lg">Shop Now</p>
            </div>
          </div>
        </div>

        <div className="w-[510px] flex flex-col justify-between ml-4">
          <div className="relative w-full h-[284px] bg-black rounded-md flex items-end justify-end mb-4">
            <img
              src={image2}
              alt="Advert 2"
              className="w-[432px] h-[284px] mr-4 transform rotate-360"
            />
            <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md  space-y-2">
              <p className="text-2xl">Women's Collections</p>
              <p className="text-sm w-[242px]">
                Featured women's collections that gives you another vibe
              </p>
              <div className="w-[88px] border-b border-gray-500">
                <p className="text-lg">Shop Now</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="relative w-[270px] h-[284px] bg-black rounded-md flex items-center justify-center mr-4">
              <img
                src={image3}
                alt="Advert 3"
                className="w-[190px] h-[221px]"
              />
              <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-[242px] space-y-2">
                <p className="text-2xl">Speakers</p>
                <p className="text-sm">Amazon wireless speakers</p>
                <div className="w-[88px] border-b border-gray-500">
                  <p className="text-lg">Shop Now</p>
                </div>
              </div>
            </div>

            <div className="relative w-[270px] h-[284px] bg-black rounded-md flex items-center justify-center">
              <img
                src={image4}
                alt="Advert 4"
                className="w-[190px] h-[221px]"
              />
              <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-[242px] space-y-2">
                <p className="text-2xl">Perfume</p>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <div className="w-[88px] border-b border-gray-500">
                  <p className="text-lg">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
