import { useEffect, useState } from "react";
import axios from "axios";

const GetCourses = () => {
  const [data, setData] = useState([]);

  //get all courses
  useEffect(() => {
    axios
      .get("/course/getall")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-100 w-2/3 p-3 rounded">
      {data.map((course, index) => {
        return (
          <div key={index}>
            {course.title.map((title, idx) => (
              <h1
                key={`${title.key}-${idx}`}
                className="text-2xl font-bold text-blue-500"
              >
                {title.value}
              </h1>
            ))}
            {course.sub.map((sub, idx) => (
              <h1 key={`${sub.key}-${idx}`} className="text-lg text-gray-700">
                {sub.value}
              </h1>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GetCourses;
