import React from "react";
import NewAdvertCard from "../../components/NewAdvertCard";

const NewAdvert = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="md:justify-center mt-32 md:mt-0 bg-white md:p-8 sm:p-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              {/* Content for 'hero' component */}
            </div>
            <div className="col-span-1">
              {/* Content for 'categories' component */}
            </div>
            <div className="col-span-1">
              {/* Content for 'todayproduct' component */}
            </div>
          </div>
          <div className="mt-8">
            <NewAdvertCard
              image1="./images/advert(1).png"
              image2="./images/advert(2).png"
              image3="./images/advert(3).png"
              image4="./images/advert(4).png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAdvert;
