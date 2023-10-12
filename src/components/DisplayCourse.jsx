import { useEffect, useState } from "react";
import axios from "axios";

const DisplayCourse = () => {
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
        return <h1 key={index}>{course.title}</h1>;
      })}
    </div>
  );
};

export default DisplayCourse;
