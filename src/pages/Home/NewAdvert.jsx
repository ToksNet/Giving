import React from "react";
import AdvertCard from "../../components/NewAdvertCard";

const NewAdvert = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white mx-32 px-8">
      <AdvertCard
        image1="./images/advert(1).png"
        image2="./images/advert(2).png"
        image3="./images/advert(3).png"
        image4="./images/advert(4).png"
      />
    </div>
  );
};

export default NewAdvert;
