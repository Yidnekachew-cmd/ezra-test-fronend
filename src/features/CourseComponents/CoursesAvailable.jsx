import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosInstance from "../../api/axiosInstance";
import Categories from "./Categories";

function CoursesAvailable() {
  const [data, setData] = useState([]);

  const instance = useAxiosInstance();

  useEffect(() => {
    instance
      .get("/course/getall")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-auto flex flex-col w-[90%] md:w-[80%] mt-12 mx-auto space-y-12 mb-12">
      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-accent-6 text-2xl font-nokia-bold md:text-4xl tracking-wide">
              Courses Available
            </h1>
            <h3 className="text-accent-6 text-xs font-Lato-Regular md:text-sm tracking-wide">
              Explore Programs and Courses
            </h3>
            <h2 className="text-secondary-6 text-lg font-Lato-Regular md:text-sm tracking-wide">
              Our Most Popular Classes
            </h2>
          </div>
          <div className="flex justify-end">
            <input
              type="text"
              placeholder="Search"
              className=" hidden md:inline-block border-2 border-accent-6  w-[80%] outline-1 outline-accent-5 rounded-l px-4"
            />
            <img
              src="src/assets/Search-1.svg"
              alt=""
              className="hidden md:inline-block cursor-pointer"
            />
            <img
              src="src/assets/Search.svg"
              alt=""
              className="md:hidden cursor-pointer"
            />
          </div>
        </div>
        <hr className="border-accent-5 border-1 w-[100%] pb-3 md:w-[30%]" />

        <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-[90%] mx-auto md:w-[95%] md:flex-row md:flex-wrap space-y-6 md:space-y-0 md:gap-3">
          {data.map((course, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-start  border-accent-5 border-2 w-[100%] md:w-[32.3%] shadow-2xl rounded-3xl md:rounded-xl h-auto pb-6"
              >
                <img
                  src={`http://localhost:5100/images/` + course.image}
                  className="w-full  md:min-h-[40vh] max-h-[40vh] object-contaim  rounded-3xl p-3"
                  alt="no_image"
                />
                <div className="space-y-2 w-[95%] md:w-[90%] mx-auto">
                  <h2 className="text-secondary-6 text-2xl font-nokia-bold w-[80%] md:w-[85%]">
                    {course.title}
                  </h2>
                  <hr className="border-accent-5 border-1 w-[100%] " />
                  <p className="text-secondary-5 text-xs font-nokia-bold w-[80%] pb-4 ">
                    {course.description}
                  </p>
                  <Link
                    to={`/courses/get/` + course._id}
                    className="bg-accent-6 text-primary-6 px-3 py-1 rounded-full font-nokia-bold text-xs hover:bg-accent-7"
                  >
                    <button type="button">ኮርሱን ክፈት</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Categories title="Categories" />
    </div>
  );
}

export default CoursesAvailable;
