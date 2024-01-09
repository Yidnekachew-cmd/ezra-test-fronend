import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import devotionsReducer from "./devotionsSlice";

const store = configureStore({
  reducer: {
    course: courseReducer,
    devotions: devotionsReducer,
  },
});

console.log(store.getState());

export default store;
