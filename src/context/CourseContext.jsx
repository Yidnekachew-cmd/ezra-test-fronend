import React from "react";
import PropTypes from "prop-types";

const CourseContext = React.createContext();

export const useCourseContext = () => React.useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [currentChapterIndex, setCurrentChapterIndex] = React.useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(null);

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

CourseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CourseProvider;
