import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    title: "",
    description: "",
    image: "",
    chapters: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    addChapter: (state, action) => {
      state.chapters.push(action.payload);
    },
    updateChapterTitle: (state, action) => {
      const { chapterIndex, title } = action.payload;
      if (state.chapters[chapterIndex]) {
        state.chapters[chapterIndex].chapter = title;
      }
    },
    // you can create similar reducers for adding slides and updating slides
  },
});

export const {
  setTitle,
  setDescription,
  setImage,
  addChapter,
  updateChapterTitle,
} = courseSlice.actions;
export default courseSlice.reducer;
