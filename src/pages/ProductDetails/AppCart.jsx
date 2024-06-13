import React, { useState } from "react";
import Cart from "../../components/Cart";

const AppCart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "./images/gamingpad.png",
      color: "Red",
      size: "M",
      price: 20,
      quantity: 1,
      shipping: 5,
      description: "A great gaming pad for serious gamers.",
    },
    {
      id: 2,
      name: "Product 2",
      image: "./images/GucciDuffleBag.png",
      color: "Blue",
      size: "L",
      price: 15,
      quantity: 2,
      shipping: 0,
      description: "Stylish and spacious Gucci duffle bag.",
    },
    // more products
  ]);

  const handleUpdateQuantity = (productId, newQuantity) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const handleRemove = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleApplyCoupon = () => {
    // Implement coupon logic
    alert("Coupon applied!");
  };

  return (
    <Cart
      products={products}
      onUpdateQuantity={handleUpdateQuantity}
      onRemove={handleRemove}
      applyCoupon={handleApplyCoupon}
    />
  );
};

export default AppCart;
