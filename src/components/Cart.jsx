import React from "react";

const HeaderNavigation = () => (
  <div className="text-[#808080] px-4 md:px-0  mt-[190px] text-[14px] font-[Poppins] font-semibold mb-10 ml-20">
    <span>Account</span> / <span>Product</span> / <span>View Cart</span>
  </div>

  // <div className='text-[#808080] px-4 md:px-0  mt-[35px] text-[14px] font-[Poppins] '>
  //       <span className='text-[14px] text-[#808080] font-[400]'>Account </span> / <span className='text-[14px] text-[#808080] font-[400]'>Gamming </span> / <span className='text-[#000000] font-[400] text'> Havic HV G-92 Gamepad</span>
  //     </div>

  
);

const ProductDetailsHeader = () => (
  <div className="bg-red-500  py-6 ">
    <div className="mx-10 ml-32 text-white py-2 px-4 flex justify-between">
      <span className="w-1/6">PRODUCT DETAILS</span>
      <span className="w-1/6 md:ml-[190px] lg:ml-[350px]">PRICE</span>
      <span className="w-1/6 ml-[3px]">QUANTITY</span>
      <span className="w-1/6 ml-[1px]">SHIPPING</span>
      <span className="w-1/6">SUBTOTAL</span>
      <span className="w-1/6 mr-[1px]">ACTION</span>
    </div>
  </div>
);

const ProductRow = ({ product, onUpdateQuantity, onRemove }) => (
  <div className="border-b">
    <div className="py-4 mr-40 flex items-center mx-10">
      <div className="w-1/6">
        <img
          src={product.image}
          alt={product.name}
          className="w-[100px] ml-20"
        />
      </div>
      <div className="w-1/6 flex flex-col">
        <span className="font-medium">{product.name}</span>
        <span>Colour: {product.color}</span>
        <span>Size: {product.size}</span>
      </div>
      <div className="w-1/6 text-right">${product.price}</div>
      <div className="w-1/6 text-center ml-60 w-[100px] h-10 rounded bg-gray-200">
        <button
          className="py-2"
          onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}
        >
          -
        </button>
        <span className="mx-2 py-2">{product.quantity}</span>
        <button
          className="py-2"
          onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
        >
          +
        </button>
      </div>
      <div className="w-1/6 text-right">
        {product.shipping ? `$${product.shipping}` : "Free"}
      </div>
      <div className="w-1/6 text-right">
        $
        {(product.price * product.quantity + (product.shipping || 0)).toFixed(
          2
        )}
      </div>
      <div className="w-1/6 text-right">
        <button onClick={() => onRemove(product.id)} className="text-red-500">
          <img src="./images/deletecon.png" />
        </button>
      </div>
    </div>
    <div className="mt-2 ml-[120px]">
      <h2 className="font-bold text-red-500">Brief Description</h2>
      <p>{product.description}</p>
    </div>
  </div>
);

const CouponAndCostDetails = ({ subtotal, shipping, total, applyCoupon }) => (
  <div className="mt-10 flex flex-wrap justify-between ml-20">
    <div className="flex flex-row gap-4 h-[60px] md:w-1/2 mb-4">
      <input
        type="text"
        placeholder="Coupon Code"
        className="border p-2 mb-2 w-[300px] rounded"
      />
      <button
        onClick={applyCoupon}
        className="bg-red-500 text-white h-[53px] w-[250px] px-4 rounded"
      >
        Apply Coupon
      </button>
    </div>
    <div className="pr-60 md:w-1/2">
      <div className="border p-4 rounded">
        <div className="flex font-bold mb-5">
          <span>Cart Total</span>
        </div>
        <div className="flex justify-between border-b mb-5">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between border-b mb-5">
          <span>Shipping:</span>
          <span>{shipping ? `$${shipping}` : "Free"}</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <div className="text-center">
          <button className="bg-red-500 text-white py-2 px-4 rounded">
            Process to Checkout
          </button>
        </div>
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
