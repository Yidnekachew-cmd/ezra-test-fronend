// DisplaySSLLesson.jsx
import { useParams } from "react-router-dom";
import { useGetSSLOfDayLessonQuery } from "./../../services/SabbathSchoolApi";

function DisplaySSLLesson() {
  const { quarter, id, day } = useParams();
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfDayLessonQuery({ path: quarter, id: id, day: day });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="text-xl mb-2">{lessonDetails.title}</h2>
      <p className="text-gray-600 overflow-hidden overflow-ellipsis">
        {lessonDetails.content}
      </p>
    </div>
  );
}

export default DisplaySSLLesson;
