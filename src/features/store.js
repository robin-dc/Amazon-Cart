import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import cartSlice from './cart/cartSlice';
import logger from "redux-logger";
import productDetailSlice from "./products/productDetailSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        productDetails: productDetailSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store
