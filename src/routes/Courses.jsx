// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CreateCourse from "@/components/CreateCourse";
import CoursesAvailable from "@/features/CourseComponents/CoursesAvailable";
// import AddCourse from "../components/AddCourse";
// import { useAuthContext } from "../hooks/useAuthContext";

const Courses = () => {
  // const [step, setStep] = useState(1);
  // const [courseData, setCourseData] = useState(null);
  // const navigate = useNavigate();
  // const { role } = useAuthContext();

  // useEffect(() => {
  //   if (step === 2) {
  //     navigate("/course/create/add");
  //   }
  // }, [step]);

  return (
    <div>
      <CoursesAvailable />
      {/* {step === 1 && role === "Admin" && (
        // <CreateCourse setCourseData={setCourseData} setStep={setStep} />
      )} */}
      {/* {step === 2 && role === "Admin" && <AddCourse courseData={courseData} />} */}
    </div>
  );
};

export default Courses;
