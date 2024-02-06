import React from "react";
import { useGetSSLsQuery } from "./../../services/SabbathSchoolApi"; // Ensure this path is correct

const SSLHome = () => {
  const { data: ssl, error, isLoading } = useGetSSLsQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(ssl);

  return (
    <div className="h-auto flex flex-row w-[90%] md:w-[80%] mt-12 mx-auto space-y-12 mb-12">
      SSLHome
      {ssl &&
        ssl.map((item, index) => (
          <div
            key={index}
            className="border border-accent-6 p-2 rounded-lg font-nokia-bold w-1/3"
          >
            <img src={item.cover} alt="" className="w-48 rounded-md" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SSLHome;
