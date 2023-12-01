// store.js
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
