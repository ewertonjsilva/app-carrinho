// src/redux/features/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.prd_id === item.prd_id);

      if (existItem) {
        existItem.qtd += 1;
      } else {
        state.cartItems.push({ ...item, qtd: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.prd_id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((x) => x.prd_id === action.payload);
      if (item) {
        item.qtd += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((x) => x.prd_id === action.payload);
      if (item && item.qtd > 1) {
        item.qtd -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
