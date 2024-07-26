import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
      localStorage.setItem('cartItems', JSON.stringify(state.items));

    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 0) item.quantity -= 1;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
