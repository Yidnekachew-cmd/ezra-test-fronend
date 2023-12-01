import { useEffect, useState } from "react";
import useAxiosInstance from "../api/axiosInstance";

const GetCourse = () => {
  const [data, setData] = useState([]);
  const instance = useAxiosInstance();

  useEffect(() => {
    // Fetch the course data from the backend
    instance
      .get("/course/getall")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [instance]);

  return (
    <div>
      {data.map((course) => {
        return (
          <div key={course._id}>
            {course.elements.map((element) => {
              // Check the type of the element and render it accordingly
              if (element.type === "title") {
                return (
                  <h1 key={element._id} className="text-blue-500">
                    {element.value}
                  </h1>
                );
              } else if (element.type === "sub") {
                return (
                  <h2 key={element._id} className="sub-class">
                    {element.value}
                  </h2>
                );
              } else if (element.type === "img") {
                return (
                  <img
                    key={element._id} // Add key prop here
                    src={`http://localhost:5000/images/${element.value}`}
                    alt={element.id}
                    className="w-[15%]"
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GetCourse;
