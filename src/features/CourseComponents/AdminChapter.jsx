import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ChaptersAdd from "./ChaptersAdd";
import { selectCourse } from "../../redux/courseSlice";
import { ArrowCircleLeft, ArrowSquareOut } from "@phosphor-icons/react";

function AdminChapter() {
  const navigate = useNavigate();
  const course = useSelector(selectCourse);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, image, chapters } = course;

    // console.log("Chapters data:", chapters);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("chapters", JSON.stringify(chapters)); // Convert chapters to JSON string and append it to formData
    console.log(formData);

    const payload = Object.fromEntries(formData);
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
      <div className="flex justify-between border-gray-200 border-2 px-6 py-2">
        <button className="font-nokia-bold text-accent-6 flex flex-row gap-2 hover:text-accent-7 transition-all">
          <Link
            to="/courses"
            className="flex flex-row gap-2 items-center justify-center mt-3"
          >
            <ArrowCircleLeft weight="fill" size={24} />{" "}
            <span>Back to course</span>
          </Link>
        </button>
        <div>
          <button
            onClick={handleSubmit}
            className="h-[45px] w-[120px] flex justify-center gap-2 font-semibold text-white bg-accent-6 rounded-md hover:bg-accent-7 transition-all"
            style={{ padding: "10px" }}
          >
            <span>Publish</span>
            <ArrowSquareOut size={22} weight="fill" className="self-centered" />
          </button>
        </div>
      </div>
      <ChaptersAdd />
    </div>
  );
}

export default AdminChapter;
