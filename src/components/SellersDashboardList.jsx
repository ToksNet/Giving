import React from "react";

const SellersDashboardList = ({ items = [] }) => {
  return (
    <div className="p-2 lg:w-2/3 ">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-2 flex items-center shadow-md"
          >
            <div className="relative flex-shrink-0 w-10 h-10 mr-3">
              <img
                src="../images/bglist.png"
                alt="Background"
                className="w-full h-full"
              />
              <img
                src={item.image}
                alt={item.title}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellersDashboardList;
