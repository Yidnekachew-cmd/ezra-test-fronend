import { useParams, Link, Outlet } from "react-router-dom";
import { useGetSSLOfDayQuery } from "./../../services/SabbathSchoolApi";

function SSLDay() {
  const { quarter, id } = useParams();
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfDayQuery({ path: quarter, id: id });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold">
      <h1 className="text-3xl mb-6">Sabbath School Lessons</h1>
      <div className="flex">
        <div className="w-1/3">
          <h2 className="text-xl mb-4">Days</h2>
          <div>
            {lessonDetails.days.map((item, index) => (
              <Link
                key={index}
                className="block mb-2 text-blue-600"
                to={`/sabbathSchool/${quarter}/lessons/${id}/days/${item.id}/read`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-2/3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SSLDay;
