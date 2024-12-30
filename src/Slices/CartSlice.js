// import { createSlice } from '@reduxjs/toolkit';

// const CartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = CartSlice.actions;
// export default CartSlice.reducer;


// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Assuming payload contains item info
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Filter out removed item
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;

