// DisplaySSLLesson.jsx
import "./SSLStyles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSSLOfDayLessonQuery,
  useGetSSLOfDayQuery,
} from "./../../services/SabbathSchoolApi";
import parse from "html-react-parser";

function DisplaySSLLesson() {
  const { quarter, id, day } = useParams();
  const [backgroundImage, setBackgroundImage] = useState("");
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfDayLessonQuery({ path: quarter, id: id, day: day });

  const {
    data: dayDetails,
    dayError,
    dayIsLoading,
  } = useGetSSLOfDayQuery({ path: quarter, id: id });

  useEffect(() => {
    if (dayDetails) {
      setBackgroundImage(dayDetails.lesson.cover);
    }
  }, [dayDetails]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const html = parse(lessonDetails.content);

  return (
    <div>
      <div
        className="flex rounded-md w-[100%] h-64 text-primary-1 p-4 items-end"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.001) 0%, rgba(0,0,0,0.7) 100%), url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="text-3xl my-2 text-primary-0">
          {lessonDetails.title}
        </div>
      </div>

      <div className="text-secondary-6 text-justify wrapper my-4">{html}</div>
    </div>
  );
}

export default DisplaySSLLesson;
