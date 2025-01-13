import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

// Create and export the store
const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Log initial state to verify data is loaded
console.log('Initial Store State:', store.getState());

export default store;
