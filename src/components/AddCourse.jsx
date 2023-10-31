import SubTitle from "./SubTitle";
import ImgMap from "./ImgMap";

const AddCourse = () => {
  return (
    <div className="container">
      <ImgMap /> {/* This is the data displayed that comes from backend */}
      <SubTitle /> {/* This is the form to add courses */}
    </div>
  );
};

export default AddCourse;
