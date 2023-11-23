import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateCourse from "@/components/CreateCourse";
import AddCourse from "../components/AddCourse";

const Courses = () => {
  const [step, setStep] = useState(1);
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2) {
      navigate("/course/create/add");
    }
  }, [step, navigate]);

  return (
    <div>
      {step === 1 && 
        <CreateCourse setCourseData={setCourseData} setStep={setStep} />}
      {courseData && 
        <AddCourse courseData={courseData} setStep={setStep} />}
    </div>
  );
};



export default Courses;
