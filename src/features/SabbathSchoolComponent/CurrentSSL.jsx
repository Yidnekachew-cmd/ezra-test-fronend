import { useState, useEffect } from "react";
import useCalculateLessonIndex from "./hooks/useCalculateLessonIndex";
import {
  useGetSSLOfDayQuery,
  useGetSSLOfQuarterQuery,
} from "./../../services/SabbathSchoolApi";
import DateConverter from "./DateConverter";
function CurrentSSL() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [quarter, week] = useCalculateLessonIndex(currentDate);
  const [backgroundImage, setBackgroundImage] = useState("");

  const {
    data: lessonDetails,
    error: lessonError,
    isLoading: lessonIsLoading,
  } = useGetSSLOfDayQuery({ path: quarter, id: week });
  const {
    data: quarterDetails,
    error: quarterError,
    isLoading: quarterIsLoading,
  } = useGetSSLOfQuarterQuery(quarter);

  useEffect(() => {
    if (lessonDetails) {
      setBackgroundImage(lessonDetails.lesson.cover);
    }
  }, [lessonDetails]);

  if (lessonIsLoading || quarterIsLoading) return <div>Loading...</div>;
  if (lessonError) return <div>Error: {lessonError.message}</div>;
  if (quarterError) return <div>Error: {quarterError.message}</div>;
  if (!quarterDetails || !lessonDetails) return <div>Missing data...</div>;

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6">
      <div className="w-full border border-accent-6 p-2 rounded-xl">
        <div
          className="relative rounded-md w-64 h-48 text-primary-1 p-4 items-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(234, 146, 21, 10) 0%, rgba(234, 146, 21, 0) 80%), url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto">
            <p className="">የዚህ ሳምንት ትምህርት</p>
            {quarterDetails && quarterDetails.quarterly && (
              <div className="flex text-2xl text-primary-3">
                <DateConverter
                  gregorianDate={lessonDetails.lesson.start_date}
                />
                &nbsp;- &nbsp;
                <DateConverter gregorianDate={lessonDetails.lesson.end_date} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentSSL;
