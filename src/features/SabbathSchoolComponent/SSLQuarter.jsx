import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetSSLOfQuarterQuery } from "./../../services/SabbathSchoolApi";

function SSLQuarter() {
  const { quarter } = useParams();
  console.log(quarter);
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfQuarterQuery(quarter);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(lessonDetails);
  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold ">
      <h1 className="text-3xl mb-6">Sabbath School Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lessonDetails.lessons.map((item, index) => (
          <Link
            className="flex flex-col justify-between p-4"
            key={index}
            to={`/sabbathSchool/${quarter}/lessons/${item.id}`}
          >
            <div className="flex flex-col h-48">
              <h2 className="text-xl mb-2 whitespace-normal">{item.title}</h2>
              <p className="text-gray-600 overflow-hidden overflow-ellipsis">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SSLQuarter;
