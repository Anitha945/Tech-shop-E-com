import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartMiddlewareFn } from "./productSlice";

//configure store
export const store=configureStore({
    reducer:{cartItems:catReducer},
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(cartMiddlewareFn),
});