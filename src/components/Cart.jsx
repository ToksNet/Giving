import React, { useState } from "react";

const HeaderNavigation = () => (
  <div className="text-sm mt-60 font-semibold mb-4">
    <span>Account</span> / <span>Product</span> / <span>View Cart</span>
  </div>
);

const ProductDetailsHeader = () => (
  <div className="bg-red-500 mt-20 text-white py-4 px-4 flex justify-between">
    <span>PRODUCT DETAILS</span>
    <span>PRICE</span>
    <span>QUANTITY</span>
    <span>SHIPPING</span>
    <span>SUBTOTAL</span>
    <span>ACTION</span>
  </div>
);

const ProductRow = ({ product, onUpdateQuantity, onRemove }) => (
  <div className="py-4 flex items-center border-b">
    <div className="w-1/6">
      <img src={product.image} alt={product.name} className="w-full" />
    </div>
    <div className="w-1/6 flex flex-col">
      <span className="font-medium">{product.name}</span>
      <span>Colour: {product.color}</span>
      <span>Size: {product.size}</span>
    </div>
    <div className="w-1/6 text-center">${product.price}</div>
    <div className="w-1/6 flex justify-center items-center">
      <button
        onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}
      >
        -
      </button>
      <span className="mx-2">{product.quantity}</span>
      <button
        onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
      >
        +
      </button>
    </div>
    <div className="w-1/6 text-center">
      {product.shipping ? `$${product.shipping}` : "Free"}
    </div>
    <div className="w-1/6 text-center">
      ${(product.price * product.quantity + (product.shipping || 0)).toFixed(2)}
    </div>
    <div className="w-1/6 text-center">
      <button onClick={() => onRemove(product.id)} className="text-red-500">
        🗑️
      </button>
    </div>
  </div>
);

const BriefDescription = ({ description }) => (
  <div className="mt-4">
    <h2 className="font-bold">Brief Description</h2>
    <p>{description}</p>
  </div>
);

const CouponAndCostDetails = ({ subtotal, shipping, total, applyCoupon }) => (
  <div className="mt-8 flex flex-wrap justify-between">
    <div className="flex flex-col w-full md:w-1/2 mb-4">
      <input
        type="text"
        placeholder="Coupon Code"
        className="border p-2 mb-2"
      />
      <button
        onClick={applyCoupon}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Apply Coupon
      </button>
    </div>
    <div className="w-full md:w-1/2">
      <div className="border p-4 rounded">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>{shipping ? `$${shipping}` : "Free"}</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <button className="bg-red-500 text-white py-2 px-4 rounded w-full">
          Process to Checkout
        </button>
      </div>
    </div>
  </div>
);

const Cart = ({ products, onUpdateQuantity, onRemove, applyCoupon }) => {
  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const shipping = products.reduce(
    (sum, product) => sum + (product.shipping || 0),
    0
  );
  const total = subtotal + shipping;

  return (
    <div className="">
      <HeaderNavigation />
      <ProductDetailsHeader />
      {products.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
      <BriefDescription description="Short product description goes here." />
      <CouponAndCostDetails
        subtotal={subtotal.toFixed(2)}
        shipping={shipping.toFixed(2)}
        total={total.toFixed(2)}
        applyCoupon={applyCoupon}
      />
    </div>
  );
};

export default Cart;
