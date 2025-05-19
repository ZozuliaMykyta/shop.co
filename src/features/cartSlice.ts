import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProduct";

const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems") ?? "[]")
    : [];

const cartPrice: number =
  localStorage.getItem("totalPrice") !== null
    ? Number(localStorage.getItem("totalPrice"))
    : 0;

interface CartState {
  items: IProduct[];
  totalPrice: number;
  error: string | null;
}

const initialState: CartState = {
  items: cartItems,
  totalPrice: cartPrice,
  error: null as string | null,
};

const saveCartToLocalStorage = (state: CartState) => {
  localStorage.setItem("cartItems", JSON.stringify(state.items));
  localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
};

const calculateTotalPrice = (calculatedItems: IProduct[]): number => {
  return parseFloat(
    calculatedItems
      .reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)
      .toFixed(2)
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<IProduct & { quantity: number }>
    ) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }

      state.totalPrice = calculateTotalPrice(state.items);

      saveCartToLocalStorage(state);
    },
    delFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem) {
        state.items = state.items.filter((item) => item._id !== action.payload);
      }
      saveCartToLocalStorage(state);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
      state.totalPrice = calculateTotalPrice(state.items);
      saveCartToLocalStorage(state);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      state.totalPrice = calculateTotalPrice(state.items);
      saveCartToLocalStorage(state);
    },
  },
});
export const { addToCart, delFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
