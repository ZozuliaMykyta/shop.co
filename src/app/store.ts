import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import reviewsReducer from "../features/reviewsSlice";
import cardReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
