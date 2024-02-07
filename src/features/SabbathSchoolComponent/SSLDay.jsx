import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetSSLOfDayQuery,
  useGetSSLOfQuarterQuery,
} from "./../../services/SabbathSchoolApi";
import DateConverter from "./DateConverter";

function SSLDay() {
  const { quarter, id } = useParams();
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfDayQuery({ path: quarter, id: id });
  const { data: quarterDetails } = useGetSSLOfQuarterQuery(quarter);
  const daysOfWeek = ["ቅዳሜ", "እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ"];
  let navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [selectedDayId, setSelectedDayId] = useState(null);

  useEffect(() => {
    if (lessonDetails?.days?.length && !selectedDayId) {
      const firstDayId = lessonDetails.days[0].id;
      setSelectedDayId(firstDayId);
      navigate(
        `/sabbathSchool/${quarter}/lessons/${id}/days/${firstDayId}/read`,
        { replace: true }
      );
    }
  }, [lessonDetails, quarter, id, selectedDayId, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6">
      <h1 className="text-3xl mb-6">Sabbath School Lessons</h1>
      <div className="flex justify-end">
        <div className="flex flex-col w-1/5 items-end">
          <div className="flex flex-col gap-2">
            <img
              src={quarterDetails.quarterly.cover}
              alt={quarterDetails.quarterly.title}
              className="rounded-md "
            />
            <div className="flex text-sm text-secondary-3 justify-end">
              <DateConverter gregorianDate={lessonDetails.lesson.start_date} />
              &nbsp;- &nbsp;
              <DateConverter gregorianDate={lessonDetails.lesson.end_date} />
            </div>
          </div>
          <button
            className="text-3xl mb-4 text-right leading-10 hover:text-accent-7 transition-all"
            onClick={goBack}
          >
            {quarterDetails.quarterly.title}
          </button>
          <di className="flex flex-col gap-2">
            {lessonDetails.days.map((item, index) => (
              <Link
                key={index}
                className={`flex flex-col text-right px-2 border border-secondary-3 rounded-md ${
                  item.id === selectedDayId ? "bg-secondary-1" : ""
                }`}
                to={`/sabbathSchool/${quarter}/lessons/${id}/days/${item.id}/read`}
                onClick={() => setSelectedDayId(item.id)}
              >
                <p className="flex flex-row text-secondary-3 text-xs justify-end">
                  {daysOfWeek[index % 7]}፣&nbsp;&nbsp;
                  <DateConverter gregorianDate={item.date} />
                </p>
                <p className="block mb-2 text-lg">{item.title}</p>
              </Link>
            ))}
          </di>
        </div>
        <div className="w-4/5 ml-8">
          <Outlet selectedDayId={selectedDayId} />
        </div>
      </div>
    </div>
  );
}

export default SSLDay;
