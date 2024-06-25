// src/components/Modal.js
import React from "react";

const Modal = ({ product, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p>Color: {product.color}</p>
        <p>Size: {product.size}</p>
        <p>Order No: {product.orderNo}</p>
        {/* Add more product details here */}
        <div className="mt-4 flex space-x-4">{children}</div>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
