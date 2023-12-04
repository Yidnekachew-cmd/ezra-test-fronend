import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateCourse from "@/components/CreateCourse";
import CoursesAvailable from "@/features/CourseComponents/CoursesAvailable";
import AddCourse from "../components/AddCourse";

const Courses = () => {
 
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2) {
      navigate("/course/create/add");
    }
  }, [step]);

  return (
    <div>
      <CoursesAvailable />
      {step === 1 && 
        <CreateCourse setCourseData={setCourseData} setStep={setStep} />}
      {step === 2 && 
        <AddCourse courseData={courseData} />}
    </div>
  );
};

export default Courses;
