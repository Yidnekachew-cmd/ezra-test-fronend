import React from "react";
import { Link } from "react-router-dom";
import { useGetSSLsQuery } from "./../../services/SabbathSchoolApi"; // Ensure this path is correct

const SSLHome = () => {
  const { data: ssl, error, isLoading } = useGetSSLsQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold ">
      <h1 className="text-3xl mb-6">Sabbath School Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ssl.map((item, index) => (
          <Link
            key={index}
            className="flex bg-white shadow-md rounded-md border border-accent-6"
          >
            <img
              src={item.cover}
              alt={item.title}
              className="rounded-l-md h-42 w-1/2"
            />
            <div className="flex flex-col justify-between p-4">
              <div className="flex flex-col h-48">
                <h2 className="text-xl mb-2 whitespace-normal">{item.title}</h2>
                <p className="text-gray-600 overflow-hidden overflow-ellipsis">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SSLHome;
