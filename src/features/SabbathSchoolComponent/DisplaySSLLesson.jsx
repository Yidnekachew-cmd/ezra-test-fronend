// DisplaySSLLesson.jsx
import "./SSLStyles.css";
import { useParams } from "react-router-dom";
import { useGetSSLOfDayLessonQuery } from "./../../services/SabbathSchoolApi";
import parse from "html-react-parser";

function DisplaySSLLesson() {
  const { quarter, id, day } = useParams();
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfDayLessonQuery({ path: quarter, id: id, day: day });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const html = parse(lessonDetails.content);
  return (
    <div>
      <div className="text-3xl mb-2 text-accent-6">{lessonDetails.title}</div>
      <div className="text-secondary-6 text-justify">{html}</div>
    </div>
  );
}

export default DisplaySSLLesson;
