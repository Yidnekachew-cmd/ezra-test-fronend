import SubTitle from "./SubTitle";
import ImgMap from "./ImgMap";
import Quiz from "./Quiz";

const AddCourse = () => {
  return (
    <div className="container">
      <ImgMap /> {/* This is the data displayed that comes from backend */}
      <SubTitle /> {/* This is the form to add courses */}
      <Quiz />
    </div>
  );
};

export default AddCourse;
