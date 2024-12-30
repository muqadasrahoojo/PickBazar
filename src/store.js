// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './Slices/CartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
