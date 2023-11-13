import { useEffect, useState } from "react";
import axios from "axios";

const GetCourse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the course data from the backend
    axios
      .get("/course/getall")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((course) => {
        return (
          <div key={course._id}>
            {course.elements.map((element) => {
              // Check the type of the element and render it accordingly
              if (element.type === "title") {
                return (
                  <h1 key={element._id} className="title-class">
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
                    key={element._id}
                    src={`https://ezra-seminary-api.onrender.com/images/${element.value}`}
                    alt={element.id}
                    className="img-class"
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
