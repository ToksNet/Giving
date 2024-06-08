import React from "react";

const NewAdvertCard = ({ image1, image2, image3, image4 }) => {
  return (
    <div className=" mx-auto  md:mx-32 md:mt-0 bg-white md:p-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="ml-3 md:ml-0">
          <div className="flex items-center gap-3">
            <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
            <p className="text-sm font-medium text-red-500">Featured</p>
          </div>

          <div className="flex items-center mt-5 justify-between">
            <p className="text-2xl font-medium">New Arrival</p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="relative w-full md:w-[590px] bg-black rounded-md flex md:items-end md:justify-center overflow-hidden">
            <img src={image1} alt="Advert 1" className="w-full h-auto mb-4" />
            <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-[242px] space-y-2">
              <p className="text-2xl">PlayStation 5</p>
              <p className="text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <div className="md:w-[88px] border-b border-gray-500">
                <a href="" className="text-lg hover:text-gray-300">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[590px] mt-5 md:mt-0 flex flex-col justify-between md:ml-4">
            <div className="relative w-full bg-black rounded-md flex md:items-end md:justify-end mb-4 overflow-hidden">
              <img
                src={image2}
                alt="Advert 2"
                className="w-full h-auto md:w-[432px] mr-4"
              />
              <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md space-y-2">
                <p className="text-2xl">Women's Collections</p>
                <p className="text-sm md:w-[242px]">
                  Featured women's collections that gives you another vibe
                </p>
                <div className="md:w-[88px] border-b border-gray-500">
                  <a href="" className="text-lg hover:text-gray-300">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-row mt-1 md:mt-0 md:justify-between">
              <div className="relative w-1/2 md:w-[270px] bg-black rounded-md flex items-center justify-center mb-4 md:mb-0 md:mr-4 overflow-hidden">
                <img src={image3} alt="Advert 3" className="w-full h-auto" />
                <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-[242px] space-y-2">
                  <p className="text-2xl">Speakers</p>
                  <p className="text-sm">Amazon wireless speakers</p>
                  <div className="w-[88px] border-b border-gray-500">
                    <a href="" className="text-lg hover:text-gray-300">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative w-1/2 md:w-[270px] bg-black rounded-md flex items-center justify-center overflow-hidden">
                <img src={image4} alt="Advert 4" className="w-full h-auto" />
                <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-[242px] space-y-2">
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
      </div>
    </div>
  );
};

export default NewAdvertCard;
