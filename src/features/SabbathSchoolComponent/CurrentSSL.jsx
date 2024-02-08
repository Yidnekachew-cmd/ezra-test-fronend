// CurrentSSL.jsx
import { useEffect, useState } from "react";
import useCalculateLessonIndex from "./hooks/useCalculateLessonIndex";
import {
  useGetSSLOfDayQuery,
  useGetSSLOfQuarterQuery,
} from "./../../services/SabbathSchoolApi";
function CurrentSSL() {
  // Fetch current date
  const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format

  // Get the lesson index from the hook
  const [quarter, week] = useCalculateLessonIndex(currentDate);

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

  if (lessonIsLoading || quarterIsLoading) return <div>Loading...</div>;
  if (lessonError) return <div>Error: {lessonError.message}</div>;
  if (quarterError) return <div>Error: {quarterError.message}</div>;
  if (!quarterDetails || !lessonDetails) return <div>Missing data...</div>;

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6">
      <div className="w-full border border-accent-6 p-2 rounded-xl">
        <img
          src={lessonDetails.lesson.cover}
          alt={quarterDetails.quarterly.title}
          className="rounded-md w-20% h-48 object-contain"
        />
        {quarterDetails.quarterly.title}
      </div>
    </div>
  );
}

export default CurrentSSL;
