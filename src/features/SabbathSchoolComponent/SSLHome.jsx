import React from "react";
import { useGetSSLsQuery } from "./../../services/SabbathSchoolApi"; // Ensure this path is correct

const SSLHome = () => {
  const { data: ssl, error, isLoading } = useGetSSLsQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(ssl);

  return (
    <div>
      SSLHome
      {ssl &&
        ssl.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {/* ... render other properties as needed */}
          </div>
        ))}
    </div>
  );
};

export default SSLHome;
