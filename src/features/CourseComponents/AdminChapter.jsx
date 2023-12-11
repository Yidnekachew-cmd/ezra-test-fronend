import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ChaptersAdd from "./ChaptersAdd";
import { selectCourse } from "../../redux/courseSlice";

function AdminChapter() {
  const navigate = useNavigate();
  const course = useSelector(selectCourse);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, image, chapters } = course;

    console.log("Chapters data:", chapters);

    const formData = new FormData();
    const payload = Object.fromEntries(formData);

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    // Convert chapters to JSON string and append it to formData
    formData.append("chapters", JSON.stringify(chapters));

    console.log(formData);
    console.log(payload);

    axios
      .post("/course/create", formData)
      .then((res) => {
        console.log(res);
        navigate("/courses");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex justify-between border-gray-200 border-2 p-1">
        <button className="text-white font-bold text-3xl bg-orange-400 hover:bg-orange-500 rounded-[50%]">
          <Link to="/courses/create">
            <span className="material-symbols-outlined t">arrow_left</span>
          </Link>
        </button>
        <button
          onClick={handleSubmit}
          className="px-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Publish
        </button>
      </div>
      <ChaptersAdd />
    </div>
  );
}

export default AdminChapter;
