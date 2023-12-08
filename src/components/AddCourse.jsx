// import SubTitle from "./SubTitle";
import ImgMap from "./ImgMap";
import SlideShow from "./SlideShow";

const AddCourse = () => {
  return (
    <div className="container mt-12">
      {/* <ImgMap /> This is the data displayed that comes from backend */}
      <SlideShow /> {/* This is the form to add courses */}
    </div>
  );
};

export default AddCourse;
