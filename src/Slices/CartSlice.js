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




import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if the item is already in the cart
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add new item with initial quantity of 1
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += delta; // Update quantity based on delta
        if (existingItem.quantity <= 0) {
          // Remove the item if quantity drops to 0 or below
          return state.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
