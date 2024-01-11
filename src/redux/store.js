// store.js
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import devotionsReducer from "./devotionsSlice";
import authReducer from "./authSlice"; // import the auth reducer

const store = configureStore({
  reducer: {
    course: courseReducer,
    devotions: devotionsReducer,
    auth: authReducer, // include the auth reducer
  },
});

console.log(store.getState());

export default store;
