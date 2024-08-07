import React from "react";
import AdvertCard from "./NewAdvertCard";

const NewAdvert = () => {
  return (
    <div className=" mb-20">
      <div className=" md:mx-32 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        </div>
        <div className="mt-8">
          <AdvertCard
            image1="./images/advert(1).png"
            image2="./images/advert(2).png"
            image3="./images/advert(3).png"
            image4="./images/advert(4).png"
          />
        </div>
      </div>
    </div>
  );
};

export default NewAdvert;
