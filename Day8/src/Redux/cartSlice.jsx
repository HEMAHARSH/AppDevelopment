import { createSlice } from "@reduxjs/toolkit";
import productData from "../Components/ProductData";

// Check if cart data exists in local storage and use it as initial state if available
const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: localStorageCart,
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    getCartTotal: (state) => {
      let totalQuantity = 0;
      let totalPrice = 0;

      for (const item of state.cart) {
        totalQuantity += item.quantity;
        totalPrice += item.price;
      }

      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += newItem.price;
      } else {
        state.cart.push(newItem);
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },


    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  addItem,
  setTotalPrice,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
