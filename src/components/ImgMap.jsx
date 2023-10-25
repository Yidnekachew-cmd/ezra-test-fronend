import { useEffect, useState } from "react";
import axios from "axios";

const ImgMap = () => {
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
            {course.elements.map((element, idx) => (
              <div key={`${element.id}-${idx}`}>
                {element.type === "image" ? (
                  <img src={element.file} alt={element.id} />
                ) : (
                  <h1>{element.value}</h1>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ImgMap;
