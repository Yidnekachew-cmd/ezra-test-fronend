// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
  firstName: null,
  token: null,
  isAuthReady: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role;
      state.firstName = action.payload.firstName;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.firstName = null;
      state.token = null;
    },
    setAuthReady: (state, action) => {
      state.isAuthReady = action.payload;
    },
  },
});

export const { login, logout, setAuthReady } = authSlice.actions;

export default authSlice.reducer;
