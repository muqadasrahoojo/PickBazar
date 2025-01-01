import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += delta;
        if (existingItem.quantity <= 0) {
   
          return state.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
