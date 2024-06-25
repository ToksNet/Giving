// src/context/ProductContext.js
import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "220",
      color: "Red",
      size: "M",
      image: "../images/Explore-1.jpg",
      status: "ordered",
      orderNo: "GV3N-12345",
    },
    {
      id: 2,
      name: "CANON EOS DSLR Camera",
      price: "150",
      color: "Blue",
      size: "L",
      image: "../images/Explore-2.png",
      status: "pending",
      orderNo: "GV3N-12346",
    },
    {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "220",
      color: "Green",
      size: "S",
      image: "../images/Explore-3.png",
      status: "delivered",
      orderNo: "GV3N-12347",
    },
    {
      id: 4,
      name: "Curology Product Set",
      price: "201",
      color: "Yellow",
      size: "XL",
      image: "../images/Explore-1.jpg",
      status: "cancelled",
      orderNo: "GV3N-14348",
    },
    {
      id: 5,
      name: "Kid's Electric Car",
      price: "500",
      color: "green",
      size: "M",
      image: "../images/Explore-5.png",
      status: "ordered",
      orderNo: "GV3N-32345",
    },
    {
      id: 6,
      name: "Jr.Zoom Soccer Cleats",
      price: "140",
      color: "yellow",
      size: "xxL",
      image: "../images/Explore-6.png",
      status: "pending",
      orderNo: "GV3N-02346",
    },
    {
      id: 7,
      name: "GP11 Shooter USP Gamepad",
      price: "222.1",
      color: "Green",
      size: "S",
      image: "../images/Explore-7.png",
      status: "delivered",
      orderNo: "GV3N-12947",
    },
    {
      id: 8,
      name: "Quilted satin Jacket",
      price: "99.9",
      color: "Yellow",
      size: "XL",
      image: "../images/Explore-8.png",
      status: "cancelled",
      orderNo: "GV3N-12340",
    },
  ]);

  const updateProductStatus = (id, status) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status } : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, updateProductStatus }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
