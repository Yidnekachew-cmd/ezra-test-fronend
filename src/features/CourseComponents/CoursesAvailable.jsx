import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CoursesAvailable() {
  const [data, setData] = useState([]);

  //get all courses
  useEffect(() => {
    axios
      .get("/course/getall")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-screen pt-9 px-20">
      <h2 className="text-orange-500 text-2xl font-bold border-b-4 border-gray-300 pb-1">
        Courses Available
      </h2>
      <div className="flex flex-wrap justify-center w-full p-5 mx-auto">
        {data.map((course, index) => {
          return (
            <div
              key={index}
              className="inline-block border-2 border-orange-300 p-1 m-3 mr-5 w-[350px] shadow-md rounded-lg"
            >
              <img
                src={`http://localhost:5000/images/` + course.image}
                className="w-full rounded-md"
                alt="no_image"
              />
              <p className="text-lg m-1 border-b-2 border-orange-500">
                {course.title}
              </p>
              <p className="text-gray-600 m-1">{course.description}</p>
              <Link
                to={`/courses/get/` + course._id}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-xl mr-2"
              >
                ኮርሱን ክፈት
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesAvailable;
