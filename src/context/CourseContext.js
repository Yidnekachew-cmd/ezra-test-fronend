import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(null);

  const value = {
    currentChapterIndex,
    setCurrentChapterIndex,
    currentSlideIndex,
    setCurrentSlideIndex,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
