import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  image: "",
  chapters: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    addChapter(state, action) {
      state.chapters.push(action.payload);
    },
  },
});

export const { setTitle, setDescription, setImage, addChapter } =
  courseSlice.actions;
export default courseSlice.reducer;
