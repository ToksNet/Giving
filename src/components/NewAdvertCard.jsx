import React from "react";

const NewAdvertCard = ({ image1, image2, image3, image4 }) => {
  return (
    <div className="md:w-[1025px] md:justify-center  mt-32 md:mt-0 bg-white md:p-8">
      <div className="ml-3 md:ml-0">
        <div className="flex items-center gap-3">
          <div className="h-3 bg-red-500 p-4 px-2 rounded-sm"></div>
          <p className="text-sm font-medium text-red-500">Featured</p>
        </div>

        <div className="flex items-center mt-5 justify-between">
          <p className="text-2xl font-medium">New Arrival</p>
        </div>
      </div>

      <div className="w-full md:w-[1025px] md:flex md:justify-between mt-5">
        <di
          v
          className="relative md:w-[590px] bg-black rounded-md flex md:items-end md:justify-center"
        >
          <img
            src={image1}
            alt="Advert 1"
            className=":w-screen md:w-[511px] mb-4"
          />
          <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md w-[242px] space-y-2">
            <p className="text-2xl">PlayStation 5</p>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div className="md:w-[88px] border-b border-gray-500">
              {" "}
              <a href="" className="text-lg hover:text-gray-300">
                Shop Now
              </a>
            </div>
          </div>
        </di>

        <div className="md:w-[590px] mt-5 md:mt-0 flex flex-col justify-between md:ml-4">
          <div className="relative w-screen md:w-full bg-black rounded-md flex md:items-end md:justify-end mb-4 ">
            <img
              src={image2}
              alt="Advert 2"
              className="md:w-[432px] w-screen  mr-4 transform rotate-360"
            />
            <div className="absolute bottom-4 left-4 bg-transparent text-white p-4 rounded-md  space-y-2">
              <p className="text-2xl">Women's Collections</p>
              <p className="text-sm   md:w-[242px]">
                Featured women's collections that gives you another vibe
              </p>
              <div className="md:w-[88px] border-b border-gray-500">
                <a href="" className="text-lg hover:text-gray-300">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="flex mt-1 md:mt-0 md:justify-between">
            <div className="relative w-screen md:w-[270px] bg-black rounded-r-md flex items-center justify-center mr-2 md:mr-4">
              <img
                src={image3}
                alt="Advert 3"
                className="w-[190px] h-[221px]"
              />
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

            <div className="relative w-full md:w-[270px] bg-black rounded-l-md flex items-center justify-center">
              <img
                src={image4}
                alt="Advert 4"
                className="w-[190px] h-[221px]"
              />
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
  );
};

export default NewAdvertCard;
