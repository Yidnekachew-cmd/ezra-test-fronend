// import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

function CreateCourse({ setCourseData, setStep }) {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
    chapters: [],
  });
  //   const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setCourseData(data);
    setStep(2);
    console.log(data);
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("image", data.image);
    console.log(formdata);
    // axios
    //   .post("/course/create", formdata)
    //   .then((res) => {
    //     navigate("/course/add");
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen pt-9 px-20">
      <h2 className="text-orange-500 text-2xl font-bold border-b-4 border-gray-300 pb-1">
        Create Course
      </h2>
      <form
        className="grid grid-cols-1 gap-3 w-1/2 mx-auto mt-3"
        onSubmit={handleSubmit}
      >
        <div className="col-span-12 mx-auto">
          <input
            type="file"
            className="w-full p-24 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            name="image"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="col-span-12">
          <label className="block text-orange-500">Course Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            name="title"
            placeholder="Untitled Course"
            autoComplete="off"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className="col-span-12">
          <label className="block text-orange-500">Description</label>
          <input
            type="text"
            className="w-full px-3 pt-2 pb-12 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            name="description"
            placeholder="Add a description"
            autoComplete="off"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div className="col-span-12">
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

CreateCourse.propTypes = {
  setCourseData: PropTypes.object.isRequired,
  setStep: PropTypes.object.isRequired,
}


export default CreateCourse;
