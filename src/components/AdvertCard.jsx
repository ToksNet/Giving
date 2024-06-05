import React from "react";

const AdvertCard = ({ image1, image2, image3, image4 }) => {
  return (
    <div className="w-full container max-w-[1025px] mx-auto mt-4 bg-white p-4 md:p-8">
      {/* Grid Container */}
      <div className="container flex flex-col space-y-4 md:grid md:grid-cols-2 md:gap-6">
        {/* Featured Deals */}
        <div className="container ml-3 md:ml-0">
          <div className="flex items-center gap-3">
            <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
            <p className="text-sm font-medium text-red-500">Featured</p>
          </div>
          <div className="flex items-center mt-5 justify-between">
            <p className="text-2xl font-medium">Deals</p>
          </div>
        </div>

        {/* PlayStation 5 */}
        <div className="container relative w-full bg-black rounded-md flex items-end justify-center">
          <img
            src={image1}
            alt="Advert 1"
            className="w-full h-auto mb-4 md:mb-0"
          />
          <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-full md:w-[242px] space-y-2">
            <p className="text-2xl">PlayStation 5</p>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div className="w-[88px] border-b border-gray-500">
              <a href="" className="text-lg hover:text-gray-300">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Women's Collections */}
        <div className="container relative w-full bg-black rounded-md flex items-end justify-end">
          <img
            src={image2}
            alt="Advert 2"
            className="w-full h-auto md:w-[432px] transform rotate-360"
          />
          <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md space-y-2">
            <p className="text-2xl">Women's Collections</p>
            <p className="text-sm w-full md:w-[242px]">
              Featured women's collections that gives you another vibe
            </p>
            <div className="w-[88px] border-b border-gray-500">
              <a href="" className="text-lg hover:text-gray-300">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Speakers and Perfume */}
        <div className="container flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="relative w-full bg-black rounded-md flex items-center justify-center">
            <img
              src={image3}
              alt="Advert 3"
              className="w-[190px] h-[221px] md:w-auto md:h-auto"
            />
            <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-full md:w-[242px] space-y-2">
              <p className="text-2xl">Speakers</p>
              <p className="text-sm">Amazon wireless speakers</p>
              <div className="w-[88px] border-b border-gray-500">
                <a href="" className="text-lg hover:text-gray-300">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full bg-black rounded-md flex items-center justify-center">
            <img
              src={image4}
              alt="Advert 4"
              className="w-[190px] h-[221px] md:w-auto md:h-auto"
            />
            <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-full md:w-[242px] space-y-2">
              <p className="text-2xl">Perfume</p>
              <p className="text-sm">GUCCI INTENSE OUD EDP</p>
              <div className="w-[88px] border-b border-gray-500">
                <a href="" className="text-lg hover:text-gray-300">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
