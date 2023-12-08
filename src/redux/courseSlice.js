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
    setChapters: (state, action) => {
      state.chapters = action.payload;
    },
    addChapter: (state, action) => {
      state.chapters.push(action.payload);
    },
    addSlideToChapter: (state, { payload: { chapterIndex, slide } }) => {
      state.chapters[chapterIndex].slides.push(slide);
    },
    addElementToSlide: (state, action) => {
      const { chapterIndex, slideIndex, element } = action.payload;
      const chapter = state.chapters[chapterIndex];
      if (chapter && chapter.slides[slideIndex]) {
        const slide = chapter.slides[slideIndex];
        if (!slide.elements) slide.elements = [];
        slide.elements.push(element);
      }
    },
    setSelectedChapter: (state, action) => {
      state.selectedChapter = action.payload;
    },
    updateSlideElement: (state, action) => {
      const { chapterIndex, slideIndex, elementId, value } = action.payload;
      const chapter = state.chapters[chapterIndex];
      if (chapter && chapter.slides[slideIndex]) {
        const slide = chapter.slides[slideIndex];
        if (slide && slide.elements) {
          const elementToUpdate = slide.elements.find(
            (el) => el.id === elementId
          );
          if (elementToUpdate) {
            elementToUpdate.value = value;
          }
        }
      }
    },
    removeSlide: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.chapters.length) {
        state.chapters[index].slides = [];
      }
    },
    removeSlideElement: (state, action) => {
      const { chapterIndex, slideIndex, elementId } = action.payload;
      const chapter = state.chapters[chapterIndex];
      if (chapter && chapter.slides[slideIndex]) {
        const slide = chapter.slides[slideIndex];
        if (slide && slide.elements) {
          slide.elements = slide.elements.filter((el) => el.id !== elementId);
        }
      }
    },
    updateSlideImage: (state, action) => {
      const { chapterIndex, slideIndex, elementId, fileName } = action.payload;
      const chapter = state.chapters[chapterIndex];
      if (chapter && chapter.slides[slideIndex]) {
        const slide = chapter.slides[slideIndex];
        if (slide && slide.elements) {
          const elementToUpdate = slide.elements.find(
            (el) => el.id === elementId
          );
          if (elementToUpdate) {
            elementToUpdate.value = fileName;
          }
        }
      }
    },
  },
});

export const {
  setTitle,
  setDescription,
  setImage,
  setChapters,
  addChapter,
  addSlideToChapter,
  addElementToSlide,
  setSelectedChapter,
  updateSlideElement,
  removeSlide,
  removeSlideElement,
  updateSlideImage,
} = courseSlice.actions;

export default courseSlice.reducer;
