import { useState } from "react";
import { useCourseContext } from "./CourseContext";

import { useDispatch, useSelector } from "react-redux";
import { addElementToSlide, updateElement } from "../../redux/courseSlice";

function ElementsAdd() {
  const { currentChapterIndex, currentSlideIndex } = useCourseContext();
  const dispatch = useDispatch();
  const chapters = useSelector((state) => state.course.chapters);
  const elements =
    chapters[currentChapterIndex]?.slides[currentSlideIndex]?.elements || [];

  const [currentElement, setCurrentElement] = useState("");

  const handleDropdownChange = (e) => {
    setCurrentElement(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (currentElement) {
      dispatch(
        addElementToSlide({
          chapterIndex,
          slideIndex,
          elementType: currentElement,
        })
      );
      setCurrentElement(""); // Reset dropdown if needed
    }
  };

  const handleInputChange = (id, value) => {
    dispatch(
      updateElement({
        chapterIndex,
        slideIndex,
        elementId: id,
        value: value,
      })
    );
  };

  return (
    <div className="bg-white w-[16%] p-6">
      <p className="font-bold py-2">Insert Element</p>
      <div className="flex justify-between">
        <select
          name="elements"
          id="elements"
          value={currentElement}
          onChange={handleDropdownChange}
          className="border-2 border-orange-500 rounded-lg"
        >
          <option value="">Choose Type</option>
          <option value="title">title</option>
          <option value="sub">sub</option>
          <option value="img">img</option>
        </select>
        <button
          onClick={handleAddButtonClick}
          className="px-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Add
        </button>
      </div>

      {elements.map((element, index) => (
        <div key={index} className="py-2">
          <div className="flex justify-between items-center pb-2">
            <label className="text-orange-500 font-bold">{element.type}</label>
            <button className="flex items-center text-orange-400 hover:text-orange-500">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          <input
            id={element.id}
            placeholder={`Enter ${element.type}`}
            value={element.value}
            onChange={(e) => handleInputChange(element.id, e.target.value)}
            className="w-full border-2 border-orange-500 rounded-lg text-orange-500 font-bold pl-4"
          />
        </div>
      ))}
    </div>
  );
}

export default ElementsAdd;
