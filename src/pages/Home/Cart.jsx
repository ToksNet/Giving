import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <div className="text-sm mt-12 md:mt-[190px] font-semibold mb-10 ml-4 md:ml-[102px]">
        <span>Account</span> / <span>Product</span> / <span>View Cart</span>
      </div>
      <div>
        <table className="w-full">
          <thead className="bg-[#DB4444] ">
            <tr>
              <th className="text-left pl-4 md:pl-10 lg:pl-[102px] py-6 font-boold text-base lg:text-lg text-[#FFFFFF]">PRODUCT DETAILS</th>
              <th className="text-left py-2 px-2 font-boold text-base lg:text-lg text-[#FFFFFF] hidden md:table-cell">PRICE</th>
              <th className="text-left py-2 px-2 font-boold text-base lg:text-lg text-[#FFFFFF] hidden md:table-cell">QUANTITY</th>
              <th className="text-left py-2 px-2 font-boold text-base lg:text-lg text-[#FFFFFF] hidden md:table-cell">SHIPPING</th>
              <th className="text-left py-2 px-2 font-boold text-base lg:text-lg text-[#FFFFFF] hidden md:table-cell">SUBTOTAL</th>
              <th className="py-2 px-2 font-boold text-base lg:text-lg text-[#FFFFFF] hidden md:table-cell pr-16 lg:pr-[102px] text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6">Your cart is empty</td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <td className="hidden md:table-cell pl-4 md:pl-10 lg:pl-[102px] pr-6 py-[36px]">
                      <div className="flex items-center gap-7">
                        <div className="w-[120px]">
                          <img src={item.imageSrc} alt={item.title} className="w-full"/>
                        </div>
                        <div>
                          <p className="text-base font-medium text-[#000000]">{item.title}</p>
                          <p className="text-[#000000] font-normal text-sm mt-4">Color: <span className="font-bold ml-2">{item.color}</span></p>
                          <p className="text-[#000000] font-normal text-sm mt-4">Size: <span className="ml-2">{item.size}</span></p>
                        </div>
                      </div>
                    </td>
                    <td className="hidden md:table-cell px-6 py-[36px] font-medium text-base text-[#000000]">{item.price}</td>
                    <td className="hidden md:table-cell px-6 py-[36px]">
                      <div className="flex items-center justify-center rounded-xl bg-[#F6F6F6] px-[23px] py-[11px] gap-4 text-base font-medium text-[#595959] w-fit">
                        <button
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="hidden md:table-cell px-6 py-[36px]">FREE</td>
                    <td className="hidden md:table-cell px-6 py-[36px] text-base font-medium text-[#000000]">
                      {item.price * item.quantity }
                    </td>
                    <td className="hidden md:table-cell pr-[102px] py-[36px] text-center text-[#DB4444] cursor-pointer">
                      <DeleteIcon onClick={() => handleRemove(item.id)} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="px-[102px] pb-[36px] hidden md:table-cell">
                      <p className="text-sm font-medium text-[#DB4444]">Brief Description</p>
                      <p className="text-[#000000] font-normal text-[10px] mt-[3px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                      <div className="h-[1px] mt-[30px] bg-[#BEBCBD] px-[102px]"></div>
                    </td>
                  </tr>
                </React.Fragment>
              ))
            )}
            {/* Mobile View */}
            {cartItems.length > 0 && (
              cartItems.map((item) => (
                <tr className="table-cell md:hidden" key={item.id}>
                  <td className="p-4">
                    <div className="flex items-center gap-7 ">
                      <div>
                        <img src={item.imageSrc} />
                      </div>
                      <div>
                        <p className="text-base font-medium text-[#000000]">{item.title}</p>
                        <p className="text-[#000000] font-normal text-sm mt-3">Color: <span className="font-bold ml-2">{item.color}</span></p>
                        <p className="text-[#000000] font-normal text-sm mt-3">Size: <span className="ml-2">{item.size}</span></p>
                        <p className="text-base font-bold text-[#000000] mt-3">{item.price}</p>
                        <div className="flex justify-between w-full mt-3">
                          <div className="flex items-center justify-center gap-4 text-base font-medium w-fit">
                            <button onClick={() => handleDecrement(item.id)}>
                              -
                            </button>
                            <p>{item.quantity}</p>
                            <button onClick={() => handleIncrement(item.id)}>
                              +
                            </button>
                          </div>
                          <div className="md:hidden table-cell text-right text-[#DB4444] cursor-pointer">
                            <DeleteIcon onClick={() => handleRemove(item.id)} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:hidden table-cell">
                      <p className="text-sm font-medium text-[#DB4444] mt-[27px]">Brief Description</p>
                      <p className="text-[#000000] font-normal text-[10px] mt-[3px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                      <div className="h-[1px] mt-[30px] bg-[#BEBCBD] px-[102px]"></div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
