import { useEffect, useState } from "react";
import {
  useGetSSLOfDayQuery,
  useGetSSLOfQuarterQuery,
} from "./../../services/SabbathSchoolApi";
import DateConverter from "./DateConverter";
import { useParams, Link } from "react-router-dom";

function CurrentSSL() {
  const { quarter, id } = useParams();
  const [currentDayData, setCurrentDayData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchCurrentDayData = async () => {
    //   try {
    //     // Calculate the current date
    //     const currentDate = new Date();
    //     const currentYear = currentDate.getFullYear();
    //     const currentMonth = String(currentDate.getMonth() + 1).padStart(
    //       2,
    //       "0"
    //     );
    //     const currentDay = String(currentDate.getDate()).padStart(2, "0");
    //     const quarter =
    //       currentDate.getFullYear() +
    //       "-" +
    //       Math.ceil((currentDate.getMonth() + 1) / 3);
    //     const weekWithinQuarter = Math.ceil(
    //       (currentDate.getDate() +
    //         new Date(
    //           currentDate.getFullYear(),
    //           currentDate.getMonth(),
    //           1
    //         ).getDay()) /
    //         7
    //     );

    //     // Convert the current date into the required format (YYYY-MM-DD)
    //     const formattedCurrentDate = `${currentYear}-${currentMonth
    //       .toString()
    //       .padStart(2, "0")}-${currentDay.toString().padStart(2, "0")}`;

    //     console.log(
    //       currentDay,
    //       quarter,
    //       currentYear,
    //       weekWithinQuarter,
    //       formattedCurrentDate
    //     );
    //     // Construct the API endpoint for the current day's lesson
    //     const currentLessonEndpoint = `am/quarterlies/${formattedCurrentDate}`;

    //     // Fetch the data for the current day's lesson
    //     const response = await fetch(
    //       `https://sabbath-school-stage.adventech.io/api/v2/${currentLessonEndpoint}/index.json`
    //     );

    //     // Check if the response is not OK
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch data");
    //     }

    //     // Check if the response is in JSON format
    //     const contentType = response.headers.get("content-type");
    //     if (!contentType || !contentType.includes("application/json")) {
    //       throw new Error("Response is not in JSON format");
    //     }

    //     // Parse the JSON response
    //     const data = await response.json();

    //     // Update state with fetched data
    //     setCurrentDayData(data);
    //     setIsLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     setIsLoading(false);
    //   }
    // };

    // fetchCurrentDayData();
    function calculateLessonIndex(currentDate) {
      const currentDateObj = new Date(currentDate);
      const dayOfMonth = currentDateObj.getDate();
      const month = currentDateObj.getMonth() + 1; // Month is zero-based, so we add 1
      const year = currentDateObj.getFullYear();

      // Calculate the quarter
      let quarter;
      if (month >= 1 && month <= 3) {
        quarter = `${year}-01`;
      } else if (month >= 4 && month <= 6) {
        quarter = `${year}-02`;
      } else if (month >= 7 && month <= 9) {
        quarter = `${year}-03`;
      } else {
        quarter = `${year}-04`;
      }

      // Calculate the week within the quarter
      const startQuarter = new Date(year, Math.floor((month - 1) / 3) * 3, 1);
      const diffDays = Math.floor(
        (currentDateObj - startQuarter) / (1000 * 60 * 60 * 24)
      );
      const week = Math.floor(diffDays / 7) + 1;

      // Construct the index string
      const index = `am-${quarter}-${week.toString().padStart(2, "0")}`;
      return index;
    }

    // Fetch current date
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format

    // Calculate the lesson index using the current date
    const lessonIndex = calculateLessonIndex(currentDate);
    console.log("Lesson Index:", lessonIndex);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6">
      {/* Render current day's lesson details here */}
      {currentDayData && (
        <>
          <h1 className="text-3xl mb-6">Sabbath School Lessons</h1>
          {/* Render the lesson title and image */}
          <div>
            <h2>{currentDayData.lesson.title}</h2>
            <img src={currentDayData.lesson.cover} alt="Lesson Cover" />
          </div>
          {/* Render other necessary details */}
          {/* Example: Start and end date of the lesson */}
          <div>
            <p>
              Start Date:{" "}
              <DateConverter gregorianDate={currentDayData.lesson.start_date} />
            </p>
            <p>
              End Date:{" "}
              <DateConverter gregorianDate={currentDayData.lesson.end_date} />
            </p>
          </div>
          {/* Render links to each day's lesson */}
          <div>
            <h3>Days:</h3>
            <ul>
              {currentDayData.days.map((day) => (
                <li key={day.id}>
                  <Link
                    to={`/sabbathSchool/${quarter}/lessons/${id}/days/${day.id}/read`}
                  >
                    {day.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default CurrentSSL;
