import { useParams, Link } from "react-router-dom";
import { useGetSSLOfQuarterQuery } from "./../../services/SabbathSchoolApi";

function SSLQuarter() {
  const { quarter } = useParams();
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfQuarterQuery(quarter);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6">
      <h1 className="text-3xl mb-6">Sabbath School Lessons</h1>
      <div className="flex flex-row gap-4">
        <div className="w-[20%] h-[10%]">
          <img
            src={lessonDetails.quarterly.cover}
            alt={lessonDetails.quarterly.title}
            className="rounded-md"
          />
          <p className="text-right mt-2">
            {lessonDetails.quarterly.human_date}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-3xl text-accent-6">
            {lessonDetails.quarterly.title}
          </div>
          <div className="text-lg my-4 leading-tight">
            {lessonDetails.quarterly.description}
          </div>
          {lessonDetails.lessons.map((item, index) => (
            <Link
              className="py-2"
              key={index}
              to={`/sabbathSchool/${quarter}/lessons/${item.id}`}
            >
              <div className="flex text-xl gap-2">
                <p>{index + 1}</p>
                <h2 className=" whitespace-normal">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SSLQuarter;
