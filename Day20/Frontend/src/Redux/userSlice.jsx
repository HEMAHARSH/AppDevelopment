import { createSlice } from "@reduxjs/toolkit";
import { cartLogout as removeItem } from "./cartSlice";
const initialState = {
  user: {
    username: localStorage.getItem('username') || null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { username: action.payload };
      localStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.user = { username: null };
      localStorage.removeItem('username');
      localStorage.removeItem('auth');
    },
    
  },
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;