import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addElementToSlide,
  updateElement,
  // selectElements,
} from "../../redux/courseSlice";

function ElementsAdd({ chapterIndex, slideIndex }) {
  const dispatch = useDispatch();

  const chapters = useSelector((state) => state.course.chapters);
  const elements = chapters[chapterIndex]?.slides[slideIndex]?.elements || [];

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
      setCurrentElement(""); // Reset the dropdown selection
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
          className="border-2 border-accent-6 rounded-lg"
        >
          <option value="title">Title</option>
          <option value="sub">Sub-title</option>
          <option value="text">Paragraph</option>
          <option value="slide">Slide</option>
          <option value="img">Image</option>
          <option value="quiz">Quiz</option>
          <option value="list">List</option>
        </select>
        <button
          onClick={handleAddButtonClick}
          className="px-2 font-semibold text-white bg-accent-6 rounded-md hover:bg-accent-7"
        >
          Add
        </button>
      </div>

      {elements.map((element, index) => (
        <div key={index} className="py-2">
          <div className="flex justify-between items-center pb-2">
            <label className="text-accent-6 font-bold">{element.type}</label>
            {/* Removal button needs to be implemented */}
            <button className="flex items-center text-orange-400 hover:text-accent-6">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          <input
            id={element.id}
            placeholder={`Enter ${element.type}`}
            value={element.value}
            onChange={(e) => handleInputChange(element.id, e.target.value)}
            className="w-36 border-2 border-accent-6 rounded-lg text-accent-6 font-bold pl-4"
          />
        </div>
      ))}
    </div>
  );
}

ElementsAdd.propTypes = {
  chapterIndex: PropTypes.number.isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default ElementsAdd;
