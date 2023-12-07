import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    title: "",
    description: "",
    image: null,
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
    addChapter: (state) => {
      state.chapters.push({
        chapter: "",
        slides: [],
      });
    },
    updateChapter: (state, action) => {
      const { chapterIndex, value } = action.payload;
      state.chapters[chapterIndex].chapter = value;
    },
    selectChapters: (state) => {
      state.course.chapters;
    },
    addSlide: (state, action) => {
      const { chapterIndex } = action.payload;
      state.chapters[chapterIndex].slides.push({
        slide: "",
        elements: [],
      });
    },
    updateSlide: (state, action) => {
      const { chapterIndex, slideIndex, value } = action.payload;
      state.chapters[chapterIndex].slides[slideIndex].slide = value;
    },
    addElementToSlide: (state, action) => {
      const { chapterIndex, slideIndex, elementType } = action.payload;
      state.chapters[chapterIndex].slides[slideIndex].elements.push({
        type: elementType,
        id: `${elementType}${Math.random().toString(36).substr(2, 9)}`, // Unique ID generation
        value: "",
      });
    },
    updateElement: (state, action) => {
      const { chapterIndex, slideIndex, elementId, value } = action.payload;
      const elements = state.chapters[chapterIndex].slides[slideIndex].elements;
      const elementIndex = elements.findIndex((e) => e.id === elementId);
      if (elementIndex !== -1) {
        elements[elementIndex].value = value;
      }
    },
    selectElements: (state, action) => {
      const { chapterIndex, slideIndex } = action.payload;
      state.chapters[chapterIndex].slides[slideIndex].elements;
    },
  },
});

export const {
  setTitle,
  setDescription,
  setImage,
  addChapter,
  updateChapter,
  selectChapters,
  addSlide,
  updateSlide,
  addElementToSlide,
  updateElement,
  selectElements,
} = courseSlice.actions;

export default courseSlice.reducer;
