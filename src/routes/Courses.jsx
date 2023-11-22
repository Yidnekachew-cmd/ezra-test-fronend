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
  }, [step]);

  return (
    <div>
      {step === 1 && 
        <CreateCourse courseData={courseData} setCourseData={setCourseData} setStep={setStep} />}
      {step === 2 && 
        <AddCourse courseData={courseData} />}
    </div>
  );
};

export default Courses;
