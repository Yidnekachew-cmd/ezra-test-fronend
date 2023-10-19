import { useState } from "react";
// import DisplayCourse from "./DisplayCourse";
import Form from "./Form";
import AddCourseImage from "./AddCourseImage";
import AddCourseContent from "./AddCourseContent";
import axios from "axios";
// import Title from "./Title";
// import Inputs from "./Inputs";
import SubTitle from "./SubTitle";
import GetCourses from "./GetCourses";

const AddCourse = () => {
  const [components, setComponents] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: [{ title1: "", title2: "" }],
    content: [],
    image: [],
  });

  const addCourse = (component) => {
    // Add the selected component to the array
    setComponents([...components, component]);
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Send the formData object to the backend
    axios
      .post("/course/create", formData)
      .then((res) => {
        window.location.reload(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-3 w-1/3 mb-3">
        <button
          className="bg-blue-500 rounded px-2 md:px-2 md:py-1"
          onClick={() =>
            addCourse(<Form formData={formData} setFormData={setFormData} />)
          }
        >
          <h3 className="text-white">Add Course Title</h3>
        </button>
        <button
          className="bg-blue-500 rounded px-2 md:px-2 md:py-1"
          onClick={() =>
            addCourse(
              <AddCourseContent formData={formData} setFormData={setFormData} />
            )
          }
        >
          <h3 className="text-white">Add Course Content</h3>
        </button>
        <button
          className="bg-blue-500 rounded px-2 md:px-2 md:py-1"
          onClick={() =>
            addCourse(
              <AddCourseImage formData={formData} setFormData={setFormData} />
            )
          }
        >
          <h3 className="text-white">Add Course Image</h3>
        </button>
      </div>
      {/* <DisplayCourse /> */}
      <GetCourses />
      {/* <Title /> */}
      {/* <Inputs /> */}
      <SubTitle />
      {show && (
        <div className="container flex flex-col justify-between space-x-6 mt-12 gap-3">
          <form
            onSubmit={handleSubmit}
            className="p-3 md:flex flex-col justify-start space-y-3"
          >
            {components.map((component, index) => (
              <div key={index}>{component}</div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 self-end w-1/3 rounded items-end"
            >
              <h3 className="text-white">Create</h3>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
