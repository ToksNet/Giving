// src/components/ProductCard.js
import React, { useState } from "react";
import { useProductContext } from "../Sellers/ProductContext";
import Modal from "../Sellers/Modal";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateProductStatus } = useProductContext();

  const handleStatusChange = (status) => {
    updateProductStatus(product.id, status);
    setIsModalOpen(false); // Close modal after status change
  };

  return (
    <div className="md:mx-10 mb-10 md:w-1/2 flex-row p-2 w-full">
      <div className="border rounded-lg shadow flex-row">
        <div className="py-3 w-full mt-5 flex items-center px-8 ">
          <div className="w-1/6 mr-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-[100px] "
            />
          </div>
          <div className="w-2/3 space-y-2 flex flex-col">
            <span className="font-medium">{product.name}</span>
            <span className="flex items-center">
              Colour:
              <span
                className="ml-2"
                style={{ color: product.color.toLowerCase() }}
              >
                {product.color}
              </span>
            </span>
            <span>Size: {product.size}</span>
            <span>Price: ${product.price}</span>
          </div>

          {isModalOpen && (
            <Modal product={product} onClose={() => setIsModalOpen(false)}>
              <button onClick={() => handleStatusChange("delivered")}>
                Mark as Delivered
              </button>
              <button onClick={() => handleStatusChange("pending")}>
                Mark as Pending
              </button>
              <button onClick={() => handleStatusChange("cancelled")}>
                Mark as Cancelled
              </button>
            </Modal>
          )}
        </div>

        <div className=" justify-between text-[12px] md:text-base mx-10 flex md:ml-32 mb-5 mt-5">
          <div className="flex items-center">
            <h2 className="font-bold">Order No:</h2>
            <p className="ml-2">{product.orderNo}</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="underline text-red-500 ml-4"
          >
            View more details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
