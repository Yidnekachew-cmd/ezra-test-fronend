import { createSlice, createSelector } from "@reduxjs/toolkit";

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

    addSlide: (state, action) => {
      const { chapterIndex } = action.payload;
      state.chapters[chapterIndex].slides.push({
        slide: "",
        elements: [],
      });
    },
    deleteElement(state, action) {
      const { chapterIndex, slideIndex, elementId } = action.payload;
      const chapter = state.chapters[chapterIndex];
      if (chapter) {
        const slide = chapter.slides[slideIndex];
        if (slide) {
          slide.elements = slide.elements.filter(
            (element) => element.id !== elementId
          );
        }
      }
    },
    updateSlide: (state, action) => {
      const { chapterIndex, slideIndex, value } = action.payload;
      state.chapters[chapterIndex].slides[slideIndex].slide = value;
    },
    addElementToSlide: (state, action) => {
      const { chapterIndex, slideIndex, elementType } = action.payload;
      if (state.chapters[chapterIndex] == null) {
        console.warn(
          "Cannot add element, invalid chapter index:",
          chapterIndex
        );
        return;
      }

      const slides = state.chapters[chapterIndex].slides;
      if (!slides) {
        console.warn(
          "Cannot add element, no slides array in chapter:",
          chapterIndex
        );
        return;
      }

      if (slides[slideIndex] == null) {
        console.warn(
          `Cannot add element, invalid slide index: ${slideIndex} for chapter: ${chapterIndex}`
        );
        return;
      }
      const elements = slides[slideIndex].elements;
      elements.push({
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

    setCurrentChapter: (state, action) => {
      state.currentChapterIndex = action.payload;
    },
    setCurrentSlide: (state, action) => {
      const { chapterIndex, slideIndex } = action.payload;
      state.currentChapterIndex = chapterIndex;
      state.currentSlideIndex = slideIndex;
    },
    selectCurrentChapter: (state) => {
      return state.chapters[state.currentChapterIndex] || {};
    },
    selectCurrentSlide: (state) => {
      const chapter = state.chapters[state.currentChapterIndex];
      if (chapter) {
        return chapter.slides[state.currentSlideIndex] || {};
      }
      return {};
    },
  },
});

export const {
  setTitle,
  setDescription,
  setImage,
  addChapter,
  updateChapter,

  addSlide,
  updateSlide,
  addElementToSlide,
  updateElement,

  setCurrentChapter,
  setCurrentSlide,
  selectCurrentChapter,
  selectCurrentSlide,
} = courseSlice.actions;

export default courseSlice.reducer;

export const selectCourse = (state) => state.course;
export const selectChapters = (state) => state.course.chapters;
export const selectSlides = (state, chapterIndex) => {
  return state.course.chapters[chapterIndex]?.slides;
};

export const selectElements = (state, chapterIndex, slideIndex) => {
  const { chapters } = state.course;
  return chapters[chapterIndex]?.slides[slideIndex]?.elements || [];
};
// export const selectAllSlides = (state) =>
//   state.course.chapters.map((chapter) => chapter.slides);

export const selectAllSlides = createSelector([selectChapters], (chapters) =>
  chapters.map((chapter) => chapter.slides)
);
