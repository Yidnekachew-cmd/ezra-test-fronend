import { useState } from "react";
import DisplayCourse from "./DisplayCourse";
import Form from "./Form";
import AddCourseImage from "./AddCourseImage";
import AddCourseContent from "./AddCourseContent"

const AddCourse = () => {
  const [components, setComponents] = useState([]);
  const [show, setShow] = useState(false);

  const addCourse = (component) => {
    // Add the selected component to the array
    setComponents([...components, component]);
    setShow(true);
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-3 w-1/3 mb-3">
        <button
          className="bg-blue-500 rounded px-2 md:px-2 md:py-1"
          onClick={() => addCourse(<Form />)}
        >
          <h3 className="text-white">Add Course Title</h3>
        </button>
        <button
          className="bg-blue-500 rounded px-2 md:px-2 md:py-1"
          onClick={() => addCourse(<AddCourseContent />)}
        >
          <h3 className="text-white">Add Course Content</h3>
        </button>
        <button
          className="bg-blue-500 rounded px-2 md:px-2 md:py-1"
          onClick={() => addCourse(<AddCourseImage />)}
        >
          <h3 className="text-white">Add Course Image</h3>
        </button>
      </div>
      <DisplayCourse />
      {show && (
        <div className="container flex flex-col justify-between space-x-6 mt-12 gap-3">
          {components.map((component, index) => (
            <div key={index}>{component}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddCourse;
